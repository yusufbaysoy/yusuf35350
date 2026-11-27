<!--
  yusuf35350 için profil README'si (Türkçe).
  REPOS, ACTIVITY, CONTRIBUTIONS ve UPDATED başlangıç/bitiş işaretleri arasındaki bloklar her gün
  scripts/update-readme.mjs tarafından yeniden yazılır; geri kalanını istediğin gibi düzenle.
-->

<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=0:0f172a,55:1e3a8a,100:f97316&height=210&section=header&text=Merhaba,%20ben%20Yusuf&fontSize=54&fontColor=ffffff&fontAlignY=36&desc=PHP%20%C2%B7%20Mobil%20%C2%B7%20Oyun%20Tasar%C4%B1m%C4%B1%20%C2%B7%20PC%20Uygulamalar%C4%B1%20%C2%B7%20MCP&descSize=18&descAlignY=58&animation=fadeIn" width="100%" alt="Merhaba, ben Yusuf. PHP, mobil, oyun tasarımı, PC uygulamaları ve MCP."/>
</p>

<p align="center">
  <a href="https://github.com/yusuf35350">
    <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=600&size=21&duration=3000&pause=900&color=F97316&center=true&vCenter=true&width=760&height=46&lines=PHP+%26+Laravel+ile+web+uygulamalar%C4%B1;React+Native+ile+mobil+uygulamalar;Oyun+tasar%C4%B1m%C4%B1+%26+PC+uygulamalar%C4%B1;MCP+sunucular%C4%B1+%26+Claude+Code+ara%C3%A7lar%C4%B1;Yusafix+%E2%80%94+oto+servisler+i%C3%A7in+yaz%C4%B1l%C4%B1m" alt="PHP ve Laravel ile web uygulamaları. React Native ile mobil uygulamalar. Oyun tasarımı ve PC uygulamaları. MCP sunucuları ve Claude Code araçları. Yusafix, oto servisler için yazılım."/>
  </a>
</p>

<p align="center">
  <a href="https://github.com/yusuf35350/claude-toolkit"><img src="https://img.shields.io/badge/A%C3%A7%C4%B1k%20kaynak-claude--toolkit-F97316?style=for-the-badge&logo=claude&logoColor=white" alt="claude-toolkit"/></a>
  <a href="https://instagram.com/yusafixcom"><img src="https://img.shields.io/badge/Yusafix-@yusafixcom-E4405F?style=for-the-badge&logo=instagram&logoColor=white" alt="Instagram'da Yusafix"/></a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Konum-T%C3%BCrkiye-C8102E?style=for-the-badge&logo=googlemaps&logoColor=white" alt="Konum: Türkiye"/>
  <img src="https://img.shields.io/badge/A%C3%A7%C4%B1%C4%9F%C4%B1m-%C4%B0%C5%9F%20birli%C4%9Fine-22C55E?style=for-the-badge" alt="İş birliğine açığım"/>
  <a href="https://github.com/yusuf35350?tab=followers"><img src="https://img.shields.io/github/followers/yusuf35350?style=for-the-badge&logo=github&label=Takip%C3%A7i&color=1e3a8a&labelColor=0f172a" alt="GitHub takipçileri"/></a>
  <img src="https://komarev.com/ghpvc/?username=yusuf35350&style=for-the-badge&color=f97316&label=Profil%20g%C3%B6r%C3%BCnt%C3%BCleme" alt="Profil görüntülenme"/>
</p>

<p align="center">
  <a href="README.md">🇬🇧 English</a> &nbsp;·&nbsp; <b>🇹🇷 Türkçe</b>
</p>

<p align="center">
  <a href="#-hakkımda">Hakkımda</a> ·
  <a href="#-neler-yapıyorum">Neler yapıyorum</a> ·
  <a href="#-teknolojiler">Teknolojiler</a> ·
  <a href="#-projeler">Projeler</a> ·
  <a href="#-mcp--claude">MCP & Claude</a> ·
  <a href="#-açık-kaynak">Açık kaynak</a> ·
  <a href="#istatistikler">İstatistikler</a> ·
  <a href="#-faydalı-linkler">Linkler</a> ·
  <a href="#-birlikte-bir-şey-yapalım">İletişim</a>
</p>

---

## 👋 Hakkımda

Ben **Yusuf**, **İzmir**'li bir geliştiriciyim. **PHP & Laravel ile web uygulamaları**, **React Native ile mobil uygulamalar** ve **PC (masaüstü) uygulamaları** geliştiriyorum, ayrıca **oyun tasarımı** yapıyorum. Son zamanlarda boş vaktimin çoğu **MCP sunucuları, Claude Code skill'leri ve yerel LLM'lere** gidiyor.

Aynı zamanda motosiklet satış ve servis işletmesi **Nes Motors**'un içindeyim. Bu yüzden geliştirdiğim şeylerin çoğu tezgâhta gördüğüm bir sorunla başlıyor: form olması gereken bir evrak, veritabanı olması gereken bir Excel, randevu olması gereken bir telefon görüşmesi.

```php
<?php

namespace App\Developers;

final class Yusuf extends Developer
{
    protected string $konum  = 'İzmir, Türkiye';
    protected string $egitim = 'Bilgisayar Programcılığı (Önlisans) · Manisa Celal Bayar Üniversitesi (2025)';
    protected array  $diller = ['Türkçe', 'İngilizce'];

    public function alanlar(): array
    {
        return ['Web (PHP / Laravel)', 'Mobil uygulama', 'Oyun tasarımı', 'PC (masaüstü) uygulama', 'MCP & yapay zeka araçları'];
    }

    public function teknolojiler(): array
    {
        return [
            'backend'    => ['PHP', 'Laravel', 'MySQL', 'REST API'],
            'frontend'   => ['JavaScript', 'Blade', 'jQuery', 'HTML', 'CSS'],
            'mobil'      => ['React Native (bare workflow)', 'Android Studio'],
            'masaustu'   => ['Python', 'CustomTkinter'],
            'yapay_zeka' => ['Claude Code', 'MCP', 'Ollama', 'Whisper', 'ChromaDB'],
            'devops'     => ['Git', 'GitHub Actions', 'SSH', 'Hostinger'],
        ];
    }

    public function uzerindeCalistiklarim(): array
    {
        return [
            'yusafix'        => 'Oto servisler için servis yönetim sistemi',
            'wushu'          => 'Wushu müsabakaları için sporcu kayıt sistemi',
            'claude-toolkit' => 'Açık kaynak Claude Code skill & MCP sunucu koleksiyonu',
        ];
    }

    public function motto(): string
    {
        return 'Yayına al, gerçek insanların kullanışını izle, sonra daha iyi yap.';
    }
}
```

---

## ⚡ Kısaca

- 🔧 Oto servisler için servis yönetim yazılımı **Yusafix**'i geliştiriyorum (web paneli + mobil uygulama)
- 🥋 Yapay zeka destekli Excel içe aktarmalı bir **wushu müsabaka kayıt sistemi** geliştiriyorum
- 🔌 **[claude-toolkit](https://github.com/yusuf35350/claude-toolkit)**'i yönetiyorum: düzenli güncellenen 91 Claude Code skill'i ve 22 MCP sunucusu
- 🎮 Web ve mobilin yanında oyun tasarlıyorum ve **PC (masaüstü) uygulamaları** geliştiriyorum
- 🌱 **FastMCP ile MCP sunucu geliştirme**, **yapay zeka ajan mimarileri** ve daha fazla **React Native** öğreniyorum
- 🤖 **Claude Code**'u her gün kod ortağı ve çalışma arkadaşı olarak kullanıyorum
- 🎓 **Manisa Celal Bayar Üniversitesi Bilgisayar Programcılığı** önlisans mezunuyum (2025)
- 💬 Bana **Laravel**, **e-ticaret ödeme akışları**, **SEO**, **MCP** ya da **Laravel'i paylaşımlı hostinge kurmak** hakkında soru sorabilirsin
- 🏍️ İlginç bilgi: motosikletler benim diğer dünyam, bu yüzden yazılımlarımın çoğu sonunda servisler ve garajlar için oluyor

---

## 🧩 Neler Yapıyorum

<table>
<tr>
<td width="50%" valign="top">

### 🌐 Web
Uçtan uca PHP & Laravel uygulamaları: veritabanı tasarımı, yönetim panelleri, REST API'ler, sepet ve ödeme akışları, SSH ile canlıya alma.

</td>
<td width="50%" valign="top">

### 📱 Mobil
Laravel backend'ler üzerinde React Native uygulamaları (bare workflow, Expo yok), Android Studio'da derleyip hata ayıklıyorum.

</td>
</tr>
<tr>
<td width="50%" valign="top">

### 🎮 Oyun Tasarımı
Oyun fikirleri, mekanikler ve prototipler; oyun motorları ve 3D varlıklar için yapay zeka araçları (toolkit'imde Unity, Godot ve Blender MCP sunucuları var).

</td>
<td width="50%" valign="top">

### 🖥️ PC (Masaüstü) Uygulamaları
Python ve CustomTkinter ile Windows masaüstü araçları: kendi bilgisayarında çalışan yardımcı uygulamalar, asistanlar ve araçlar.

</td>
</tr>
<tr>
<td width="50%" valign="top">

### 🔌 MCP & Yapay Zeka Araçları
Yapay zekayı gerçek araçlara ve verilere bağlayan MCP sunucuları, Claude Code skill'leri ve yerel LLM akışları (Ollama, Whisper, ChromaDB).

</td>
<td width="50%" valign="top">

### 🔧 İşletme Yazılımları
Küçük işletmeler ve spor organizasyonları için servis takibi, randevu, kayıt ve satış evrakları.

</td>
</tr>
</table>

---

## 🧰 Teknolojiler

<div align="center">

### Web
<picture>
  <source media="(prefers-color-scheme: light)" srcset="https://skillicons.dev/icons?i=php,laravel,mysql,html,css,js,jquery&theme=light">
  <img src="https://skillicons.dev/icons?i=php,laravel,mysql,html,css,js,jquery&theme=dark" alt="PHP, Laravel, MySQL, HTML, CSS, JavaScript, jQuery">
</picture>

### Mobil & Masaüstü
<picture>
  <source media="(prefers-color-scheme: light)" srcset="https://skillicons.dev/icons?i=react,androidstudio,py,windows&theme=light">
  <img src="https://skillicons.dev/icons?i=react,androidstudio,py,windows&theme=dark" alt="React Native, Android Studio, Python, Windows">
</picture>
<br/>
<img src="https://img.shields.io/badge/React%20Native-bare%20workflow-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React Native, bare workflow"/>
<img src="https://img.shields.io/badge/CustomTkinter-masa%C3%BCst%C3%BC%20aray%C3%BCz-1F6FEB?style=for-the-badge&logo=python&logoColor=white" alt="CustomTkinter"/>

### Oyun Tasarımı
<img src="https://img.shields.io/badge/Oyun%20Tasar%C4%B1m%C4%B1-mekanik%20%C2%B7%20prototip-8B5CF6?style=for-the-badge" alt="Oyun tasarımı"/>
<img src="https://img.shields.io/badge/Unity%20MCP-edit%C3%B6rde%20yapay%20zeka-000000?style=for-the-badge&logo=unity&logoColor=white" alt="Unity MCP"/>
<img src="https://img.shields.io/badge/Godot%20MCP-edit%C3%B6rde%20yapay%20zeka-478CBF?style=for-the-badge&logo=godotengine&logoColor=white" alt="Godot MCP"/>
<img src="https://img.shields.io/badge/Blender%20MCP-3D%20varl%C4%B1klar-E87D0D?style=for-the-badge&logo=blender&logoColor=white" alt="Blender MCP"/>

### Yapay Zeka, MCP & Otomasyon
<img src="https://img.shields.io/badge/Claude%20Code-D97757?style=for-the-badge&logo=claude&logoColor=white" alt="Claude Code"/>
<img src="https://img.shields.io/badge/MCP-111111?style=for-the-badge&logo=modelcontextprotocol&logoColor=white" alt="Model Context Protocol"/>
<img src="https://img.shields.io/badge/Anthropic%20API-191919?style=for-the-badge&logo=anthropic&logoColor=white" alt="Anthropic API"/>
<img src="https://img.shields.io/badge/Ollama-000000?style=for-the-badge&logo=ollama&logoColor=white" alt="Ollama"/>
<img src="https://img.shields.io/badge/Whisper-412991?style=for-the-badge" alt="Whisper"/>
<img src="https://img.shields.io/badge/ChromaDB-FF6446?style=for-the-badge" alt="ChromaDB"/>

### Araçlar & Yayına Alma
<picture>
  <source media="(prefers-color-scheme: light)" srcset="https://skillicons.dev/icons?i=git,github,githubactions,vscode&theme=light">
  <img src="https://skillicons.dev/icons?i=git,github,githubactions,vscode&theme=dark" alt="Git, GitHub, GitHub Actions, VS Code">
</picture>
<br/>
<img src="https://img.shields.io/badge/Hostinger-673DE6?style=for-the-badge&logo=hostinger&logoColor=white" alt="Hostinger"/>
<img src="https://img.shields.io/badge/XAMPP-FB7A24?style=for-the-badge&logo=xampp&logoColor=white" alt="XAMPP"/>
<img src="https://img.shields.io/badge/Search%20Console-458CF5?style=for-the-badge&logo=googlesearchconsole&logoColor=white" alt="Google Search Console"/>

</div>

---

## 🚀 Projeler

| Proje | Ne yapıyor | Teknoloji | Durum |
|---|---|---|---|
| 🔧 **Yusafix** | Oto servisler için servis yönetim sistemi | Laravel · React Native | ![Geliştiriliyor](https://img.shields.io/badge/-Geli%C5%9Ftiriliyor-F59E0B?style=flat-square) |
| 🥋 **Wushu Sistemi** | Wushu (Sanda) müsabakaları için sporcu kayıt sistemi | Web uygulaması · Excel içe aktarma · Yapay zeka eşleştirme | ![Aktif](https://img.shields.io/badge/-Aktif-3B82F6?style=flat-square) |
| 🔌 **[claude-toolkit](https://github.com/yusuf35350/claude-toolkit)** | 91 Claude Code skill'i + 22 MCP sunucusu, seçilmiş ve otomatik güncellenen | Skill · MCP · GitHub Actions | ![Açık kaynak](https://img.shields.io/badge/-A%C3%A7%C4%B1k%20kaynak-22C55E?style=flat-square) |

<details>
<summary><b>🔧 Yusafix: içinde neler var</b></summary>
<br/>

Oto servislerin gününü yönetmesine yardım eden, randevuyla başlayan bir yazılım.

- **Randevu:** servis rezervasyonları için randevu modülü
- **Paketler:** servislerin siteden talep edebildiği abonelik paketleri (*Profesyonel* gibi)
- **Mobil:** Laravel backend üzerinde React Native istemci (bare workflow, Expo değil)
- **Topluluk:** servis sahiplerine yönelik içerikler Instagram'da [@yusafixcom](https://instagram.com/yusafixcom)

```mermaid
flowchart LR
    Shop["Servis sahibi<br/>web paneli"] --> API["Laravel backend<br/>REST API"]
    App["React Native uygulaması<br/>bare workflow"] --> API
    Customer["Müşteri"] -->|randevu alır| API
    API --> Appt["Randevular"]
    API --> Plans["Abonelik paketleri"]
    API --> DB[("Veritabanı")]
```

</details>

<details>
<summary><b>🥋 Wushu Sistemi: içinde neler var</b></summary>
<br/>

Kulüplerin sporcu listelerini gönderdiği ve sistemin bunları düzenli kayıtlara dönüştürdüğü, wushu (Sanda) müsabakaları için bir kayıt sistemi.

- **Kurallı Excel içe aktarma:** ilk satır başlıkları `ad | soyad | dogum_tarihi | cinsiyet | kulup | kilo`, tarih `gg.aa.yyyy`, kilo yalnızca sayı
- **Doğrulama:** içe aktarma formatına uymayan dosyalar reddediliyor
- **Yapay zeka eşleştirme:** *"Yapay zeka ile eşleştir"* butonu, şablona uymayan dağınık listeleri şablona oturtuyor

```mermaid
flowchart LR
    Club["Kulübün sporcu listesi<br/>(Excel)"] --> Check{"İçe aktarma<br/>formatına uyuyor mu?"}
    Check -->|evet| Import["Sporcuları içe aktar"]
    Check -->|hayır| AI["Yapay zeka ile eşleştir"]
    AI --> Import
    Import --> Records[("Sporcu kayıtları<br/>ad · doğum tarihi · cinsiyet · kulüp · kilo")]
```

</details>

<details>
<summary><b>🔌 claude-toolkit: içinde neler var</b></summary>
<br/>

Yaptığım işlere göre gruplanmış, açık kaynak Claude Code **skill** ve **MCP sunucu** koleksiyonum. Skill'ler yazarlarından değiştirilmeden, lisanslarıyla birlikte kopyalandı; MCP sunucuları sabitlenmiş git submodule'leri. Haftalık bir iş, kaynaklardaki güncellemeleri pull request olarak getiriyor.

| Kategori | Skill | Öne çıkanlar |
|---|---|---|
| 🐘 laravel-php | 25 | Laravel uzmanı, Eloquent, doğrulama, kuyruklar, PHPStan, Rector, Spatie kuralları |
| 📱 mobile | 7 | React Native en iyi pratikleri (Callstack), sürüm yükseltme, navigasyon, Flutter |
| 🎮 game-dev | 3 | Oyun geliştirici, oyun geliştirme, Godot |
| 🖥️ desktop | 5 | Electron, Tauri, C#, Python, CLI araçları |
| 🔌 mcp-ai | 8 | MCP builder, skill creator, Claude API, prompt mühendisliği, RAG |
| 🧠 dev-workflow | 26 | Superpowers (beyin fırtınası → plan → TDD → review), Karpathy kuralları, grill-me, handoff |
| 🎨 frontend-design | 13 | Frontend tasarım, web tasarım kuralları, erişilebilirlik, Playwright testleri, SEO |
| 📄 documents | 4 | Word, PDF, PowerPoint, Excel |

```text
/plugin marketplace add yusuf35350/claude-toolkit
/plugin install laravel-php@claude-toolkit
```

</details>

---

## 🔌 MCP & Claude

<div align="center">
<a href="https://github.com/yusuf35350/claude-toolkit">
  <picture>
    <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/yusuf35350/yusuf35350/output/pin-claude-toolkit-light.svg">
    <img src="https://raw.githubusercontent.com/yusuf35350/yusuf35350/output/pin-claude-toolkit-dark.svg" alt="claude-toolkit repo kartı">
  </picture>
</a>
</div>

**Kullandığım ve önerdiğim MCP sunucuları**; hepsinin tek satırlık kurulumu [claude-toolkit/mcp](https://github.com/yusuf35350/claude-toolkit/tree/main/mcp) içinde:

| Alan | Sunucular |
|---|---|
| 🐘 Laravel & PHP | [Laravel Boost](https://github.com/laravel/boost) · [MySQL](https://github.com/benborla/mcp-server-mysql) · [Laravel MCP](https://github.com/laravel/mcp) · [MCP PHP SDK](https://github.com/modelcontextprotocol/php-sdk) |
| 🧰 Günlük | [Context7](https://github.com/upstash/context7) · [Serena](https://github.com/oraios/serena) · [Referans sunucular](https://github.com/modelcontextprotocol/servers) · [GitHub](https://github.com/github/github-mcp-server) · [Desktop Commander](https://github.com/wonderwhy-er/DesktopCommanderMCP) |
| 🌐 Tarayıcı & test | [Playwright MCP](https://github.com/microsoft/playwright-mcp) · [Chrome DevTools MCP](https://github.com/ChromeDevTools/chrome-devtools-mcp) |
| 🎮 Oyun tasarımı | [MCP for Unity](https://github.com/CoplayDev/unity-mcp) · [Godot MCP](https://github.com/Coding-Solo/godot-mcp) · [Blender MCP](https://github.com/ahujasid/blender-mcp) |
| 📱 Mobil & tasarım | [Mobile MCP](https://github.com/mobile-next/mobile-mcp) · [Figma Context MCP](https://github.com/GLips/Figma-Context-MCP) |
| 🦙 Yerel yapay zeka | [MCP Client for Ollama](https://github.com/jonigl/mcp-client-for-ollama) |
| 🛠️ Kendi sunucunu yaz | [FastMCP](https://github.com/PrefectHQ/fastmcp) · [Python SDK](https://github.com/modelcontextprotocol/python-sdk) · [TypeScript SDK](https://github.com/modelcontextprotocol/typescript-sdk) · [MCP Inspector](https://github.com/modelcontextprotocol/inspector) |

**Üzerine kurduğum skill koleksiyonları:** [anthropics/skills](https://github.com/anthropics/skills) · [obra/superpowers](https://github.com/obra/superpowers) · [jeffallan/claude-skills](https://github.com/jeffallan/claude-skills) · [iserter/laravel-claude-agents](https://github.com/iserter/laravel-claude-agents) · [callstackincubator/agent-skills](https://github.com/callstackincubator/agent-skills) · [addyosmani/agent-skills](https://github.com/addyosmani/agent-skills) · [mattpocock/skills](https://github.com/mattpocock/skills) · [spatie/guidelines-skills](https://github.com/spatie/guidelines-skills) · [laravel/agent-skills](https://github.com/laravel/agent-skills)

---

## 🌍 Açık Kaynak

### 🆕 Son açık repolarım

<!-- REPOS_START -->
- **[claude-toolkit](https://github.com/yusuf35350/claude-toolkit)** (★ 0): Curated Claude Code skills and MCP servers for Laravel/PHP, mobile, game, desktop and everyday development
<!-- REPOS_END -->

### 🤝 Başka projelere katkılarım

<!-- CONTRIBUTIONS_START -->
_Henüz başka projelerde birleştirilmiş pull request yok. İlkleri yolda._
<!-- CONTRIBUTIONS_END -->

### 📡 Son hareketler

<!-- ACTIVITY_START -->
- **25 Kas** · [feitangyuan/onetake](https://github.com/feitangyuan/onetake) reposuna yıldız verdi
- **25 Kas** · [lemomo-ai/lemo-opuscar](https://github.com/lemomo-ai/lemo-opuscar) reposuna yıldız verdi
- **25 Kas** · [Jakeschincariol/instagram-agent-skill](https://github.com/Jakeschincariol/instagram-agent-skill) reposuna yıldız verdi
- **25 Kas** · [earthtojake/text-to-cad](https://github.com/earthtojake/text-to-cad) reposuna yıldız verdi
- **25 Kas** · [Jakeschincariol/youtube-agent-skill](https://github.com/Jakeschincariol/youtube-agent-skill) reposuna yıldız verdi
- **25 Kas** · [ersinkoc/phonebox](https://github.com/ersinkoc/phonebox) reposuna yıldız verdi
- **22 Kas** · [Jakeschincariol/day-trader-skill](https://github.com/Jakeschincariol/day-trader-skill) reposuna yıldız verdi
- **10 Kas** · [open-jarvis/OpenJarvis](https://github.com/open-jarvis/OpenJarvis) reposuna yıldız verdi
<!-- ACTIVITY_END -->

---

## 🛤️ Yolculuk

```mermaid
timeline
    title Atölyeden kod tabanına
    2023 : Ege Üniversitesi Bilgisayar Programcılığı bölümüne başladım
    2024 : Manisa Celal Bayar Üniversitesine yatay geçiş yaptım
    2025 : Bilgisayar Programcılığı önlisans mezunu oldum
    Bugün : Yusafix ve mobil uygulaması geliştiriliyor
          : Wushu müsabaka kayıt sistemi
          : claude-toolkit açık kaynak olarak yayında
```

---

## 🧠 Nasıl Çalışıyorum

- **Önce gerçek kullanıcı.** Geliştirdiklerimin çoğu gerçek bir işletmede ya da organizasyonda çalışıyor; bu yüzden asıl önemli olan sıkıcı kısımları önemsiyorum: formlar, randevular, içe aktarmalar, faturalar.
- **Canlıya almak da işin parçası.** Sunucuyu, yayına almayı ve SEO'yu `localhost`'ta bırakmadan kendim kuruyorum.
- **Yapay zeka destekli, yapay zekaya bağımlı değil.** Claude Code, skill'ler ve MCP beni hızlandırıyor; mimari kararlar bende kalıyor.
- **Gerektiğinde yerel.** Asistanlar ve kişisel veriler için her şeyi buluta göndermek yerine yerel modelleri (Ollama, Whisper) tercih ediyorum.
- **Emeğe saygı, geri paylaşım.** Kullandığım her şeyin kaynağını belirtiyorum, topladıklarımı da yayınlıyorum.

---

## 🖥️ Kurulumum

| | |
|---|---|
| 💻 **PC** | AMD Ryzen 7 5700X · NVIDIA RTX 5060 (8 GB), kendim topladım |
| 🖨️ **3D yazıcı** | Bambu Lab X2D Combo (AMS'li) |
| 🚁 **Drone** | DJI Mini 5 Pro |
| 🔌 **Elektronik** | Arduino: LCD ekranlar ve yazı animasyonları |
| ⌨️ **Editör** | VS Code + Claude Code |
| 🏍️ **Klavyeden uzakta** | Motosikletler |

---

<a id="istatistikler"></a>

## 📊 GitHub İstatistikleri

<div align="center">

<a href="https://github.com/yusuf35350?tab=repositories">
  <picture>
    <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/yusuf35350/yusuf35350/output/stats-light.svg">
    <img height="175" src="https://raw.githubusercontent.com/yusuf35350/yusuf35350/output/stats-dark.svg" alt="GitHub istatistikleri: yıldızlar, commit'ler, pull request'ler, issue'lar ve katkılar">
  </picture>
</a>
<a href="https://github.com/yusuf35350?tab=repositories">
  <picture>
    <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/yusuf35350/yusuf35350/output/top-langs-light.svg">
    <img height="175" src="https://raw.githubusercontent.com/yusuf35350/yusuf35350/output/top-langs-dark.svg" alt="En çok kullanılan diller">
  </picture>
</a>

<picture>
  <source media="(prefers-color-scheme: light)" srcset="https://streak-stats.demolab.com/?user=yusuf35350&theme=default&hide_border=true&locale=tr">
  <img src="https://streak-stats.demolab.com/?user=yusuf35350&theme=tokyonight&hide_border=true&locale=tr" alt="Katkı serisi">
</picture>

<img width="100%" src="https://github-readme-activity-graph.vercel.app/graph?username=yusuf35350&theme=tokyo-night&hide_border=true&area=true&color=f97316&line=f97316&point=ffffff" alt="Katkı aktivite grafiği"/>

<picture>
  <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/yusuf35350/yusuf35350/output/snake-light.svg">
  <img width="100%" src="https://raw.githubusercontent.com/yusuf35350/yusuf35350/output/snake-dark.svg" alt="Son bir yılın katkı grafiği, yılan animasyonu olarak">
</picture>

</div>

---

## 🔗 Faydalı Linkler

<table>
<tr>
<td valign="top" width="33%">

**🐘 Laravel & PHP**
- [Laravel dokümantasyonu](https://laravel.com/docs)
- [Laracasts](https://laracasts.com)
- [PHP: The Right Way](https://phptherightway.com)
- [Laravel Boost](https://github.com/laravel/boost)
- [Laravel Skills](https://skills.laravel.cloud)

</td>
<td valign="top" width="33%">

**📱 Mobil, 🎮 Oyun & 🖥️ Masaüstü**
- [React Native dokümantasyonu](https://reactnative.dev)
- [Unity Learn](https://learn.unity.com)
- [Godot dokümantasyonu](https://docs.godotengine.org)
- [Blender kılavuzu](https://docs.blender.org/manual/en/latest/)
- [CustomTkinter](https://github.com/TomSchimansky/CustomTkinter)

</td>
<td valign="top" width="33%">

**🔌 MCP & Claude**
- [Model Context Protocol](https://modelcontextprotocol.io)
- [MCP Registry](https://registry.modelcontextprotocol.io)
- [Claude Code dokümanı: MCP](https://code.claude.com/docs/en/mcp)
- [awesome-mcp-servers](https://github.com/punkpeye/awesome-mcp-servers)
- [skills.sh](https://skills.sh)

</td>
</tr>
</table>

---

## 🤝 Birlikte Bir Şey Yapalım

Küçük işletmeler ve diğer geliştiricilerle şu konularda çalışmaktan keyif alıyorum:

- **Laravel web uygulamaları ve yönetim panelleri:** veritabanı tasarımından canlıya almaya kadar
- **Mobil uygulamalar:** Laravel backend'ler için React Native istemciler
- **Masaüstü araçlar & oyun prototipleri:** küçük PC uygulamaları ve oynanabilir fikirler
- **İşletme yazılımları:** servis takibi, randevu, kayıt, satış evrakları
- **MCP & yapay zeka:** MCP sunucuları, Claude Code skill'leri ve yerel LLM araçları

<div align="center">

<a href="https://instagram.com/yusafixcom"><img src="https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white" alt="Instagram"/></a>
<a href="https://github.com/yusuf35350/claude-toolkit"><img src="https://img.shields.io/badge/claude--toolkit-F97316?style=for-the-badge&logo=github&logoColor=white" alt="claude-toolkit"/></a>

</div>

<div align="center">

### 💬 Rastgele bir yazılımcı sözü

<img src="https://quotes-github-readme.vercel.app/api?type=horizontal&theme=tokyonight" alt="Rastgele bir yazılım sözü"/>

</div>

<!-- UPDATED_START -->
<p align="center"><sub>Otomatik güncellendi: 27 Kasım 2026 13:19 · İstanbul saati</sub></p>
<!-- UPDATED_END -->

<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=0:f97316,45:1e3a8a,100:0f172a&height=120&section=footer" width="100%" alt=""/>
</p>
