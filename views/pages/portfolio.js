module.exports = function portfolioPage({ site }) {
  const images = [
    { file: 'Copilot_20260416_135835.png', alt: 'Disrupt Rochester — live event camera operation' },
    { file: 'Copilot_20260416_140318.png', alt: 'Corporate conference — audio mixing and video production' },
    { file: 'Copilot_20260416_143332.png', alt: 'Corporate conference — live production station' },
    { file: 'Copilot_20260416_144626.png', alt: 'Gala event — projection, uplighting, and string lighting' },
    { file: 'GFXR2318_Panorama.jpg', alt: 'Grand hall — panoramic projection mapping on walls' },
    { file: 'GFXR2840.jpg', alt: 'MBA conference — dual screen presentation with live camera' },
    { file: 'GFXR3060.jpg', alt: 'BEV NY conference — dual screen ballroom presentation' },
    { file: 'IMG_0034.jpeg', alt: 'Country club luncheon — dual display AV setup' },
    { file: 'IMG_1109.jpeg', alt: 'Discovery Center — large audience event production' },
    { file: 'IMG_2400.jpeg', alt: 'The Little Theatre — live event camera production' },
    { file: 'IMG_2416.jpeg', alt: 'Honeywell corporate event — audio and display production' },
    { file: 'IMG_2971.jpeg', alt: 'TEDx Rochester — live event production' },
    { file: 'IMG_3042.jpeg', alt: 'Memorial Art Gallery — live sound for concert performance' },
    { file: 'IMG_4656.jpeg', alt: 'Hybrid event — projection, dual displays, and remote presenter' },
    { file: 'IMG_3377.jpeg', alt: 'SAS Fireside Chat — display and camera production setup' },
    { file: 'Copilot_20260409_144544.png', alt: 'ITX Product Design Conference — stage lighting and AV production' },
    { file: 'Copilot_20260416_144608.png', alt: 'Hotel ballroom — projection and PA system setup' },
    { file: 'Copilot_20260416_144610.png', alt: 'Historic auditorium — band stage with lighting and audio' },
    { file: 'Copilot_20260416_144618.png', alt: 'BEV NY conference — dual screen ballroom presentation' },
    { file: 'GFXR2753.jpg', alt: 'M&T Bank Capital Markets event — stage projection and uplighting' },
    { file: 'IMG_2208.jpg', alt: 'Historic ballroom — full-wall projection mapping' },
  ];

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
        ${images.map(img => `
        <div class="portfolio-item">
          <img src="/assets/portfolio/${img.file}" alt="${img.alt}" loading="lazy">
        </div>`).join('')}
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
