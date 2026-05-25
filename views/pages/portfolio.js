module.exports = function portfolioPage({ site, venues }) {
  const images = [
    { file: 'Copilot_20260416_135835.webp', alt: 'Disrupt Rochester — live event camera operation' },
    { file: 'Copilot_20260416_140318.webp', alt: 'Corporate conference — audio mixing and video production' },
    { file: 'Copilot_20260416_143332.webp', alt: 'Corporate conference — live production station' },
    { file: 'Copilot_20260416_144626.webp', alt: 'Gala event — projection, uplighting, and string lighting' },
    { file: 'GFXR2318_Panorama.webp', alt: 'Grand hall — panoramic projection mapping on walls' },
    { file: 'GFXR2840.webp', alt: 'MBA conference — dual screen presentation with live camera' },
    { file: 'GFXR3060.webp', alt: 'BEV NY conference — dual screen ballroom presentation' },
    { file: 'IMG_0034.webp', alt: 'Country club luncheon — dual display AV setup' },
    { file: 'IMG_1109.webp', alt: 'Discovery Center — large audience event production' },
    { file: 'IMG_2400.webp', alt: 'The Little Theatre — live event camera production' },
    { file: 'IMG_2416.webp', alt: 'Honeywell corporate event — audio and display production' },
    { file: 'IMG_2971.webp', alt: 'TEDx Rochester — live event production' },
    { file: 'IMG_3042.webp', alt: 'Memorial Art Gallery — live sound for concert performance' },
    { file: 'IMG_4656.webp', alt: 'Hybrid event — projection, dual displays, and remote presenter' },
    { file: 'IMG_3377.webp', alt: 'SAS Fireside Chat — display and camera production setup' },
    { file: 'Copilot_20260409_144544.webp', alt: 'ITX Product Design Conference — stage lighting and AV production' },
    { file: 'Copilot_20260416_144608.webp', alt: 'Hotel ballroom — projection and PA system setup' },
    { file: 'Copilot_20260416_144610.webp', alt: 'Historic auditorium — band stage with lighting and audio' },
    { file: 'Copilot_20260416_144618.webp', alt: 'BEV NY conference — dual screen ballroom presentation' },
    { file: 'GFXR2753.webp', alt: 'M&T Bank Capital Markets event — stage projection and uplighting' },
    { file: 'IMG_2208.webp', alt: 'Historic ballroom — full-wall projection mapping' },
    { file: 'LS-5788.webp', alt: 'Auditorium livestream — production station with video switcher and camera' },
    { file: 'LS-5882.webp', alt: 'Upstate NY MWBE Summit — multicam livestream production in historic hall' },
    { file: 'LS-5888.webp', alt: 'Hybrid event — dual-laptop production and camera setup' },
    { file: 'DSC03616.webp', alt: 'Theater production — dual monitors and tablet audio control at FOH' },
    { file: 'DSCF2899.webp', alt: 'Theater pre-show — livestream station with video switcher and camera' },
    { file: 'GFXR3062.webp', alt: 'BEV NY conference — wireless mics, digital audio console, and video production' },
    { file: 'GFXR3288-2.webp', alt: 'Conference room setup — camera on tripod with dual LED screens' },
    { file: 'GFXR3303.webp', alt: 'Disrupt Rochester — full audience with dual sponsor screens and live speakers' },
    { file: 'GFXR3308.webp', alt: 'Disrupt Rochester — live event camera operation in modern venue' },
    { file: 'IMG_3453_highline.webp', alt: 'The Highline — large-format projection screen and round table setup' },
  ];

  for (let i = images.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [images[i], images[j]] = [images[j], images[i]];
  }

  return `
  <section class="page-hero page-hero--new">
    <div class="page-kicker">Our Work</div>
    <h1 class="page-title">Event <em>Portfolio.</em></h1>
    <p class="page-subtitle">Event production work across Rochester, NY and the Finger Lakes region. Corporate events, conferences, galas, and live productions.</p>
  </section>


  <section class="section">
    <div class="container">
      <div class="portfolio-grid">
        ${images.map(img => `
        <div class="portfolio-item">
          <img src="/assets/portfolio/${img.file}" alt="${img.alt}" loading="lazy">
        </div>`).join('')}
      </div>
    </div>
  </section>

  <section class="section venues-section">
    <div class="container">
      <span class="section-label">Across Greater Rochester</span>
      <h2 class="section-heading section-heading-lg">Venues We've<br>Worked With.</h2>
      <div class="venue-grid">
        ${venues.map(v => `
        <a href="${v.url}" class="venue-card" target="_blank" rel="noopener noreferrer">
          <span class="venue-card-name">${v.name}</span>
        </a>`).join('')}
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
