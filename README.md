# Kişisel Portfolyo Web Sitesi

GitHub Pages üzerinde %100 statik (serverless) çalışan, HTML5 / CSS3 / Vanilla JS tabanlı iki dilli (TR/EN) kişisel portfolyo sitesi.

## 🔗 Canlı Ön İzleme

[bariscoskunl.github.io](https://bariscoskunl.github.io)

## ⚡ Mimari & Özellikler

### Performans & Video Loader
Arka plan videosu yüklenirken CSS `skeleton shimmer pulse` animasyonu devrededir. Video `canplaythrough` olduğunda `1.2s ease` geçişle fade-in olur; kullanıcı asla karanlık/boş ekran görmez.

### Scroll Animasyonları
`.content-area` scroll container'ına bağlı `IntersectionObserver` mimarisi. `animate-on-scroll` → `is-visible` sınıfları üzerinden donanım ivmeli (`will-change`) akıcı **fade-up** efektleri tetiklenir. Otomasyon testleri için düşük eşik: `threshold: 0.05`.

### JSON-Driven Projeler
HTML'deki statik kartlar temizlenmiştir. Projeler ve modal içerikleri `script.js` içindeki TR/EN dizilerinden dinamik olarak DOM'a basılır. Yeni proje eklemek için sadece diziye obje eklenmesi yeterlidir.

### Hibrit Clipboard + Mailto
İletişim butonuna tıklandığında e-posta panoya kopyalanır, toast bildirimi gösterilir ve `100ms` gecikmeyle varsayılan mail uygulaması açılır. Kopyalama başarısız olursa güvenli `mailto:` fallback devreye girer.

### Premium Modallar
`display` yerine `opacity / visibility / pointer-events` ile yönetilen, **spring easing** (`cubic-bezier(0.16, 1, 0.3, 1)`) geçişli modallar. `ESC` tuşuyla kapatma ve backdrop tıklama desteği mevcuttur.

### Mobil UX
Mobil görünümde `nav-links` üzerinde yatay kaydırma ipucu veren CSS `mask-image` gradyanı aktiftir. Sidebar yatay menüye dönüşür, scrollbar gizlidir.

### Tema Senkronizasyonu
Dark / Light mod geçişlerinde tüm ana elemanlarda `0.3s ease` geçiş yumuşatması aktiftir. Tercih `localStorage` ile kalıcıdır.

## 🛠️ Teknoloji Yığını

| Katman | Teknoloji |
|--------|-----------|
| Yapı | HTML5 (Semantic) |
| Stil | CSS3 (Custom Properties, Glassmorphism, `will-change`) |
| Mantık | Vanilla JavaScript (ES6+, IntersectionObserver, Clipboard API) |
| İkonlar | Font Awesome 6 |
| Barındırma | GitHub Pages |

## 📂 Proje Yapısı

```text
├── index.html          # Ana sayfa (TR)
├── en.html             # İngilizce sayfa
├── style.css           # Tasarım, animasyonlar, responsive kurallar
├── script.js           # Proje verileri, observer, modal, tema, toast
└── assets/
    ├── Background.mp4  # Arka plan videosu
    ├── poster.jpg      # Video poster karesi
    ├── IMG.jpg         # Profil fotoğrafı
    ├── BARIŞ_COŞKUN_CV_TR.pdf
    └── BARIŞ_COŞKUN_CV_EN.pdf
```