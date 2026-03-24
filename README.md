# hm-av.com

Marketing website for **Highland Media Services** (HM-AV) — live event production and AV equipment rentals in Rochester, NY.

## Stack

- **Runtime:** Node.js / Express
- **Templates:** Server-rendered HTML via JS template functions (`views/`)
- **Data:** JSON files (`data/`) — services, equipment, FAQ, reviews, site config
- **Styling:** Vanilla CSS (`public/css/style.css`)
- **Fonts:** Bebas Neue (display), Barlow (body) via Google Fonts
- **Contact form:** Resend API → `info@hm-av.com`
- **SEO:** Per-page meta tags, JSON-LD schema (LocalBusiness, Service, FAQPage), auto-generated sitemap.xml

## Project Structure

```
hm-av.com/
├── server.js                  # Express app, routes, schema builders, contact form handler
├── package.json
├── data/
│   ├── site.json              # Business info, meta defaults, noindex toggle
│   ├── services.json          # 6 service categories (drives nav, pages, homepage cards)
│   ├── equipment.json         # 4 equipment rental categories
│   ├── faq.json               # FAQ Q&A pairs (rendered with FAQPage schema)
│   └── reviews.json           # Client reviews (displayed on homepage)
├── views/
│   ├── layout.js              # HTML wrapper — head, header/nav, footer, schema injection
│   └── pages/
│       ├── home.js
│       ├── services.js        # Services overview (staggered layout)
│       ├── service-detail.js  # Individual service page template
│       ├── equipment.js       # Equipment overview
│       ├── equipment-detail.js
│       ├── about.js
│       ├── contact.js         # Quote request form + success/error states
│       ├── faq.js             # Expandable FAQ with schema
│       └── portfolio.js       # Photo gallery (placeholder)
└── public/
    ├── css/style.css          # All styles — dark theme, responsive
    ├── js/main.js             # Mobile nav, dropdowns, scroll behavior
    ├── favicon.ico
    ├── favicon.png
    ├── apple-touch-icon.png
    └── assets/
        └── images/
            └── logo.png       # HIGHLANDMEDIA logo
```

## Routes

| Path | Page | SEO Target |
|------|------|------------|
| `/` | Homepage | AV rental Rochester NY |
| `/services` | Services overview | AV services Rochester NY |
| `/services/:slug` | Service detail (6 pages) | [service] Rochester NY |
| `/equipment` | Equipment overview | AV equipment rental Rochester NY |
| `/equipment/:slug` | Equipment detail (4 pages) | [equipment type] rental Rochester NY |
| `/about` | About | About HM-AV Rochester |
| `/contact` | Quote request form | Contact AV company Rochester |
| `/faq` | FAQ (with FAQPage schema) | AV rental FAQ Rochester |
| `/portfolio` | Event gallery | Event production portfolio Rochester |
| `/sitemap.xml` | Auto-generated sitemap | — |
| `/robots.txt` | Crawl directives | — |

**Total indexable pages: 17**

## Data Files

All content is managed via JSON files in `data/`. Edit with vim, restart the service to pick up changes.

### Adding a new review

Edit `data/reviews.json`:

```json
{
  "name": "Client Name",
  "title": "Company or Venue",
  "text": "Review text here.",
  "rating": 5
}
```

### Adding a new service

Add entry to `data/services.json` with: `slug`, `title`, `navTitle`, `metaTitle`, `metaDescription`, `heroHeading`, `cardDescription`, `intro`, `sections[]`, `keywords[]`. Add matching icon to `getServiceIcon()` in `views/pages/home.js`.

### Adding a new equipment category

Add entry to `data/equipment.json` with: `slug`, `title`, `navTitle`, `metaTitle`, `metaDescription`, `heroHeading`, `intro`, `items[]`, `relatedServices[]`, `keywords[]`.

## Server

- **Port:** 4200
- **Service:** `hm-av.service`
- **Path:** `/var/www/hm-av.com/`
- **nginx:** `conf.d/hm-av.com.conf` (proxy to localhost:4200)
- **SSL:** certbot, `hm-av.com`

## Deployment

```bash
# From local machine
rsync -av --exclude='node_modules' --exclude='.git' hms-site/ /var/www/hm-av.com/

# On server (if dependencies changed)
cd /var/www/hm-av.com && npm install

# Restart (required after every file change — Node caches templates at startup)
sudo systemctl restart hm-av
```

## Development Mode

`data/site.json` has a `noindex` flag:

```json
"meta": {
  "noindex": true
}
```

When `true`, all pages include `<meta name="robots" content="noindex, nofollow">` so Google ignores the site during development.

**Go-live checklist:**
1. Set `"noindex": false` in `data/site.json`
2. Set up 301 redirect from `highlandmediaservices.com` → `hm-av.com` in nginx
3. Submit sitemap to Google Search Console (`https://hm-av.com/sitemap.xml`)
4. Update Google Business Profile URL to `https://hm-av.com`
5. Verify `hm-av.com` domain in Resend dashboard for branded email sending

## Contact Form

POST `/contact` → validates name/email → sends via Resend API → redirects to `/contact?success=1` or `/contact?error=1`.

- **From:** `HM-AV <info@hm-av.com>` (requires domain verification in Resend)
- **To:** `info@hm-av.com`
- **Reply-To:** submitter's email address
- **Subject:** `Quote Request: [Name] / [Organization]`

## Legacy Domain

`highlandmediaservices.com` is the original domain. When ready to go live, configure nginx 301 redirect to `hm-av.com` to preserve any existing SEO value.
