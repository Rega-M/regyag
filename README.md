# 📁 REGYAG WEBSITE — Panduan Lengkap

## 🗂️ Struktur Folder

```
regyag/
├── index.html          ← Halaman utama (EDIT DI SINI)
├── README.md           ← Panduan ini
│
├── css/
│   ├── style.css       ← Tampilan & warna (EDIT DI SINI)
│   └── animations.css  ← Animasi (jarang diedit)
│
├── js/
│   └── main.js         ← Interaksi website (jarang diedit)
│
├── images/             ← Taruh semua gambar di sini
│   └── (kosong — isi dengan foto hasil karya)
│
└── pages/              ← Halaman tambahan (opsional)
    └── (kosong — untuk pengembangan masa depan)
```

---

## ✏️ Cara Edit Konten

### 1. Ganti Warna & Font (css/style.css)
Buka `css/style.css`, cari bagian `:root` di paling atas:

```css
:root {
  --color-primary: #C8874B;   /* ← Ganti ini untuk warna utama */
  --color-bg: #0D0D1A;        /* ← Ganti untuk latar belakang */
  ...
}
```

### 2. Edit Teks & Konten (index.html)
Semua teks bisa dicari dengan Ctrl+F di index.html.
Setiap bagian diberi komentar `<!-- ✏️ ... -->` sebagai petunjuk.

### 3. Ganti Nomor WhatsApp
Cari semua `wa.me/629517097989` dan ganti dengan nomor baru.
Format: `wa.me/62XXXXXXXXXXXX` (tanpa +, tanpa 0 di depan)

### 4. Ganti Instagram
Cari `@regamalik_` dan `instagram.com/regamalik_`

### 5. Ganti Email
Cari `regamalik20@gmail.com`

---

## 🖼️ Cara Tambah Foto Portofolio

1. Taruh foto di folder `images/` (contoh: `foto-banner.jpg`)
2. Buka `index.html`, cari bagian **PORTOFOLIO SECTION**
3. Ganti konten `.porto-img` dengan:

```html
<!-- SEBELUM (placeholder warna) -->
<div class="porto-img porto-placeholder" style="background: ...">
  <span>Teks placeholder</span>
</div>

<!-- SESUDAH (pakai gambar nyata) -->
<div class="porto-img">
  <img src="images/foto-banner.jpg" alt="Cetak Banner REGYAG" 
       style="width:100%;height:100%;object-fit:cover;" />
</div>
```

---

## 💰 Cara Edit Harga

Cari bagian `<!-- HARGA SECTION -->` di `index.html`:

```html
<span class="amount">75.000</span>  ← Ganti angka ini
<span class="harga-note">/ desain</span>  ← Ganti satuan ini
```

---

## ➕ Cara Tambah Kartu Layanan

Copy blok ini dan paste sebelum tag `</div>` penutup `.layanan-grid`:

```html
<div class="layanan-card" data-delay="600">
  <div class="card-icon">🎁</div>
  <h3>Nama Layanan Baru</h3>
  <p>Deskripsi singkat layanan ini.</p>
  <ul class="card-features">
    <li>✓ Fitur 1</li>
    <li>✓ Fitur 2</li>
  </ul>
  <a href="https://wa.me/629517097989?text=Tanya%20Layanan%20Baru" 
     class="card-cta" target="_blank">Pesan Sekarang →</a>
</div>
```

---

## ➕ Cara Tambah FAQ

Copy blok ini di dalam `.faq-list`:

```html
<div class="faq-item">
  <button class="faq-q">Pertanyaan baru di sini?<span class="faq-icon">+</span></button>
  <div class="faq-a">
    <p>Jawaban pertanyaan di sini.</p>
  </div>
</div>
```

---

## 🚀 Cara Upload ke Internet (Hosting)

### Opsi A: Netlify (Gratis, Mudah)
1. Daftar di netlify.com
2. Drag & drop folder `regyag/` ke dashboard Netlify
3. Website langsung online!

### Opsi B: cPanel Hosting Berbayar
1. Login ke cPanel
2. Buka File Manager → public_html
3. Upload semua file dari folder `regyag/`
4. Pastikan `index.html` ada di public_html

### Opsi C: GitHub Pages (Gratis)
1. Buat akun GitHub
2. Buat repository baru
3. Upload semua file
4. Settings → Pages → Deploy from main branch

---

## 📞 Kontak Developer

Website ini dibuat untuk **REGYAG**.
Jika ada pertanyaan teknis, hubungi developer Anda.
