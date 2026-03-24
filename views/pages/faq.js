module.exports = function faqPage({ site, faq }) {
  return `
  <section class="page-hero page-hero-sm">
    <div class="container">
      <h1 class="page-title">Frequently Asked Questions</h1>
      <p class="page-subtitle">Common questions about AV equipment rental and event production services in Rochester, NY.</p>
    </div>
  </section>

  <section class="section">
    <div class="container container-narrow">
      <div class="faq-list">
        ${faq.map((item, i) => `
        <details class="faq-item" ${i === 0 ? 'open' : ''}>
          <summary class="faq-question">
            <span>${item.question}</span>
            <svg class="faq-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20">
              <polyline points="6 9 12 15 18 9"/>
            </svg>
          </summary>
          <div class="faq-answer">
            <p>${item.answer}</p>
          </div>
        </details>`).join('')}
      </div>
    </div>
  </section>

  <section class="section cta-section">
    <div class="container cta-inner">
      <h2 class="cta-heading">Still have questions?</h2>
      <p class="cta-text">We're happy to help. Call, email, or send us a message.</p>
      <div class="cta-actions">
        <a href="/contact" class="btn btn-primary btn-lg">Contact Us</a>
        <span class="cta-divider">or call</span>
        <a href="tel:${site.business.phoneTel}" class="cta-phone">${site.business.phone}</a>
      </div>
    </div>
  </section>
`;
};
