# HM-AV Deployment Guide

## Quick Deploy Steps

### 1. DNS
Point `hm-av.com` and `www.hm-av.com` A records to your Linode IP.

### 2. Upload files
```bash
# From your local machine, or scp the tar.gz:
mkdir -p /var/www/html/hm-av.com
# Extract hms-site.tar.gz contents into /var/www/html/hm-av.com/
# (so server.js is at /var/www/html/hm-av.com/server.js)

cd /var/www/html/hm-av.com
npm install
```

### 3. SSL Certificate
```bash
certbot certonly --nginx -d hm-av.com -d www.hm-av.com
```

### 4. Nginx config
```bash
cp deploy/hm-av.com.conf /etc/nginx/conf.d/hm-av.com.conf
nginx -t
systemctl reload nginx
```

### 5. Systemd service
```bash
cp deploy/hm-av.service /etc/systemd/system/hm-av.service
systemctl daemon-reload
systemctl enable hm-av
systemctl start hm-av
systemctl status hm-av
```

### 6. Verify
```bash
curl -I https://hm-av.com
# Should return 200
# Check noindex is present:
curl -s https://hm-av.com | grep 'robots'
# Should show: noindex, nofollow
```

## Going Live Checklist

When ready to launch:

1. **Remove noindex**: Edit `data/site.json`, set `"noindex": false`
2. **Restart service**: `systemctl restart hm-av`
3. **Verify robots.txt**: `curl https://hm-av.com/robots.txt` should show `Allow: /`
4. **Verify meta**: `curl -s https://hm-av.com | grep robots` should show `index, follow`
5. **Submit sitemap**: Add `https://hm-av.com/sitemap.xml` to Google Search Console
6. **Update Google Business Profile**: Change website URL to `https://hm-av.com`
7. **Set up 301 redirect**: Update `highlandmediaservices.com` nginx config:
   ```nginx
   server {
       listen 443 ssl http2;
       server_name highlandmediaservices.com www.highlandmediaservices.com;
       ssl_certificate /etc/letsencrypt/live/highlandmediaservices.com/fullchain.pem;
       ssl_certificate_key /etc/letsencrypt/live/highlandmediaservices.com/privkey.pem;
       return 301 https://hm-av.com$request_uri;
   }
   ```

## Service Management

```bash
systemctl status hm-av       # Check status
systemctl restart hm-av      # Restart after changes
journalctl -u hm-av -f       # Follow logs
```

## File Locations

- Site root: `/var/www/html/hm-av.com/`
- Content data: `/var/www/html/hm-av.com/data/`
- CSS: `/var/www/html/hm-av.com/public/css/style.css`
- JS: `/var/www/html/hm-av.com/public/js/main.js`
- Nginx config: `/etc/nginx/conf.d/hm-av.com.conf`
- Systemd service: `/etc/systemd/system/hm-av.service`

## Adding Content

**New service page**: Add entry to `data/services.json`, restart service. Route auto-created at `/services/{slug}`.

**New equipment page**: Add entry to `data/equipment.json`, restart service. Route auto-created at `/equipment/{slug}`.

**New FAQ**: Add entry to `data/faq.json`, restart service.

All new pages automatically get sitemap entries, nav links, and footer links.
