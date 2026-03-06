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

(() => {
  const openers = document.querySelectorAll('[data-open-modal]');
  if (!openers.length) return;

  openers.forEach((opener) => {
    opener.addEventListener('click', () => {
      const id = opener.getAttribute('data-open-modal');
      const modal = document.getElementById(id);
      if (modal && typeof modal.showModal === 'function') {
        modal.showModal();
      }
    });
  });

  document.querySelectorAll('dialog.poi-modal').forEach((modal) => {
    modal.addEventListener('click', (event) => {
      if (event.target === modal) {
        modal.close();
      }
    });
  });

  document.querySelectorAll('[data-close-modal]').forEach((closer) => {
    closer.addEventListener('click', () => {
      const modal = closer.closest('dialog');
      if (modal) modal.close();
    });
  });
})();

(() => {
  // Keep the oversized map centered in its scroll container.
  const centerMapShell = () => {
    document.querySelectorAll('.map-shell').forEach((shell) => {
      if (shell.scrollWidth > shell.clientWidth) {
        shell.scrollLeft = Math.floor((shell.scrollWidth - shell.clientWidth) / 2);
      }
      if (shell.scrollHeight > shell.clientHeight) {
        shell.scrollTop = Math.floor((shell.scrollHeight - shell.clientHeight) / 2);
      }
    });
  };

  centerMapShell();
  window.addEventListener('resize', centerMapShell);
})();
