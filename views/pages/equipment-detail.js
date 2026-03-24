module.exports = function equipmentDetailPage({ site, item, equipment, services }) {
  const biz = site.business;
  const otherEquipment = equipment.filter(e => e.slug !== item.slug);
  const relatedServices = item.relatedServices
    ? services.filter(s => item.relatedServices.includes(s.slug))
    : [];

  return `
  <section class="page-hero page-hero-sm">
    <div class="container">
      <nav class="breadcrumb" aria-label="Breadcrumb">
        <a href="/">Home</a>
        <span class="breadcrumb-sep" aria-hidden="true">/</span>
        <a href="/equipment">Equipment</a>
        <span class="breadcrumb-sep" aria-hidden="true">/</span>
        <span aria-current="page">${item.title}</span>
      </nav>
      <h1 class="page-title">${item.heroHeading}</h1>
    </div>
  </section>

  <section class="section">
    <div class="container content-layout">
      <div class="content-main">
        <p class="content-intro">${item.intro}</p>

        <div class="content-block">
          <h2>Available Equipment</h2>
          <ul class="equipment-list">
            ${item.items.map(i => `<li>${i}</li>`).join('\n            ')}
          </ul>
        </div>

        <div class="content-block">
          <h2>Rental Includes</h2>
          <p>All equipment rentals include pre-event testing, delivery to your venue, and phone support during your event. Setup and on-site operation are available as add-on services. Equipment is picked up after your event concludes.</p>
        </div>

        ${relatedServices.length > 0 ? `
        <div class="content-block">
          <h2>Related Services</h2>
          <p>Need more than just equipment? We offer full-service production where our team operates the gear for you.</p>
          <ul class="related-links">
            ${relatedServices.map(s => `<li><a href="/services/${s.slug}" class="text-link">${s.title} &rarr;</a></li>`).join('\n            ')}
          </ul>
        </div>` : ''}

        <div class="content-cta">
          <h2>Request a Rental Quote</h2>
          <p>Tell us what you need, your event date, and venue location. We'll send a detailed quote with pricing and availability.</p>
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
          <h3 class="sidebar-heading">More Equipment</h3>
          <ul class="sidebar-links">
            ${otherEquipment.map(e => `<li><a href="/equipment/${e.slug}">${e.navTitle}</a></li>`).join('\n            ')}
          </ul>
        </div>
      </aside>
    </div>
  </section>
`;
};
