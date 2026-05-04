module.exports = function setupsBallroomPage({ site }) {
  return `
  <style>
    .ballroom-wrap {
      padding: calc(var(--header-height) + 4rem) 48px 120px;
      max-width: 1200px;
      margin: 0 auto;
    }
    .ballroom-eyebrow {
      font-weight: 600; font-size: 0.68rem; letter-spacing: 0.28em;
      text-transform: uppercase; color: var(--accent);
      margin-bottom: 12px;
    }
    .ballroom-title {
      font-family: 'Bebas Neue', sans-serif;
      font-size: clamp(3rem, 6vw, 5.5rem);
      line-height: 0.9; letter-spacing: 0.02em;
      color: var(--fg); margin-bottom: 60px;
    }
    .ballroom-setups {
      display: flex; flex-direction: column; gap: 1px;
      background: rgba(240,236,228,0.08);
      border: 1px solid rgba(240,236,228,0.08);
    }
    .setup-item {
      background: var(--bg);
      display: flex; align-items: center; gap: 28px;
      padding: 0; position: relative; overflow: hidden;
      cursor: pointer; transition: background 0.3s;
    }
    .setup-item::before {
      content: ''; position: absolute; left: 0; top: 0; bottom: 0;
      width: 0; background: var(--accent);
      transition: width 0.3s ease; z-index: 2;
    }
    .setup-item:hover { background: #0f0f0f; }
    .setup-item:hover::before { width: 3px; }
    .setup-thumb {
      width: 200px; min-width: 200px; height: 130px;
      overflow: hidden; background: #000; flex-shrink: 0;
    }
    .setup-thumb img {
      width: 100%; height: 100%; object-fit: cover;
      opacity: 0.85; transition: opacity 0.4s ease;
    }
    .setup-item:hover .setup-thumb img { opacity: 1; }
    .setup-info { padding: 24px 28px 24px 0; flex: 1; }
    .setup-info h2 {
      font-family: 'Bebas Neue', sans-serif;
      font-size: 1.8rem; letter-spacing: 0.04em;
      color: var(--fg); font-weight: 400;
      line-height: 1; margin-bottom: 6px;
    }
    .setup-meta {
      font-size: 0.72rem; font-weight: 400; letter-spacing: 0.1em;
      text-transform: uppercase; color: rgba(240,236,228,0.3);
    }
    .setup-arrow {
      margin-left: auto; margin-right: 28px;
      font-size: 1.2rem; color: rgba(240,236,228,0.15);
      transition: color 0.3s, transform 0.3s; flex-shrink: 0;
    }
    .setup-item:hover .setup-arrow { color: var(--accent); transform: translateX(4px); }

    .ballroom-viewer {
      display: none; position: fixed; inset: 0; z-index: 200;
      background: rgba(0,0,0,0.97); backdrop-filter: blur(6px);
      flex-direction: column; align-items: center; justify-content: center;
    }
    .ballroom-viewer.active { display: flex; }
    .viewer-header {
      position: absolute; top: 0; left: 0; right: 0;
      display: flex; align-items: center; justify-content: space-between;
      padding: 20px 28px; z-index: 202;
    }
    .viewer-title {
      font-family: 'Bebas Neue', sans-serif;
      font-size: 1.4rem; letter-spacing: 0.06em; color: var(--fg);
    }
    .viewer-count {
      font-size: 0.72rem; letter-spacing: 0.12em;
      color: rgba(240,236,228,0.4); text-transform: uppercase;
    }
    .viewer-close {
      background: none; border: none; cursor: pointer;
      color: rgba(240,236,228,0.4); font-size: 1.6rem; line-height: 1;
      transition: color 0.2s;
    }
    .viewer-close:hover { color: var(--fg); }
    .viewer-img-wrap {
      flex: 1; display: flex; align-items: center; justify-content: center;
      width: 100%; padding: 80px 80px 60px; position: relative;
    }
    .viewer-img-wrap img {
      max-width: 100%; max-height: 100%; object-fit: contain;
      display: block; transition: opacity 0.15s ease;
    }
    .viewer-img-wrap img.loading { opacity: 0; }
    .viewer-nav {
      position: absolute; top: 50%; transform: translateY(-50%);
      background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.1);
      color: rgba(255,255,255,0.5); width: 48px; height: 48px;
      display: flex; align-items: center; justify-content: center;
      cursor: pointer; font-size: 1.2rem;
      transition: background 0.2s, color 0.2s; z-index: 202;
    }
    .viewer-nav:hover { background: rgba(255,255,255,0.1); color: var(--fg); }
    .viewer-nav.prev { left: 20px; }
    .viewer-nav.next { right: 20px; }
    .viewer-nav.hidden { display: none; }
    .viewer-dots { position: absolute; bottom: 20px; display: flex; gap: 8px; z-index: 202; }
    .viewer-dot {
      width: 8px; height: 8px; border-radius: 50%;
      background: rgba(255,255,255,0.2); border: none; cursor: pointer;
      transition: background 0.2s;
    }
    .viewer-dot.active { background: var(--accent); }

    @media (max-width: 640px) {
      .ballroom-wrap { padding: 32px 24px 80px; }
      .setup-thumb { width: 120px; min-width: 120px; height: 80px; }
      .setup-info { padding: 16px 16px 16px 0; }
      .setup-info h2 { font-size: 1.3rem; }
      .setup-arrow { margin-right: 16px; }
      .viewer-img-wrap { padding: 70px 16px 50px; }
      .viewer-nav { width: 36px; height: 36px; font-size: 1rem; }
      .viewer-nav.prev { left: 8px; }
      .viewer-nav.next { right: 8px; }
    }
  </style>

  <div class="ballroom-wrap">
    <p class="ballroom-eyebrow">Setup Options</p>
    <h1 class="ballroom-title">Ballroom<br>Configurations</h1>

    <div class="ballroom-setups" id="setups">

      <div class="setup-item" data-images='["/setups/ballroom/photos/on-stage-screen-01.jpg","/setups/ballroom/photos/on-stage-screen-02.jpg","/setups/ballroom/photos/on-stage-screen-03.jpg","/setups/ballroom/photos/on-stage-screen-04.jpg","/setups/ballroom/photos/on-stage-screen-05.jpg"]' data-title="On Stage Screen">
        <div class="setup-thumb">
          <img src="/setups/ballroom/photos/on-stage-screen-01.jpg" alt="On Stage Screen">
        </div>
        <div class="setup-info">
          <h2>On Stage Screen</h2>
          <p class="setup-meta">5 Photos</p>
        </div>
        <span class="setup-arrow">&#8594;</span>
      </div>

      <div class="setup-item" data-images='["/setups/ballroom/photos/wall-projections-01.jpg","/setups/ballroom/photos/wall-projections-02.jpg","/setups/ballroom/photos/wall-projections-03.jpg"]' data-title="Wall Projections">
        <div class="setup-thumb">
          <img src="/setups/ballroom/photos/wall-projections-01.jpg" alt="Wall Projections">
        </div>
        <div class="setup-info">
          <h2>Wall Projections</h2>
          <p class="setup-meta">3 Photos</p>
        </div>
        <span class="setup-arrow">&#8594;</span>
      </div>

      <div class="setup-item" data-images='["/setups/ballroom/photos/black-drape-01.jpg","/setups/ballroom/photos/black-drape-02.jpg","/setups/ballroom/photos/black-drape-03.jpg"]' data-title="Stage Screen with Black Drape">
        <div class="setup-thumb">
          <img src="/setups/ballroom/photos/black-drape-01.jpg" alt="Stage Screen with Black Drape">
        </div>
        <div class="setup-info">
          <h2>Stage Screen with Black Drape</h2>
          <p class="setup-meta">3 Photos</p>
        </div>
        <span class="setup-arrow">&#8594;</span>
      </div>

      <div class="setup-item" data-images='["/setups/ballroom/photos/monitors-01.jpg"]' data-title="Monitors">
        <div class="setup-thumb">
          <img src="/setups/ballroom/photos/monitors-01.jpg" alt="Monitors">
        </div>
        <div class="setup-info">
          <h2>Monitors</h2>
          <p class="setup-meta">1 Photo</p>
        </div>
        <span class="setup-arrow">&#8594;</span>
      </div>

    </div>
  </div>

  <div class="ballroom-viewer" id="viewer">
    <div class="viewer-header">
      <div>
        <div class="viewer-title" id="viewerTitle"></div>
        <div class="viewer-count" id="viewerCount"></div>
      </div>
      <button class="viewer-close" id="viewerClose" aria-label="Close">&times;</button>
    </div>
    <div class="viewer-img-wrap">
      <button class="viewer-nav prev" id="viewerPrev">&#8592;</button>
      <img id="viewerImg" src="" alt="">
      <button class="viewer-nav next" id="viewerNext">&#8594;</button>
    </div>
    <div class="viewer-dots" id="viewerDots"></div>
  </div>

  <script>
    const viewer = document.getElementById('viewer');
    const viewerImg = document.getElementById('viewerImg');
    const viewerTitle = document.getElementById('viewerTitle');
    const viewerCount = document.getElementById('viewerCount');
    const viewerDots = document.getElementById('viewerDots');
    const viewerPrev = document.getElementById('viewerPrev');
    const viewerNext = document.getElementById('viewerNext');
    const viewerClose = document.getElementById('viewerClose');
    let currentImages = [], currentIndex = 0, isFirstLoad = false;

    function openViewer(images, title, startIndex) {
      currentImages = images; currentIndex = startIndex || 0; isFirstLoad = true;
      viewerTitle.textContent = title;
      updateViewer();
      viewer.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
    function closeViewer() {
      viewer.classList.remove('active');
      document.body.style.overflow = '';
    }
    function updateViewer() {
      if (isFirstLoad) {
        viewerImg.classList.add('loading');
        const img = new Image();
        img.onload = () => { viewerImg.src = img.src; viewerImg.classList.remove('loading'); };
        img.src = currentImages[currentIndex];
        isFirstLoad = false;
      } else {
        viewerImg.src = currentImages[currentIndex];
      }
      viewerCount.textContent = currentImages.length > 1 ? (currentIndex + 1) + ' / ' + currentImages.length : '';
      viewerPrev.classList.toggle('hidden', currentIndex === 0);
      viewerNext.classList.toggle('hidden', currentIndex === currentImages.length - 1);
      viewerDots.innerHTML = '';
      if (currentImages.length > 1) {
        currentImages.forEach((_, i) => {
          const dot = document.createElement('button');
          dot.className = 'viewer-dot' + (i === currentIndex ? ' active' : '');
          dot.setAttribute('aria-label', 'Photo ' + (i + 1));
          dot.addEventListener('click', (e) => { e.stopPropagation(); currentIndex = i; updateViewer(); });
          viewerDots.appendChild(dot);
        });
      }
    }
    document.querySelectorAll('.setup-item').forEach(item => {
      item.addEventListener('click', () => openViewer(JSON.parse(item.dataset.images), item.dataset.title, 0));
    });
    viewerClose.addEventListener('click', closeViewer);
    viewer.addEventListener('click', (e) => { if (e.target === viewer) closeViewer(); });
    viewerPrev.addEventListener('click', (e) => { e.stopPropagation(); if (currentIndex > 0) { currentIndex--; updateViewer(); } });
    viewerNext.addEventListener('click', (e) => { e.stopPropagation(); if (currentIndex < currentImages.length - 1) { currentIndex++; updateViewer(); } });
    viewerImg.addEventListener('click', (e) => e.stopPropagation());
    document.addEventListener('keydown', (e) => {
      if (!viewer.classList.contains('active')) return;
      if (e.key === 'Escape') closeViewer();
      if (e.key === 'ArrowLeft' && currentIndex > 0) { currentIndex--; updateViewer(); }
      if (e.key === 'ArrowRight' && currentIndex < currentImages.length - 1) { currentIndex++; updateViewer(); }
    });
  </script>
`;
};
