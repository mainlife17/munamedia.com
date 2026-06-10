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
