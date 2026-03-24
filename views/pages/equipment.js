module.exports = function equipmentPage({ site, equipment }) {
  return `
  <section class="page-hero page-hero-sm">
    <div class="container">
      <h1 class="page-title">AV Equipment Rentals</h1>
      <p class="page-subtitle">Professional audio visual equipment available for rent in Rochester, NY. Delivery, setup, and on-site support available.</p>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <div class="card-grid card-grid-2">
        ${equipment.map(e => `
        <a href="/equipment/${e.slug}" class="equip-detail-card">
          <div class="equip-detail-card-image">
            <div class="placeholder-image" aria-hidden="true">
              <span>${e.title}</span>
            </div>
          </div>
          <div class="equip-detail-card-body">
            <h2 class="equip-detail-card-title">${e.title}</h2>
            <p class="equip-detail-card-text">${e.intro.substring(0, 150)}...</p>
            <ul class="equip-preview-list">
              ${e.items.slice(0, 3).map(item => `<li>${item.split(' — ')[0].split('(')[0].trim()}</li>`).join('\n              ')}
              ${e.items.length > 3 ? `<li>+ ${e.items.length - 3} more</li>` : ''}
            </ul>
            <span class="card-link">View full inventory &rarr;</span>
          </div>
        </a>`).join('')}
      </div>
    </div>
  </section>

  <section class="section section-alt">
    <div class="container">
      <h2 class="section-heading">Rental or Full-Service — Your Choice</h2>
      <div class="two-col">
        <div class="two-col-item">
          <h3>Equipment Rental</h3>
          <p>Rent the gear you need, delivered and tested. Includes setup instructions and phone support. Ideal for organizations with their own technical staff.</p>
        </div>
        <div class="two-col-item">
          <h3>Full-Service Production</h3>
          <p>Equipment plus experienced technicians to operate it. We handle setup, operation, and teardown. You focus on your event.</p>
          <a href="/services/live-event-production" class="text-link">Learn about our production services &rarr;</a>
        </div>
      </div>
    </div>
  </section>

  <section class="section cta-section">
    <div class="container cta-inner">
      <h2 class="cta-heading">Need a quote?</h2>
      <p class="cta-text">Tell us what you need, your event date, and venue — we'll send a detailed rental proposal.</p>
      <a href="/contact" class="btn btn-primary btn-lg">Request a Quote</a>
    </div>
  </section>
`;
};
