// ─── Mobile Nav Toggle ──────────────────────────────

const toggle = document.getElementById('mobileToggle');
const nav = document.getElementById('mainNav');

if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', isOpen);

    // Animate hamburger
    toggle.classList.toggle('active', isOpen);

    // Prevent body scroll when nav is open
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });
}

// ─── Mobile Dropdown Toggle ─────────────────────────

document.querySelectorAll('.has-dropdown > .nav-link').forEach(link => {
  link.addEventListener('click', (e) => {
    // Only intercept on mobile
    if (window.innerWidth <= 900) {
      const parent = link.parentElement;
      const isOpen = parent.classList.contains('open');

      // Close other dropdowns
      document.querySelectorAll('.has-dropdown.open').forEach(el => {
        if (el !== parent) el.classList.remove('open');
      });

      // If this is a parent nav link on mobile, toggle dropdown first
      if (!isOpen) {
        e.preventDefault();
        parent.classList.add('open');
      }
      // If already open, let the click navigate to the overview page
    }
  });
});

// ─── Header Scroll Effect ───────────────────────────

const header = document.getElementById('siteHeader');
let lastScroll = 0;

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll > 100) {
    header.style.boxShadow = '0 2px 20px rgba(0,0,0,0.3)';
  } else {
    header.style.boxShadow = 'none';
  }

  lastScroll = currentScroll;
}, { passive: true });

// ─── Close mobile nav on resize ─────────────────────

window.addEventListener('resize', () => {
  if (window.innerWidth > 900 && nav.classList.contains('open')) {
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded', false);
    toggle.classList.remove('active');
    document.body.style.overflow = '';
  }
});
