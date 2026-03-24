module.exports = function portfolioPage({ site }) {
  return `
  <section class="page-hero page-hero-sm">
    <div class="container">
      <h1 class="page-title">Portfolio</h1>
      <p class="page-subtitle">Event production work across Rochester, NY and the Finger Lakes region.</p>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <div class="portfolio-grid">
        ${[1,2,3,4,5,6].map(i => `
        <div class="portfolio-item">
          <div class="placeholder-image placeholder-image-tall" aria-hidden="true">
            <span>Event Photo ${i}</span>
          </div>
        </div>`).join('')}
      </div>

      <div class="portfolio-note">
        <p>We're building out our portfolio gallery. In the meantime, <a href="/contact">get in touch</a> and we'll be happy to share examples of our work relevant to your event.</p>
      </div>
    </div>
  </section>

  <section class="section cta-section">
    <div class="container cta-inner">
      <h2 class="cta-heading">Like what you see?</h2>
      <p class="cta-text">Let's talk about your event.</p>
      <a href="/contact" class="btn btn-primary btn-lg">Get a Quote</a>
    </div>
  </section>
`;
};
