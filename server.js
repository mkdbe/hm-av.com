const express = require('express');
const path = require('path');
const fs = require('fs');
const { Resend } = require('resend');

const app = express();
const PORT = process.env.PORT || 4200;

// Parse form submissions
app.use(express.urlencoded({ extended: true }));

// Resend email client
const resend = new Resend('re_Ney6x6dy_GaHZwQ41q4uC2qtR6vvrqRVL');

// Static files
app.use(express.static(path.join(__dirname, 'public'), {
  maxAge: '7d',
  index: false  // don't serve index.html from public
}));

// Load data
function loadJSON(filename) {
  return JSON.parse(fs.readFileSync(path.join(__dirname, 'data', filename), 'utf8'));
}

const site = loadJSON('site.json');
const services = loadJSON('services.json');
const equipment = loadJSON('equipment.json');
const faq = loadJSON('faq.json');
const reviews = loadJSON('reviews.json');

// Template engine
const layout = require('./views/layout');
const homePage = require('./views/pages/home');
const servicesPage = require('./views/pages/services');
const serviceDetailPage = require('./views/pages/service-detail');
const equipmentPage = require('./views/pages/equipment');
const equipmentDetailPage = require('./views/pages/equipment-detail');
const aboutPage = require('./views/pages/about');
const contactPage = require('./views/pages/contact');
const faqPage = require('./views/pages/faq');
const portfolioPage = require('./views/pages/portfolio');

// ─── Routes ─────────────────────────────────────────────

// Home
app.get('/', (req, res) => {
  res.send(layout({
    title: site.meta.defaultTitle,
    description: site.meta.defaultDescription,
    path: '/',
    body: homePage({ site, services, equipment, reviews }),
    site, services, equipment,
    schema: buildLocalBusinessSchema()
  }));
});

// Services overview
app.get('/services', (req, res) => {
  res.send(layout({
    title: `AV Services in Rochester, NY | ${site.business.brandName}`,
    description: 'Audio visual services including sound, video, lighting, event production, and virtual event solutions in Rochester, NY.',
    path: '/services',
    body: servicesPage({ site, services }),
    site, services, equipment
  }));
});

// Service detail
app.get('/services/:slug', (req, res) => {
  const service = services.find(s => s.slug === req.params.slug);
  if (!service) return res.status(404).send('Not found');
  res.send(layout({
    title: service.metaTitle,
    description: service.metaDescription,
    path: `/services/${service.slug}`,
    body: serviceDetailPage({ site, service, services }),
    site, services, equipment,
    schema: buildServiceSchema(service)
  }));
});

// Equipment overview
app.get('/equipment', (req, res) => {
  res.send(layout({
    title: `AV Equipment Rentals in Rochester, NY | ${site.business.brandName}`,
    description: 'Rent professional AV equipment in Rochester, NY. Projectors, sound systems, lighting, video cameras, and more. Delivery and setup available.',
    path: '/equipment',
    body: equipmentPage({ site, equipment }),
    site, services, equipment
  }));
});

// Equipment detail
app.get('/equipment/:slug', (req, res) => {
  const item = equipment.find(e => e.slug === req.params.slug);
  if (!item) return res.status(404).send('Not found');
  res.send(layout({
    title: item.metaTitle,
    description: item.metaDescription,
    path: `/equipment/${item.slug}`,
    body: equipmentDetailPage({ site, item, equipment, services }),
    site, services, equipment
  }));
});

// About
app.get('/about', (req, res) => {
  res.send(layout({
    title: `About HM-AV | AV Production in Rochester, NY`,
    description: 'Over 20 years of audio visual and event production experience in Rochester, NY. Learn about HM-AV.',
    path: '/about',
    body: aboutPage({ site }),
    site, services, equipment
  }));
});

// Contact
app.get('/contact', (req, res) => {
  res.send(layout({
    title: `Contact HM-AV | Get a Quote | Rochester, NY`,
    description: 'Request a quote for AV rental or event production in Rochester, NY. Call (585) 210-2350 or email info@hm-av.com.',
    path: '/contact',
    body: contactPage({ site, success: req.query.success === '1', error: req.query.error === '1' }),
    site, services, equipment
  }));
});

// Contact form submission
app.post('/contact', async (req, res) => {
  const { name, organization, email, phone, eventDate, venue, attendees, services: svcList, details } = req.body;

  // Basic validation
  if (!name || !email) {
    return res.redirect('/contact?error=1');
  }

  // Format services checkboxes
  const selectedServices = Array.isArray(svcList) ? svcList.join(', ') : (svcList || 'None specified');

  const emailBody = `New quote request from hm-av.com

Name:         ${name}
Organization: ${organization || '—'}
Email:        ${email}
Phone:        ${phone || '—'}

Event Date:   ${eventDate || '—'}
Venue:        ${venue || '—'}
Attendees:    ${attendees || '—'}
Services:     ${selectedServices}

Details:
${details || '(none provided)'}

---
Submitted: ${new Date().toLocaleString('en-US', { timeZone: 'America/New_York' })} EST`;

  try {
    await resend.emails.send({
      from: 'HM-AV Quote Request <onboarding@resend.dev>',
      to: 'info@hm-av.com',
      replyTo: email,
      subject: `Quote Request: ${name}${organization ? ' / ' + organization : ''}`,
      text: emailBody
    });

    console.log(`[CONTACT] Quote request from ${name} <${email}>`);
    res.redirect('/contact?success=1');
  } catch (err) {
    console.error('[CONTACT] Email failed:', err.message);
    res.redirect('/contact?error=1');
  }
});

// FAQ
app.get('/faq', (req, res) => {
  res.send(layout({
    title: `FAQ — AV Rental & Event Production | HM-AV`,
    description: 'Frequently asked questions about AV equipment rental and event production services in Rochester, NY.',
    path: '/faq',
    body: faqPage({ site, faq }),
    site, services, equipment,
    schema: buildFAQSchema(faq)
  }));
});

// Portfolio
app.get('/portfolio', (req, res) => {
  res.send(layout({
    title: `Portfolio — Event Production Work | HM-AV`,
    description: 'See our event production work across Rochester, NY. Corporate events, conferences, galas, and more.',
    path: '/portfolio',
    body: portfolioPage({ site }),
    site, services, equipment
  }));
});

// Sitemap
app.get('/sitemap.xml', (req, res) => {
  const base = site.business.url;
  const now = new Date().toISOString().split('T')[0];
  const urls = [
    { loc: '/', priority: '1.0', changefreq: 'weekly' },
    { loc: '/services', priority: '0.9', changefreq: 'monthly' },
    { loc: '/equipment', priority: '0.9', changefreq: 'monthly' },
    { loc: '/about', priority: '0.6', changefreq: 'monthly' },
    { loc: '/contact', priority: '0.8', changefreq: 'monthly' },
    { loc: '/faq', priority: '0.7', changefreq: 'monthly' },
    { loc: '/portfolio', priority: '0.7', changefreq: 'monthly' },
    ...services.map(s => ({ loc: `/services/${s.slug}`, priority: '0.8', changefreq: 'monthly' })),
    ...equipment.map(e => ({ loc: `/equipment/${e.slug}`, priority: '0.8', changefreq: 'monthly' }))
  ];
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(u => `  <url>
    <loc>${base}${u.loc}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`).join('\n')}
</urlset>`;
  res.type('application/xml').send(xml);
});

// robots.txt
app.get('/robots.txt', (req, res) => {
  if (site.meta.noindex) {
    res.type('text/plain').send(`User-agent: *
Disallow: /`);
  } else {
    res.type('text/plain').send(`User-agent: *
Allow: /
Sitemap: ${site.business.url}/sitemap.xml`);
  }
});

// ─── Schema Builders ────────────────────────────────────

function buildLocalBusinessSchema() {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": site.business.name,
    "description": site.meta.defaultDescription,
    "url": site.business.url,
    "telephone": site.business.phoneTel,
    "email": site.business.email,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": site.business.city,
      "addressRegion": site.business.state,
      "addressCountry": "US"
    },
    "areaServed": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": 43.1566,
        "longitude": -77.6088
      },
      "geoRadius": "80000"
    },
    "priceRange": "$$"
  }, null, 2);
}

function buildServiceSchema(service) {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.title,
    "description": service.intro,
    "provider": {
      "@type": "LocalBusiness",
      "name": site.business.name,
      "telephone": site.business.phoneTel
    },
    "areaServed": {
      "@type": "City",
      "name": "Rochester, NY"
    }
  }, null, 2);
}

function buildFAQSchema(faqItems) {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqItems.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  }, null, 2);
}

// ─── Start ──────────────────────────────────────────────

app.listen(PORT, () => {
  console.log(`HMS site running on http://localhost:${PORT}`);
});
