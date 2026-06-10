const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
const topbar = document.querySelector('.topbar');
menuButton?.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  topbar?.classList.toggle('menu-open', isOpen);
  menuButton.setAttribute('aria-expanded', String(isOpen));
});
const syncHeader = () => topbar?.classList.toggle('scrolled', window.scrollY > 80);
window.addEventListener('scroll', syncHeader, { passive: true });
syncHeader();

document.querySelectorAll('.section, .logo-wall, .cards article, .standards-grid article, .tab-grid article').forEach((el) => el.classList.add('reveal'));
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
