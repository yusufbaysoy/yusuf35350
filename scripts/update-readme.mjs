#!/usr/bin/env node
/**
 * Rewrites the generated blocks of README.md (English) and README.tr.md (Turkish).
 *
 * Each block lives between `<!-- NAME_START -->` and `<!-- NAME_END -->`:
 *   REPOS          latest public repositories you own, newest push first
 *   CONTRIBUTIONS  merged pull requests to other people's public repositories
 *   ACTIVITY       recent public GitHub events
 *   UPDATED        "last updated" footer line
 *
 * If a source fails, its block keeps the previous content, so a bad API day
 * never wipes the README. Needs Node 18+ (global fetch), no dependencies.
 *
 * Env:
 *   PROFILE_USER or GITHUB_REPOSITORY_OWNER  GitHub username (required)
 *   GITHUB_TOKEN                             optional, raises the rate limit
 */

import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const USERNAME = process.env.PROFILE_USER || process.env.GITHUB_REPOSITORY_OWNER;
const TOKEN = process.env.GITHUB_TOKEN || '';
const TIME_ZONE = 'Europe/Istanbul';

const REPO_COUNT = 6;
const ACTIVITY_COUNT = 12;
const CONTRIB_MAX_REPOS = 8;
const CONTRIB_PRS_PER_REPO = 2;
/** Repos left out of the REPOS list (the profile repo itself is always skipped). */
const EXCLUDE_REPOS = new Set([]);

const FILES = [
  { file: 'README.md', lang: 'en' },
  { file: 'README.tr.md', lang: 'tr' },
];

// ---------------------------------------------------------------------------
// Translations
// ---------------------------------------------------------------------------

const T = {
  en: {
    locale: 'en-US',
    noDescription: 'No description yet.',
    noRepos: '_No public repositories yet._',
    noActivity: '_No public activity in the last 90 days._',
    noContribs: '_No merged pull requests to other projects yet. The first ones are on the way._',
    contribTotal: (prs, repos) => `**${prs} merged pull request${prs === 1 ? '' : 's'} across ${repos} open-source project${repos === 1 ? '' : 's'}.**`,
    updated: (d) => `<p align="center"><sub>Auto-updated ${d} · Europe/Istanbul</sub></p>`,
    pushed: (r) => `Pushed to ${r}`,
    created: (kind, ref, r) => (kind === 'repository' ? `Created repository ${r}` : `Created ${kind} \`${ref}\` in ${r}`),
    deleted: (kind, ref, r) => `Deleted ${kind} \`${ref}\` in ${r}`,
    starred: (r) => `Starred ${r}`,
    forked: (r, f) => `Forked ${r} to ${f}`,
    pr: (action, n, r) => `${cap(prVerb(action, 'en'))} PR ${n} in ${r}`,
    issue: (action, n, r) => `${cap(action)} issue ${n} in ${r}`,
    comment: (kind, n, r) => `Commented on ${kind} ${n} in ${r}`,
    review: (n, r) => `Reviewed PR ${n} in ${r}`,
    release: (tag, r) => `Released ${tag} in ${r}`,
    public: (r) => `Made ${r} public`,
    member: (r) => `Joined ${r} as a collaborator`,
    kinds: { branch: 'branch', tag: 'tag', repository: 'repository', pr: 'PR', issue: 'issue' },
  },
  tr: {
    locale: 'tr-TR',
    noDescription: 'Henüz açıklama yok.',
    noRepos: '_Henüz açık repo yok._',
    noActivity: '_Son 90 günde açık bir hareket yok._',
    noContribs: '_Henüz başka projelerde birleştirilmiş pull request yok. İlkleri yolda._',
    contribTotal: (prs, repos) => `**${repos} açık kaynak projede toplam ${prs} birleştirilmiş pull request.**`,
    updated: (d) => `<p align="center"><sub>Otomatik güncellendi: ${d} · İstanbul saati</sub></p>`,
    pushed: (r) => `${r} reposuna push yaptı`,
    created: (kind, ref, r) => (kind === 'repo' ? `${r} reposunu oluşturdu` : `${r} içinde \`${ref}\` ${kind} oluşturdu`),
    deleted: (kind, ref, r) => `${r} içinde \`${ref}\` ${kind} sildi`,
    starred: (r) => `${r} reposuna yıldız verdi`,
    forked: (r, f) => `${r} reposunu ${f} olarak forkladı`,
    pr: (action, n, r) => `${r} içinde PR ${n} ${prVerb(action, 'tr')}`,
    issue: (action, n, r) => `${r} içinde issue ${n} ${issueVerb(action)}`,
    comment: (kind, n, r) => `${r} içinde ${kind} ${n} için yorum yaptı`,
    review: (n, r) => `${r} içinde PR ${n} inceledi`,
    release: (tag, r) => `${r} için ${tag} sürümünü yayınladı`,
    public: (r) => `${r} reposunu herkese açtı`,
    member: (r) => `${r} reposuna ortak olarak katıldı`,
    kinds: { branch: 'branch', tag: 'etiket', repository: 'repo', pr: 'PR', issue: 'issue' },
  },
};

function cap(s) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

function prVerb(action, lang) {
  const map = {
    en: { opened: 'opened', closed: 'closed', merged: 'merged', reopened: 'reopened' },
    tr: { opened: 'açtı', closed: 'kapattı', merged: 'birleştirdi', reopened: 'yeniden açtı' },
  };
  return map[lang][action] || (lang === 'en' ? action : 'güncelledi');
}

function issueVerb(action) {
  return { opened: 'açtı', closed: 'kapattı', reopened: 'yeniden açtı' }[action] || 'güncelledi';
}

// ---------------------------------------------------------------------------
// GitHub API
// ---------------------------------------------------------------------------

async function gh(pathname) {
  const headers = {
    Accept: 'application/vnd.github+json',
    'X-GitHub-Api-Version': '2022-11-28',
    'User-Agent': `${USERNAME}-profile-readme`,
  };
  if (TOKEN) headers.Authorization = `Bearer ${TOKEN}`;
  const res = await fetch(`https://api.github.com${pathname}`, { headers, signal: AbortSignal.timeout(20_000) });
  if (!res.ok) throw new Error(`GET ${pathname} -> ${res.status} ${res.statusText}`);
  return res.json();
}

// ---------------------------------------------------------------------------
// Rendering helpers
// ---------------------------------------------------------------------------

/** Escapes text that ends up inside Markdown so a repo description can't break the list. */
function md(text) {
  return String(text)
    .replace(/[\r\n]+/g, ' ')
    .replace(/([\\`*_[\]<>|])/g, '\\$1')
    .trim();
}

/** Text shown inside a `code span`, where Markdown escapes would show up literally. */
function code(text) {
  return String(text || '').replace(/[`\r\n]/g, '');
}

function repoLink(fullName) {
  return `[${md(fullName)}](https://github.com/${fullName})`;
}

function numLink(url, n) {
  return `[#${n}](${url})`;
}

function formatDay(iso, lang) {
  return new Intl.DateTimeFormat(T[lang].locale, { month: 'short', day: 'numeric', timeZone: TIME_ZONE }).format(new Date(iso));
}

function formatStamp(date, lang) {
  return new Intl.DateTimeFormat(T[lang].locale, {
    year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', timeZone: TIME_ZONE,
  }).format(date);
}

// ---------------------------------------------------------------------------
// Sections
// ---------------------------------------------------------------------------

function renderRepos(repos, lang) {
  const t = T[lang];
  const list = repos
    .filter((r) => !r.fork && !r.archived && !r.private)
    .filter((r) => r.name.toLowerCase() !== USERNAME.toLowerCase() && !EXCLUDE_REPOS.has(r.name))
    .sort((a, b) => new Date(b.pushed_at) - new Date(a.pushed_at))
    .slice(0, REPO_COUNT);
  if (!list.length) return t.noRepos;
  return list
    .map((r) => {
      const meta = [r.language, `★ ${r.stargazers_count}`].filter(Boolean).join(' · ');
      const desc = r.description ? md(r.description) : t.noDescription;
      return `- **[${md(r.name)}](${r.html_url})** (${meta}): ${desc}`;
    })
    .join('\n');
}

function renderContributions(search, lang) {
  const t = T[lang];
  const byRepo = new Map();
  for (const pr of search.items || []) {
    const full = pr.repository_url.replace('https://api.github.com/repos/', '');
    if (!byRepo.has(full)) byRepo.set(full, []);
    byRepo.get(full).push(pr);
  }
  if (!byRepo.size) return t.noContribs;
  const lines = [...byRepo.entries()].slice(0, CONTRIB_MAX_REPOS).map(([full, prs]) => {
    const links = prs.slice(0, CONTRIB_PRS_PER_REPO).map((pr) => `[${md(pr.title)}](${pr.html_url})`).join(' · ');
    return `- **${repoLink(full)}**: ${links}`;
  });
  const total = search.items.length;
  return [...lines, '', t.contribTotal(total, byRepo.size)].join('\n');
}

function describeEvent(e, lang) {
  const t = T[lang];
  const p = e.payload || {};
  const repo = repoLink(e.repo.name);
  switch (e.type) {
    case 'PushEvent':
      return t.pushed(repo);
    case 'CreateEvent':
      return t.created(t.kinds[p.ref_type] || p.ref_type, code(p.ref), repo);
    case 'DeleteEvent':
      return t.deleted(t.kinds[p.ref_type] || p.ref_type, code(p.ref), repo);
    case 'WatchEvent':
      return t.starred(repo);
    case 'ForkEvent':
      return p.forkee ? t.forked(repo, repoLink(p.forkee.full_name)) : null;
    case 'PullRequestEvent': {
      if (!p.pull_request) return null;
      const action = p.action === 'closed' && p.pull_request.merged ? 'merged' : p.action;
      if (!['opened', 'closed', 'merged', 'reopened'].includes(action)) return null;
      return t.pr(action, numLink(p.pull_request.html_url, p.pull_request.number), repo);
    }
    case 'IssuesEvent':
      if (!p.issue || !['opened', 'closed', 'reopened'].includes(p.action)) return null;
      return t.issue(p.action, numLink(p.issue.html_url, p.issue.number), repo);
    case 'IssueCommentEvent': {
      if (!p.issue || !p.comment) return null;
      const kind = p.issue.pull_request ? t.kinds.pr : t.kinds.issue;
      return t.comment(kind, numLink(p.comment.html_url, p.issue.number), repo);
    }
    case 'PullRequestReviewEvent':
      return p.pull_request ? t.review(numLink(p.pull_request.html_url, p.pull_request.number), repo) : null;
    case 'ReleaseEvent':
      return p.release && p.action === 'published' ? t.release(`[${md(p.release.tag_name)}](${p.release.html_url})`, repo) : null;
    case 'PublicEvent':
      return t.public(repo);
    case 'MemberEvent':
      return t.member(repo);
    default:
      return null;
  }
}

function renderActivity(events, lang) {
  const lines = [];
  const seen = new Set();
  for (const e of events) {
    const text = describeEvent(e, lang);
    if (!text) continue;
    // Collapse repeated pushes to the same repo on the same day into one line.
    const key = `${formatDay(e.created_at, 'en')}|${text}`;
    if (seen.has(key)) continue;
    seen.add(key);
    lines.push(`- **${formatDay(e.created_at, lang)}** · ${text}`);
    if (lines.length >= ACTIVITY_COUNT) break;
  }
  return lines.length ? lines.join('\n') : T[lang].noActivity;
}

// ---------------------------------------------------------------------------
// README patching
// ---------------------------------------------------------------------------

function replaceBlock(content, name, body) {
  const re = new RegExp(`(<!-- ${name}_START -->)[\\s\\S]*?(<!-- ${name}_END -->)`);
  if (!re.test(content)) {
    console.warn(`  marker ${name} not found, skipped`);
    return content;
  }
  return content.replace(re, (_, start, end) => `${start}\n${body}\n${end}`);
}

async function main() {
  if (!USERNAME) {
    console.error('Set PROFILE_USER (or run inside GitHub Actions, which sets GITHUB_REPOSITORY_OWNER).');
    process.exit(1);
  }

  const contribQuery = encodeURIComponent(`type:pr author:${USERNAME} is:merged -user:${USERNAME}`);
  const [repos, events, contribs] = await Promise.allSettled([
    gh(`/users/${USERNAME}/repos?type=owner&sort=pushed&per_page=100`),
    gh(`/users/${USERNAME}/events/public?per_page=100`),
    gh(`/search/issues?q=${contribQuery}&sort=updated&order=desc&per_page=100`),
  ]);
  for (const [name, r] of [['repos', repos], ['events', events], ['contributions', contribs]]) {
    if (r.status === 'rejected') console.warn(`! ${name}: ${r.reason.message}`);
  }

  let changed = 0;
  for (const { file, lang } of FILES) {
    const full = path.join(ROOT, file);
    let content;
    try {
      content = await readFile(full, 'utf8');
    } catch {
      console.warn(`- ${file} not found, skipped`);
      continue;
    }
    const before = content;
    if (repos.status === 'fulfilled') content = replaceBlock(content, 'REPOS', renderRepos(repos.value, lang));
    if (events.status === 'fulfilled') content = replaceBlock(content, 'ACTIVITY', renderActivity(events.value, lang));
    if (contribs.status === 'fulfilled') content = replaceBlock(content, 'CONTRIBUTIONS', renderContributions(contribs.value, lang));

    // Only touch the timestamp when something real changed, so the repo
    // doesn't get an empty commit every day.
    if (content !== before) {
      content = replaceBlock(content, 'UPDATED', T[lang].updated(formatStamp(new Date(), lang)));
      await writeFile(full, content);
      changed++;
      console.log(`✓ ${file} updated`);
    } else {
      console.log(`= ${file} unchanged`);
    }
  }
  if ([repos, events, contribs].every((r) => r.status === 'rejected')) process.exitCode = 1;
  console.log(`${changed} file(s) changed`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
