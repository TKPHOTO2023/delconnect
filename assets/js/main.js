document.getElementById('year').textContent = new Date().getFullYear();

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ---- Theme toggle ---- */
const root = document.documentElement;
const setTheme = (theme) => {
  root.setAttribute('data-theme', theme);
  try { localStorage.setItem('dc-theme', theme); } catch (e) {}
};
const toggleTheme = () => {
  setTheme(root.getAttribute('data-theme') === 'light' ? 'dark' : 'light');
};
[document.getElementById('themeToggle'), document.getElementById('themeToggleMobile')]
  .filter(Boolean)
  .forEach(btn => btn.addEventListener('click', toggleTheme));

/* ---- Header scroll state ---- */
const header = document.getElementById('siteHeader');
const onScroll = () => {
  header.classList.toggle('scrolled', window.scrollY > 40);
};
onScroll();
window.addEventListener('scroll', onScroll, { passive: true });

/* ---- Mobile nav ---- */
const navToggle = document.getElementById('navToggle');
const mobilePanel = document.getElementById('mobilePanel');
navToggle.addEventListener('click', () => {
  const open = navToggle.classList.toggle('open');
  mobilePanel.classList.toggle('open', open);
  document.body.style.overflow = open ? 'hidden' : '';
});
mobilePanel.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  navToggle.classList.remove('open');
  mobilePanel.classList.remove('open');
  document.body.style.overflow = '';
}));

/* ---- Active nav link on scroll ---- */
const sections = ['home', 'about', 'solutions', 'community', 'process', 'contact']
  .map(id => document.getElementById(id))
  .filter(Boolean);
const navLinks = document.querySelectorAll('.nav-links a');
const setActive = (id) => {
  navLinks.forEach(a => a.classList.toggle('active', a.getAttribute('href') === `#${id}`));
};
const navObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) setActive(entry.target.id);
  });
}, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });
sections.forEach(s => navObserver.observe(s));

/* ---- Scroll reveal ---- */
const revealTargets = document.querySelectorAll('[data-animate]');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });
revealTargets.forEach(el => revealObserver.observe(el));

/* ---- Badge marquee (built + duplicated for seamless loop) ---- */
const marqueeItems = [
  { label: 'Tower Leasing', soon: false },
  { label: 'Co-location', soon: false },
  { label: 'Tower Acquisitions', soon: false },
  { label: 'Wireless Towers', soon: false },
  { label: 'Security Solutions', soon: true },
  { label: 'Peri-Urban Reach', soon: false },
];
const track = document.getElementById('marqueeTrack');
if (track) {
  const buildPills = () => marqueeItems.map(item => `
    <span class="pill${item.soon ? ' soon' : ''}">
      <span class="dot"></span>${item.label}${item.soon ? ' — soon' : ''}
    </span>
  `).join('');
  track.innerHTML = buildPills() + buildPills();
}

/* ---- Hero video parallax on scroll ---- */
const heroMedia = document.getElementById('heroMedia');
if (heroMedia && !reduceMotion) {
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      const y = window.scrollY;
      const scale = 1 + Math.min(y / 4000, 0.12);
      const translate = Math.min(y * 0.18, 120);
      heroMedia.style.transform = `scale(${scale}) translateY(${translate}px)`;
      ticking = false;
    });
  }, { passive: true });
}

/* ---- Tilt card (About section) ---- */
const tiltCard = document.getElementById('tiltCard');
if (tiltCard && !reduceMotion && window.matchMedia('(hover: hover)').matches) {
  tiltCard.addEventListener('mousemove', (e) => {
    const rect = tiltCard.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    tiltCard.style.transform = `perspective(900px) rotateX(${(-py * 8).toFixed(2)}deg) rotateY(${(px * 10).toFixed(2)}deg) scale(1.015)`;
  });
  tiltCard.addEventListener('mouseleave', () => {
    tiltCard.style.transform = 'perspective(900px) rotateX(0) rotateY(0) scale(1)';
  });
}

/* ---- Solutions card cursor glow ---- */
document.querySelectorAll('.sol-card').forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    card.style.setProperty('--mx', `${e.clientX - rect.left}px`);
    card.style.setProperty('--my', `${e.clientY - rect.top}px`);
  });
});

/* ---- Pause offscreen videos to save resources ---- */
const bgVideos = document.querySelectorAll('video[autoplay]');
const videoObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    const v = entry.target;
    if (entry.isIntersecting) v.play().catch(() => {});
    else v.pause();
  });
}, { threshold: 0.05 });
bgVideos.forEach(v => videoObserver.observe(v));
