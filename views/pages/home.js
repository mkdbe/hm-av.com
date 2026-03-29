module.exports = function homePage({ site, services, equipment, reviews, venues, clients }) {
  const biz = site.business;

  return `
  <!-- Hero -->
  <section class="hero">
    <div class="hero-bg"></div>
    <div class="hero-content">
      <h1 class="hero-heading">Live Event Production<br>&amp; AV Rentals</h1>
      <p class="hero-sub">Full-service audio visual solutions for corporate events, conferences, and live productions in Rochester, NY.</p>
      <div class="hero-actions">
        <a href="/contact" class="btn btn-primary">Get a Quote</a>
        <a href="/services" class="btn btn-outline">Our Services</a>
      </div>
    </div>
    <div class="hero-scroll-hint" aria-hidden="true">
      <span>Scroll</span>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20">
        <path d="M12 5v14M19 12l-7 7-7-7"/>
      </svg>
    </div>
  </section>

  <!-- Services Overview -->
  <section class="section services-overview" id="services">
    <div class="container">
      <span class="section-label">What We Do</span>
      <h2 class="section-heading section-heading-lg">Our<br>Services.</h2>
      <div class="card-grid">
        ${services.map(s => `
        <a href="/services/${s.slug}" class="service-card">
          <div class="service-card-icon" aria-hidden="true">${getServiceIcon(s.slug)}</div>
          <h3 class="service-card-title">${s.title}</h3>
          <p class="service-card-text">${s.cardDescription.substring(0, 120)}...</p>
          <span class="card-link">Learn more &rarr;</span>
        </a>`).join('')}
      </div>
    </div>
  </section>

  <!-- Why HMS -->
  <section class="section why-hms">
    <div class="container">
      <div class="why-inner">
        <div class="why-heading-block">
          <span class="section-label">The Difference</span>
          <h2 class="section-heading section-heading-lg">Why<br>Choose Us.</h2>
        </div>
        <div class="why-features">
          <div class="why-feature">
            <span class="why-feature-number">${biz.experience}+</span>
            <span class="why-feature-label">Years Experience</span>
          </div>
          <div class="why-feature">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="48" height="48">
              <path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
            <span class="why-feature-label">Rochester Based</span>
          </div>
          <div class="why-feature">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="48" height="48">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
            </svg>
            <span class="why-feature-label">Full-Service Production</span>
          </div>
          <div class="why-feature">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="48" height="48">
              <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
              <line x1="8" y1="21" x2="16" y2="21"/>
              <line x1="12" y1="17" x2="12" y2="21"/>
            </svg>
            <span class="why-feature-label">Virtual &amp; Hybrid</span>
          </div>
        </div>
      <p class="why-text">HIGHLANDMEDIA delivers high-quality AV solutions for corporate events throughout the Rochester and Finger Lakes region. We work quickly and efficiently under pressure, ensuring your event runs seamlessly from load-in to strike. One team, one point of contact, complete technical production.</p>
      </div>
    </div>
  </section>

  <!-- Reviews -->
  ${reviews && reviews.length > 0 ? `
  <section class="section reviews-section">
    <div class="container">
      <span class="section-label">Client Reviews</span>
      <h2 class="section-heading section-heading-lg">What People<br>Are Saying.</h2>
      <div class="reviews-grid">
        ${reviews.map(r => `
        <div class="review-card">
          <div class="review-stars" aria-label="${r.rating} out of 5 stars">
            ${'★'.repeat(r.rating)}${'☆'.repeat(5 - r.rating)}
          </div>
          <p class="review-text">"${r.text}"</p>
          <div class="review-author">
            <span class="review-name">${r.name}</span>
            ${r.title ? `<span class="review-title">${r.title}</span>` : ''}
          </div>
        </div>`).join('')}
      </div>
    </div>
  </section>
  ` : ''}


  <!-- Venues -->
  <section class="section venues-section">
    <div class="container">
      <span class="section-label">Across Greater Rochester</span>
      <h2 class="section-heading section-heading-lg">Venues We've<br>Worked With.</h2>
      <div class="venue-grid">
        ${venues.map(v => `
        <a href="${v.url}" class="venue-card" target="_blank" rel="noopener noreferrer">
          <div class="venue-card-logo">
            ${v.logo
              ? `<img src="${v.logo}" alt="${v.name}" loading="lazy">`
              : `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" width="36" height="36"><path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z"/><path d="M9 21V12h6v9"/></svg>`
            }
          </div>
          <span class="venue-card-name">${v.name}</span>
        </a>`).join('')}
      </div>
    </div>
  </section>


  <!-- Clients -->
  <section class="section clients-section">
    <div class="container">
      <span class="section-label">Our Clients</span>
      <h2 class="section-heading section-heading-lg">Trusted<br>By.</h2>
      <ul class="client-list">
        ${clients.map(c => `<li class="client-item">${c.name}</li>`).join('')}
      </ul>
    </div>
  </section>

  <!-- Equipment Highlight -->
  <section class="section equipment-highlight">
    <div class="container">
      <span class="section-label">Rentals</span>
      <h2 class="section-heading section-heading-lg">Our<br>Gear.</h2>
      <p class="section-intro">Need gear without the full production team? We rent professional AV equipment with delivery and setup available.</p>
      <div class="card-grid card-grid-4">
        ${equipment.map(e => `
        <a href="/equipment/${e.slug}" class="equip-card">
          <h3 class="equip-card-title">${e.title}</h3>
          <span class="card-link">View inventory &rarr;</span>
        </a>`).join('')}
      </div>
    </div>
  </section>

  <!-- CTA -->
  <section class="section cta-section">
    <div class="container cta-inner">
      <h2 class="cta-heading">Ready to plan your event?</h2>
      <p class="cta-text">Tell us about your event and we'll put together a proposal. No obligation, no charge for a quote.</p>
      <div class="cta-actions">
        <a href="/contact" class="btn btn-primary btn-lg">Request a Quote</a>
        <span class="cta-divider">or call</span>
        <a href="tel:${biz.phoneTel}" class="cta-phone">${biz.phone}</a>
      </div>
    </div>
  </section>
`;
};

function getServiceIcon(slug) {
  const icons = {
    'audio': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="32" height="32"><rect x="4" y="2" width="16" height="20" rx="2"/><circle cx="12" cy="14" r="4"/><circle cx="12" cy="14" r="1"/><line x1="12" y1="6" x2="12" y2="6.01"/></svg>',
    'video': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="32" height="32"><rect x="2" y="3" width="20" height="14" rx="2"/><polygon points="10,8 16,10 10,12"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>',
    'lighting': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="32" height="32"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>',
    'livestreaming': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="32" height="32"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>',
    'hybrid-events': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="32" height="32"><rect x="2" y="3" width="20" height="14" rx="2"/><circle cx="12" cy="10" r="3"/><path d="M7 21l5-4 5 4"/></svg>',
    'equipment-rentals': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="32" height="32"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/><line x1="12" y1="12" x2="12" y2="16"/><line x1="10" y1="14" x2="14" y2="14"/></svg>'
  };
  return icons[slug] || '';
}
