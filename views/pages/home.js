module.exports = function homePage({ site, services, equipment, reviews, venues, clients }) {
  const biz = site.business;

  return `
  <!-- Flier Area -->
  <div class="flier-area">
    <div class="flier-glow" aria-hidden="true"></div>

    <section class="fhero">
      <div class="flier-container">
        <div class="fhero-content">
          <div class="fhero-left">
            <div class="fhero-kicker">Live Event Production · AV Rentals</div>
            <h1 class="fhero-headline">Live Events.<br><em>Flawlessly</em><br>Executed.</h1>
          </div>
          <div class="fhero-right">
            <p class="fhero-tagline">
              <strong>Rochester &amp; Finger Lakes Region</strong>
              Full-service audio visual solutions for corporate events, conferences, and live productions — one team, one point of contact.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="fsvc-section">
      <div class="flier-container">
        <div class="fsvc-header"><span>Our Services</span></div>
        <div class="fsvc-grid">
          ${services.map((s, i) => `
          <a href="/services/${s.slug}" class="fsvc-card">
            <div class="fsvc-num">${String(i + 1).padStart(2, '0')}</div>
            <div class="fsvc-title">${s.title}</div>
            <div class="fsvc-desc">${s.cardDescription.substring(0, 120)}...</div>
          </a>`).join('')}
        </div>
      </div>
    </section>

    <div class="fvalue-strip">
      <div class="flier-container fvalue-grid">
        <div class="fvalue-item">
          <div class="fvalue-label">${biz.experience} Years</div>
          <div class="fvalue-sub">Industry Experience</div>
        </div>
        <div class="fvalue-item">
          <div class="fvalue-label">Rochester</div>
          <div class="fvalue-sub">Locally Based &amp; Operated</div>
        </div>
        <div class="fvalue-item">
          <div class="fvalue-label">Full Service</div>
          <div class="fvalue-sub">Load-in to Strike</div>
        </div>
        <div class="fvalue-item">
          <div class="fvalue-label">Virtual &amp; Hybrid</div>
          <div class="fvalue-sub">Ready for Any Format</div>
        </div>
      </div>
    </div>

    <div class="fcopy-band">
      <div class="flier-container">
        <div class="fcopy-inner">
          <div class="fcopy-accent-bar" aria-hidden="true"></div>
          <p>We work <strong>quickly and efficiently under pressure</strong>, ensuring your event runs seamlessly from load-in to strike. <strong>One team. One point of contact. Complete technical production.</strong></p>
        </div>
      </div>
    </div>
  </div>

  <!-- Reviews -->
  ${reviews && reviews.length > 0 ? `
  <section class="section reviews-section">
    <div class="container">
      <span class="section-label">Client Reviews</span>
      <h2 class="section-heading section-heading-lg">What People<br>Are Saying.</h2>
      <div class="reviews-grid">
        ${reviews.slice(0, 3).map(r => `
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
      <div class="equip-home-grid">
        ${equipment.map((e, i) => `
        <a href="/equipment/${e.slug}" class="equip-home-card">
          <div class="fsvc-num">${String(i + 1).padStart(2, '0')}</div>
          <div class="fsvc-title">${e.title}</div>
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
