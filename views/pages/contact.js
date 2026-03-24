module.exports = function contactPage({ site, success, error }) {
  const biz = site.business;

  return `
  <section class="page-hero page-hero-sm">
    <div class="container">
      <h1 class="page-title">Contact Us</h1>
      <p class="page-subtitle">Request a quote, ask a question, or tell us about your upcoming event.</p>
    </div>
  </section>

  <section class="section">
    <div class="container content-layout">
      <div class="content-main">
        <div class="contact-form-wrapper">

          ${success ? `
          <div class="form-message form-success">
            <h2>Thank you!</h2>
            <p>Your quote request has been received. We'll get back to you within one business day.</p>
            <p>If you need an immediate response, call us at <a href="tel:${biz.phoneTel}">${biz.phone}</a>.</p>
          </div>
          ` : `

          ${error ? `
          <div class="form-message form-error">
            <p>Something went wrong submitting the form. Please try again, or contact us directly at <a href="mailto:${biz.email}">${biz.email}</a> or <a href="tel:${biz.phoneTel}">${biz.phone}</a>.</p>
          </div>
          ` : ''}

          <h2>Request a Quote</h2>
          <p>Fill out the form below and we'll get back to you within one business day with a detailed proposal.</p>

          <form class="contact-form" id="contactForm" action="/contact" method="POST">
            <div class="form-row">
              <div class="form-group">
                <label for="name" class="form-label">Name <span class="required">*</span></label>
                <input type="text" id="name" name="name" class="form-input" required>
              </div>
              <div class="form-group">
                <label for="org" class="form-label">Organization</label>
                <input type="text" id="org" name="organization" class="form-input">
              </div>
            </div>

            <div class="form-row">
              <div class="form-group">
                <label for="email" class="form-label">Email <span class="required">*</span></label>
                <input type="email" id="email" name="email" class="form-input" required>
              </div>
              <div class="form-group">
                <label for="phone" class="form-label">Phone</label>
                <input type="tel" id="phone" name="phone" class="form-input">
              </div>
            </div>

            <div class="form-group">
              <label for="eventDate" class="form-label">Event Date</label>
              <input type="date" id="eventDate" name="eventDate" class="form-input">
            </div>

            <div class="form-group">
              <label for="venue" class="form-label">Venue / Location</label>
              <input type="text" id="venue" name="venue" class="form-input" placeholder="Venue name or address">
            </div>

            <div class="form-group">
              <label for="attendees" class="form-label">Estimated Attendance</label>
              <select id="attendees" name="attendees" class="form-input">
                <option value="">Select range</option>
                <option value="1-50">1 – 50</option>
                <option value="51-150">51 – 150</option>
                <option value="151-300">151 – 300</option>
                <option value="301-500">301 – 500</option>
                <option value="500+">500+</option>
              </select>
            </div>

            <div class="form-group">
              <label class="form-label">Services Needed</label>
              <div class="checkbox-group">
                <label class="checkbox-label"><input type="checkbox" name="services" value="sound"> Sound / PA</label>
                <label class="checkbox-label"><input type="checkbox" name="services" value="video"> Video / Projection</label>
                <label class="checkbox-label"><input type="checkbox" name="services" value="lighting"> Lighting</label>
                <label class="checkbox-label"><input type="checkbox" name="services" value="production"> Full Event Production</label>
                <label class="checkbox-label"><input type="checkbox" name="services" value="streaming"> Virtual / Streaming</label>
                <label class="checkbox-label"><input type="checkbox" name="services" value="rental"> Equipment Rental Only</label>
              </div>
            </div>

            <div class="form-group">
              <label for="details" class="form-label">Event Details</label>
              <textarea id="details" name="details" class="form-input form-textarea" rows="5" placeholder="Tell us about your event — what are you planning, what do you need, any special requirements?"></textarea>
            </div>

            <button type="submit" class="btn btn-primary btn-lg btn-block">Send Request</button>
          </form>

          `}
        </div>
      </div>

      <aside class="content-sidebar">
        <div class="sidebar-card sidebar-card-highlight">
          <h3 class="sidebar-heading">Direct Contact</h3>
          <div class="contact-method">
            <h4>Call or Text</h4>
            <a href="tel:${biz.phoneTel}" class="sidebar-phone">${biz.phone}</a>
          </div>
          <div class="contact-method">
            <h4>Email</h4>
            <a href="mailto:${biz.email}">${biz.email}</a>
          </div>
          <div class="contact-method">
            <h4>Location</h4>
            <p>${biz.city}, ${biz.stateFullName}</p>
          </div>
        </div>

        <div class="sidebar-card">
          <h3 class="sidebar-heading">What to Include</h3>
          <p class="sidebar-text">To provide an accurate quote, it helps to know:</p>
          <ul class="sidebar-checklist">
            <li>Event date and time</li>
            <li>Venue name or location</li>
            <li>Expected audience size</li>
            <li>What services you need</li>
            <li>Any special requirements</li>
          </ul>
        </div>
      </aside>
    </div>
  </section>
`;
};
