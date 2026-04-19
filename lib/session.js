const fs   = require('fs');
const path = require('path');

const SESSION_COOKIE    = 'hm_sess';
const IMAGE_EXTS        = /\.(jpg|jpeg|png|webp|gif)$/i;
const SERVICES_PHOTO_DIR = path.join(__dirname, '..', 'public', 'assets', 'services');

function parseCookies(req) {
  const list = {};
  const rc = req.headers.cookie;
  if (rc) {
    rc.split(';').forEach(cookie => {
      const [key, ...val] = cookie.split('=');
      if (key) list[key.trim()] = decodeURIComponent(val.join('=').trim());
    });
  }
  return list;
}

function getSession(req) {
  try {
    const cookies = parseCookies(req);
    return cookies[SESSION_COOKIE] ? JSON.parse(cookies[SESSION_COOKIE]) : {};
  } catch {
    return {};
  }
}

function saveSession(res, session) {
  const value = encodeURIComponent(JSON.stringify(session));
  res.setHeader('Set-Cookie', `${SESSION_COOKIE}=${value}; Path=/; HttpOnly; SameSite=Lax`);
}

// Pick one random photo per service, respecting existing session choices.
// Returns { photos, changed } where photos is { slug: 'filename.jpg', ... }
function pickServicePhotos(services, session) {
  const photos  = Object.assign({}, session.servicePhotos || {});
  let changed   = false;

  for (const service of services) {
    const dir = path.join(SERVICES_PHOTO_DIR, service.slug);
    let files;
    try {
      files = fs.readdirSync(dir).filter(f => IMAGE_EXTS.test(f));
    } catch {
      continue; // directory doesn't exist yet
    }
    if (files.length === 0) continue;

    // Keep existing selection if it's still a valid file
    if (photos[service.slug] && files.includes(photos[service.slug])) continue;

    photos[service.slug] = files[Math.floor(Math.random() * files.length)];
    changed = true;
  }

  return { photos, changed };
}

// Return a shuffled index order for reviews, reusing the session's order if present.
function getReviewOrder(reviews, session) {
  const n = reviews.length;
  if (session.reviewOrder && session.reviewOrder.length === n) {
    return session.reviewOrder;
  }
  // Fisher-Yates shuffle
  const order = Array.from({ length: n }, (_, i) => i);
  for (let i = n - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [order[i], order[j]] = [order[j], order[i]];
  }
  return order;
}

module.exports = { getSession, saveSession, pickServicePhotos, getReviewOrder };
