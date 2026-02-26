(() => {
  const toggle = document.getElementById('menuToggle');
  const menu = document.getElementById('mobileMenu');
  if (!toggle || !menu) return;
  toggle.addEventListener('click', () => {
    const open = menu.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(open));
  });
})();

(() => {
  const root = document.documentElement;
  const content = document.querySelector('.home-page .fixed-nav .fixed-nav-content');
  if (!content) return;

  const syncFixedNavHeight = () => {
    const height = Math.ceil(content.getBoundingClientRect().height);
    root.style.setProperty('--fixed-nav-content-h', `${height}px`);
  };

  syncFixedNavHeight();
  window.addEventListener('resize', syncFixedNavHeight);
  content.querySelectorAll('details').forEach((el) => {
    el.addEventListener('toggle', syncFixedNavHeight);
  });
})();
