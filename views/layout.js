module.exports = function layout({ title, description, path, body, site, services, equipment, schema }) {
  const biz = site.business;
  const currentYear = new Date().getFullYear();

  const trackingSnippet = `
  <!-- Analytics -->
  <script>
  (function() {
      var sid = sessionStorage.getItem('hmav_sid');
      if (!sid) {
          sid = Math.random().toString(36).slice(2) + Date.now().toString(36);
          sessionStorage.setItem('hmav_sid', sid);
      }
      var params = new URLSearchParams(window.location.search);
      var utmSource   = params.get('utm_source')   || '';
      var utmMedium   = params.get('utm_medium')   || '';
      var utmCampaign = params.get('utm_campaign')  || '';
      fetch('/api/track', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
              sessionId: sid,
              path: window.location.pathname,
              referer: document.referrer || 'Direct',
              utm_source: utmSource,
              utm_medium: utmMedium,
              utm_campaign: utmCampaign
          })
      }).catch(function(){});
      if (utmSource || utmMedium || utmCampaign) {
          window.history.replaceState({}, '', window.location.pathname);
      }
      setInterval(function() {
          fetch('/api/heartbeat', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ sessionId: sid })
          }).catch(function(){});
      }, 10000);
      document.addEventListener('click', function() {
          fetch('/api/track-nav', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ sessionId: sid })
          }).catch(function(){});
      });
  })();
  </script>`;

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title}</title>
  <meta name="description" content="${description}">
  <meta name="robots" content="${site.meta.noindex ? 'noindex, nofollow' : 'index, follow'}">
  ${site.meta.noindex ? '<!-- DEVELOPMENT MODE: Remove noindex in site.json when ready to go live -->' : ''}
  <link rel="canonical" href="${biz.url}${path === '/' ? '' : path}">

  <!-- Open Graph -->
  <meta property="og:title" content="${title}">
  <meta property="og:description" content="${description}">
  <meta property="og:type" content="website">
  <meta property="og:url" content="${biz.url}${path === '/' ? '' : path}">
  <meta property="og:site_name" content="${biz.name}">

  <!-- Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Barlow:wght@300;400;500;600;700&display=swap" rel="stylesheet">

  <!-- Favicons -->
  <link rel="icon" type="image/png" href="/favicon.png">
  <link rel="icon" type="image/x-icon" href="/favicon.ico">
  <link rel="apple-touch-icon" href="/apple-touch-icon.png">

  <link rel="stylesheet" href="/css/style.css?v=10">

  ${schema ? `<script type="application/ld+json">${schema}</script>` : ''}
</head>
<body>

  <!-- ─── Header ─────────────────────────────────── -->
  <header class="site-header" id="siteHeader">
    <div class="header-inner">
      <a href="/" class="logo" aria-label="${biz.name} — Home">
        <img src="/assets/images/logo.png" alt="${biz.name}" class="logo-img">
      </a>

      <nav class="main-nav" id="mainNav" aria-label="Main navigation">
        <ul class="nav-list">
          <li class="nav-item has-dropdown">
            <a href="/services" class="nav-link ${path.startsWith('/services') ? 'active' : ''}">Services</a>
            <ul class="dropdown">
              ${services.map(s => `<li><a href="/services/${s.slug}" class="dropdown-link">${s.navTitle}</a></li>`).join('\n              ')}
            </ul>
          </li>
          <li class="nav-item has-dropdown">
            <a href="/equipment" class="nav-link ${path.startsWith('/equipment') ? 'active' : ''}">Equipment</a>
            <ul class="dropdown">
              ${equipment.map(e => `<li><a href="/equipment/${e.slug}" class="dropdown-link">${e.navTitle}</a></li>`).join('\n              ')}
            </ul>
          </li>
          <li class="nav-item">
            <a href="/portfolio" class="nav-link ${path === '/portfolio' ? 'active' : ''}">Portfolio</a>
          </li>
          <li class="nav-item">
            <a href="/about" class="nav-link ${path === '/about' ? 'active' : ''}">About</a>
          </li>
          <li class="nav-item nav-cta">
            <a href="/contact" class="nav-link btn-cta">Get a Quote</a>
          </li>
        </ul>
      </nav>

      <a href="tel:${biz.phoneTel}" class="header-phone" aria-label="Call ${biz.phone}">
        <svg class="icon-phone" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18">
          <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
        </svg>
        <span>${biz.phone}</span>
      </a>

      <button class="mobile-toggle" id="mobileToggle" aria-label="Toggle navigation" aria-expanded="false">
        <span class="hamburger-line"></span>
        <span class="hamburger-line"></span>
        <span class="hamburger-line"></span>
      </button>
    </div>
  </header>

  <!-- ─── Main Content ───────────────────────────── -->
  <main class="site-main">
    ${body}
  </main>

  <!-- ─── Footer ─────────────────────────────────── -->
  <footer class="site-footer">
    <div class="footer-inner">
      <div class="footer-col footer-brand">
        <img src="/assets/images/logo.png" alt="${biz.name}" class="footer-logo-img">
        <p class="footer-tagline">Live event production and AV equipment rentals serving Rochester, NY and the Finger Lakes region.</p>
      </div>
      <div class="footer-col">
        <h4 class="footer-heading">Services</h4>
        <ul class="footer-links">
          ${services.map(s => `<li><a href="/services/${s.slug}">${s.navTitle}</a></li>`).join('\n          ')}
        </ul>
      </div>
      <div class="footer-col">
        <h4 class="footer-heading">Equipment</h4>
        <ul class="footer-links">
          ${equipment.map(e => `<li><a href="/equipment/${e.slug}">${e.navTitle}</a></li>`).join('\n          ')}
        </ul>
      </div>
      <div class="footer-col">
        <h4 class="footer-heading">Company</h4>
        <ul class="footer-links">
          <li><a href="/about">About</a></li>
          <li><a href="/portfolio">Portfolio</a></li>
          <li><a href="/faq">FAQ</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </div>
      <div class="footer-col footer-contact">
        <h4 class="footer-heading">Contact</h4>
        <p><a href="tel:${biz.phoneTel}">${biz.phone}</a></p>
        <p><a href="mailto:${biz.email}">${biz.email}</a></p>
        <p>${biz.city}, ${biz.stateFullName}</p>
      </div>
    </div>
    <div class="footer-bottom">
      <p>&copy; ${currentYear} ${biz.name}. All rights reserved.</p>
    </div>
  </footer>

  <script src="/js/main.js?v=10"></script>
  ${trackingSnippet}
</body>
</html>`;
};
