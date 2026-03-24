module.exports = function serviceDetailPage({ site, service, services }) {
  const biz = site.business;
  const otherServices = services.filter(s => s.slug !== service.slug);

  return `
  <section class="page-hero page-hero-sm">
    <div class="container">
      <nav class="breadcrumb" aria-label="Breadcrumb">
        <a href="/">Home</a>
        <span class="breadcrumb-sep" aria-hidden="true">/</span>
        <a href="/services">Services</a>
        <span class="breadcrumb-sep" aria-hidden="true">/</span>
        <span aria-current="page">${service.title}</span>
      </nav>
      <h1 class="page-title">${service.heroHeading}</h1>
    </div>
  </section>

  <section class="section">
    <div class="container content-layout">
      <div class="content-main">
        <p class="content-intro">${service.intro}</p>

        ${service.sections.map(sec => `
        <div class="content-block">
          <h2>${sec.heading}</h2>
          <p>${sec.content}</p>
        </div>`).join('')}

        <div class="content-cta">
          <h2>Get a Quote for ${service.title}</h2>
          <p>Tell us about your event — date, venue, audience size, and what you need — and we'll put together a detailed proposal.</p>
          <div class="content-cta-actions">
            <a href="/contact" class="btn btn-primary">Request a Quote</a>
            <a href="tel:${biz.phoneTel}" class="btn btn-outline">Call ${biz.phone}</a>
          </div>
        </div>
      </div>

      <aside class="content-sidebar">
        <div class="sidebar-card">
          <h3 class="sidebar-heading">Quick Contact</h3>
          <p><a href="tel:${biz.phoneTel}" class="sidebar-phone">${biz.phone}</a></p>
          <p><a href="mailto:${biz.email}">${biz.email}</a></p>
          <a href="/contact" class="btn btn-primary btn-block">Get a Quote</a>
        </div>

        <div class="sidebar-card">
          <h3 class="sidebar-heading">Other Services</h3>
          <ul class="sidebar-links">
            ${otherServices.map(s => `<li><a href="/services/${s.slug}">${s.navTitle}</a></li>`).join('\n            ')}
          </ul>
        </div>

        <div class="sidebar-card">
          <h3 class="sidebar-heading">Equipment Rentals</h3>
          <p class="sidebar-text">Need gear without full production? We rent individual equipment too.</p>
          <a href="/equipment" class="sidebar-link">Browse equipment &rarr;</a>
        </div>
      </aside>
    </div>
  </section>
`;
};
