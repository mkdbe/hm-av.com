module.exports = function servicesPage({ site, services }) {
  return `
  <section class="page-hero page-hero--new">
    <div class="page-kicker">What We Do</div>
    <h1 class="page-title">AV <em>Services.</em></h1>
    <p class="page-subtitle">Full-service audio visual production and individual service offerings for events in Rochester, NY and the Finger Lakes region.</p>
  </section>

  <div class="services-list">

    <div class="svc-row">
      <div class="svc-content">
        <div class="svc-num">01 &mdash; Audio</div>
        <h2 class="svc-title"><a href="/services/audio">Audio</a></h2>
        <p class="svc-text">Full-service sound reinforcement for events of any scale. From intimate corporate meetings to large-scale conferences, we deliver clear, balanced audio that keeps your audience engaged.</p>
        <a class="svc-link" href="/services/audio">Learn more</a>
      </div>
      <div class="svc-graphic">
        <svg xmlns="http://www.w3.org/2000/svg" style="background:#141412" viewBox="0 0 600 420" preserveAspectRatio="xMidYMid slice" fill="none">
          <defs>
            <pattern id="ag" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M40 0L0 0 0 40" stroke="rgba(240,236,228,0.09)" stroke-width="0.5"></path>
            </pattern>
          </defs>
          <rect width="600" height="420" fill="url(#ag)"></rect>
          <path d="M220,210 Q260,160 260,210 Q260,260 220,210" stroke="rgba(139,26,10,0.80)" stroke-width="1.5" fill="none"></path>
          <path d="M220,210 Q290,130 290,210 Q290,290 220,210" stroke="rgba(139,26,10,0.48)" stroke-width="1.5" fill="none"></path>
          <path d="M220,210 Q330,90 330,210 Q330,330 220,210" stroke="rgba(139,26,10,0.29)" stroke-width="1.5" fill="none"></path>
          <path d="M220,210 Q380,50 380,210 Q380,370 220,210" stroke="rgba(139,26,10,0.16)" stroke-width="1.5" fill="none"></path>
          <path d="M220,210 Q430,20 430,210 Q430,400 220,210" stroke="rgba(139,26,10,0.10)" stroke-width="1" fill="none"></path>
          <rect x="90" y="120" width="130" height="180" rx="4" fill="#252520" stroke="rgba(240,236,228,0.33)" stroke-width="1.5"></rect>
          <circle cx="155" cy="195" r="52" fill="#2a2a26" stroke="rgba(240,236,228,0.26)" stroke-width="1.5"></circle>
          <circle cx="155" cy="195" r="40" fill="#1a1a17" stroke="rgba(240,236,228,0.18)" stroke-width="1"></circle>
          <circle cx="155" cy="195" r="28" fill="#181816" stroke="rgba(139,26,10,0.40)" stroke-width="1"></circle>
          <circle cx="155" cy="195" r="12" fill="#2a2a26" stroke="rgba(139,26,10,0.64)" stroke-width="1"></circle>
          <circle cx="155" cy="195" r="5" fill="#b82010" opacity="0.7"></circle>
          <circle cx="155" cy="136" r="12" fill="#2a2a26" stroke="rgba(240,236,228,0.22)" stroke-width="1"></circle>
          <circle cx="155" cy="136" r="6" fill="#181816" stroke="rgba(139,26,10,0.48)" stroke-width="0.8"></circle>
          <rect x="118" y="264" width="74" height="10" rx="2" fill="#181816" stroke="rgba(240,236,228,0.18)" stroke-width="1"></rect>
          <rect x="118" y="152" width="20" height="8" rx="1" fill="rgba(139,26,10,0.48)"></rect>
          <rect x="147" y="300" width="16" height="50" rx="1" fill="rgba(240,236,228,0.22)"></rect>
          <rect x="120" y="350" width="70" height="6" rx="1" fill="rgba(240,236,228,0.22)"></rect>
          <g transform="translate(300, 300)">
            <rect x="0" y="-30" width="10" height="30" rx="1" fill="rgba(139,26,10,0.72)"></rect>
            <rect x="16" y="-48" width="10" height="48" rx="1" fill="rgba(139,26,10,0.88)"></rect>
            <rect x="32" y="-36" width="10" height="36" rx="1" fill="rgba(139,26,10,0.64)"></rect>
            <rect x="48" y="-56" width="10" height="56" rx="1" fill="rgba(139,26,10,0.95)"></rect>
            <rect x="64" y="-40" width="10" height="40" rx="1" fill="rgba(139,26,10,0.72)"></rect>
            <rect x="80" y="-28" width="10" height="28" rx="1" fill="rgba(139,26,10,0.56)"></rect>
            <rect x="96" y="-44" width="10" height="44" rx="1" fill="rgba(139,26,10,0.80)"></rect>
            <rect x="112" y="-32" width="10" height="32" rx="1" fill="rgba(139,26,10,0.64)"></rect>
            <line x1="-10" y1="0" x2="140" y2="0" stroke="rgba(240,236,228,0.13)" stroke-width="1"></line>
          </g>
        </svg>
      </div>
    </div>

    <div class="svc-row alt">
      <div class="svc-content">
        <div class="svc-num">02 &mdash; Video</div>
        <h2 class="svc-title"><a href="/services/video">Video</a></h2>
        <p class="svc-text">Display technology that ensures your message reaches every person in the room &mdash; impactful, clear, and professionally executed. Complete video production services for events throughout the Rochester and Finger Lakes region.</p>
        <a class="svc-link" href="/services/video">Learn more</a>
      </div>
      <div class="svc-graphic">
        <svg xmlns="http://www.w3.org/2000/svg" style="background:#141412" viewBox="0 0 600 420" preserveAspectRatio="xMidYMid slice" fill="none">
          <defs>
            <pattern id="vg" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M40 0L0 0 0 40" stroke="rgba(240,236,228,0.09)" stroke-width="0.5"></path>
            </pattern>
            <linearGradient id="vscreen" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stop-color="#111110"></stop>
              <stop offset="100%" stop-color="#1a1a17"></stop>
            </linearGradient>
          </defs>
          <rect width="600" height="420" fill="url(#vg)"></rect>
          <rect x="80" y="70" width="320" height="200" rx="3" fill="#252520" stroke="rgba(240,236,228,0.33)" stroke-width="1.5"></rect>
          <rect x="90" y="80" width="300" height="180" fill="url(#vscreen)"></rect>
          <rect x="100" y="100" width="100" height="8" rx="1" fill="rgba(139,26,10,0.80)"></rect>
          <rect x="100" y="114" width="140" height="3" rx="0.5" fill="rgba(240,236,228,0.22)"></rect>
          <rect x="100" y="121" width="116" height="3" rx="0.5" fill="rgba(240,236,228,0.15)"></rect>
          <ellipse cx="330" cy="160" rx="14" ry="14" fill="rgba(240,236,228,0.15)"></ellipse>
          <rect x="318" y="174" width="24" height="44" rx="2" fill="rgba(240,236,228,0.11)"></rect>
          <rect x="352" y="88" width="30" height="14" rx="1" fill="#b82010" opacity="0.85"></rect>
          <text x="359" y="99" font-family="'DM Mono', monospace" font-size="7" fill="rgba(240,236,228,0.75)" letter-spacing="1">LIVE</text>
          <rect x="90" y="240" width="300" height="14" rx="0" fill="rgba(0,0,0,0.35)"></rect>
          <text x="96" y="251" font-family="'DM Mono', monospace" font-size="7" fill="rgba(240,236,228,0.75)" letter-spacing="1">00:42:18:05   CAM 2   1080p/60</text>
          <rect x="228" y="270" width="14" height="36" rx="1" fill="rgba(240,236,228,0.22)"></rect>
          <rect x="200" y="306" width="70" height="6" rx="1" fill="rgba(240,236,228,0.22)"></rect>
          <g transform="translate(440, 100)">
            <rect x="-28" y="0" width="56" height="40" rx="3" fill="#2a2a26" stroke="rgba(240,236,228,0.40)" stroke-width="1.5"></rect>
            <circle cx="0" cy="20" r="14" fill="#2a2a26" stroke="rgba(240,236,228,0.26)" stroke-width="1.5"></circle>
            <circle cx="0" cy="20" r="8" fill="#181816" stroke="rgba(139,26,10,0.48)" stroke-width="1"></circle>
            <circle cx="0" cy="20" r="3.5" fill="#b82010" opacity="0.6"></circle>
            <circle cx="20" cy="6" r="3.5" fill="#b82010" opacity="0.9"></circle>
            <rect x="14" y="-14" width="22" height="16" rx="2" fill="#1e1e1a" stroke="rgba(240,236,228,0.22)" stroke-width="1"></rect>
            <line x1="0" y1="40" x2="-30" y2="110" stroke="rgba(240,236,228,0.33)" stroke-width="2"></line>
            <line x1="0" y1="40" x2="0" y2="115" stroke="rgba(240,236,228,0.33)" stroke-width="2"></line>
            <line x1="0" y1="40" x2="30" y2="110" stroke="rgba(240,236,228,0.33)" stroke-width="2"></line>
            <line x1="-22" y1="88" x2="22" y2="88" stroke="rgba(240,236,228,0.22)" stroke-width="1"></line>
            <circle cx="-30" cy="110" r="3" fill="rgba(240,236,228,0.33)"></circle>
            <circle cx="0" cy="115" r="3" fill="rgba(240,236,228,0.33)"></circle>
            <circle cx="30" cy="110" r="3" fill="rgba(240,236,228,0.33)"></circle>
          </g>
          <path d="M420 190 Q400 210 390 240" stroke="rgba(240,236,228,0.15)" stroke-width="1.5" stroke-dasharray="3 3"></path>
          <rect x="130" y="340" width="200" height="44" rx="2" fill="#252520" stroke="rgba(240,236,228,0.26)" stroke-width="1"></rect>
          <text x="144" y="356" font-family="'DM Mono', monospace" font-size="6.5" fill="rgba(240,236,228,0.44)" letter-spacing="2">VIDEO SWITCHER</text>
          <rect x="144" y="360" width="18" height="10" rx="1" fill="rgba(139,26,10,0.95)"></rect>
          <rect x="168" y="360" width="18" height="10" rx="1" fill="#2a2a26" stroke="rgba(240,236,228,0.18)" stroke-width="0.5"></rect>
          <rect x="192" y="360" width="18" height="10" rx="1" fill="#2a2a26" stroke="rgba(240,236,228,0.18)" stroke-width="0.5"></rect>
          <rect x="216" y="360" width="18" height="10" rx="1" fill="#2a2a26" stroke="rgba(240,236,228,0.18)" stroke-width="0.5"></rect>
          <circle cx="306" cy="362" r="4" fill="#b82010" opacity="0.8"></circle>
        </svg>
      </div>
    </div>

    <div class="svc-row">
      <div class="svc-content">
        <div class="svc-num">03 &mdash; Lighting</div>
        <h2 class="svc-title"><a href="/services/lighting">Lighting</a></h2>
        <p class="svc-text">Intelligent lighting design that sets the right mood for your event. Stage wash, accent lighting, and dynamic effects &mdash; all programmed and operated by our experienced team.</p>
        <a class="svc-link" href="/services/lighting">Learn more</a>
      </div>
      <div class="svc-graphic">
        <svg xmlns="http://www.w3.org/2000/svg" style="background:#141412" viewBox="0 0 600 420" preserveAspectRatio="xMidYMid slice" fill="none">
          <defs>
            <pattern id="lg" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M40 0L0 0 0 40" stroke="rgba(240,236,228,0.09)" stroke-width="0.5"></path>
            </pattern>
            <linearGradient id="lbeam1" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="rgba(139,26,10,0)"></stop>
              <stop offset="70%" stop-color="rgba(139,26,10,0.35)"></stop>
              <stop offset="100%" stop-color="rgba(139,26,10,0.08)"></stop>
            </linearGradient>
            <linearGradient id="lbeam2" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="rgba(200,160,80,0)"></stop>
              <stop offset="70%" stop-color="rgba(200,160,80,0.22)"></stop>
              <stop offset="100%" stop-color="rgba(200,160,80,0.05)"></stop>
            </linearGradient>
          </defs>
          <rect width="600" height="420" fill="url(#lg)"></rect>
          <rect x="60" y="56" width="480" height="10" rx="2" fill="#2a2a26" stroke="rgba(240,236,228,0.26)" stroke-width="1"></rect>
          <circle cx="120" cy="61" r="2.5" fill="rgba(240,236,228,0.44)"></circle>
          <circle cx="220" cy="61" r="2.5" fill="rgba(240,236,228,0.44)"></circle>
          <circle cx="300" cy="61" r="2.5" fill="rgba(240,236,228,0.44)"></circle>
          <circle cx="380" cy="61" r="2.5" fill="rgba(240,236,228,0.44)"></circle>
          <circle cx="480" cy="61" r="2.5" fill="rgba(240,236,228,0.44)"></circle>
          <rect x="116" y="22" width="8" height="38" rx="1" fill="#252520" stroke="rgba(240,236,228,0.22)" stroke-width="1"></rect>
          <rect x="476" y="22" width="8" height="38" rx="1" fill="#252520" stroke="rgba(240,236,228,0.22)" stroke-width="1"></rect>
          <g transform="translate(145,66) rotate(18,0,0)">
            <polygon points="-3,0 3,0 26,110 -26,110" fill="url(#lbeam1)"></polygon>
            <rect x="-11" y="-30" width="22" height="30" rx="3" fill="#2a2a26" stroke="rgba(240,236,228,0.40)" stroke-width="1.5"></rect>
            <rect x="-7" y="-26" width="14" height="12" rx="1" fill="#b82010" opacity="0.65"></rect>
            <circle cx="0" cy="-8" r="6" fill="#2a2a26" stroke="rgba(139,26,10,0.64)" stroke-width="1"></circle>
            <circle cx="0" cy="-8" r="3" fill="#b82010" opacity="0.8"></circle>
          </g>
          <g transform="translate(265,66) rotate(-4,0,0)">
            <polygon points="-3,0 3,0 32,130 -32,130" fill="url(#lbeam2)"></polygon>
            <rect x="-12" y="-34" width="24" height="34" rx="3" fill="#2a2a26" stroke="rgba(240,236,228,0.40)" stroke-width="1.5"></rect>
            <rect x="-8" y="-30" width="16" height="14" rx="1" fill="rgba(200,160,80,0.72)"></rect>
            <circle cx="0" cy="-10" r="7" fill="#2a2a26" stroke="rgba(200,160,80,0.56)" stroke-width="1"></circle>
            <circle cx="0" cy="-10" r="3.5" fill="rgba(200,160,80,0.85)"></circle>
            <rect x="-16" y="-4" width="7" height="18" rx="1" fill="#252520" stroke="rgba(240,236,228,0.22)" stroke-width="1" transform="rotate(-18,-16,-4)"></rect>
            <rect x="9" y="-4" width="7" height="18" rx="1" fill="#252520" stroke="rgba(240,236,228,0.22)" stroke-width="1" transform="rotate(18,16,-4)"></rect>
          </g>
          <g transform="translate(390,66) rotate(10,0,0)">
            <polygon points="-3,0 3,0 28,115 -28,115" fill="url(#lbeam1)" opacity="0.8"></polygon>
            <rect x="-11" y="-32" width="22" height="32" rx="3" fill="#2a2a26" stroke="rgba(240,236,228,0.40)" stroke-width="1.5"></rect>
            <rect x="-7" y="-28" width="14" height="12" rx="1" fill="#b82010" opacity="0.6"></rect>
            <circle cx="0" cy="-10" r="6" fill="#2a2a26" stroke="rgba(139,26,10,0.64)" stroke-width="1"></circle>
            <circle cx="0" cy="-10" r="3" fill="#b82010" opacity="0.75"></circle>
          </g>
          <line x1="60" y1="370" x2="540" y2="370" stroke="rgba(240,236,228,0.15)" stroke-width="1"></line>
          <ellipse cx="160" cy="372" rx="55" ry="7" fill="rgba(139,26,10,0.19)"></ellipse>
          <ellipse cx="268" cy="375" rx="68" ry="9" fill="rgba(200,160,80,0.13)"></ellipse>
          <ellipse cx="398" cy="373" rx="60" ry="7" fill="rgba(139,26,10,0.16)"></ellipse>
          <rect x="210" y="338" width="180" height="24" rx="3" fill="#252520" stroke="rgba(240,236,228,0.26)" stroke-width="1"></rect>
          <circle cx="228" cy="350" r="5" fill="rgba(139,26,10,0.88)"></circle>
          <circle cx="246" cy="350" r="5" fill="rgba(200,160,80,0.64)"></circle>
          <circle cx="264" cy="350" r="5" fill="rgba(139,26,10,0.80)"></circle>
          <circle cx="282" cy="350" r="5" fill="rgba(200,160,80,0.61)"></circle>
          <circle cx="300" cy="350" r="5" fill="rgba(139,26,10,0.88)"></circle>
          <circle cx="318" cy="350" r="5" fill="rgba(200,160,80,0.64)"></circle>
          <circle cx="336" cy="350" r="5" fill="rgba(139,26,10,0.77)"></circle>
          <circle cx="354" cy="350" r="5" fill="rgba(200,160,80,0.61)"></circle>
          <circle cx="372" cy="350" r="5" fill="rgba(139,26,10,0.80)"></circle>
        </svg>
      </div>
    </div>

    <div class="svc-row alt">
      <div class="svc-content">
        <div class="svc-num">04 &mdash; Livestreaming</div>
        <h2 class="svc-title"><a href="/services/livestreaming">Live&shy;streaming</a></h2>
        <p class="svc-text">Professional broadcast-quality streaming to any platform. Seamless multi-camera production with real-time encoding, graphics, and technical support so your remote audience never misses a moment.</p>
        <a class="svc-link" href="/services/livestreaming">Learn more</a>
      </div>
      <div class="svc-graphic">
        <svg xmlns="http://www.w3.org/2000/svg" style="background:#141412" viewBox="0 0 600 420" preserveAspectRatio="xMidYMid slice" fill="none">
          <defs>
            <pattern id="sg" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M40 0L0 0 0 40" stroke="rgba(240,236,228,0.09)" stroke-width="0.5"></path>
            </pattern>
          </defs>
          <rect width="600" height="420" fill="url(#sg)"></rect>
          <path d="M300,210 Q340,160 340,210 Q340,260 300,210" stroke="rgba(139,26,10,0.80)" stroke-width="1.5" fill="none"></path>
          <path d="M300,210 Q370,130 370,210 Q370,290 300,210" stroke="rgba(139,26,10,0.51)" stroke-width="1.5" fill="none"></path>
          <path d="M300,210 Q420,60 420,210 Q420,360 300,210" stroke="rgba(139,26,10,0.29)" stroke-width="1.5" fill="none"></path>
          <path d="M300,210 Q480,10 480,210 Q480,410 300,210" stroke="rgba(139,26,10,0.14)" stroke-width="1" fill="none"></path>
          <path d="M300,210 Q260,160 260,210 Q260,260 300,210" stroke="rgba(139,26,10,0.80)" stroke-width="1.5" fill="none"></path>
          <path d="M300,210 Q230,130 230,210 Q230,290 300,210" stroke="rgba(139,26,10,0.51)" stroke-width="1.5" fill="none"></path>
          <path d="M300,210 Q180,60 180,210 Q180,360 300,210" stroke="rgba(139,26,10,0.29)" stroke-width="1.5" fill="none"></path>
          <rect x="230" y="170" width="140" height="80" rx="3" fill="#252520" stroke="rgba(240,236,228,0.33)" stroke-width="1.5"></rect>
          <text x="244" y="196" font-family="'DM Mono', monospace" font-size="7" fill="rgba(240,236,228,0.55)" letter-spacing="2">STREAM ENCODER</text>
          <rect x="244" y="204" width="8" height="28" rx="1" fill="rgba(240,236,228,0.11)"></rect>
          <rect x="244" y="220" width="8" height="12" rx="1" fill="rgba(139,26,10,0.80)"></rect>
          <rect x="258" y="204" width="8" height="28" rx="1" fill="rgba(240,236,228,0.11)"></rect>
          <rect x="258" y="214" width="8" height="18" rx="1" fill="rgba(139,26,10,0.72)"></rect>
          <rect x="272" y="204" width="8" height="28" rx="1" fill="rgba(240,236,228,0.11)"></rect>
          <rect x="272" y="208" width="8" height="24" rx="1" fill="rgba(139,26,10,0.88)"></rect>
          <rect x="286" y="204" width="8" height="28" rx="1" fill="rgba(240,236,228,0.11)"></rect>
          <rect x="286" y="218" width="8" height="14" rx="1" fill="rgba(139,26,10,0.64)"></rect>
          <rect x="316" y="204" width="40" height="16" rx="1.5" fill="#b82010" opacity="0.85"></rect>
          <text x="325" y="216" font-family="'DM Mono', monospace" font-size="8" fill="rgba(240,236,228,0.75)" letter-spacing="1.5">LIVE</text>
          <circle cx="320" cy="232" r="3.5" fill="#b82010" opacity="0.9"></circle>
          <circle cx="334" cy="232" r="3.5" fill="rgba(240,236,228,0.33)"></circle>
          <circle cx="348" cy="232" r="3.5" fill="rgba(240,236,228,0.33)"></circle>
          <g transform="translate(100, 290)">
            <rect x="0" y="0" width="70" height="40" rx="2" fill="#2a2a26" stroke="rgba(240,236,228,0.22)" stroke-width="1"></rect>
            <text x="10" y="17" font-family="'DM Mono', monospace" font-size="7" fill="rgba(240,236,228,0.66)" letter-spacing="1">YOUTUBE</text>
            <rect x="10" y="22" width="50" height="3" rx="0.5" fill="rgba(139,26,10,0.56)"></rect>
            <rect x="10" y="28" width="36" height="3" rx="0.5" fill="rgba(240,236,228,0.18)"></rect>
          </g>
          <g transform="translate(215, 290)">
            <rect x="0" y="0" width="70" height="40" rx="2" fill="#2a2a26" stroke="rgba(240,236,228,0.22)" stroke-width="1"></rect>
            <text x="14" y="17" font-family="'DM Mono', monospace" font-size="7" fill="rgba(240,236,228,0.66)" letter-spacing="1">ZOOM</text>
            <rect x="10" y="22" width="50" height="3" rx="0.5" fill="rgba(139,26,10,0.48)"></rect>
            <rect x="10" y="28" width="40" height="3" rx="0.5" fill="rgba(240,236,228,0.18)"></rect>
          </g>
          <g transform="translate(330, 290)">
            <rect x="0" y="0" width="70" height="40" rx="2" fill="#2a2a26" stroke="rgba(240,236,228,0.22)" stroke-width="1"></rect>
            <text x="10" y="17" font-family="'DM Mono', monospace" font-size="7" fill="rgba(240,236,228,0.66)" letter-spacing="1">FACEBOOK</text>
            <rect x="10" y="22" width="50" height="3" rx="0.5" fill="rgba(139,26,10,0.48)"></rect>
            <rect x="10" y="28" width="30" height="3" rx="0.5" fill="rgba(240,236,228,0.18)"></rect>
          </g>
          <g transform="translate(445, 290)">
            <rect x="0" y="0" width="70" height="40" rx="2" fill="#2a2a26" stroke="rgba(240,236,228,0.22)" stroke-width="1"></rect>
            <text x="16" y="17" font-family="'DM Mono', monospace" font-size="7" fill="rgba(240,236,228,0.66)" letter-spacing="1">TEAMS</text>
            <rect x="10" y="22" width="50" height="3" rx="0.5" fill="rgba(139,26,10,0.48)"></rect>
            <rect x="10" y="28" width="44" height="3" rx="0.5" fill="rgba(240,236,228,0.18)"></rect>
          </g>
          <line x1="300" y1="250" x2="135" y2="290" stroke="rgba(240,236,228,0.18)" stroke-width="1" stroke-dasharray="3 3"></line>
          <line x1="300" y1="250" x2="250" y2="290" stroke="rgba(240,236,228,0.18)" stroke-width="1" stroke-dasharray="3 3"></line>
          <line x1="300" y1="250" x2="365" y2="290" stroke="rgba(240,236,228,0.18)" stroke-width="1" stroke-dasharray="3 3"></line>
          <line x1="300" y1="250" x2="480" y2="290" stroke="rgba(240,236,228,0.18)" stroke-width="1" stroke-dasharray="3 3"></line>
        </svg>
      </div>
    </div>

    <div class="svc-row">
      <div class="svc-content">
        <div class="svc-num">05 &mdash; Hybrid Events</div>
        <h2 class="svc-title"><a href="/services/hybrid-events">Hybrid Events</a></h2>
        <p class="svc-text">Bridging in-person and remote audiences seamlessly. We integrate live production with interactive virtual components so every attendee &mdash; regardless of location &mdash; has a first-class experience.</p>
        <a class="svc-link" href="/services/hybrid-events">Learn more</a>
      </div>
      <div class="svc-graphic">
        <svg xmlns="http://www.w3.org/2000/svg" style="background:#141412" viewBox="0 0 600 420" preserveAspectRatio="xMidYMid slice" fill="none">
          <defs>
            <pattern id="hg" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M40 0L0 0 0 40" stroke="rgba(240,236,228,0.09)" stroke-width="0.5"></path>
            </pattern>
          </defs>
          <rect width="600" height="420" fill="url(#hg)"></rect>
          <rect x="52" y="150" width="200" height="140" rx="3" fill="#252520" stroke="rgba(240,236,228,0.26)" stroke-width="1.5"></rect>
          <rect x="118" y="228" width="68" height="56" rx="2" fill="#1e1e1a" stroke="rgba(240,236,228,0.22)" stroke-width="1"></rect>
          <ellipse cx="152" cy="196" rx="12" ry="12" fill="rgba(240,236,228,0.18)"></ellipse>
          <rect x="140" y="208" width="24" height="36" rx="2" fill="rgba(240,236,228,0.13)"></rect>
          <rect x="148" y="218" width="8" height="16" rx="4" fill="rgba(240,236,228,0.26)"></rect>
          <circle cx="80" cy="268" r="5" fill="rgba(240,236,228,0.18)"></circle>
          <circle cx="98" cy="268" r="5" fill="rgba(240,236,228,0.18)"></circle>
          <circle cx="116" cy="268" r="5" fill="rgba(240,236,228,0.18)"></circle>
          <circle cx="196" cy="268" r="5" fill="rgba(240,236,228,0.18)"></circle>
          <circle cx="214" cy="268" r="5" fill="rgba(240,236,228,0.18)"></circle>
          <circle cx="232" cy="268" r="5" fill="rgba(240,236,228,0.18)"></circle>
          <text x="64" y="168" font-family="'DM Mono', monospace" font-size="7" fill="rgba(240,236,228,0.44)" letter-spacing="2">IN-PERSON</text>
          <rect x="348" y="150" width="200" height="140" rx="3" fill="#252520" stroke="rgba(240,236,228,0.26)" stroke-width="1.5"></rect>
          <rect x="358" y="160" width="56" height="42" rx="1.5" fill="#2a2a26" stroke="rgba(240,236,228,0.18)"></rect>
          <ellipse cx="386" cy="174" rx="7" ry="7" fill="rgba(240,236,228,0.13)"></ellipse>
          <rect x="420" y="160" width="56" height="42" rx="1.5" fill="#2a2a26" stroke="rgba(240,236,228,0.18)"></rect>
          <ellipse cx="448" cy="174" rx="7" ry="7" fill="rgba(240,236,228,0.13)"></ellipse>
          <rect x="482" y="160" width="56" height="42" rx="1.5" fill="#b82010" stroke="rgba(139,26,10,0.64)" stroke-width="0.5" opacity="0.25"></rect>
          <ellipse cx="510" cy="174" rx="7" ry="7" fill="rgba(240,236,228,0.13)"></ellipse>
          <rect x="358" y="208" width="56" height="42" rx="1.5" fill="#2a2a26" stroke="rgba(240,236,228,0.18)"></rect>
          <ellipse cx="386" cy="222" rx="7" ry="7" fill="rgba(240,236,228,0.13)"></ellipse>
          <rect x="420" y="208" width="56" height="42" rx="1.5" fill="#2a2a26" stroke="rgba(240,236,228,0.18)"></rect>
          <ellipse cx="448" cy="222" rx="7" ry="7" fill="rgba(240,236,228,0.13)"></ellipse>
          <rect x="482" y="208" width="56" height="42" rx="1.5" fill="#2a2a26" stroke="rgba(240,236,228,0.18)"></rect>
          <ellipse cx="510" cy="222" rx="7" ry="7" fill="rgba(240,236,228,0.13)"></ellipse>
          <text x="360" y="168" font-family="'DM Mono', monospace" font-size="7" fill="rgba(240,236,228,0.44)" letter-spacing="2">REMOTE</text>
          <rect x="482" y="158" width="24" height="10" rx="1" fill="#b82010" opacity="0.7"></rect>
          <text x="487" y="166" font-family="'DM Mono', monospace" font-size="6" fill="rgba(240,236,228,0.75)" letter-spacing="0.5">LIVE</text>
          <line x1="252" y1="210" x2="348" y2="210" stroke="rgba(139,26,10,0.64)" stroke-width="1.5" stroke-dasharray="5 4"></line>
          <circle cx="280" cy="210" r="3" fill="rgba(139,26,10,0.80)"></circle>
          <circle cx="300" cy="210" r="3" fill="rgba(139,26,10,0.80)"></circle>
          <circle cx="320" cy="210" r="3" fill="rgba(139,26,10,0.80)"></circle>
          <text x="264" y="200" font-family="'DM Mono', monospace" font-size="7" fill="rgba(240,236,228,0.33)" letter-spacing="1">BRIDGE</text>
          <rect x="272" y="194" width="56" height="28" rx="2" fill="#1e1e1a" stroke="rgba(139,26,10,0.48)" stroke-width="1"></rect>
          <circle cx="300" cy="208" r="6" fill="rgba(139,26,10,0.40)" stroke="rgba(139,26,10,0.80)" stroke-width="1"></circle>
          <circle cx="300" cy="208" r="3" fill="#b82010" opacity="0.7"></circle>
          <rect x="130" y="320" width="340" height="36" rx="2" fill="#1e1e1a" stroke="rgba(240,236,228,0.15)" stroke-width="1"></rect>
          <text x="148" y="336" font-family="'DM Mono', monospace" font-size="7" fill="rgba(240,236,228,0.40)" letter-spacing="1.5">IN-PERSON</text>
          <text x="148" y="348" font-family="'DM Mono', monospace" font-size="8" fill="rgba(240,236,228,0.75)">142</text>
          <line x1="224" y1="326" x2="224" y2="348" stroke="rgba(240,236,228,0.18)" stroke-width="1"></line>
          <text x="234" y="336" font-family="'DM Mono', monospace" font-size="7" fill="rgba(240,236,228,0.40)" letter-spacing="1.5">REMOTE</text>
          <text x="234" y="348" font-family="'DM Mono', monospace" font-size="8" fill="rgba(240,236,228,0.75)">318</text>
          <line x1="298" y1="326" x2="298" y2="348" stroke="rgba(240,236,228,0.18)" stroke-width="1"></line>
          <text x="308" y="336" font-family="'DM Mono', monospace" font-size="7" fill="rgba(240,236,228,0.40)" letter-spacing="1.5">TOTAL</text>
          <text x="308" y="348" font-family="'DM Mono', monospace" font-size="8" fill="rgba(139,26,10,0.95)">460</text>
          <line x1="370" y1="326" x2="370" y2="348" stroke="rgba(240,236,228,0.18)" stroke-width="1"></line>
          <rect x="383" y="330" width="40" height="14" rx="1" fill="rgba(139,26,10,0.32)" stroke="rgba(139,26,10,0.48)" stroke-width="0.5"></rect>
          <text x="390" y="341" font-family="'DM Mono', monospace" font-size="6.5" fill="rgba(139,26,10,0.95)" letter-spacing="0.5">LIVE</text>
        </svg>
      </div>
    </div>

    <div class="svc-row alt">
      <div class="svc-content">
        <div class="svc-num">06 &mdash; Equipment Rentals</div>
        <h2 class="svc-title"><a href="/services/equipment-rentals">Equipment Rentals</a></h2>
        <p class="svc-text">Professional AV equipment available for rent with or without our crew. Microphones, speakers, cameras, switchers, and more &mdash; all maintained to the highest standard.</p>
        <a class="svc-link" href="/services/equipment-rentals">Learn more</a>
      </div>
      <div class="svc-graphic">
        <svg xmlns="http://www.w3.org/2000/svg" style="background:#141412" viewBox="0 0 600 420" preserveAspectRatio="xMidYMid slice" fill="none">
          <defs>
            <pattern id="erg" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M40 0L0 0 0 40" stroke="rgba(240,236,228,0.07)" stroke-width="0.5"></path>
            </pattern>
            <linearGradient id="screengrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stop-color="#1e1e1b"></stop>
              <stop offset="100%" stop-color="#252520"></stop>
            </linearGradient>
          </defs>
          <rect width="600" height="420" fill="url(#erg)"></rect>
          <rect x="32" y="110" width="76" height="112" rx="3" fill="#252520" stroke="rgba(240,236,228,0.32)" stroke-width="1.5"></rect>
          <circle cx="70" cy="158" r="32" fill="#1e1e1b" stroke="rgba(240,236,228,0.2)" stroke-width="1"></circle>
          <circle cx="70" cy="158" r="22" fill="#181816" stroke="rgba(139,26,10,0.5)" stroke-width="1"></circle>
          <circle cx="70" cy="158" r="11" fill="#141412" stroke="rgba(139,26,10,0.7)" stroke-width="1"></circle>
          <circle cx="70" cy="158" r="4.5" fill="#b82010" opacity="0.85"></circle>
          <circle cx="70" cy="118" r="9" fill="#1e1e1b" stroke="rgba(240,236,228,0.2)" stroke-width="1"></circle>
          <circle cx="70" cy="118" r="4.5" fill="#141412" stroke="rgba(139,26,10,0.5)" stroke-width="0.8"></circle>
          <rect x="46" y="204" width="48" height="7" rx="2" fill="#141412" stroke="rgba(240,236,228,0.15)" stroke-width="1"></rect>
          <rect x="63" y="222" width="14" height="36" rx="1" fill="rgba(240,236,228,0.15)"></rect>
          <rect x="44" y="258" width="52" height="5" rx="1" fill="rgba(240,236,228,0.15)"></rect>
          <rect x="136" y="72" width="160" height="118" rx="2" fill="#252520" stroke="rgba(240,236,228,0.28)" stroke-width="1.5"></rect>
          <rect x="144" y="80" width="144" height="102" fill="url(#screengrad)"></rect>
          <rect x="154" y="92" width="60" height="7" rx="1" fill="rgba(176,32,16,0.7)"></rect>
          <rect x="154" y="104" width="96" height="3" rx="0.5" fill="rgba(240,236,228,0.22)"></rect>
          <rect x="154" y="111" width="78" height="3" rx="0.5" fill="rgba(240,236,228,0.15)"></rect>
          <rect x="154" y="128" width="14" height="36" rx="1" fill="rgba(176,32,16,0.55)"></rect>
          <rect x="174" y="138" width="14" height="26" rx="1" fill="rgba(176,32,16,0.4)"></rect>
          <rect x="194" y="132" width="14" height="32" rx="1" fill="rgba(176,32,16,0.5)"></rect>
          <rect x="214" y="124" width="14" height="40" rx="1" fill="rgba(176,32,16,0.65)"></rect>
          <rect x="234" y="134" width="14" height="30" rx="1" fill="rgba(176,32,16,0.45)"></rect>
          <rect x="207" y="190" width="18" height="44" rx="1" fill="rgba(240,236,228,0.18)"></rect>
          <rect x="186" y="232" width="60" height="5" rx="1" fill="rgba(240,236,228,0.18)"></rect>
          <rect x="302" y="88" width="18" height="34" rx="9" fill="#252520" stroke="rgba(240,236,228,0.38)" stroke-width="1.5"></rect>
          <line x1="305" y1="97" x2="317" y2="97" stroke="rgba(240,236,228,0.22)" stroke-width="0.8"></line>
          <line x1="305" y1="104" x2="317" y2="104" stroke="rgba(240,236,228,0.22)" stroke-width="0.8"></line>
          <line x1="305" y1="111" x2="317" y2="111" stroke="rgba(240,236,228,0.22)" stroke-width="0.8"></line>
          <line x1="311" y1="122" x2="311" y2="240" stroke="rgba(240,236,228,0.28)" stroke-width="2"></line>
          <line x1="311" y1="155" x2="345" y2="140" stroke="rgba(240,236,228,0.22)" stroke-width="1.5"></line>
          <ellipse cx="311" cy="243" rx="26" ry="6" fill="#252520" stroke="rgba(240,236,228,0.22)" stroke-width="1"></ellipse>
          <path d="M311 240 Q300 270 295 295" stroke="rgba(240,236,228,0.12)" stroke-width="1.5" stroke-dasharray="3 3"></path>
          <g transform="translate(368, 104)">
            <rect x="0" y="0" width="88" height="54" rx="3" fill="#2a2a26" stroke="rgba(240,236,228,0.35)" stroke-width="1.5"></rect>
            <circle cx="30" cy="27" r="20" fill="#1e1e1b" stroke="rgba(240,236,228,0.22)" stroke-width="1.5"></circle>
            <circle cx="30" cy="27" r="14" fill="#181816" stroke="rgba(176,32,16,0.5)" stroke-width="1"></circle>
            <circle cx="30" cy="27" r="7" fill="#141412" stroke="rgba(176,32,16,0.65)" stroke-width="0.8"></circle>
            <circle cx="30" cy="27" r="3" fill="#b82010" opacity="0.7"></circle>
            <circle cx="23" cy="20" r="2.5" fill="rgba(240,236,228,0.18)"></circle>
            <rect x="58" y="-14" width="32" height="20" rx="2" fill="#1e1e1a" stroke="rgba(240,236,228,0.25)" stroke-width="1"></rect>
            <rect x="61" y="-11" width="26" height="14" rx="1" fill="#141412"></rect>
            <circle cx="78" cy="8" r="4.5" fill="#b82010" opacity="0.9"></circle>
            <rect x="60" y="54" width="30" height="20" rx="2" fill="#252520" stroke="rgba(240,236,228,0.2)" stroke-width="1"></rect>
            <line x1="44" y1="74" x2="8" y2="152" stroke="rgba(240,236,228,0.28)" stroke-width="2"></line>
            <line x1="44" y1="74" x2="44" y2="156" stroke="rgba(240,236,228,0.28)" stroke-width="2"></line>
            <line x1="44" y1="74" x2="80" y2="152" stroke="rgba(240,236,228,0.28)" stroke-width="2"></line>
            <line x1="18" y1="122" x2="72" y2="122" stroke="rgba(240,236,228,0.15)" stroke-width="1"></line>
            <circle cx="8" cy="152" r="3" fill="rgba(240,236,228,0.28)"></circle>
            <circle cx="44" cy="156" r="3" fill="rgba(240,236,228,0.28)"></circle>
            <circle cx="80" cy="152" r="3" fill="rgba(240,236,228,0.28)"></circle>
          </g>
          <rect x="494" y="88" width="90" height="60" rx="3" fill="#252520" stroke="rgba(240,236,228,0.32)" stroke-width="1.5"></rect>
          <rect x="501" y="95" width="76" height="46" fill="#1a1a17"></rect>
          <rect x="508" y="103" width="36" height="5" rx="0.5" fill="rgba(176,32,16,0.65)"></rect>
          <rect x="508" y="112" width="56" height="3" rx="0.5" fill="rgba(240,236,228,0.22)"></rect>
          <rect x="508" y="119" width="44" height="3" rx="0.5" fill="rgba(240,236,228,0.15)"></rect>
          <rect x="548" y="100" width="22" height="11" rx="1" fill="#b82010" opacity="0.9"></rect>
          <text x="553" y="109" font-family="'DM Mono', monospace" font-size="6" fill="rgba(240,236,228,0.9)" letter-spacing="0.5">LIVE</text>
          <rect x="535" y="148" width="8" height="26" rx="1" fill="rgba(240,236,228,0.18)"></rect>
          <rect x="516" y="172" width="46" height="5" rx="1" fill="rgba(240,236,228,0.18)"></rect>
          <line x1="32" y1="268" x2="570" y2="268" stroke="rgba(240,236,228,0.1)" stroke-width="1"></line>
        </svg>
      </div>
    </div>

  </div>

  <section class="section cta-section">
    <div class="container cta-inner">
      <h2 class="cta-heading">Not sure what you need?</h2>
      <p class="cta-text">Tell us about your event and we'll recommend the right combination of services and equipment.</p>
      <a href="/contact" class="btn btn-primary btn-lg">Get a Free Quote</a>
    </div>
  </section>
`;
};
