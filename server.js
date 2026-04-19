const express = require('express');
const path = require('path');
const fs = require('fs');
const { Resend } = require('resend');
const geoip = require('geoip-lite');

const app = express();
const PORT = process.env.PORT || 4200;

// Parse form submissions
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Resend email client
const resend = new Resend('re_Ney6x6dy_GaHZwQ41q4uC2qtR6vvrqRVL');

// ─── Analytics Setup ────────────────────────────────────

const ANALYTICS_FILE = path.join(__dirname, 'analytics.json');

const EXCLUDED_IPS = [
    '38.49.72.41',
];

if (!fs.existsSync(ANALYTICS_FILE)) {
    fs.writeFileSync(ANALYTICS_FILE, JSON.stringify({ visits: [] }));
}

const BOT_PATTERNS = /bot|crawler|spider|googlebot|bingbot|yandex|baidu|semrush|ahrefsbot|mj12bot|dotbot|python-requests|curl|wget|libwww|go-http-client|scrapy|slackbot|pinterest|whatsapp|facebookexternalhit|uptime-kuma/i;

// Human classification: duration >= 30s AND navigations >= 1, Rochester override
function isHumanVisit(visit) {
    if (/rochester/i.test(visit.location || '')) return true;
    return (visit.duration || 0) >= 30 && (visit.navigations || 0) >= 1;
}

// ── Email notification setup ──────────────────────────────────────────
const recentlyNotified = new Map();
const pendingNotifications = new Map();

function fireVisitorNotification(visit) {
    const now = new Date().toLocaleString('en-US', { timeZone: 'America/New_York' });
    const clicks = visit.navigations || 0;
    const duration = visit.duration || 0;
    const durationStr = duration >= 60
        ? `${Math.floor(duration / 60)}m ${duration % 60}s`
        : `${duration}s`;
    const pages = visit.pages || [visit.path || '/'];
    const pagesStr = pages.join(' → ');

    let source = visit.referer || 'Direct';
    if (visit.utm_source) {
        source = visit.utm_source;
        if (visit.utm_medium) source += ` / ${visit.utm_medium}`;
        if (visit.utm_campaign) source += ` (${visit.utm_campaign})`;
    }

    resend.emails.send({
        from: "onboarding@resend.dev",
        to: "mbesaw@gmail.com",
        subject: `👤 New visitor on hm-av.com — ${visit.location}`,
        html: `<!DOCTYPE html>
<html>
<head><meta name="color-scheme" content="dark"><meta name="supported-color-schemes" content="dark light"></head>
<body style="background:#1a1a1a;color:#e0e0e0;font-family:monospace;padding:24px;margin:0;">
  <div style="max-width:480px;margin:0 auto;background:#242424;border-radius:8px;padding:24px;border:1px solid #333;">
    <h2 style="color:#cc2222;margin:0 0 20px 0;font-size:16px;letter-spacing:2px;">HM-AV.COM — NEW VISITOR</h2>
    <table style="width:100%;border-collapse:collapse;">
      <tr><td style="color:#888;padding:6px 0;width:110px;">TIME</td><td style="color:#e0e0e0;padding:6px 0;">${now} EST</td></tr>
      <tr><td style="color:#888;padding:6px 0;">LOCATION</td><td style="color:#e0e0e0;padding:6px 0;">${visit.location}</td></tr>
      <tr><td style="color:#888;padding:6px 0;">IP</td><td style="color:#666;padding:6px 0;font-size:12px;">${visit.ip}</td></tr>
      <tr><td style="color:#888;padding:6px 0;">DEVICE</td><td style="color:#e0e0e0;padding:6px 0;">${visit.device}</td></tr>
      <tr><td style="color:#888;padding:6px 0;">OS</td><td style="color:#e0e0e0;padding:6px 0;">${visit.os}</td></tr>
      <tr><td style="color:#888;padding:6px 0;">BROWSER</td><td style="color:#e0e0e0;padding:6px 0;">${visit.browser}</td></tr>
      <tr><td style="color:#888;padding:6px 0;">SOURCE</td><td style="color:#e0e0e0;padding:6px 0;">${source}</td></tr>
      <tr><td style="color:#888;padding:6px 0;">PATH</td><td style="color:#e0e0e0;padding:6px 0;word-break:break-all;">${pagesStr}</td></tr>
      <tr><td style="color:#888;padding:6px 0;">PAGES VIEWED</td><td style="color:#cc2222;padding:6px 0;font-weight:bold;">${pages.length}</td></tr>
      <tr><td style="color:#888;padding:6px 0;">CLICKS</td><td style="color:#cc2222;padding:6px 0;font-weight:bold;">${clicks}</td></tr>
      <tr><td style="color:#888;padding:6px 0;">TIME ON SITE</td><td style="color:#cc2222;padding:6px 0;font-weight:bold;">${durationStr}</td></tr>
    </table>
  </div>
</body>
</html>`
    }).catch(err => console.error("Email failed:", err.message));
}

function scheduleVisitorNotification(sessionId) {
    if (pendingNotifications.has(sessionId)) {
        clearTimeout(pendingNotifications.get(sessionId));
    }

    const timer = setTimeout(() => {
        pendingNotifications.delete(sessionId);

        try {
            const data = JSON.parse(fs.readFileSync(ANALYTICS_FILE, 'utf8'));
            const visit = data.visits.find(v => v.sessionId === sessionId);

            if (!visit) return;

            // Check 1hr cooldown per IP
            const lastNotified = recentlyNotified.get(visit.ip);
            if (lastNotified && (Date.now() - lastNotified) < 3600000) return;

            if (isHumanVisit(visit)) {
                recentlyNotified.set(visit.ip, Date.now());
                if (recentlyNotified.size > 100) {
                    for (const [k, t] of recentlyNotified.entries())
                        if (Date.now() - t > 3600000) recentlyNotified.delete(k);
                }
                fireVisitorNotification(visit);
            }
        } catch (err) {
            console.error('Notification error:', err.message);
        }
    }, 2 * 60 * 1000);

    pendingNotifications.set(sessionId, timer);
}

// Helper: extract visitor info from request
function getVisitorInfo(req) {
    const userAgent = req.headers['user-agent'] || 'Unknown';
    const visitorIP = req.headers['x-forwarded-for'] ||
                      req.headers['x-real-ip'] ||
                      req.ip ||
                      req.connection.remoteAddress;
    const realIP = visitorIP.split(',')[0].trim();

    // Detect device type
    let device = 'Desktop';
    if (/mobile|android|iphone|ipad|tablet/i.test(userAgent)) {
        if (/ipad|tablet/i.test(userAgent)) device = 'Tablet';
        else device = 'Mobile';
    }

    // Detect OS
    let os = 'Unknown';
    if (/windows/i.test(userAgent)) os = 'Windows';
    else if (/macintosh|mac os x/i.test(userAgent)) os = 'macOS';
    else if (/linux/i.test(userAgent) && !/android/i.test(userAgent)) os = 'Linux';
    else if (/android/i.test(userAgent)) os = 'Android';
    else if (/iphone|ipad|ipod/i.test(userAgent)) os = 'iOS';
    else if (/cros/i.test(userAgent)) os = 'Chrome OS';

    // Detect browser
    let browser = 'Unknown';
    if (/edg/i.test(userAgent)) browser = 'Edge';
    else if (/chrome/i.test(userAgent) && !/edg/i.test(userAgent)) browser = 'Chrome';
    else if (/safari/i.test(userAgent) && !/chrome/i.test(userAgent)) browser = 'Safari';
    else if (/firefox/i.test(userAgent)) browser = 'Firefox';
    else if (/opera|opr/i.test(userAgent)) browser = 'Opera';
    else if (/brave/i.test(userAgent)) browser = 'Brave';

    // GeoIP lookup
    const geo = geoip.lookup(realIP);
    let location = 'Unknown';
    if (geo) {
        const parts = [];
        if (geo.city) parts.push(geo.city);
        if (geo.region) parts.push(geo.region);
        if (geo.country) parts.push(geo.country);
        location = parts.length > 0 ? parts.join(', ') : geo.country || 'Unknown';
    }

    return { realIP, userAgent, device, os, browser, location };
}

// Static files
app.use(express.static(path.join(__dirname, 'public'), {
  maxAge: '7d',
  index: false
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
const venues = loadJSON('venues.json');
const clients = loadJSON('clients.json');

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
const { getSession, saveSession, pickServicePhotos, getReviewOrder } = require('./lib/session');

// ─── Analytics API Routes ───────────────────────────────

// Track page view — creates or updates session by sessionId
app.post('/api/track', (req, res) => {
    const userAgent = req.headers['user-agent'] || 'Unknown';
    const { realIP, device, os, browser, location } = getVisitorInfo(req);
    const sessionId = req.body.sessionId;

    if (!sessionId) return res.json({ success: true });
    if (BOT_PATTERNS.test(userAgent)) return res.json({ success: true });
    if (EXCLUDED_IPS.includes(realIP)) return res.json({ success: true });

    try {
        const data = JSON.parse(fs.readFileSync(ANALYTICS_FILE, 'utf8'));

        // Find existing session
        let visit = data.visits.find(v => v.sessionId === sessionId);

        if (visit) {
            // Existing session — add page to path if new
            const pagePath = req.body.path || '/';
            if (!visit.pages) visit.pages = [visit.path || '/'];
            if (visit.pages[visit.pages.length - 1] !== pagePath) {
                visit.pages.push(pagePath);
                visit.navigations = (visit.navigations || 0) + 1;
            }
            visit.path = pagePath; // update current page
        } else {
            // New session — create visit record
            const pagePath = req.body.path || '/';
            visit = {
                sessionId: sessionId,
                timestamp: new Date().toISOString(),
                path: pagePath,
                pages: [pagePath],
                ip: realIP,
                location: location,
                userAgent: userAgent,
                device: device,
                os: os,
                browser: browser,
                referer: 'Direct',
                navigations: 0
            };
            data.visits.push(visit);
        }

        // Client referrer (more reliable than server-side)
        const clientReferer = req.body.referer || '';
        if (clientReferer && clientReferer !== 'Direct' && visit.referer === 'Direct') {
            visit.referer = clientReferer;
        }

        // UTM params
        if (req.body.utm_source)   visit.utm_source   = req.body.utm_source;
        if (req.body.utm_medium)   visit.utm_medium   = req.body.utm_medium;
        if (req.body.utm_campaign) visit.utm_campaign  = req.body.utm_campaign;

        // Keep max 10,000 visits
        if (data.visits.length > 10000) {
            data.visits = data.visits.slice(-10000);
        }

        fs.writeFileSync(ANALYTICS_FILE, JSON.stringify(data, null, 2));
        scheduleVisitorNotification(sessionId);

        res.json({ success: true });
    } catch (err) {
        console.error('Track error:', err);
        res.status(500).json({ error: 'Failed to track' });
    }
});

// Track clicks (non-navigation clicks like CTAs, buttons, etc.)
app.post('/api/track-nav', (req, res) => {
    const userAgent = req.headers['user-agent'] || 'Unknown';
    const { realIP } = getVisitorInfo(req);
    const sessionId = req.body.sessionId;

    if (!sessionId) return res.json({ success: true });
    if (BOT_PATTERNS.test(userAgent)) return res.json({ success: true });
    if (EXCLUDED_IPS.includes(realIP)) return res.json({ success: true });

    try {
        const data = JSON.parse(fs.readFileSync(ANALYTICS_FILE, 'utf8'));
        const visit = data.visits.find(v => v.sessionId === sessionId);

        if (visit) {
            visit.navigations = (visit.navigations || 0) + 1;
            fs.writeFileSync(ANALYTICS_FILE, JSON.stringify(data, null, 2));
            scheduleVisitorNotification(sessionId);
        }

        res.json({ success: true });
    } catch (err) {
        console.error('Navigation tracking error:', err);
        res.status(500).json({ error: 'Failed to track navigation' });
    }
});

// Heartbeat for session duration
app.post('/api/heartbeat', (req, res) => {
    const userAgent = req.headers['user-agent'] || 'Unknown';
    const { realIP } = getVisitorInfo(req);
    const sessionId = req.body.sessionId;

    if (!sessionId) return res.json({ success: true });
    if (BOT_PATTERNS.test(userAgent)) return res.json({ success: true });
    if (EXCLUDED_IPS.includes(realIP)) return res.json({ success: true });

    try {
        const data = JSON.parse(fs.readFileSync(ANALYTICS_FILE, 'utf8'));
        const visit = data.visits.find(v => v.sessionId === sessionId);

        if (visit) {
            visit.lastHeartbeat = new Date().toISOString();
            const startTime = new Date(visit.timestamp);
            const endTime = new Date(visit.lastHeartbeat);
            visit.duration = Math.floor((endTime - startTime) / 1000);
            fs.writeFileSync(ANALYTICS_FILE, JSON.stringify(data, null, 2));
        }

        res.json({ success: true });
    } catch (err) {
        console.error('Heartbeat tracking error:', err);
        res.status(500).json({ error: 'Failed to track heartbeat' });
    }
});

// Raw analytics JSON for dashboard
app.get("/api/analytics", (req, res) => {
    try {
        const data = JSON.parse(fs.readFileSync(ANALYTICS_FILE, "utf8"));
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: "Failed to load analytics" });
    }
});

// Analytics dashboard
app.get("/analytics", (req, res) => {
    res.sendFile(path.join(__dirname, "analytics-dashboard.html"));
});

// ─── Page Routes ────────────────────────────────────────

// Home
app.get('/', (req, res) => {
  const session = getSession(req);
  const reviewOrder = getReviewOrder(reviews, session);
  if (!session.reviewOrder) {
    session.reviewOrder = reviewOrder;
    saveSession(res, session);
  }
  const shuffledReviews = reviewOrder.map(i => reviews[i]);
  res.send(layout({
    title: site.meta.defaultTitle,
    description: site.meta.defaultDescription,
    path: '/',
    body: homePage({ site, services, equipment, reviews: shuffledReviews, venues, clients }),
    site, services, equipment,
    schema: buildLocalBusinessSchema()
  }));
});

// Services overview
app.get('/services', (req, res) => {
  const session = getSession(req);
  const { photos, changed } = pickServicePhotos(services, session);
  if (changed) {
    session.servicePhotos = photos;
    saveSession(res, session);
  }
  const servicesWithPhotos = services.map(s => ({
    ...s,
    photo: photos[s.slug] ? `/assets/services/${s.slug}/${photos[s.slug]}` : null
  }));
  res.send(layout({
    title: `AV Services in Rochester, NY | ${site.business.brandName}`,
    description: 'Audio visual services including sound, video, lighting, event production, and virtual event solutions in Rochester, NY.',
    path: '/services',
    body: servicesPage({ site, services: servicesWithPhotos }),
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

  if (!name || !email) {
    return res.redirect('/contact?error=1');
  }

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
    "@type": ["LocalBusiness", "ProfessionalService"],
    "name": site.business.name,
    "alternateName": "HM-AV",
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
    "areaServed": [
      { "@type": "City", "name": "Rochester", "sameAs": "https://en.wikipedia.org/wiki/Rochester,_New_York" },
      { "@type": "State", "name": "New York" }
    ],
    "knowsAbout": ["audio visual production", "live event production", "AV equipment rental", "sound systems", "video production", "event lighting", "hybrid events", "corporate events"],
    "sameAs": [
      "https://www.instagram.com/highlandmedia_co/",
      "https://www.facebook.com/highlandmediaagency/",
      "https://highlandmediaservices.com"
    ],
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

app.listen(PORT, '127.0.0.1', () => {
  console.log(`HM-AV site running on http://localhost:${PORT}`);
});
