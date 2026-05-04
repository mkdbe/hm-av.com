module.exports = function aboutPage({ site }) {
  const biz = site.business;

  return `
  <section class="page-hero page-hero--new">
    <div class="page-kicker">About Us</div>
    <h1 class="page-title">About HIGHLANDMEDIA.</h1>
  </section>

  <div class="content-section">
    <div class="content-main">
      <p class="content-intro">HIGHLANDMEDIA is a full-service event production and AV rental company based in Rochester, New York. With over ${biz.experience} years of experience in audio visual production, we specialize in delivering reliable, high-quality technical solutions for corporate events, conferences, and live productions.</p>

      <div class="content-block">
        <h2>What We Do</h2>
        <p>We provide sound reinforcement, video production, projection, lighting design, and complete event production services. Whether you need a simple projector and screen for a meeting or full multi-camera production for a 1,000-person conference, we have the equipment and expertise to deliver.</p>
        <p>We also offer equipment-only rentals for organizations that have their own technical staff but need professional-grade gear.</p>
      </div>

      <div class="content-block">
        <h2>Our Approach</h2>
        <p>Events are live. There's no second take. That reality shapes everything about how we work &mdash; meticulous pre-production planning, redundant systems where they matter, and experienced technicians who stay calm under pressure. We show up early, we test everything, and we stay until the last cable is wrapped.</p>
        <p>Every event gets a single point of contact who owns the technical delivery from the first phone call through strike. No hand-offs, no miscommunication, no surprises.</p>
      </div>

      <div class="content-block">
        <h2>Where We Work</h2>
        <p>We're based in Rochester and serve the entire Greater Rochester area, the Finger Lakes region, and Western and Central New York. We work in hotels, convention centers, corporate offices, outdoor venues, houses of worship, and event spaces of all sizes. We support events in Buffalo, Syracuse, and the surrounding regions.</p>
      </div>

      <div class="content-cta">
        <h2>Work With Us</h2>
        <p>Have an event coming up? We'd like to hear about it.</p>
        <div class="content-cta-actions">
          <a href="/contact" class="btn-primary">Get in Touch</a>
          <a href="/services" class="btn-outline">View Our Services</a>
        </div>
      </div>
    </div>

    <aside class="content-sidebar">
      <div class="sidebar-card">
        <div class="sidebar-heading">At a Glance</div>
        <dl class="sidebar-stats">
          <dt>${biz.experience}+</dt>
          <dd>Years of experience</dd>
          <dt>Rochester, NY</dt>
          <dd>Home base</dd>
          <dt>Full-Service</dt>
          <dd>Production &amp; rentals</dd>
        </dl>
      </div>
      <div class="sidebar-card">
        <div class="sidebar-heading">Contact</div>
        <p><a href="tel:${biz.phoneTel}" class="sidebar-phone">${biz.phone}</a></p>
        <p><a href="mailto:${biz.email}">${biz.email}</a></p>
      </div>
    </aside>
  </div>
`;
};
