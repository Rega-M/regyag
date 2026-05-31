/* ====================================================
   main.js — REGYAG (MODIFIKASI PREMIUM)
   Semua interaksi JavaScript website ada di sini
   ==================================================== */

/* ============================================
   1. NAVBAR — aktif scroll & hamburger menu
   ============================================ */
const navbar    = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('navLinks');

// Tambah class "scrolled" saat user scroll ke bawah
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Toggle menu hamburger (mobile)
if (hamburger) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('open');
    // Mencegah scroll saat menu terbuka
    document.body.style.overflow = navLinks.classList.contains('open') ? 'hidden' : '';
  });
}

// Tutup menu saat klik link
if (navLinks) {
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navLinks.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
}

/* ============================================
   2. SCROLL REVEAL — animasi elemen muncul
      Mendukung: .reveal, .reveal-left, .reveal-right, .reveal-scale, .stagger-item
   ============================================ */
// Fungsi untuk menambahkan observer pada elemen dengan kelas tertentu
function observeRevealElements(selector, className = 'visible') {
  const elements = document.querySelectorAll(selector);
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add(className);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -20px 0px' });
  
  elements.forEach(el => observer.observe(el));
}

// Daftar kelas yang akan diamati
observeRevealElements('.reveal');
observeRevealElements('.reveal-left');
observeRevealElements('.reveal-right');
observeRevealElements('.reveal-scale');
observeRevealElements('.stagger-item');

// Juga tetap dukung kelas lama (jika ada)
observeRevealElements('.layanan-card');
observeRevealElements('.harga-card');
observeRevealElements('.testi-card');
observeRevealElements('.porto-card');
observeRevealElements('.keunggulan-item');
observeRevealElements('.kontak-info');
observeRevealElements('.faq-item');

/* ============================================
   3. FAQ ACCORDION (dengan animasi height yang smooth)
   ============================================ */
document.querySelectorAll('.faq-q').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.parentElement;
    const isOpen = item.classList.contains('open');

    // Tutup semua dulu (opsional: biar hanya satu yang terbuka)
    document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));

    // Buka yang diklik (kalau sebelumnya tutup)
    if (!isOpen) item.classList.add('open');
  });
});

/* ============================================
   4. PORTOFOLIO FILTER (dengan animasi tambahan)
   ============================================ */
const filterBtns = document.querySelectorAll('.filter-btn');
const portoCards = document.querySelectorAll('.porto-card');

if (filterBtns.length) {
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Update tombol aktif
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter;

      portoCards.forEach(card => {
        if (filter === 'all' || card.dataset.cat === filter) {
          card.classList.remove('hidden');
          // Tambah efek fade-in kecil (opsional)
          card.style.animation = 'none';
          card.offsetHeight; // reflow
          card.style.animation = null;
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });
}

/* ============================================
   5. SMOOTH SCROLL untuk anchor link (dengan offset navbar)
   ============================================ */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
    const target = document.querySelector(targetId);
    if (target) {
      e.preventDefault();
      const navbarHeight = document.querySelector('.navbar')?.offsetHeight || 80;
      const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
      // Tutup mobile menu jika terbuka
      if (navLinks.classList.contains('open')) {
        hamburger.classList.remove('active');
        navLinks.classList.remove('open');
        document.body.style.overflow = '';
      }
    }
  });
});

/* ============================================
   6. TAMBAHAN: Efek hover parallax sederhana pada hero shapes (opsional)
   ============================================ */
const shapes = document.querySelectorAll('.shape');
if (shapes.length) {
  document.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;
    shapes.forEach((shape, index) => {
      const speed = 20 + index * 10;
      const x = (mouseX - 0.5) * speed;
      const y = (mouseY - 0.5) * speed;
      shape.style.transform = `translate(${x}px, ${y}px)`;
    });
  });
}

/* ============================================
   7. LAZY LOADING GAMBAR (jika ada gambar di portofolio nanti)
   ============================================ */
const lazyImages = document.querySelectorAll('img[loading="lazy"]');
if ('IntersectionObserver' in window) {
  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        const src = img.dataset.src || img.src;
        if (img.dataset.src) {
          img.src = src;
          img.removeAttribute('data-src');
        }
        imageObserver.unobserve(img);
      }
    });
  });
  lazyImages.forEach(img => imageObserver.observe(img));
}

/* ============================================
   8. CEK & TAMBAHKAN KELAS 'SCROLLED' PADA LOAD (jika halaman di-refresh di posisi scroll)
   ============================================ */
window.addEventListener('DOMContentLoaded', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  }
});

/* ============================================
   9. TAMBAHAN: Efek angka statistik (opsional, jika ingin animasi counter)
   ============================================ */
function animateNumber(element, start, end, duration) {
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    const current = Math.floor(progress * (end - start) + start);
    element.innerText = current;
    if (progress < 1) {
      window.requestAnimationFrame(step);
    } else {
      element.innerText = end;
    }
  };
  window.requestAnimationFrame(step);
}

// Opsional: jalankan counter saat statistik masuk viewport
const statNumbers = document.querySelectorAll('.stat-num');
if (statNumbers.length) {
  const statObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const rawText = el.innerText;
        let endValue = parseInt(rawText.replace(/[^0-9]/g, ''));
        if (isNaN(endValue)) {
          if (rawText.includes('★')) endValue = 4.9;
          else endValue = 0;
        }
        if (endValue > 0) {
          const start = 0;
          let duration = 1500;
          if (typeof endValue === 'number' && !Number.isInteger(endValue)) {
            // untuk angka desimal seperti 4.9
            el.innerText = '0';
            let current = 0;
            const stepTime = 20;
            const totalSteps = duration / stepTime;
            const increment = endValue / totalSteps;
            const interval = setInterval(() => {
              current += increment;
              if (current >= endValue) {
                el.innerText = endValue + (rawText.includes('★') ? '★' : '');
                clearInterval(interval);
              } else {
                el.innerText = Math.floor(current) + (rawText.includes('★') ? '★' : '');
              }
            }, stepTime);
          } else {
            animateNumber(el, start, endValue, duration);
            // tambahkan simbol kembali
            if (rawText.includes('★')) {
              const updateSymbol = () => {
                if (!el.innerText.includes('★')) el.innerText += '★';
              };
              setTimeout(updateSymbol, duration);
            }
          }
        }
        statObserver.unobserve(el);
      }
    });
  }, { threshold: 0.5 });
  statNumbers.forEach(stat => statObserver.observe(stat));
}