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
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 440" fill="none" stroke-linecap="round" stroke-linejoin="round">

        <defs>
          <pattern id="hatch1" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
            <line x1="0" y1="0" x2="0" y2="8" stroke="rgba(237,232,224,0.07)" stroke-width="1"></line>
          </pattern>
          <pattern id="hatch2" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(30)">
            <line x1="0" y1="0" x2="0" y2="6" stroke="rgba(139,26,10,0.18)" stroke-width="1"></line>
          </pattern>
        </defs>

        
        <path d="M36,98 L172,100 L170,342 L34,340 Z" fill="url(#hatch1)" stroke="rgba(237,232,224,0.55)" stroke-width="2"></path>
        
        <circle cx="47" cy="109" r="3.5" fill="none" stroke="rgba(237,232,224,0.4)" stroke-width="1.5"></circle>
        <circle cx="161" cy="109" r="3.5" fill="none" stroke="rgba(237,232,224,0.4)" stroke-width="1.5"></circle>
        <circle cx="47" cy="330" r="3.5" fill="none" stroke="rgba(237,232,224,0.4)" stroke-width="1.5"></circle>
        <circle cx="161" cy="330" r="3.5" fill="none" stroke="rgba(237,232,224,0.4)" stroke-width="1.5"></circle>
        
        <circle cx="103" cy="225" r="58" fill="url(#hatch1)" stroke="rgba(237,232,224,0.5)" stroke-width="2"></circle>
        <circle cx="103" cy="225" r="44" fill="none" stroke="rgba(237,232,224,0.2)" stroke-width="1" stroke-dasharray="4 3"></circle>
        <circle cx="103" cy="225" r="30" fill="none" stroke="rgba(237,232,224,0.25)" stroke-width="1.5"></circle>
        <circle cx="103" cy="225" r="18" fill="url(#hatch2)" stroke="rgba(139,26,10,0.7)" stroke-width="1.5"></circle>
        <circle cx="103" cy="225" r="8" fill="none" stroke="rgba(237,232,224,0.5)" stroke-width="2"></circle>
        <circle cx="103" cy="225" r="3" fill="rgba(139,26,10,0.9)"></circle>
        
        <circle cx="103" cy="140" r="14" fill="url(#hatch1)" stroke="rgba(237,232,224,0.45)" stroke-width="1.5"></circle>
        <circle cx="103" cy="140" r="7" fill="none" stroke="rgba(237,232,224,0.3)" stroke-width="1" stroke-dasharray="3 2"></circle>
        <circle cx="103" cy="140" r="3" fill="rgba(139,26,10,0.7)"></circle>
        
        <path d="M62,312 Q63,307 70,307 L136,308 Q143,308 143,312 L143,318 Q143,323 136,323 L70,322 Q63,322 62,318 Z" fill="rgba(0,0,0,0.5)" stroke="rgba(237,232,224,0.3)" stroke-width="1.5"></path>
        
        <path d="M98,342 Q97,368 99,396" stroke="rgba(237,232,224,0.3)" stroke-width="2.5"></path>
        <path d="M68,396 Q98,392 128,396" stroke="rgba(237,232,224,0.3)" stroke-width="2"></path>
        <path d="M68,396 Q62,408 60,418" stroke="rgba(237,232,224,0.22)" stroke-width="1.5"></path>
        <path d="M128,396 Q134,408 136,418" stroke="rgba(237,232,224,0.22)" stroke-width="1.5"></path>
        <path d="M98,396 Q98,408 98,418" stroke="rgba(237,232,224,0.22)" stroke-width="1.5"></path>

        
        
        <path d="M210,148 L560,144 L564,360 L206,364 Z" fill="url(#hatch1)" stroke="rgba(237,232,224,0.52)" stroke-width="2"></path>

        
        <path d="M220,158 L550,154 L550,168 L220,172 Z" fill="rgba(0,0,0,0.3)" stroke="rgba(237,232,224,0.15)" stroke-width="1"></path>
        <text x="228" y="167" font-family="&#39;DM Mono&#39;, monospace" font-size="7" fill="rgba(237,232,224,0.22)" letter-spacing="3">CH 1   CH 2   CH 3   CH 4   CH 5   CH 6   CH 7   CH 8</text>

        
        
        <line x1="238" y1="182" x2="238" y2="318" stroke="rgba(237,232,224,0.12)" stroke-width="6" stroke-linecap="butt"></line>
        <path d="M232,244 Q232,240 244,240 Q244,248 232,248 Z" fill="url(#hatch1)" stroke="rgba(237,232,224,0.45)" stroke-width="1.5"></path>
        
        <line x1="278" y1="182" x2="278" y2="318" stroke="rgba(237,232,224,0.12)" stroke-width="6" stroke-linecap="butt"></line>
        <path d="M272,262 Q272,258 284,258 Q284,266 272,266 Z" fill="url(#hatch1)" stroke="rgba(237,232,224,0.45)" stroke-width="1.5"></path>
        
        <line x1="318" y1="182" x2="318" y2="318" stroke="rgba(237,232,224,0.12)" stroke-width="6" stroke-linecap="butt"></line>
        <path d="M312,228 Q312,224 324,224 Q324,232 312,232 Z" fill="url(#hatch2)" stroke="rgba(139,26,10,0.75)" stroke-width="1.5"></path>
        
        <line x1="358" y1="182" x2="358" y2="318" stroke="rgba(237,232,224,0.12)" stroke-width="6" stroke-linecap="butt"></line>
        <path d="M352,272 Q352,268 364,268 Q364,276 352,276 Z" fill="url(#hatch1)" stroke="rgba(237,232,224,0.45)" stroke-width="1.5"></path>
        
        <line x1="398" y1="182" x2="398" y2="318" stroke="rgba(237,232,224,0.12)" stroke-width="6" stroke-linecap="butt"></line>
        <path d="M392,250 Q392,246 404,246 Q404,254 392,254 Z" fill="url(#hatch1)" stroke="rgba(237,232,224,0.45)" stroke-width="1.5"></path>
        
        <line x1="438" y1="182" x2="438" y2="318" stroke="rgba(237,232,224,0.12)" stroke-width="6" stroke-linecap="butt"></line>
        <path d="M432,238 Q432,234 444,234 Q444,242 432,242 Z" fill="url(#hatch2)" stroke="rgba(139,26,10,0.65)" stroke-width="1.5"></path>
        
        <line x1="478" y1="182" x2="478" y2="318" stroke="rgba(237,232,224,0.12)" stroke-width="6" stroke-linecap="butt"></line>
        <path d="M472,268 Q472,264 484,264 Q484,272 472,272 Z" fill="url(#hatch1)" stroke="rgba(237,232,224,0.45)" stroke-width="1.5"></path>
        
        <line x1="530" y1="182" x2="530" y2="318" stroke="rgba(237,232,224,0.15)" stroke-width="10" stroke-linecap="butt"></line>
        <path d="M522,252 Q522,246 538,246 Q538,258 522,258 Z" fill="url(#hatch2)" stroke="rgba(139,26,10,0.85)" stroke-width="2"></path>
        <text x="519" y="178" font-family="&#39;DM Mono&#39;, monospace" font-size="7" fill="rgba(237,232,224,0.22)" letter-spacing="1">MST</text>

        
        <circle cx="238" cy="330" r="7" fill="none" stroke="rgba(237,232,224,0.3)" stroke-width="1.5"></circle>
        <line x1="238" y1="323" x2="238" y2="326" stroke="rgba(237,232,224,0.5)" stroke-width="1.5"></line>
        <circle cx="278" cy="330" r="7" fill="none" stroke="rgba(237,232,224,0.3)" stroke-width="1.5"></circle>
        <line x1="275" y1="324" x2="277" y2="327" stroke="rgba(237,232,224,0.5)" stroke-width="1.5"></line>
        <circle cx="318" cy="330" r="7" fill="none" stroke="rgba(139,26,10,0.6)" stroke-width="1.5"></circle>
        <line x1="318" y1="323" x2="318" y2="326" stroke="rgba(139,26,10,0.8)" stroke-width="1.5"></line>
        <circle cx="358" cy="330" r="7" fill="none" stroke="rgba(237,232,224,0.3)" stroke-width="1.5"></circle>
        <line x1="362" y1="324" x2="360" y2="327" stroke="rgba(237,232,224,0.5)" stroke-width="1.5"></line>
        <circle cx="398" cy="330" r="7" fill="none" stroke="rgba(237,232,224,0.3)" stroke-width="1.5"></circle>
        <line x1="398" y1="337" x2="398" y2="334" stroke="rgba(237,232,224,0.5)" stroke-width="1.5"></line>
        <circle cx="438" cy="330" r="7" fill="none" stroke="rgba(139,26,10,0.55)" stroke-width="1.5"></circle>
        <line x1="432" y1="328" x2="435" y2="327" stroke="rgba(139,26,10,0.75)" stroke-width="1.5"></line>
        <circle cx="478" cy="330" r="7" fill="none" stroke="rgba(237,232,224,0.3)" stroke-width="1.5"></circle>
        <line x1="475" y1="337" x2="476" y2="334" stroke="rgba(237,232,224,0.5)" stroke-width="1.5"></line>

        
        <path d="M498,188 L516,187 L517,320 L499,321 Z" fill="rgba(0,0,0,0.3)" stroke="rgba(237,232,224,0.2)" stroke-width="1.5"></path>
        <line x1="501" y1="310" x2="513" y2="310" stroke="rgba(139,26,10,0.6)" stroke-width="3" stroke-linecap="butt"></line>
        <line x1="501" y1="304" x2="513" y2="304" stroke="rgba(139,26,10,0.55)" stroke-width="3" stroke-linecap="butt"></line>
        <line x1="501" y1="298" x2="513" y2="298" stroke="rgba(139,26,10,0.5)" stroke-width="3" stroke-linecap="butt"></line>
        <line x1="501" y1="292" x2="513" y2="292" stroke="rgba(139,26,10,0.45)" stroke-width="3" stroke-linecap="butt"></line>
        <line x1="501" y1="286" x2="513" y2="286" stroke="rgba(139,26,10,0.4)" stroke-width="3" stroke-linecap="butt"></line>
        <line x1="501" y1="280" x2="513" y2="280" stroke="rgba(139,26,10,0.35)" stroke-width="3" stroke-linecap="butt"></line>
        <line x1="501" y1="274" x2="507" y2="274" stroke="rgba(237,232,224,0.1)" stroke-width="3" stroke-linecap="butt"></line>
        <line x1="501" y1="268" x2="507" y2="268" stroke="rgba(237,232,224,0.1)" stroke-width="3" stroke-linecap="butt"></line>

        
        <circle cx="228" cy="352" r="4" fill="none" stroke="rgba(237,232,224,0.25)" stroke-width="1.5"></circle>
        <circle cx="248" cy="352" r="4" fill="none" stroke="rgba(237,232,224,0.25)" stroke-width="1.5"></circle>
        <circle cx="268" cy="352" r="4" fill="none" stroke="rgba(237,232,224,0.25)" stroke-width="1.5"></circle>
        <circle cx="288" cy="352" r="4" fill="none" stroke="rgba(237,232,224,0.25)" stroke-width="1.5"></circle>
        <circle cx="308" cy="352" r="4" fill="none" stroke="rgba(237,232,224,0.25)" stroke-width="1.5"></circle>
        <circle cx="328" cy="352" r="4" fill="none" stroke="rgba(237,232,224,0.25)" stroke-width="1.5"></circle>

        
        <path d="M172,280 Q190,280 210,260" stroke="rgba(237,232,224,0.18)" stroke-width="1.5" stroke-dasharray="4 3" fill="none"></path>
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
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 440" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <defs>
          <pattern id="hv1" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
            <line x1="0" y1="0" x2="0" y2="8" stroke="rgba(237,232,224,0.06)" stroke-width="1"></line>
          </pattern>
          <pattern id="hv2" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(-45)">
            <line x1="0" y1="0" x2="0" y2="8" stroke="rgba(237,232,224,0.06)" stroke-width="1"></line>
          </pattern>
          <pattern id="screen-hatch" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
            <line x1="0" y1="0" x2="0" y2="8" stroke="rgba(139,26,10,0.12)" stroke-width="1"></line>
          </pattern>
        </defs>

        
        <path d="M100,162 L302,158 L305,282 L98,286 Z" fill="url(#hv1)" stroke="rgba(237,232,224,0.55)" stroke-width="2"></path>

        
        <circle cx="180" cy="222" r="52" fill="url(#hv1)" stroke="rgba(237,232,224,0.5)" stroke-width="2"></circle>
        <circle cx="180" cy="222" r="40" fill="url(#hv2)" stroke="rgba(237,232,224,0.3)" stroke-width="1.5"></circle>
        <circle cx="180" cy="222" r="26" fill="none" stroke="rgba(237,232,224,0.35)" stroke-width="1.5"></circle>
        <circle cx="180" cy="222" r="14" fill="url(#screen-hatch)" stroke="rgba(139,26,10,0.65)" stroke-width="1.5"></circle>
        <circle cx="180" cy="222" r="5" fill="rgba(139,26,10,0.9)"></circle>
        
        <path d="M162,204 Q166,200 172,203" stroke="rgba(237,232,224,0.4)" stroke-width="1.5" fill="none"></path>

        
        <path d="M256,140 L318,138 L320,178 L258,180 Z" fill="url(#hv1)" stroke="rgba(237,232,224,0.4)" stroke-width="1.5"></path>
        <path d="M263,146 L312,144 L313,172 L264,174 Z" fill="rgba(0,0,0,0.4)" stroke="rgba(237,232,224,0.2)" stroke-width="1"></path>

        
        <circle cx="280" cy="163" r="7" fill="url(#screen-hatch)" stroke="rgba(139,26,10,0.8)" stroke-width="1.5"></circle>
        <circle cx="280" cy="163" r="3" fill="rgba(139,26,10,0.95)"></circle>

        
        <path d="M158,158 L262,156 L262,142 L158,144 Z" fill="url(#hv1)" stroke="rgba(237,232,224,0.35)" stroke-width="1.5"></path>

        
        <path d="M178,286 Q180,298 182,308" stroke="rgba(237,232,224,0.4)" stroke-width="2.5"></path>
        
        <path d="M182,308 Q160,340 138,388" stroke="rgba(237,232,224,0.35)" stroke-width="2"></path>
        
        <path d="M182,308 Q182,350 182,400" stroke="rgba(237,232,224,0.35)" stroke-width="2"></path>
        
        <path d="M182,308 Q204,340 226,388" stroke="rgba(237,232,224,0.35)" stroke-width="2"></path>
        
        <path d="M148,356 Q182,352 216,356" stroke="rgba(237,232,224,0.2)" stroke-width="1.5" stroke-dasharray="3 2"></path>
        
        <path d="M134,390 L142,390" stroke="rgba(237,232,224,0.3)" stroke-width="2"></path>
        <path d="M178,402 L186,402" stroke="rgba(237,232,224,0.3)" stroke-width="2"></path>
        <path d="M222,390 L230,390" stroke="rgba(237,232,224,0.3)" stroke-width="2"></path>

        
        <path d="M358,92 L532,90 L534,292 L356,294 Z" fill="url(#hv1)" stroke="rgba(237,232,224,0.5)" stroke-width="2"></path>
        
        <path d="M368,102 L522,100 L523,282 L367,283 Z" fill="url(#screen-hatch)" stroke="rgba(139,26,10,0.25)" stroke-width="1"></path>
        
        <path d="M382,128 L468,127" stroke="rgba(237,232,224,0.4)" stroke-width="2"></path>
        <path d="M382,142 L500,141" stroke="rgba(237,232,224,0.15)" stroke-width="1"></path>
        <path d="M382,152 L482,151" stroke="rgba(237,232,224,0.12)" stroke-width="1"></path>
        
        <path d="M478,116 L518,115 L519,130 L479,131 Z" fill="rgba(139,26,10,0.5)" stroke="rgba(139,26,10,0.8)" stroke-width="1.5"></path>
        <text x="484" y="127" font-family="&#39;DM Mono&#39;, monospace" font-size="8" fill="rgba(237,232,224,0.9)" letter-spacing="1.5">LIVE</text>
        
        <path d="M384,248 L384,200" stroke="rgba(139,26,10,0.55)" stroke-width="10" stroke-linecap="butt"></path>
        <path d="M400,248 L400,216" stroke="rgba(139,26,10,0.4)" stroke-width="10" stroke-linecap="butt"></path>
        <path d="M416,248 L416,206" stroke="rgba(139,26,10,0.5)" stroke-width="10" stroke-linecap="butt"></path>
        <path d="M432,248 L432,192" stroke="rgba(139,26,10,0.6)" stroke-width="10" stroke-linecap="butt"></path>
        <path d="M448,248 L448,210" stroke="rgba(139,26,10,0.45)" stroke-width="10" stroke-linecap="butt"></path>
        
        <path d="M368,264 L522,264" stroke="rgba(237,232,224,0.08)" stroke-width="8" stroke-linecap="butt"></path>
        <text x="374" y="268" font-family="&#39;DM Mono&#39;, monospace" font-size="7" fill="rgba(237,232,224,0.3)" letter-spacing="1">00:42:18:05</text>
        
        <path d="M444,294 Q444,316 445,336" stroke="rgba(237,232,224,0.3)" stroke-width="2"></path>
        <path d="M410,336 Q444,332 478,336" stroke="rgba(237,232,224,0.3)" stroke-width="2"></path>

        
        <path d="M305,230 Q330,230 355,192" stroke="rgba(237,232,224,0.15)" stroke-width="1.5" stroke-dasharray="4 3" fill="none"></path>

        
        <line x1="420" y1="92" x2="390" y2="68" stroke="rgba(237,232,224,0.18)" stroke-width="1"></line>
        <text x="350" y="64" font-family="&#39;DM Mono&#39;, monospace" font-size="8" fill="rgba(237,232,224,0.22)" letter-spacing="1.5">IMAG DISPLAY</text>
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
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 440" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <defs>
          <pattern id="hl1" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
            <line x1="0" y1="0" x2="0" y2="8" stroke="rgba(237,232,224,0.07)" stroke-width="1"></line>
          </pattern>
          <pattern id="hl2" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(-45)">
            <line x1="0" y1="0" x2="0" y2="6" stroke="rgba(237,232,224,0.07)" stroke-width="1"></line>
          </pattern>
        </defs>

        
        <path d="M52,64 Q180,60 300,62 Q420,60 548,64" stroke="rgba(237,232,224,0.55)" stroke-width="3" fill="none"></path>
        <path d="M52,74 Q180,70 300,72 Q420,70 548,74" stroke="rgba(237,232,224,0.35)" stroke-width="1.5" fill="none"></path>
        
        <line x1="100" y1="64" x2="120" y2="74" stroke="rgba(237,232,224,0.2)" stroke-width="1"></line>
        <line x1="140" y1="74" x2="160" y2="64" stroke="rgba(237,232,224,0.2)" stroke-width="1"></line>
        <line x1="200" y1="64" x2="220" y2="74" stroke="rgba(237,232,224,0.2)" stroke-width="1"></line>
        <line x1="240" y1="74" x2="260" y2="64" stroke="rgba(237,232,224,0.2)" stroke-width="1"></line>
        <line x1="300" y1="64" x2="320" y2="74" stroke="rgba(237,232,224,0.2)" stroke-width="1"></line>
        <line x1="340" y1="74" x2="360" y2="64" stroke="rgba(237,232,224,0.2)" stroke-width="1"></line>
        <line x1="400" y1="64" x2="420" y2="74" stroke="rgba(237,232,224,0.2)" stroke-width="1"></line>
        <line x1="440" y1="74" x2="460" y2="64" stroke="rgba(237,232,224,0.2)" stroke-width="1"></line>
        
        <circle cx="140" cy="69" r="5" fill="none" stroke="rgba(237,232,224,0.35)" stroke-width="1.5"></circle>
        <circle cx="270" cy="69" r="5" fill="none" stroke="rgba(237,232,224,0.35)" stroke-width="1.5"></circle>
        <circle cx="400" cy="69" r="5" fill="none" stroke="rgba(237,232,224,0.35)" stroke-width="1.5"></circle>
        <circle cx="490" cy="69" r="5" fill="none" stroke="rgba(237,232,224,0.35)" stroke-width="1.5"></circle>
        
        <path d="M56,22 Q56,40 56,64" stroke="rgba(237,232,224,0.4)" stroke-width="3"></path>
        <path d="M544,22 Q544,40 544,64" stroke="rgba(237,232,224,0.4)" stroke-width="3"></path>

        
        <g transform="translate(140, 74) rotate(20)">
          
          <polygon points="-4,0 4,0 34,140 -34,140" fill="rgba(139,26,10,0.09)" stroke="none"></polygon>
          
          <path d="M-12,0 Q-13,-32 0,-34 Q13,-32 12,0 Z" fill="url(#hl1)" stroke="rgba(237,232,224,0.5)" stroke-width="1.5"></path>
          
          <circle cx="0" cy="-16" r="8" fill="none" stroke="rgba(237,232,224,0.4)" stroke-width="1.5"></circle>
          <circle cx="0" cy="-16" r="4" fill="rgba(139,26,10,0.5)" stroke="rgba(139,26,10,0.7)" stroke-width="1"></circle>
          
          <path d="M-16,-4 L-22,18" stroke="rgba(237,232,224,0.3)" stroke-width="2"></path>
          <path d="M16,-4 L22,18" stroke="rgba(237,232,224,0.3)" stroke-width="2"></path>
        </g>

        
        <g transform="translate(270, 74) rotate(-4)">
          <polygon points="-5,0 5,0 40,155 -40,155" fill="rgba(139,26,10,0.07)" stroke="none"></polygon>
          <path d="M-14,0 Q-15,-38 0,-40 Q15,-38 14,0 Z" fill="url(#hl1)" stroke="rgba(237,232,224,0.5)" stroke-width="1.5"></path>
          <circle cx="0" cy="-18" r="9" fill="none" stroke="rgba(237,232,224,0.4)" stroke-width="1.5"></circle>
          <circle cx="0" cy="-18" r="5" fill="rgba(139,26,10,0.55)" stroke="rgba(139,26,10,0.75)" stroke-width="1"></circle>
          
          <path d="M-18,-2 L-26,22" stroke="rgba(237,232,224,0.3)" stroke-width="2"></path>
          <path d="M18,-2 L26,22" stroke="rgba(237,232,224,0.3)" stroke-width="2"></path>
          <path d="M-10,-38 L-14,-52" stroke="rgba(237,232,224,0.3)" stroke-width="2"></path>
          <path d="M10,-38 L14,-52" stroke="rgba(237,232,224,0.3)" stroke-width="2"></path>
        </g>

        
        <g transform="translate(400, 74) rotate(8)">
          <polygon points="-4,0 4,0 30,130 -30,130" fill="rgba(139,26,10,0.08)" stroke="none"></polygon>
          <path d="M-11,0 Q-12,-30 0,-32 Q12,-30 11,0 Z" fill="url(#hl1)" stroke="rgba(237,232,224,0.45)" stroke-width="1.5"></path>
          <circle cx="0" cy="-14" r="7" fill="none" stroke="rgba(237,232,224,0.38)" stroke-width="1.5"></circle>
          <circle cx="0" cy="-14" r="3.5" fill="rgba(139,26,10,0.55)" stroke="rgba(139,26,10,0.7)" stroke-width="1"></circle>
          <path d="M-14,-2 L-20,16" stroke="rgba(237,232,224,0.28)" stroke-width="2"></path>
          <path d="M14,-2 L20,16" stroke="rgba(237,232,224,0.28)" stroke-width="2"></path>
        </g>

        
        <g transform="translate(490, 74) rotate(-14)">
          <polygon points="-3,0 3,0 22,100 -22,100" fill="rgba(139,26,10,0.07)" stroke="none"></polygon>
          <path d="M-10,0 Q-11,-26 0,-28 Q11,-26 10,0 Z" fill="url(#hl1)" stroke="rgba(237,232,224,0.45)" stroke-width="1.5"></path>
          <circle cx="0" cy="-13" r="6" fill="none" stroke="rgba(237,232,224,0.35)" stroke-width="1.5"></circle>
          <circle cx="0" cy="-13" r="3" fill="rgba(139,26,10,0.5)" stroke="rgba(139,26,10,0.65)" stroke-width="1"></circle>
        </g>

        
        <path d="M50,376 Q200,372 300,374 Q400,372 550,376" stroke="rgba(237,232,224,0.2)" stroke-width="1.5" fill="none"></path>

        
        <ellipse cx="158" cy="378" rx="52" ry="8" fill="rgba(139,26,10,0.12)" stroke="rgba(139,26,10,0.3)" stroke-width="1"></ellipse>
        <ellipse cx="272" cy="382" rx="66" ry="10" fill="rgba(139,26,10,0.09)" stroke="rgba(139,26,10,0.25)" stroke-width="1"></ellipse>
        <ellipse cx="404" cy="379" rx="56" ry="8" fill="rgba(139,26,10,0.1)" stroke="rgba(139,26,10,0.28)" stroke-width="1"></ellipse>
        <ellipse cx="486" cy="377" rx="44" ry="7" fill="rgba(139,26,10,0.08)" stroke="rgba(139,26,10,0.22)" stroke-width="1"></ellipse>

        
        <path d="M204,344 Q205,340 296,340 Q387,340 388,344 L388,360 Q387,364 296,364 Q205,364 204,360 Z" fill="url(#hl2)" stroke="rgba(237,232,224,0.4)" stroke-width="1.5"></path>
        
        <circle cx="224" cy="352" r="5" fill="none" stroke="rgba(139,26,10,0.7)" stroke-width="1.5"></circle>
        <circle cx="246" cy="352" r="5" fill="rgba(139,26,10,0.4)" stroke="rgba(139,26,10,0.5)" stroke-width="1"></circle>
        <circle cx="268" cy="352" r="5" fill="none" stroke="rgba(139,26,10,0.7)" stroke-width="1.5"></circle>
        <circle cx="290" cy="352" r="5" fill="rgba(139,26,10,0.4)" stroke="rgba(139,26,10,0.5)" stroke-width="1"></circle>
        <circle cx="312" cy="352" r="5" fill="none" stroke="rgba(139,26,10,0.7)" stroke-width="1.5"></circle>
        <circle cx="334" cy="352" r="5" fill="rgba(139,26,10,0.4)" stroke="rgba(139,26,10,0.5)" stroke-width="1"></circle>
        <circle cx="356" cy="352" r="5" fill="none" stroke="rgba(139,26,10,0.7)" stroke-width="1.5"></circle>
        <circle cx="372" cy="352" r="5" fill="rgba(139,26,10,0.4)" stroke="rgba(139,26,10,0.5)" stroke-width="1"></circle>

        
        <line x1="296" y1="340" x2="296" y2="320" stroke="rgba(237,232,224,0.18)" stroke-width="1"></line>
        <line x1="296" y1="320" x2="340" y2="320" stroke="rgba(237,232,224,0.18)" stroke-width="1"></line>
        <text x="344" y="323" font-family="&#39;DM Mono&#39;, monospace" font-size="8" fill="rgba(237,232,224,0.22)" letter-spacing="1.5">LED UPLIGHT</text>
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
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 440" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <defs>
          <pattern id="hls1" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
            <line x1="0" y1="0" x2="0" y2="8" stroke="rgba(237,232,224,0.06)" stroke-width="1"></line>
          </pattern>
          <pattern id="hls2" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(30)">
            <line x1="0" y1="0" x2="0" y2="6" stroke="rgba(139,26,10,0.15)" stroke-width="1"></line>
          </pattern>
        </defs>

        
        <path d="M218,178 L382,176 L384,264 L216,266 Z" fill="url(#hls1)" stroke="rgba(237,232,224,0.55)" stroke-width="2"></path>
        
        <text x="232" y="200" font-family="&#39;DM Mono&#39;, monospace" font-size="8" fill="rgba(237,232,224,0.3)" letter-spacing="2">STREAM ENCODER</text>
        
        <line x1="234" y1="252" x2="234" y2="216" stroke="rgba(237,232,224,0.15)" stroke-width="8" stroke-linecap="butt"></line>
        <line x1="234" y1="252" x2="234" y2="230" stroke="rgba(139,26,10,0.7)" stroke-width="8" stroke-linecap="butt"></line>
        <line x1="248" y1="252" x2="248" y2="216" stroke="rgba(237,232,224,0.15)" stroke-width="8" stroke-linecap="butt"></line>
        <line x1="248" y1="252" x2="248" y2="222" stroke="rgba(139,26,10,0.6)" stroke-width="8" stroke-linecap="butt"></line>
        <line x1="262" y1="252" x2="262" y2="216" stroke="rgba(237,232,224,0.15)" stroke-width="8" stroke-linecap="butt"></line>
        <line x1="262" y1="252" x2="262" y2="212" stroke="rgba(139,26,10,0.75)" stroke-width="8" stroke-linecap="butt"></line>
        <line x1="276" y1="252" x2="276" y2="216" stroke="rgba(237,232,224,0.15)" stroke-width="8" stroke-linecap="butt"></line>
        <line x1="276" y1="252" x2="276" y2="226" stroke="rgba(139,26,10,0.55)" stroke-width="8" stroke-linecap="butt"></line>
        
        <path d="M316,206 L372,205 L373,224 L317,225 Z" fill="url(#hls2)" stroke="rgba(139,26,10,0.85)" stroke-width="1.5"></path>
        <text x="327" y="219" font-family="&#39;DM Mono&#39;, monospace" font-size="9" fill="rgba(237,232,224,0.9)" letter-spacing="2">LIVE</text>
        
        <circle cx="236" cy="278" r="5" fill="none" stroke="rgba(139,26,10,0.8)" stroke-width="1.5"></circle>
        <circle cx="236" cy="278" r="2.5" fill="rgba(139,26,10,0.9)"></circle>

        
        <path d="M300,222 Q322,196 322,222 Q322,248 300,222" stroke="rgba(139,26,10,0.75)" stroke-width="2" fill="none"></path>
        <path d="M300,222 Q348,170 348,222 Q348,274 300,222" stroke="rgba(139,26,10,0.5)" stroke-width="1.5" fill="none"></path>
        <path d="M300,222 Q388,118 388,222 Q388,326 300,222" stroke="rgba(139,26,10,0.28)" stroke-width="1.5" fill="none"></path>
        <path d="M300,222 Q440,72 440,222 Q440,372 300,222" stroke="rgba(139,26,10,0.14)" stroke-width="1" fill="none"></path>
        <path d="M300,222 Q500,22 500,222 Q500,422 300,222" stroke="rgba(139,26,10,0.07)" stroke-width="1" fill="none"></path>
        
        <path d="M300,222 Q278,196 278,222 Q278,248 300,222" stroke="rgba(139,26,10,0.75)" stroke-width="2" fill="none"></path>
        <path d="M300,222 Q252,170 252,222 Q252,274 300,222" stroke="rgba(139,26,10,0.5)" stroke-width="1.5" fill="none"></path>
        <path d="M300,222 Q212,118 212,222 Q212,326 300,222" stroke="rgba(139,26,10,0.28)" stroke-width="1.5" fill="none"></path>

        
        
        <path d="M62,320 L138,318 L140,362 L64,364 Z" fill="url(#hls1)" stroke="rgba(237,232,224,0.35)" stroke-width="1.5"></path>
        <text x="74" y="336" font-family="&#39;DM Mono&#39;, monospace" font-size="7" fill="rgba(237,232,224,0.3)" letter-spacing="1">YOUTUBE</text>
        <line x1="72" y1="344" x2="128" y2="344" stroke="rgba(139,26,10,0.35)" stroke-width="1.5"></line>
        
        <path d="M176,320 L252,318 L254,362 L178,364 Z" fill="url(#hls1)" stroke="rgba(237,232,224,0.35)" stroke-width="1.5"></path>
        <text x="192" y="336" font-family="&#39;DM Mono&#39;, monospace" font-size="7" fill="rgba(237,232,224,0.3)" letter-spacing="1">ZOOM</text>
        <line x1="186" y1="344" x2="242" y2="344" stroke="rgba(139,26,10,0.3)" stroke-width="1.5"></line>
        
        <path d="M346,320 L422,318 L424,362 L348,364 Z" fill="url(#hls1)" stroke="rgba(237,232,224,0.35)" stroke-width="1.5"></path>
        <text x="356" y="336" font-family="&#39;DM Mono&#39;, monospace" font-size="7" fill="rgba(237,232,224,0.3)" letter-spacing="1">FACEBOOK</text>
        <line x1="356" y1="344" x2="412" y2="344" stroke="rgba(139,26,10,0.3)" stroke-width="1.5"></line>
        
        <path d="M460,320 L536,318 L538,362 L462,364 Z" fill="url(#hls1)" stroke="rgba(237,232,224,0.35)" stroke-width="1.5"></path>
        <text x="472" y="336" font-family="&#39;DM Mono&#39;, monospace" font-size="7" fill="rgba(237,232,224,0.3)" letter-spacing="1">TEAMS</text>
        <line x1="470" y1="344" x2="526" y2="344" stroke="rgba(139,26,10,0.28)" stroke-width="1.5"></line>

        
        <path d="M280,266 Q180,290 100,320" stroke="rgba(237,232,224,0.15)" stroke-width="1.5" stroke-dasharray="4 3" fill="none"></path>
        <path d="M282,266 Q240,295 214,320" stroke="rgba(237,232,224,0.15)" stroke-width="1.5" stroke-dasharray="4 3" fill="none"></path>
        <path d="M318,266 Q355,295 384,320" stroke="rgba(237,232,224,0.15)" stroke-width="1.5" stroke-dasharray="4 3" fill="none"></path>
        <path d="M320,266 Q420,290 498,320" stroke="rgba(237,232,224,0.15)" stroke-width="1.5" stroke-dasharray="4 3" fill="none"></path>
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
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 440" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <defs>
          <pattern id="hh1" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
            <line x1="0" y1="0" x2="0" y2="8" stroke="rgba(237,232,224,0.06)" stroke-width="1"></line>
          </pattern>
          <pattern id="hh2" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(-45)">
            <line x1="0" y1="0" x2="0" y2="8" stroke="rgba(237,232,224,0.06)" stroke-width="1"></line>
          </pattern>
        </defs>

        
        <path d="M44,138 L232,136 L234,302 L46,304 Z" fill="url(#hh1)" stroke="rgba(237,232,224,0.5)" stroke-width="2"></path>
        <text x="58" y="158" font-family="&#39;DM Mono&#39;, monospace" font-size="7.5" fill="rgba(237,232,224,0.28)" letter-spacing="2">IN-PERSON</text>
        
        <path d="M110,234 L170,232 L172,292 L108,294 Z" fill="url(#hh2)" stroke="rgba(237,232,224,0.3)" stroke-width="1.5"></path>
        
        <circle cx="140" cy="202" r="14" fill="none" stroke="rgba(237,232,224,0.35)" stroke-width="1.5"></circle>
        <path d="M126,216 Q126,238 128,246 Q140,250 152,246 Q154,238 154,216" fill="none" stroke="rgba(237,232,224,0.3)" stroke-width="1.5"></path>
        
        <circle cx="66" cy="272" r="6" fill="none" stroke="rgba(237,232,224,0.2)" stroke-width="1.5"></circle>
        <circle cx="84" cy="272" r="6" fill="none" stroke="rgba(237,232,224,0.2)" stroke-width="1.5"></circle>
        <circle cx="102" cy="272" r="6" fill="none" stroke="rgba(237,232,224,0.2)" stroke-width="1.5"></circle>
        <circle cx="188" cy="272" r="6" fill="none" stroke="rgba(237,232,224,0.2)" stroke-width="1.5"></circle>
        <circle cx="206" cy="272" r="6" fill="none" stroke="rgba(237,232,224,0.2)" stroke-width="1.5"></circle>
        <circle cx="66" cy="258" r="6" fill="none" stroke="rgba(237,232,224,0.15)" stroke-width="1"></circle>
        <circle cx="84" cy="258" r="6" fill="none" stroke="rgba(237,232,224,0.15)" stroke-width="1"></circle>
        <circle cx="206" cy="258" r="6" fill="none" stroke="rgba(237,232,224,0.15)" stroke-width="1"></circle>

        
        <path d="M368,138 L556,136 L558,302 L370,304 Z" fill="url(#hh1)" stroke="rgba(237,232,224,0.5)" stroke-width="2"></path>
        <text x="382" y="158" font-family="&#39;DM Mono&#39;, monospace" font-size="7.5" fill="rgba(237,232,224,0.28)" letter-spacing="2">REMOTE</text>
        
        <path d="M380,164 L436,163 L437,203 L381,204 Z" fill="url(#hh2)" stroke="rgba(237,232,224,0.25)" stroke-width="1.5"></path>
        <circle cx="408" cy="180" r="8" fill="none" stroke="rgba(237,232,224,0.2)" stroke-width="1"></circle>
        <path d="M444,164 L500,163 L501,203 L445,204 Z" fill="url(#hh2)" stroke="rgba(237,232,224,0.25)" stroke-width="1.5"></path>
        <circle cx="472" cy="180" r="8" fill="none" stroke="rgba(237,232,224,0.2)" stroke-width="1"></circle>
        
        <path d="M508,162 L542,161 L543,205 L509,206 Z" fill="none" stroke="rgba(139,26,10,0.65)" stroke-width="1.5"></path>
        <circle cx="525" cy="180" r="8" fill="none" stroke="rgba(139,26,10,0.4)" stroke-width="1"></circle>
        <path d="M510,200 L540,200 L540,204 L510,204 Z" fill="rgba(139,26,10,0.4)"></path>
        <text x="513" y="203" font-family="&#39;DM Mono&#39;, monospace" font-size="5.5" fill="rgba(237,232,224,0.8)" letter-spacing="0.5">LIVE</text>

        <path d="M380,212 L436,211 L437,251 L381,252 Z" fill="url(#hh2)" stroke="rgba(237,232,224,0.25)" stroke-width="1.5"></path>
        <circle cx="408" cy="228" r="8" fill="none" stroke="rgba(237,232,224,0.2)" stroke-width="1"></circle>
        <path d="M444,212 L500,211 L501,251 L445,252 Z" fill="url(#hh2)" stroke="rgba(237,232,224,0.25)" stroke-width="1.5"></path>
        <circle cx="472" cy="228" r="8" fill="none" stroke="rgba(237,232,224,0.2)" stroke-width="1"></circle>
        <path d="M508,212 L542,211 L543,251 L509,252 Z" fill="url(#hh2)" stroke="rgba(237,232,224,0.25)" stroke-width="1.5"></path>
        <circle cx="525" cy="228" r="8" fill="none" stroke="rgba(237,232,224,0.2)" stroke-width="1"></circle>

        
        <path d="M234,220 Q268,220 284,220 Q300,220 316,220 Q332,220 368,220" stroke="rgba(139,26,10,0.55)" stroke-width="2" stroke-dasharray="6 4" fill="none"></path>
        
        <circle cx="260" cy="220" r="4" fill="rgba(139,26,10,0.7)" stroke="rgba(139,26,10,0.9)" stroke-width="1"></circle>
        <circle cx="300" cy="220" r="4" fill="rgba(139,26,10,0.7)" stroke="rgba(139,26,10,0.9)" stroke-width="1"></circle>
        <circle cx="340" cy="220" r="4" fill="rgba(139,26,10,0.7)" stroke="rgba(139,26,10,0.9)" stroke-width="1"></circle>
        
        <text x="274" y="212" font-family="&#39;DM Mono&#39;, monospace" font-size="7" fill="rgba(237,232,224,0.2)" letter-spacing="1.5">BRIDGE</text>

        
        <path d="M116,330 L484,328 L486,368 L118,370 Z" fill="url(#hh1)" stroke="rgba(237,232,224,0.25)" stroke-width="1.5"></path>
        <text x="132" y="346" font-family="&#39;DM Mono&#39;, monospace" font-size="7" fill="rgba(237,232,224,0.2)" letter-spacing="1.5">IN-PERSON</text>
        <text x="132" y="360" font-family="&#39;DM Mono&#39;, monospace" font-size="10" fill="rgba(237,232,224,0.4)">142</text>
        <line x1="210" y1="334" x2="210" y2="362" stroke="rgba(237,232,224,0.12)" stroke-width="1"></line>
        <text x="220" y="346" font-family="&#39;DM Mono&#39;, monospace" font-size="7" fill="rgba(237,232,224,0.2)" letter-spacing="1.5">REMOTE</text>
        <text x="220" y="360" font-family="&#39;DM Mono&#39;, monospace" font-size="10" fill="rgba(237,232,224,0.4)">318</text>
        <line x1="298" y1="334" x2="298" y2="362" stroke="rgba(237,232,224,0.12)" stroke-width="1"></line>
        <text x="308" y="346" font-family="&#39;DM Mono&#39;, monospace" font-size="7" fill="rgba(237,232,224,0.2)" letter-spacing="1.5">TOTAL</text>
        <text x="308" y="360" font-family="&#39;DM Mono&#39;, monospace" font-size="10" fill="rgba(139,26,10,0.85)">460</text>
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
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 440" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <defs>
          <pattern id="her1" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
            <line x1="0" y1="0" x2="0" y2="8" stroke="rgba(237,232,224,0.06)" stroke-width="1"></line>
          </pattern>
          <pattern id="her2" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(-45)">
            <line x1="0" y1="0" x2="0" y2="6" stroke="rgba(139,26,10,0.14)" stroke-width="1"></line>
          </pattern>
        </defs>

        
        <path d="M38,110 Q40,108 108,110 Q110,110 110,220 Q108,222 38,220 Q36,220 38,110 Z" fill="url(#her1)" stroke="rgba(237,232,224,0.5)" stroke-width="2"></path>
        
        <circle cx="74" cy="162" r="34" fill="url(#her1)" stroke="rgba(237,232,224,0.45)" stroke-width="1.5"></circle>
        <circle cx="74" cy="162" r="24" fill="none" stroke="rgba(237,232,224,0.2)" stroke-width="1" stroke-dasharray="3 2"></circle>
        <circle cx="74" cy="162" r="14" fill="url(#her2)" stroke="rgba(139,26,10,0.6)" stroke-width="1.5"></circle>
        <circle cx="74" cy="162" r="5" fill="none" stroke="rgba(237,232,224,0.45)" stroke-width="1.5"></circle>
        <circle cx="74" cy="162" r="2" fill="rgba(139,26,10,0.9)"></circle>
        
        <circle cx="74" cy="121" r="9" fill="url(#her1)" stroke="rgba(237,232,224,0.4)" stroke-width="1.5"></circle>
        <circle cx="74" cy="121" r="4" fill="rgba(139,26,10,0.6)" stroke="rgba(139,26,10,0.7)" stroke-width="1"></circle>
        
        <path d="M50,205 Q51,200 98,200 Q99,205 98,210 Q51,210 50,205 Z" fill="none" stroke="rgba(237,232,224,0.3)" stroke-width="1.5"></path>
        
        <path d="M70,220 Q70,246 70,268" stroke="rgba(237,232,224,0.3)" stroke-width="2"></path>
        <path d="M44,268 Q70,264 96,268" stroke="rgba(237,232,224,0.3)" stroke-width="1.5"></path>

        
        
        <path d="M132,74 Q134,72 278,74 Q280,74 280,178 Q278,180 132,180 Q130,180 132,74 Z" fill="url(#her1)" stroke="rgba(237,232,224,0.5)" stroke-width="2"></path>
        
        <path d="M140,82 L270,82 L270,170 L140,170 Z" fill="url(#her2)" stroke="rgba(139,26,10,0.25)" stroke-width="1"></path>
        
        <path d="M152,96 L210,95" stroke="rgba(237,232,224,0.45)" stroke-width="2.5"></path>
        <path d="M152,108 L248,107" stroke="rgba(237,232,224,0.15)" stroke-width="1.5"></path>
        <path d="M152,116 L230,115" stroke="rgba(237,232,224,0.12)" stroke-width="1.5"></path>
        
        <line x1="156" y1="158" x2="156" y2="128" stroke="rgba(139,26,10,0.55)" stroke-width="9" stroke-linecap="butt"></line>
        <line x1="170" y1="158" x2="170" y2="138" stroke="rgba(139,26,10,0.4)" stroke-width="9" stroke-linecap="butt"></line>
        <line x1="184" y1="158" x2="184" y2="132" stroke="rgba(139,26,10,0.5)" stroke-width="9" stroke-linecap="butt"></line>
        <line x1="198" y1="158" x2="198" y2="124" stroke="rgba(139,26,10,0.65)" stroke-width="9" stroke-linecap="butt"></line>
        <line x1="212" y1="158" x2="212" y2="135" stroke="rgba(139,26,10,0.45)" stroke-width="9" stroke-linecap="butt"></line>
        
        <path d="M205,180 Q205,204 206,224" stroke="rgba(237,232,224,0.3)" stroke-width="2"></path>
        <path d="M176,224 Q205,220 234,224" stroke="rgba(237,232,224,0.3)" stroke-width="1.5"></path>

        
        
        <path d="M296,82 Q296,76 305,76 Q314,76 314,82 L314,112 Q314,118 305,118 Q296,118 296,112 Z" fill="url(#her1)" stroke="rgba(237,232,224,0.5)" stroke-width="1.5"></path>
        
        <line x1="298" y1="90" x2="312" y2="90" stroke="rgba(237,232,224,0.25)" stroke-width="1"></line>
        <line x1="298" y1="97" x2="312" y2="97" stroke="rgba(237,232,224,0.25)" stroke-width="1"></line>
        <line x1="298" y1="104" x2="312" y2="104" stroke="rgba(237,232,224,0.25)" stroke-width="1"></line>
        <line x1="298" y1="111" x2="312" y2="111" stroke="rgba(237,232,224,0.25)" stroke-width="1"></line>
        
        <path d="M305,118 Q304,160 305,240" stroke="rgba(237,232,224,0.35)" stroke-width="2"></path>
        
        <path d="M305,152 Q324,144 348,140" stroke="rgba(237,232,224,0.25)" stroke-width="1.5"></path>
        
        <path d="M305,240 Q292,270 288,300" stroke="rgba(237,232,224,0.15)" stroke-width="1.5" stroke-dasharray="3 3"></path>
        
        <ellipse cx="305" cy="244" rx="24" ry="6" fill="none" stroke="rgba(237,232,224,0.3)" stroke-width="1.5"></ellipse>

        
        <g transform="translate(356,100)">
          
          <path d="M0,0 Q2,-2 88,-2 Q90,0 90,52 Q88,54 0,54 Q-2,52 0,0 Z" fill="url(#her1)" stroke="rgba(237,232,224,0.5)" stroke-width="1.5"></path>
          
          <circle cx="32" cy="27" r="22" fill="url(#her1)" stroke="rgba(237,232,224,0.45)" stroke-width="1.5"></circle>
          <circle cx="32" cy="27" r="15" fill="none" stroke="rgba(237,232,224,0.25)" stroke-width="1" stroke-dasharray="3 2"></circle>
          <circle cx="32" cy="27" r="8" fill="url(#her2)" stroke="rgba(139,26,10,0.6)" stroke-width="1.5"></circle>
          <circle cx="32" cy="27" r="3.5" fill="rgba(139,26,10,0.9)"></circle>
          <path d="M22,18 Q26,14 30,17" stroke="rgba(237,232,224,0.35)" stroke-width="1.5" fill="none"></path>
          
          <path d="M60,-14 L90,-14 L91,10 L61,10 Z" fill="url(#her1)" stroke="rgba(237,232,224,0.35)" stroke-width="1.5"></path>
          
          <circle cx="78" cy="8" r="5" fill="none" stroke="rgba(139,26,10,0.8)" stroke-width="1.5"></circle>
          <circle cx="78" cy="8" r="2.5" fill="rgba(139,26,10,0.95)"></circle>
          
          <path d="M30,-2 L70,-2 L70,-14 L30,-14 Z" fill="url(#her1)" stroke="rgba(237,232,224,0.3)" stroke-width="1.5"></path>
          
          <path d="M62,52 L90,52 L90,74 L62,74 Z" fill="url(#her1)" stroke="rgba(237,232,224,0.3)" stroke-width="1.5"></path>
          
          <path d="M46,74 Q24,120 6,174" stroke="rgba(237,232,224,0.35)" stroke-width="2"></path>
          <path d="M46,74 Q46,124 46,178" stroke="rgba(237,232,224,0.35)" stroke-width="2"></path>
          <path d="M46,74 Q68,120 86,174" stroke="rgba(237,232,224,0.35)" stroke-width="2"></path>
          <path d="M14,142 Q46,138 78,142" stroke="rgba(237,232,224,0.18)" stroke-width="1" stroke-dasharray="3 2"></path>
        </g>

        
        <path d="M500,88 Q502,86 560,88 Q562,88 562,152 Q560,154 500,154 Q498,154 500,88 Z" fill="url(#her1)" stroke="rgba(237,232,224,0.5)" stroke-width="2"></path>
        
        <path d="M507,96 L554,96 L554,144 L507,144 Z" fill="url(#her2)" stroke="rgba(139,26,10,0.2)" stroke-width="1"></path>
        
        <path d="M514,108 L544,107" stroke="rgba(237,232,224,0.4)" stroke-width="2"></path>
        <path d="M514,118 L548,117" stroke="rgba(237,232,224,0.15)" stroke-width="1.5"></path>
        <path d="M514,126 L538,125" stroke="rgba(237,232,224,0.12)" stroke-width="1.5"></path>
        
        <path d="M516,133 L548,132 L549,143 L517,144 Z" fill="rgba(139,26,10,0.5)" stroke="rgba(139,26,10,0.75)" stroke-width="1.5"></path>
        <text x="521" y="141" font-family="&#39;DM Mono&#39;, monospace" font-size="7" fill="rgba(237,232,224,0.85)" letter-spacing="1.5">LIVE</text>
        
        <path d="M530,154 Q529,174 530,192" stroke="rgba(237,232,224,0.3)" stroke-width="2"></path>
        <path d="M510,192 Q530,188 550,192" stroke="rgba(237,232,224,0.3)" stroke-width="1.5"></path>

        
        <path d="M36,284 Q200,280 300,282 Q400,280 564,284" stroke="rgba(237,232,224,0.15)" stroke-width="1.5" fill="none" stroke-dasharray="8 4"></path>
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
