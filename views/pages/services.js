module.exports = function servicesPage({ site, services }) {
  return `
  <section class="page-hero page-hero-sm">
    <div class="container">
      <h1 class="page-title">AV Services</h1>
      <p class="page-subtitle">Full-service audio visual production and individual service offerings for events in Rochester, NY and the Finger Lakes region.</p>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <div class="services-list">
        ${services.map((s, i) => `
        <div class="service-row ${i % 2 === 1 ? 'service-row-alt' : ''}">
          <div class="service-row-content">
            <h2 class="service-row-title"><a href="/services/${s.slug}">${s.title}</a></h2>
            <p class="service-row-text">${s.intro}</p>
            <a href="/services/${s.slug}" class="btn btn-outline btn-sm">Learn more &rarr;</a>
          </div>
          <div class="service-row-image">
            <div class="placeholder-image" aria-hidden="true">
              <span>${s.navTitle}</span>
            </div>
          </div>
        </div>`).join('')}
      </div>
    </div>
  </section>

  <section class="section cta-section">
    <div class="container cta-inner">
      <h2 class="cta-heading">Not sure what you need?</h2>
      <p class="cta-text">Tell us about your event and we'll recommend the right combination of services and equipment.</p>
      <a href="/contact" class="btn btn-primary btn-lg">Get a Free Quote</a>
    </div>
  </section>
`;
};
