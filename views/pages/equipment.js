module.exports = function equipmentPage({ site, equipment }) {
  const svgs = {
    'projectors-screens': `<svg viewBox="0 0 800 350" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" fill="none">
      <defs>
        <pattern id="pg" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M40 0L0 0 0 40" stroke="rgba(240,236,228,0.09)" stroke-width="0.5"/></pattern>
        <linearGradient id="pbeam" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#8B1A0A" stop-opacity="0.28"/><stop offset="100%" stop-color="#8B1A0A" stop-opacity="0"/></linearGradient>
      </defs>
      <rect width="800" height="350" fill="url(#pg)"/>
      <polygon points="215,175 450,58 450,292" fill="url(#pbeam)"/>
      <rect x="450" y="46" width="248" height="188" rx="2" fill="#252520" stroke="rgba(240,236,228,0.33)" stroke-width="1.5"/>
      <rect x="459" y="55" width="230" height="170" fill="#2a2a26"/>
      <rect x="475" y="74" width="100" height="9" rx="1" fill="rgba(139,26,10,0.88)"/>
      <rect x="475" y="89" width="148" height="3" rx="1" fill="rgba(240,236,228,0.26)"/>
      <rect x="475" y="98" width="124" height="3" rx="1" fill="rgba(240,236,228,0.18)"/>
      <rect x="475" y="107" width="136" height="3" rx="1" fill="rgba(240,236,228,0.18)"/>
      <rect x="476" y="133" width="20" height="56" rx="1" fill="rgba(139,26,10,0.64)"/>
      <rect x="502" y="149" width="20" height="40" rx="1" fill="rgba(139,26,10,0.45)"/>
      <rect x="528" y="139" width="20" height="50" rx="1" fill="rgba(139,26,10,0.56)"/>
      <rect x="554" y="127" width="20" height="62" rx="1" fill="rgba(139,26,10,0.80)"/>
      <rect x="580" y="143" width="20" height="46" rx="1" fill="rgba(139,26,10,0.48)"/>
      <rect x="606" y="131" width="20" height="58" rx="1" fill="rgba(139,26,10,0.67)"/>
      <line x1="574" y1="234" x2="574" y2="286" stroke="rgba(240,236,228,0.44)" stroke-width="2"/>
      <line x1="542" y1="286" x2="606" y2="286" stroke="rgba(240,236,228,0.44)" stroke-width="2"/>
      <rect x="126" y="150" width="94" height="50" rx="3" fill="#2a2a26" stroke="rgba(240,236,228,0.40)" stroke-width="1.5"/>
      <circle cx="206" cy="175" r="15" fill="#131311" stroke="#b82010" stroke-width="1.5"/>
      <circle cx="206" cy="175" r="9" fill="#181816" stroke="rgba(139,26,10,0.64)" stroke-width="1"/>
      <circle cx="206" cy="175" r="3.5" fill="#b82010" opacity="0.8"/>
      <line x1="140" y1="160" x2="140" y2="190" stroke="rgba(240,236,228,0.22)" stroke-width="1"/>
      <line x1="147" y1="160" x2="147" y2="190" stroke="rgba(240,236,228,0.22)" stroke-width="1"/>
      <line x1="154" y1="160" x2="154" y2="190" stroke="rgba(240,236,228,0.22)" stroke-width="1"/>
      <circle cx="165" cy="164" r="3.5" fill="#b82010" opacity="0.9"/>
      <rect x="152" y="200" width="7" height="16" rx="1" fill="rgba(240,236,228,0.33)"/>
    </svg>`,
    'sound-pa-systems': `<svg viewBox="0 0 800 350" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" fill="none">
      <defs>
        <pattern id="spg" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M40 0L0 0 0 40" stroke="rgba(240,236,228,0.09)" stroke-width="0.5"/></pattern>
      </defs>
      <rect width="800" height="350" fill="url(#spg)"/>
      <circle cx="400" cy="175" r="135" stroke="rgba(139,26,10,0.11)" stroke-width="1"/>
      <circle cx="400" cy="175" r="102" stroke="rgba(139,26,10,0.16)" stroke-width="1"/>
      <circle cx="400" cy="175" r="68" stroke="rgba(139,26,10,0.24)" stroke-width="1"/>
      <rect x="88" y="96" width="62" height="158" rx="3" fill="#252520" stroke="rgba(240,236,228,0.33)" stroke-width="1.5"/>
      <circle cx="119" cy="122" r="11" fill="#2a2a26" stroke="rgba(240,236,228,0.22)" stroke-width="1"/>
      <circle cx="119" cy="122" r="6" fill="#181816" stroke="rgba(139,26,10,0.48)" stroke-width="0.8"/>
      <circle cx="119" cy="148" r="11" fill="#2a2a26" stroke="rgba(240,236,228,0.22)" stroke-width="1"/>
      <circle cx="119" cy="148" r="6" fill="#181816" stroke="rgba(139,26,10,0.48)" stroke-width="0.8"/>
      <circle cx="119" cy="175" r="11" fill="#2a2a26" stroke="rgba(240,236,228,0.22)" stroke-width="1"/>
      <circle cx="119" cy="175" r="6" fill="#181816" stroke="rgba(139,26,10,0.48)" stroke-width="0.8"/>
      <circle cx="119" cy="202" r="11" fill="#2a2a26" stroke="rgba(240,236,228,0.22)" stroke-width="1"/>
      <circle cx="119" cy="202" r="6" fill="#181816" stroke="rgba(139,26,10,0.48)" stroke-width="0.8"/>
      <circle cx="119" cy="228" r="11" fill="#2a2a26" stroke="rgba(240,236,228,0.22)" stroke-width="1"/>
      <circle cx="119" cy="228" r="6" fill="#181816" stroke="rgba(139,26,10,0.48)" stroke-width="0.8"/>
      <rect x="98" y="92" width="42" height="8" rx="1" fill="rgba(240,236,228,0.22)"/>
      <rect x="650" y="96" width="62" height="158" rx="3" fill="#252520" stroke="rgba(240,236,228,0.33)" stroke-width="1.5"/>
      <circle cx="681" cy="122" r="11" fill="#2a2a26" stroke="rgba(240,236,228,0.22)" stroke-width="1"/>
      <circle cx="681" cy="122" r="6" fill="#181816" stroke="rgba(139,26,10,0.48)" stroke-width="0.8"/>
      <circle cx="681" cy="148" r="11" fill="#2a2a26" stroke="rgba(240,236,228,0.22)" stroke-width="1"/>
      <circle cx="681" cy="148" r="6" fill="#181816" stroke="rgba(139,26,10,0.48)" stroke-width="0.8"/>
      <circle cx="681" cy="175" r="11" fill="#2a2a26" stroke="rgba(240,236,228,0.22)" stroke-width="1"/>
      <circle cx="681" cy="175" r="6" fill="#181816" stroke="rgba(139,26,10,0.48)" stroke-width="0.8"/>
      <circle cx="681" cy="202" r="11" fill="#2a2a26" stroke="rgba(240,236,228,0.22)" stroke-width="1"/>
      <circle cx="681" cy="202" r="6" fill="#181816" stroke="rgba(139,26,10,0.48)" stroke-width="0.8"/>
      <circle cx="681" cy="228" r="11" fill="#2a2a26" stroke="rgba(240,236,228,0.22)" stroke-width="1"/>
      <circle cx="681" cy="228" r="6" fill="#181816" stroke="rgba(139,26,10,0.48)" stroke-width="0.8"/>
      <rect x="660" y="92" width="42" height="8" rx="1" fill="rgba(240,236,228,0.22)"/>
      <rect x="290" y="230" width="220" height="82" rx="3" fill="#252520" stroke="rgba(240,236,228,0.33)" stroke-width="1.5"/>
      <rect x="306" y="240" width="6" height="50" rx="1" fill="rgba(240,236,228,0.13)"/>
      <rect x="322" y="240" width="6" height="50" rx="1" fill="rgba(240,236,228,0.13)"/>
      <rect x="338" y="240" width="6" height="50" rx="1" fill="rgba(240,236,228,0.13)"/>
      <rect x="354" y="240" width="6" height="50" rx="1" fill="rgba(240,236,228,0.13)"/>
      <rect x="370" y="240" width="6" height="50" rx="1" fill="rgba(240,236,228,0.13)"/>
      <rect x="386" y="240" width="6" height="50" rx="1" fill="rgba(240,236,228,0.13)"/>
      <rect x="402" y="240" width="6" height="50" rx="1" fill="rgba(240,236,228,0.13)"/>
      <rect x="418" y="240" width="6" height="50" rx="1" fill="rgba(240,236,228,0.13)"/>
      <rect x="434" y="240" width="6" height="50" rx="1" fill="rgba(240,236,228,0.13)"/>
      <rect x="450" y="240" width="6" height="50" rx="1" fill="rgba(240,236,228,0.13)"/>
      <rect x="304" y="258" width="10" height="5" rx="1" fill="rgba(240,236,228,0.66)"/>
      <rect x="320" y="266" width="10" height="5" rx="1" fill="rgba(240,236,228,0.66)"/>
      <rect x="336" y="252" width="10" height="5" rx="1" fill="rgba(139,26,10,0.95)"/>
      <rect x="352" y="270" width="10" height="5" rx="1" fill="rgba(240,236,228,0.66)"/>
      <rect x="368" y="260" width="10" height="5" rx="1" fill="rgba(240,236,228,0.66)"/>
      <rect x="384" y="248" width="10" height="5" rx="1" fill="rgba(139,26,10,0.95)"/>
      <rect x="400" y="265" width="10" height="5" rx="1" fill="rgba(240,236,228,0.66)"/>
      <rect x="416" y="257" width="10" height="5" rx="1" fill="rgba(240,236,228,0.66)"/>
      <rect x="470" y="240" width="30" height="50" rx="1" fill="#2a2a26" stroke="rgba(240,236,228,0.18)" stroke-width="1"/>
      <rect x="473" y="276" width="24" height="4" rx="0.5" fill="rgba(139,26,10,0.80)"/>
      <rect x="473" y="270" width="24" height="4" rx="0.5" fill="rgba(139,26,10,0.64)"/>
      <rect x="473" y="264" width="18" height="4" rx="0.5" fill="rgba(139,26,10,0.48)"/>
      <rect x="392" y="110" width="16" height="36" rx="8" fill="#252520" stroke="rgba(240,236,228,0.40)" stroke-width="1.5"/>
      <line x1="400" y1="146" x2="400" y2="162" stroke="rgba(240,236,228,0.33)" stroke-width="1.5"/>
      <path d="M386,160 Q400,174 414,160" stroke="rgba(240,236,228,0.33)" stroke-width="1.5" fill="none"/>
    </svg>`,
    'lighting-fixtures': `<svg viewBox="0 0 800 350" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" fill="none">
      <defs>
        <pattern id="lgg" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M40 0L0 0 0 40" stroke="rgba(240,236,228,0.09)" stroke-width="0.5"/></pattern>
        <linearGradient id="lb1" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="rgba(139,26,10,0)"/><stop offset="65%" stop-color="rgba(139,26,10,0.35)"/><stop offset="100%" stop-color="rgba(139,26,10,0.08)"/></linearGradient>
        <linearGradient id="lb2" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="rgba(200,160,80,0)"/><stop offset="65%" stop-color="rgba(200,160,80,0.22)"/><stop offset="100%" stop-color="rgba(200,160,80,0.05)"/></linearGradient>
      </defs>
      <rect width="800" height="350" fill="url(#lgg)"/>
      <rect x="60" y="54" width="680" height="10" rx="2" fill="#2a2a26" stroke="rgba(240,236,228,0.26)" stroke-width="1"/>
      <circle cx="160" cy="59" r="2.5" fill="rgba(240,236,228,0.44)"/>
      <circle cx="280" cy="59" r="2.5" fill="rgba(240,236,228,0.44)"/>
      <circle cx="400" cy="59" r="2.5" fill="rgba(240,236,228,0.44)"/>
      <circle cx="520" cy="59" r="2.5" fill="rgba(240,236,228,0.44)"/>
      <circle cx="640" cy="59" r="2.5" fill="rgba(240,236,228,0.44)"/>
      <rect x="96" y="20" width="8" height="38" rx="1" fill="#252520" stroke="rgba(240,236,228,0.22)" stroke-width="1"/>
      <rect x="696" y="20" width="8" height="38" rx="1" fill="#252520" stroke="rgba(240,236,228,0.22)" stroke-width="1"/>
      <g transform="translate(172,64) rotate(16,0,0)">
        <polygon points="-3,0 3,0 26,108 -26,108" fill="url(#lb1)"/>
        <rect x="-11" y="-30" width="22" height="30" rx="3" fill="#2a2a26" stroke="rgba(240,236,228,0.40)" stroke-width="1.5"/>
        <rect x="-7" y="-26" width="14" height="12" rx="1" fill="#b82010" opacity="0.65"/>
        <circle cx="0" cy="-8" r="6" fill="#2a2a26" stroke="rgba(139,26,10,0.64)" stroke-width="1"/>
        <circle cx="0" cy="-8" r="3" fill="#b82010" opacity="0.8"/>
      </g>
      <g transform="translate(322,64) rotate(-5,0,0)">
        <polygon points="-3,0 3,0 30,125 -30,125" fill="url(#lb2)"/>
        <rect x="-12" y="-34" width="24" height="34" rx="3" fill="#2a2a26" stroke="rgba(240,236,228,0.40)" stroke-width="1.5"/>
        <rect x="-8" y="-30" width="16" height="14" rx="1" fill="rgba(200,160,80,0.72)"/>
        <circle cx="0" cy="-10" r="7" fill="#2a2a26" stroke="rgba(200,160,80,0.56)" stroke-width="1"/>
        <circle cx="0" cy="-10" r="3.5" fill="rgba(200,160,80,0.85)"/>
      </g>
      <g transform="translate(478,64) rotate(9,0,0)">
        <polygon points="-3,0 3,0 28,112 -28,112" fill="url(#lb1)" opacity="0.8"/>
        <rect x="-11" y="-32" width="22" height="32" rx="3" fill="#2a2a26" stroke="rgba(240,236,228,0.40)" stroke-width="1.5"/>
        <rect x="-7" y="-28" width="14" height="12" rx="1" fill="#b82010" opacity="0.6"/>
        <circle cx="0" cy="-10" r="6" fill="#2a2a26" stroke="rgba(139,26,10,0.64)" stroke-width="1"/>
        <circle cx="0" cy="-10" r="3" fill="#b82010" opacity="0.75"/>
      </g>
      <g transform="translate(628,64) rotate(-12,0,0)">
        <polygon points="-2,0 2,0 20,88 -20,88" fill="url(#lb1)" opacity="0.75"/>
        <rect x="-10" y="-26" width="20" height="26" rx="3" fill="#2a2a26" stroke="rgba(240,236,228,0.40)" stroke-width="1.5"/>
        <circle cx="0" cy="-8" r="6" fill="#2a2a26" stroke="rgba(139,26,10,0.64)" stroke-width="1"/>
        <circle cx="0" cy="-8" r="3" fill="#b82010" opacity="0.7"/>
      </g>
      <line x1="60" y1="308" x2="740" y2="308" stroke="rgba(240,236,228,0.15)" stroke-width="1"/>
      <ellipse cx="182" cy="310" rx="58" ry="8" fill="rgba(139,26,10,0.16)"/>
      <ellipse cx="328" cy="313" rx="72" ry="9" fill="rgba(200,160,80,0.11)"/>
      <ellipse cx="486" cy="311" rx="64" ry="8" fill="rgba(139,26,10,0.14)"/>
      <ellipse cx="624" cy="309" rx="52" ry="7" fill="rgba(139,26,10,0.13)"/>
      <rect x="300" y="272" width="200" height="26" rx="3" fill="#252520" stroke="rgba(240,236,228,0.26)" stroke-width="1"/>
      <circle cx="320" cy="285" r="5" fill="rgba(139,26,10,0.88)"/>
      <circle cx="338" cy="285" r="5" fill="rgba(200,160,80,0.64)"/>
      <circle cx="356" cy="285" r="5" fill="rgba(139,26,10,0.80)"/>
      <circle cx="374" cy="285" r="5" fill="rgba(200,160,80,0.61)"/>
      <circle cx="392" cy="285" r="5" fill="rgba(139,26,10,0.88)"/>
      <circle cx="410" cy="285" r="5" fill="rgba(200,160,80,0.64)"/>
      <circle cx="428" cy="285" r="5" fill="rgba(139,26,10,0.77)"/>
      <circle cx="446" cy="285" r="5" fill="rgba(200,160,80,0.61)"/>
      <circle cx="464" cy="285" r="5" fill="rgba(139,26,10,0.80)"/>
      <circle cx="482" cy="285" r="5" fill="rgba(200,160,80,0.56)"/>
    </svg>`,
    'video-cameras-switchers': `<svg viewBox="0 0 800 350" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" fill="none">
      <defs>
        <pattern id="vgg" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M40 0L0 0 0 40" stroke="rgba(240,236,228,0.09)" stroke-width="0.5"/></pattern>
        <linearGradient id="vs" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#111110"/><stop offset="100%" stop-color="#1a1a17"/></linearGradient>
      </defs>
      <rect width="800" height="350" fill="url(#vgg)"/>
      <rect x="272" y="146" width="256" height="98" rx="3" fill="#252520" stroke="rgba(240,236,228,0.33)" stroke-width="1.5"/>
      <text x="284" y="163" font-family="'DM Mono', monospace" font-size="7" fill="rgba(240,236,228,0.55)" letter-spacing="2">VIDEO SWITCHER</text>
      <rect x="284" y="170" width="22" height="14" rx="1.5" fill="rgba(139,26,10,0.95)" stroke="rgba(139,26,10,0.64)" stroke-width="0.5"/>
      <text x="290" y="181" font-family="'DM Mono', monospace" font-size="7" fill="rgba(240,236,228,0.75)">1</text>
      <rect x="312" y="170" width="22" height="14" rx="1.5" fill="#2a2a26" stroke="rgba(240,236,228,0.22)" stroke-width="0.5"/>
      <text x="319" y="181" font-family="'DM Mono', monospace" font-size="7" fill="rgba(240,236,228,0.75)">2</text>
      <rect x="340" y="170" width="22" height="14" rx="1.5" fill="#2a2a26" stroke="rgba(240,236,228,0.22)" stroke-width="0.5"/>
      <text x="347" y="181" font-family="'DM Mono', monospace" font-size="7" fill="rgba(240,236,228,0.75)">3</text>
      <rect x="368" y="170" width="22" height="14" rx="1.5" fill="#2a2a26" stroke="rgba(240,236,228,0.22)" stroke-width="0.5"/>
      <text x="375" y="181" font-family="'DM Mono', monospace" font-size="7" fill="rgba(240,236,228,0.75)">4</text>
      <rect x="462" y="166" width="56" height="38" rx="1" fill="#2a2a26" stroke="rgba(240,236,228,0.18)"/>
      <rect x="464" y="168" width="52" height="34" fill="rgba(139,26,10,0.24)"/>
      <text x="482" y="188" font-family="'DM Mono', monospace" font-size="6" fill="rgba(139,26,10,0.95)" letter-spacing="1">PGM</text>
      <circle cx="284" cy="230" r="3" fill="#b82010" opacity="0.9"/>
      <g transform="translate(82,128)">
        <rect x="0" y="20" width="90" height="56" rx="3" fill="#2a2a26" stroke="rgba(240,236,228,0.40)" stroke-width="1.5"/>
        <rect x="64" y="8" width="30" height="22" rx="2" fill="#1e1e1a" stroke="rgba(240,236,228,0.26)" stroke-width="1"/>
        <rect x="67" y="11" width="24" height="16" rx="1" fill="#181816"/>
        <circle cx="30" cy="48" r="22" fill="#1e1e1a" stroke="rgba(240,236,228,0.33)" stroke-width="1.5"/>
        <circle cx="30" cy="48" r="16" fill="#181816" stroke="rgba(240,236,228,0.22)" stroke-width="1"/>
        <circle cx="30" cy="48" r="9" fill="#141412" stroke="rgba(139,26,10,0.56)" stroke-width="0.8"/>
        <circle cx="30" cy="48" r="4" fill="#0a0a09"/>
        <circle cx="24" cy="42" r="2" fill="rgba(240,236,228,0.26)"/>
        <circle cx="80" cy="28" r="4" fill="#b82010" opacity="0.9"/>
        <path d="M90 52 Q130 52 158 86" stroke="rgba(240,236,228,0.15)" stroke-width="1.5" stroke-dasharray="3 3"/>
      </g>
      <g transform="translate(566,98)">
        <rect x="0" y="0" width="148" height="106" rx="3" fill="#252520" stroke="rgba(240,236,228,0.33)" stroke-width="1.5"/>
        <rect x="8" y="8" width="132" height="82" fill="url(#vs)"/>
        <rect x="16" y="18" width="52" height="5" rx="0.5" fill="rgba(139,26,10,0.80)"/>
        <rect x="16" y="27" width="84" height="3" rx="0.5" fill="rgba(240,236,228,0.22)"/>
        <rect x="16" y="34" width="68" height="3" rx="0.5" fill="rgba(240,236,228,0.15)"/>
        <rect x="98" y="14" width="30" height="12" rx="1" fill="#b82010" opacity="0.85"/>
        <text x="105" y="23" font-family="'DM Mono', monospace" font-size="7" fill="rgba(240,236,228,0.75)" letter-spacing="1">LIVE</text>
        <rect x="67" y="106" width="14" height="30" rx="1" fill="rgba(240,236,228,0.22)"/>
        <rect x="48" y="136" width="52" height="6" rx="1" fill="rgba(240,236,228,0.22)"/>
        <path d="M0 62 Q-32 62 -54 100" stroke="rgba(240,236,228,0.15)" stroke-width="1.5" stroke-dasharray="3 3"/>
      </g>
      <line x1="242" y1="195" x2="272" y2="195" stroke="rgba(240,236,228,0.22)" stroke-width="1.5" stroke-dasharray="4 3"/>
      <line x1="528" y1="195" x2="566" y2="195" stroke="rgba(240,236,228,0.22)" stroke-width="1.5" stroke-dasharray="4 3"/>
    </svg>`
  };

  return `
  <section class="page-hero page-hero--new">
    <div class="page-kicker">Equipment Rentals</div>
    <h1 class="page-title">Professional Gear.<br><em>Event-Ready.</em></h1>
    <p class="page-subtitle">Professional audio visual equipment available for rent in Rochester, NY. Delivery, setup, and on-site support available.</p>
  </section>

  <div class="card-grid card-grid-2">
    ${equipment.map(e => `
    <a href="/equipment/${e.slug}" class="equip-detail-card">
      <div class="equip-detail-card-image">
        ${svgs[e.slug] || ''}
      </div>
      <div class="equip-detail-card-body">
        <h2 class="equip-detail-card-title">${e.title}</h2>
        <p class="equip-detail-card-text">${e.intro.substring(0, 150)}...</p>
        <ul class="equip-preview-list">
          ${e.items.slice(0, 3).map(item => `<li>${item.split(' — ')[0].split('(')[0].trim()}</li>`).join('\n          ')}
          ${e.items.length > 3 ? `<li>+ ${e.items.length - 3} more</li>` : ''}
        </ul>
        <span class="card-link">View full inventory &rarr;</span>
      </div>
    </a>`).join('')}
  </div>

  <div class="split-section">
    <h2 class="split-section-heading">Rental or Full-Service &mdash; Your Choice</h2>
    <div class="two-col">
      <div class="two-col-item">
        <h3>Equipment Rental</h3>
        <p>Rent the gear you need, delivered and tested. Includes setup instructions and phone support. Ideal for organizations with their own technical staff.</p>
      </div>
      <div class="two-col-item">
        <h3>Full-Service Production</h3>
        <p>Equipment plus experienced technicians to operate it. We handle setup, operation, and teardown. You focus on your event.</p>
        <a href="/services" class="split-link">Learn about our production services</a>
      </div>
    </div>
  </div>

  <section class="section cta-section">
    <div class="container cta-inner">
      <h2 class="cta-heading">Need a quote?</h2>
      <p class="cta-text">Tell us what you need, your event date, and venue &mdash; we'll send a detailed rental proposal.</p>
      <a href="/contact" class="btn btn-primary btn-lg">Request a Quote</a>
    </div>
  </section>
`;
};
