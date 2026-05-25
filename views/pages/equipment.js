module.exports = function equipmentPage({ site, equipment }) {
  const svgs = {
    'projectors-screens': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 350" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <defs>
          <pattern id="pg-h1" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
            <line x1="0" y1="0" x2="0" y2="8" stroke="rgba(237,232,224,0.07)" stroke-width="1"></line>
          </pattern>
          <pattern id="pg-h2" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(30)">
            <line x1="0" y1="0" x2="0" y2="6" stroke="rgba(139,26,10,0.18)" stroke-width="1"></line>
          </pattern>
        </defs>

        
        <path d="M70,148 Q72,145 196,147 Q198,147 198,200 Q196,202 70,200 Q68,202 70,148 Z" fill="url(#pg-h1)" stroke="rgba(237,232,224,0.55)" stroke-width="2"></path>
        
        <circle cx="80" cy="156" r="2.5" fill="none" stroke="rgba(237,232,224,0.35)" stroke-width="1"></circle>
        <circle cx="188" cy="156" r="2.5" fill="none" stroke="rgba(237,232,224,0.35)" stroke-width="1"></circle>
        <circle cx="80" cy="192" r="2.5" fill="none" stroke="rgba(237,232,224,0.35)" stroke-width="1"></circle>
        <circle cx="188" cy="192" r="2.5" fill="none" stroke="rgba(237,232,224,0.35)" stroke-width="1"></circle>
        
        <line x1="92" y1="160" x2="92" y2="188" stroke="rgba(237,232,224,0.22)" stroke-width="1"></line>
        <line x1="100" y1="160" x2="100" y2="188" stroke="rgba(237,232,224,0.22)" stroke-width="1"></line>
        <line x1="108" y1="160" x2="108" y2="188" stroke="rgba(237,232,224,0.22)" stroke-width="1"></line>
        
        <circle cx="128" cy="164" r="4" fill="none" stroke="rgba(139,26,10,0.75)" stroke-width="1.5"></circle>
        <circle cx="128" cy="164" r="2" fill="rgba(139,26,10,0.9)"></circle>
        
        <circle cx="128" cy="184" r="3" fill="none" stroke="rgba(237,232,224,0.3)" stroke-width="1"></circle>

        
        <circle cx="178" cy="174" r="20" fill="url(#pg-h1)" stroke="rgba(237,232,224,0.55)" stroke-width="2"></circle>
        <circle cx="178" cy="174" r="14" fill="none" stroke="rgba(237,232,224,0.3)" stroke-width="1" stroke-dasharray="3 2"></circle>
        <circle cx="178" cy="174" r="9" fill="url(#pg-h2)" stroke="rgba(139,26,10,0.7)" stroke-width="1.5"></circle>
        <circle cx="178" cy="174" r="4" fill="rgba(139,26,10,0.95)"></circle>
        
        <path d="M168,164 Q172,160 176,163" stroke="rgba(237,232,224,0.4)" stroke-width="1.5" fill="none"></path>

        
        <path d="M100,202 Q100,212 100,222" stroke="rgba(237,232,224,0.3)" stroke-width="2"></path>
        <path d="M160,202 Q160,210 160,218" stroke="rgba(237,232,224,0.25)" stroke-width="1.5"></path>

        
        <line x1="198" y1="155" x2="448" y2="62" stroke="rgba(139,26,10,0.4)" stroke-width="1.5" stroke-dasharray="6 4"></line>
        <line x1="198" y1="192" x2="448" y2="290" stroke="rgba(139,26,10,0.4)" stroke-width="1.5" stroke-dasharray="6 4"></line>
        <polygon points="198,155 448,62 448,290 198,192" fill="rgba(139,26,10,0.05)"></polygon>
        
        <line x1="198" y1="174" x2="448" y2="176" stroke="rgba(139,26,10,0.2)" stroke-width="1" stroke-dasharray="2 4"></line>

        
        <path d="M448,54 Q450,52 700,54 Q702,54 702,294 Q700,296 448,296 Q446,296 448,54 Z" fill="url(#pg-h1)" stroke="rgba(237,232,224,0.55)" stroke-width="2"></path>
        
        <circle cx="460" cy="64" r="3" fill="none" stroke="rgba(237,232,224,0.35)" stroke-width="1.2"></circle>
        <circle cx="690" cy="64" r="3" fill="none" stroke="rgba(237,232,224,0.35)" stroke-width="1.2"></circle>
        <circle cx="460" cy="286" r="3" fill="none" stroke="rgba(237,232,224,0.35)" stroke-width="1.2"></circle>
        <circle cx="690" cy="286" r="3" fill="none" stroke="rgba(237,232,224,0.35)" stroke-width="1.2"></circle>
        
        <path d="M462,68 L688,68 L688,282 L462,282 Z" fill="url(#pg-h2)" stroke="rgba(139,26,10,0.22)" stroke-width="1"></path>

        
        <path d="M478,96 L580,95" stroke="rgba(237,232,224,0.5)" stroke-width="3"></path>
        <path d="M478,110 L630,109" stroke="rgba(237,232,224,0.18)" stroke-width="1.5"></path>
        <path d="M478,120 L600,119" stroke="rgba(237,232,224,0.14)" stroke-width="1.5"></path>

        
        <line x1="484" y1="258" x2="484" y2="202" stroke="rgba(139,26,10,0.55)" stroke-width="16" stroke-linecap="butt"></line>
        <line x1="510" y1="258" x2="510" y2="220" stroke="rgba(139,26,10,0.4)" stroke-width="16" stroke-linecap="butt"></line>
        <line x1="536" y1="258" x2="536" y2="210" stroke="rgba(139,26,10,0.5)" stroke-width="16" stroke-linecap="butt"></line>
        <line x1="562" y1="258" x2="562" y2="196" stroke="rgba(139,26,10,0.65)" stroke-width="16" stroke-linecap="butt"></line>
        <line x1="588" y1="258" x2="588" y2="214" stroke="rgba(139,26,10,0.45)" stroke-width="16" stroke-linecap="butt"></line>
        <line x1="614" y1="258" x2="614" y2="204" stroke="rgba(139,26,10,0.5)" stroke-width="16" stroke-linecap="butt"></line>
        
        <path d="M474,260 Q548,258 624,260" stroke="rgba(237,232,224,0.2)" stroke-width="1"></path>

        
        <path d="M572,296 Q571,316 572,330" stroke="rgba(237,232,224,0.35)" stroke-width="2.5"></path>
        <path d="M540,330 Q572,326 604,330" stroke="rgba(237,232,224,0.35)" stroke-width="2"></path>

        
        <line x1="178" y1="138" x2="178" y2="118" stroke="rgba(237,232,224,0.18)" stroke-width="1"></line>
        <text x="116" y="115" font-family="&#39;DM Mono&#39;, monospace" font-size="9" fill="rgba(237,232,224,0.22)" letter-spacing="2">PROJECTOR</text>
        <line x1="575" y1="56" x2="575" y2="36" stroke="rgba(237,232,224,0.18)" stroke-width="1"></line>
        <text x="510" y="33" font-family="&#39;DM Mono&#39;, monospace" font-size="9" fill="rgba(237,232,224,0.22)" letter-spacing="2">SCREEN</text>
      </svg>`,
    'sound-pa-systems': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 350" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <defs>
          <pattern id="eq-s1" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
            <line x1="0" y1="0" x2="0" y2="8" stroke="rgba(237,232,224,0.07)" stroke-width="1"></line>
          </pattern>
          <pattern id="eq-s2" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(30)">
            <line x1="0" y1="0" x2="0" y2="6" stroke="rgba(139,26,10,0.18)" stroke-width="1"></line>
          </pattern>
        </defs>

        
        <path d="M44,60 Q46,58 108,60 Q110,60 110,290 Q108,292 44,292 Q42,292 44,60 Z" fill="url(#eq-s1)" stroke="rgba(237,232,224,0.52)" stroke-width="2"></path>
        
        <circle cx="76" cy="96" r="14" fill="url(#eq-s1)" stroke="rgba(237,232,224,0.4)" stroke-width="1.5"></circle>
        <circle cx="76" cy="96" r="7" fill="url(#eq-s2)" stroke="rgba(139,26,10,0.6)" stroke-width="1.5"></circle>
        <circle cx="76" cy="96" r="3" fill="rgba(139,26,10,0.9)"></circle>
        <circle cx="76" cy="140" r="14" fill="url(#eq-s1)" stroke="rgba(237,232,224,0.4)" stroke-width="1.5"></circle>
        <circle cx="76" cy="140" r="7" fill="url(#eq-s2)" stroke="rgba(139,26,10,0.6)" stroke-width="1.5"></circle>
        <circle cx="76" cy="140" r="3" fill="rgba(139,26,10,0.9)"></circle>
        <circle cx="76" cy="184" r="14" fill="url(#eq-s1)" stroke="rgba(237,232,224,0.4)" stroke-width="1.5"></circle>
        <circle cx="76" cy="184" r="7" fill="url(#eq-s2)" stroke="rgba(139,26,10,0.6)" stroke-width="1.5"></circle>
        <circle cx="76" cy="184" r="3" fill="rgba(139,26,10,0.9)"></circle>
        <circle cx="76" cy="228" r="14" fill="url(#eq-s1)" stroke="rgba(237,232,224,0.4)" stroke-width="1.5"></circle>
        <circle cx="76" cy="228" r="7" fill="url(#eq-s2)" stroke="rgba(139,26,10,0.6)" stroke-width="1.5"></circle>
        <circle cx="76" cy="228" r="3" fill="rgba(139,26,10,0.9)"></circle>
        <circle cx="76" cy="272" r="14" fill="url(#eq-s1)" stroke="rgba(237,232,224,0.4)" stroke-width="1.5"></circle>
        <circle cx="76" cy="272" r="7" fill="url(#eq-s2)" stroke="rgba(139,26,10,0.6)" stroke-width="1.5"></circle>
        <circle cx="76" cy="272" r="3" fill="rgba(139,26,10,0.9)"></circle>
        
        <path d="M54,54 Q76,50 98,54" stroke="rgba(237,232,224,0.3)" stroke-width="2" fill="none"></path>

        
        <path d="M692,60 Q694,58 756,60 Q758,60 758,290 Q756,292 692,292 Q690,292 692,60 Z" fill="url(#eq-s1)" stroke="rgba(237,232,224,0.52)" stroke-width="2"></path>
        <circle cx="724" cy="96" r="14" fill="url(#eq-s1)" stroke="rgba(237,232,224,0.4)" stroke-width="1.5"></circle>
        <circle cx="724" cy="96" r="7" fill="url(#eq-s2)" stroke="rgba(139,26,10,0.6)" stroke-width="1.5"></circle>
        <circle cx="724" cy="96" r="3" fill="rgba(139,26,10,0.9)"></circle>
        <circle cx="724" cy="140" r="14" fill="url(#eq-s1)" stroke="rgba(237,232,224,0.4)" stroke-width="1.5"></circle>
        <circle cx="724" cy="140" r="7" fill="url(#eq-s2)" stroke="rgba(139,26,10,0.6)" stroke-width="1.5"></circle>
        <circle cx="724" cy="140" r="3" fill="rgba(139,26,10,0.9)"></circle>
        <circle cx="724" cy="184" r="14" fill="url(#eq-s1)" stroke="rgba(237,232,224,0.4)" stroke-width="1.5"></circle>
        <circle cx="724" cy="184" r="7" fill="url(#eq-s2)" stroke="rgba(139,26,10,0.6)" stroke-width="1.5"></circle>
        <circle cx="724" cy="184" r="3" fill="rgba(139,26,10,0.9)"></circle>
        <circle cx="724" cy="228" r="14" fill="url(#eq-s1)" stroke="rgba(237,232,224,0.4)" stroke-width="1.5"></circle>
        <circle cx="724" cy="228" r="7" fill="url(#eq-s2)" stroke="rgba(139,26,10,0.6)" stroke-width="1.5"></circle>
        <circle cx="724" cy="228" r="3" fill="rgba(139,26,10,0.9)"></circle>
        <circle cx="724" cy="272" r="14" fill="url(#eq-s1)" stroke="rgba(237,232,224,0.4)" stroke-width="1.5"></circle>
        <circle cx="724" cy="272" r="7" fill="url(#eq-s2)" stroke="rgba(139,26,10,0.6)" stroke-width="1.5"></circle>
        <circle cx="724" cy="272" r="3" fill="rgba(139,26,10,0.9)"></circle>
        <path d="M702,54 Q724,50 746,54" stroke="rgba(237,232,224,0.3)" stroke-width="2" fill="none"></path>

        
        <path d="M244,218 Q246,215 556,217 Q558,217 558,318 Q556,320 244,320 Q242,320 244,218 Z" fill="url(#eq-s1)" stroke="rgba(237,232,224,0.5)" stroke-width="2"></path>
        
        <line x1="268" y1="234" x2="268" y2="304" stroke="rgba(237,232,224,0.1)" stroke-width="6" stroke-linecap="butt"></line>
        <path d="M262,254 Q262,250 274,250 Q274,258 262,258 Z" fill="url(#eq-s1)" stroke="rgba(237,232,224,0.45)" stroke-width="1.5"></path>
        <line x1="300" y1="234" x2="300" y2="304" stroke="rgba(237,232,224,0.1)" stroke-width="6" stroke-linecap="butt"></line>
        <path d="M294,268 Q294,264 306,264 Q306,272 294,272 Z" fill="url(#eq-s1)" stroke="rgba(237,232,224,0.45)" stroke-width="1.5"></path>
        <line x1="332" y1="234" x2="332" y2="304" stroke="rgba(237,232,224,0.1)" stroke-width="6" stroke-linecap="butt"></line>
        <path d="M326,246 Q326,242 338,242 Q338,250 326,250 Z" fill="url(#eq-s2)" stroke="rgba(139,26,10,0.75)" stroke-width="1.5"></path>
        <line x1="364" y1="234" x2="364" y2="304" stroke="rgba(237,232,224,0.1)" stroke-width="6" stroke-linecap="butt"></line>
        <path d="M358,274 Q358,270 370,270 Q370,278 358,278 Z" fill="url(#eq-s1)" stroke="rgba(237,232,224,0.45)" stroke-width="1.5"></path>
        <line x1="396" y1="234" x2="396" y2="304" stroke="rgba(237,232,224,0.1)" stroke-width="6" stroke-linecap="butt"></line>
        <path d="M390,256 Q390,252 402,252 Q402,260 390,260 Z" fill="url(#eq-s1)" stroke="rgba(237,232,224,0.45)" stroke-width="1.5"></path>
        <line x1="428" y1="234" x2="428" y2="304" stroke="rgba(237,232,224,0.1)" stroke-width="6" stroke-linecap="butt"></line>
        <path d="M422,244 Q422,240 434,240 Q434,248 422,248 Z" fill="url(#eq-s2)" stroke="rgba(139,26,10,0.65)" stroke-width="1.5"></path>
        <line x1="460" y1="234" x2="460" y2="304" stroke="rgba(237,232,224,0.1)" stroke-width="6" stroke-linecap="butt"></line>
        <path d="M454,262 Q454,258 466,258 Q466,266 454,266 Z" fill="url(#eq-s1)" stroke="rgba(237,232,224,0.45)" stroke-width="1.5"></path>
        
        <line x1="510" y1="234" x2="510" y2="304" stroke="rgba(237,232,224,0.12)" stroke-width="10" stroke-linecap="butt"></line>
        <path d="M502,256 Q502,250 518,250 Q518,262 502,262 Z" fill="url(#eq-s2)" stroke="rgba(139,26,10,0.85)" stroke-width="2"></path>
        
        <path d="M530,232 L548,231 L549,308 L531,309 Z" fill="rgba(0,0,0,0.3)" stroke="rgba(237,232,224,0.2)" stroke-width="1.5"></path>
        <line x1="533" y1="298" x2="545" y2="298" stroke="rgba(139,26,10,0.65)" stroke-width="3" stroke-linecap="butt"></line>
        <line x1="533" y1="292" x2="545" y2="292" stroke="rgba(139,26,10,0.55)" stroke-width="3" stroke-linecap="butt"></line>
        <line x1="533" y1="286" x2="545" y2="286" stroke="rgba(139,26,10,0.45)" stroke-width="3" stroke-linecap="butt"></line>
        <line x1="533" y1="280" x2="545" y2="280" stroke="rgba(139,26,10,0.35)" stroke-width="3" stroke-linecap="butt"></line>
        <line x1="533" y1="274" x2="539" y2="274" stroke="rgba(237,232,224,0.1)" stroke-width="3" stroke-linecap="butt"></line>

        
        <path d="M392,64 Q392,58 400,58 Q408,58 408,64 L408,118 Q408,124 400,124 Q392,124 392,118 Z" fill="url(#eq-s1)" stroke="rgba(237,232,224,0.5)" stroke-width="1.5"></path>
        <line x1="394" y1="74" x2="406" y2="74" stroke="rgba(237,232,224,0.25)" stroke-width="1"></line>
        <line x1="394" y1="83" x2="406" y2="83" stroke="rgba(237,232,224,0.25)" stroke-width="1"></line>
        <line x1="394" y1="92" x2="406" y2="92" stroke="rgba(237,232,224,0.25)" stroke-width="1"></line>
        <line x1="394" y1="101" x2="406" y2="101" stroke="rgba(237,232,224,0.25)" stroke-width="1"></line>
        <line x1="394" y1="110" x2="406" y2="110" stroke="rgba(237,232,224,0.25)" stroke-width="1"></line>
        <path d="M400,124 Q399,150 400,168" stroke="rgba(237,232,224,0.3)" stroke-width="2"></path>
        <path d="M383,166 Q391,178 400,168 Q409,178 417,166" stroke="rgba(237,232,224,0.3)" stroke-width="1.5" fill="none"></path>
        <path d="M400,178 Q399,196 400,218" stroke="rgba(237,232,224,0.3)" stroke-width="2"></path>

        
        <path d="M110,175 Q132,148 132,175 Q132,202 110,175" stroke="rgba(139,26,10,0.6)" stroke-width="1.5" fill="none"></path>
        <path d="M110,175 Q148,130 148,175 Q148,220 110,175" stroke="rgba(139,26,10,0.35)" stroke-width="1.5" fill="none"></path>
        <path d="M692,175 Q670,148 670,175 Q670,202 692,175" stroke="rgba(139,26,10,0.6)" stroke-width="1.5" fill="none"></path>
        <path d="M692,175 Q654,130 654,175 Q654,220 692,175" stroke="rgba(139,26,10,0.35)" stroke-width="1.5" fill="none"></path>

        
        <path d="M110,240 Q180,240 244,268" stroke="rgba(237,232,224,0.12)" stroke-width="1.5" stroke-dasharray="4 3" fill="none"></path>
        <path d="M692,240 Q622,240 558,268" stroke="rgba(237,232,224,0.12)" stroke-width="1.5" stroke-dasharray="4 3" fill="none"></path>
      </svg>`,
    'lighting-fixtures': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 350" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <defs>
          <pattern id="eq-l1" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
            <line x1="0" y1="0" x2="0" y2="8" stroke="rgba(237,232,224,0.07)" stroke-width="1"></line>
          </pattern>
          <pattern id="eq-l2" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(30)">
            <line x1="0" y1="0" x2="0" y2="6" stroke="rgba(139,26,10,0.18)" stroke-width="1"></line>
          </pattern>
        </defs>

        
        <path d="M48,46 Q200,42 400,44 Q600,42 752,46" stroke="rgba(237,232,224,0.55)" stroke-width="3" fill="none"></path>
        <path d="M48,56 Q200,52 400,54 Q600,52 752,56" stroke="rgba(237,232,224,0.3)" stroke-width="1.5" fill="none"></path>
        
        <line x1="108" y1="46" x2="128" y2="56" stroke="rgba(237,232,224,0.2)" stroke-width="1"></line>
        <line x1="148" y1="56" x2="168" y2="46" stroke="rgba(237,232,224,0.2)" stroke-width="1"></line>
        <line x1="228" y1="46" x2="248" y2="56" stroke="rgba(237,232,224,0.2)" stroke-width="1"></line>
        <line x1="268" y1="56" x2="288" y2="46" stroke="rgba(237,232,224,0.2)" stroke-width="1"></line>
        <line x1="368" y1="46" x2="388" y2="56" stroke="rgba(237,232,224,0.2)" stroke-width="1"></line>
        <line x1="408" y1="56" x2="428" y2="46" stroke="rgba(237,232,224,0.2)" stroke-width="1"></line>
        <line x1="508" y1="46" x2="528" y2="56" stroke="rgba(237,232,224,0.2)" stroke-width="1"></line>
        <line x1="548" y1="56" x2="568" y2="46" stroke="rgba(237,232,224,0.2)" stroke-width="1"></line>
        <line x1="628" y1="46" x2="648" y2="56" stroke="rgba(237,232,224,0.2)" stroke-width="1"></line>
        <line x1="668" y1="56" x2="688" y2="46" stroke="rgba(237,232,224,0.2)" stroke-width="1"></line>
        
        <circle cx="160" cy="51" r="5" fill="none" stroke="rgba(237,232,224,0.35)" stroke-width="1.5"></circle>
        <circle cx="310" cy="51" r="5" fill="none" stroke="rgba(237,232,224,0.35)" stroke-width="1.5"></circle>
        <circle cx="460" cy="51" r="5" fill="none" stroke="rgba(237,232,224,0.35)" stroke-width="1.5"></circle>
        <circle cx="600" cy="51" r="5" fill="none" stroke="rgba(237,232,224,0.35)" stroke-width="1.5"></circle>
        
        <path d="M52,16 Q52,30 52,46" stroke="rgba(237,232,224,0.4)" stroke-width="3"></path>
        <path d="M748,16 Q748,30 748,46" stroke="rgba(237,232,224,0.4)" stroke-width="3"></path>

        
        <g transform="translate(160,56) rotate(18,0,0)">
          <polygon points="-5,0 5,0 38,130 -38,130" fill="rgba(139,26,10,0.07)" stroke="none"></polygon>
          <path d="M-13,0 Q-14,-34 0,-36 Q14,-34 13,0 Z" fill="url(#eq-l1)" stroke="rgba(237,232,224,0.5)" stroke-width="1.5"></path>
          <circle cx="0" cy="-17" r="9" fill="none" stroke="rgba(237,232,224,0.4)" stroke-width="1.5"></circle>
          <circle cx="0" cy="-17" r="5" fill="rgba(139,26,10,0.55)" stroke="rgba(139,26,10,0.75)" stroke-width="1"></circle>
          <path d="M-16,-3 L-23,20" stroke="rgba(237,232,224,0.3)" stroke-width="2"></path>
          <path d="M16,-3 L23,20" stroke="rgba(237,232,224,0.3)" stroke-width="2"></path>
        </g>

        
        <g transform="translate(310,56) rotate(-5,0,0)">
          <polygon points="-6,0 6,0 46,148 -46,148" fill="rgba(139,26,10,0.06)" stroke="none"></polygon>
          <path d="M-15,0 Q-16,-40 0,-42 Q16,-40 15,0 Z" fill="url(#eq-l1)" stroke="rgba(237,232,224,0.5)" stroke-width="1.5"></path>
          <circle cx="0" cy="-20" r="10" fill="none" stroke="rgba(237,232,224,0.4)" stroke-width="1.5"></circle>
          <circle cx="0" cy="-20" r="5" fill="rgba(139,26,10,0.6)" stroke="rgba(139,26,10,0.8)" stroke-width="1"></circle>
          <path d="M-18,-3 L-26,24" stroke="rgba(237,232,224,0.3)" stroke-width="2"></path>
          <path d="M18,-3 L26,24" stroke="rgba(237,232,224,0.3)" stroke-width="2"></path>
          <path d="M-10,-40 L-13,-55" stroke="rgba(237,232,224,0.28)" stroke-width="2"></path>
          <path d="M10,-40 L13,-55" stroke="rgba(237,232,224,0.28)" stroke-width="2"></path>
        </g>

        
        <g transform="translate(460,56) rotate(9,0,0)">
          <polygon points="-5,0 5,0 36,126 -36,126" fill="rgba(139,26,10,0.07)" stroke="none"></polygon>
          <path d="M-12,0 Q-13,-32 0,-34 Q13,-32 12,0 Z" fill="url(#eq-l1)" stroke="rgba(237,232,224,0.48)" stroke-width="1.5"></path>
          <circle cx="0" cy="-16" r="8" fill="none" stroke="rgba(237,232,224,0.38)" stroke-width="1.5"></circle>
          <circle cx="0" cy="-16" r="4" fill="rgba(139,26,10,0.55)" stroke="rgba(139,26,10,0.7)" stroke-width="1"></circle>
          <path d="M-14,-2 L-20,18" stroke="rgba(237,232,224,0.28)" stroke-width="2"></path>
          <path d="M14,-2 L20,18" stroke="rgba(237,232,224,0.28)" stroke-width="2"></path>
        </g>

        
        <g transform="translate(600,56) rotate(-14,0,0)">
          <polygon points="-4,0 4,0 28,110 -28,110" fill="rgba(139,26,10,0.06)" stroke="none"></polygon>
          <path d="M-11,0 Q-12,-28 0,-30 Q12,-28 11,0 Z" fill="url(#eq-l1)" stroke="rgba(237,232,224,0.45)" stroke-width="1.5"></path>
          <circle cx="0" cy="-14" r="7" fill="none" stroke="rgba(237,232,224,0.35)" stroke-width="1.5"></circle>
          <circle cx="0" cy="-14" r="3.5" fill="rgba(139,26,10,0.55)" stroke="rgba(139,26,10,0.7)" stroke-width="1"></circle>
        </g>

        
        <path d="M48,296 Q250,292 400,294 Q550,292 752,296" stroke="rgba(237,232,224,0.18)" stroke-width="1.5" fill="none"></path>
        
        <ellipse cx="175" cy="298" rx="54" ry="8" fill="rgba(139,26,10,0.1)" stroke="rgba(139,26,10,0.25)" stroke-width="1"></ellipse>
        <ellipse cx="316" cy="302" rx="68" ry="10" fill="rgba(139,26,10,0.08)" stroke="rgba(139,26,10,0.2)" stroke-width="1"></ellipse>
        <ellipse cx="463" cy="299" rx="58" ry="8" fill="rgba(139,26,10,0.09)" stroke="rgba(139,26,10,0.22)" stroke-width="1"></ellipse>
        <ellipse cx="594" cy="297" rx="48" ry="7" fill="rgba(139,26,10,0.07)" stroke="rgba(139,26,10,0.18)" stroke-width="1"></ellipse>

        
        <path d="M260,262 Q261,258 400,258 Q539,258 540,262 L540,278 Q539,282 400,282 Q261,282 260,278 Z" fill="url(#eq-l1)" stroke="rgba(237,232,224,0.4)" stroke-width="1.5"></path>
        <circle cx="282" cy="270" r="5" fill="none" stroke="rgba(139,26,10,0.7)" stroke-width="1.5"></circle>
        <circle cx="306" cy="270" r="5" fill="rgba(139,26,10,0.4)" stroke="rgba(139,26,10,0.55)" stroke-width="1"></circle>
        <circle cx="330" cy="270" r="5" fill="none" stroke="rgba(139,26,10,0.7)" stroke-width="1.5"></circle>
        <circle cx="354" cy="270" r="5" fill="rgba(139,26,10,0.4)" stroke="rgba(139,26,10,0.55)" stroke-width="1"></circle>
        <circle cx="378" cy="270" r="5" fill="none" stroke="rgba(139,26,10,0.7)" stroke-width="1.5"></circle>
        <circle cx="402" cy="270" r="5" fill="rgba(139,26,10,0.4)" stroke="rgba(139,26,10,0.55)" stroke-width="1"></circle>
        <circle cx="426" cy="270" r="5" fill="none" stroke="rgba(139,26,10,0.7)" stroke-width="1.5"></circle>
        <circle cx="450" cy="270" r="5" fill="rgba(139,26,10,0.4)" stroke="rgba(139,26,10,0.55)" stroke-width="1"></circle>
        <circle cx="474" cy="270" r="5" fill="none" stroke="rgba(139,26,10,0.7)" stroke-width="1.5"></circle>
        <circle cx="498" cy="270" r="5" fill="rgba(139,26,10,0.4)" stroke="rgba(139,26,10,0.55)" stroke-width="1"></circle>
        <circle cx="522" cy="270" r="5" fill="none" stroke="rgba(139,26,10,0.7)" stroke-width="1.5"></circle>
      </svg>`,
    'video-cameras-switchers': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 350" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <defs>
          <pattern id="eq-v1" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
            <line x1="0" y1="0" x2="0" y2="8" stroke="rgba(237,232,224,0.07)" stroke-width="1"></line>
          </pattern>
          <pattern id="eq-v2" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(30)">
            <line x1="0" y1="0" x2="0" y2="6" stroke="rgba(139,26,10,0.18)" stroke-width="1"></line>
          </pattern>
        </defs>

        
        <path d="M52,118 Q54,115 188,117 Q190,117 190,222 Q188,224 52,222 Q50,222 52,118 Z" fill="url(#eq-v1)" stroke="rgba(237,232,224,0.52)" stroke-width="2"></path>
        
        <circle cx="108" cy="170" r="44" fill="url(#eq-v1)" stroke="rgba(237,232,224,0.48)" stroke-width="2"></circle>
        <circle cx="108" cy="170" r="32" fill="none" stroke="rgba(237,232,224,0.25)" stroke-width="1" stroke-dasharray="3 2"></circle>
        <circle cx="108" cy="170" r="20" fill="url(#eq-v2)" stroke="rgba(139,26,10,0.65)" stroke-width="1.5"></circle>
        <circle cx="108" cy="170" r="8" fill="none" stroke="rgba(237,232,224,0.45)" stroke-width="1.5"></circle>
        <circle cx="108" cy="170" r="3" fill="rgba(139,26,10,0.95)"></circle>
        <path d="M94,156 Q98,151 104,154" stroke="rgba(237,232,224,0.35)" stroke-width="1.5" fill="none"></path>
        
        <path d="M148,98 Q150,95 190,97 Q192,97 192,130 Q190,132 148,132 Q146,132 148,98 Z" fill="url(#eq-v1)" stroke="rgba(237,232,224,0.38)" stroke-width="1.5"></path>
        <path d="M154,104 L184,104 L184,126 L154,126 Z" fill="rgba(0,0,0,0.4)" stroke="rgba(237,232,224,0.18)" stroke-width="1"></path>
        
        <circle cx="170" cy="113" r="5" fill="none" stroke="rgba(139,26,10,0.8)" stroke-width="1.5"></circle>
        <circle cx="170" cy="113" r="2.5" fill="rgba(139,26,10,0.95)"></circle>
        
        <path d="M80,117 Q80,106 84,104 L160,102 Q164,104 164,117" fill="none" stroke="rgba(237,232,224,0.35)" stroke-width="1.5"></path>
        
        <path d="M120,222 Q118,248 116,280" stroke="rgba(237,232,224,0.35)" stroke-width="2.5"></path>
        <path d="M116,280 Q92,308 74,332" stroke="rgba(237,232,224,0.3)" stroke-width="2"></path>
        <path d="M116,280 Q116,308 116,334" stroke="rgba(237,232,224,0.3)" stroke-width="2"></path>
        <path d="M116,280 Q140,308 158,332" stroke="rgba(237,232,224,0.3)" stroke-width="2"></path>
        <path d="M82,312 Q116,308 150,312" stroke="rgba(237,232,224,0.18)" stroke-width="1" stroke-dasharray="3 2"></path>

        
        <path d="M230,144 Q232,141 570,143 Q572,143 572,242 Q570,244 230,242 Q228,242 230,144 Z" fill="url(#eq-v1)" stroke="rgba(237,232,224,0.52)" stroke-width="2"></path>
        <text x="244" y="162" font-family="&#39;DM Mono&#39;, monospace" font-size="8" fill="rgba(237,232,224,0.28)" letter-spacing="2">VIDEO SWITCHER</text>
        
        <path d="M244,168 L284,167 L285,186 L245,187 Z" fill="url(#eq-v2)" stroke="rgba(139,26,10,0.8)" stroke-width="1.5"></path>
        <text x="252" y="181" font-family="&#39;DM Mono&#39;, monospace" font-size="8" fill="rgba(237,232,224,0.7)" letter-spacing="1">1</text>
        <path d="M292,168 L332,167 L333,186 L293,187 Z" fill="url(#eq-v1)" stroke="rgba(237,232,224,0.25)" stroke-width="1.5"></path>
        <text x="306" y="181" font-family="&#39;DM Mono&#39;, monospace" font-size="8" fill="rgba(237,232,224,0.35)" letter-spacing="1">2</text>
        <path d="M340,168 L380,167 L381,186 L341,187 Z" fill="url(#eq-v1)" stroke="rgba(237,232,224,0.25)" stroke-width="1.5"></path>
        <text x="354" y="181" font-family="&#39;DM Mono&#39;, monospace" font-size="8" fill="rgba(237,232,224,0.35)" letter-spacing="1">3</text>
        <path d="M388,168 L428,167 L429,186 L389,187 Z" fill="url(#eq-v1)" stroke="rgba(237,232,224,0.25)" stroke-width="1.5"></path>
        <text x="402" y="181" font-family="&#39;DM Mono&#39;, monospace" font-size="8" fill="rgba(237,232,224,0.35)" letter-spacing="1">4</text>
        
        <line x1="456" y1="158" x2="456" y2="232" stroke="rgba(237,232,224,0.12)" stroke-width="8" stroke-linecap="butt"></line>
        <path d="M446,192 Q446,186 466,186 Q466,198 446,198 Z" fill="url(#eq-v1)" stroke="rgba(237,232,224,0.45)" stroke-width="1.5"></path>
        
        <path d="M480,158 L548,157 L549,212 L481,213 Z" fill="url(#eq-v2)" stroke="rgba(139,26,10,0.4)" stroke-width="1.5"></path>
        <path d="M488,164 L540,163 L541,206 L489,207 Z" fill="rgba(0,0,0,0.4)" stroke="rgba(139,26,10,0.3)" stroke-width="1"></path>
        
        <text x="497" y="190" font-family="&#39;DM Mono&#39;, monospace" font-size="8" fill="rgba(139,26,10,0.7)" letter-spacing="1">PGM</text>
        
        <circle cx="244" cy="230" r="4" fill="none" stroke="rgba(139,26,10,0.8)" stroke-width="1.5"></circle>
        <circle cx="244" cy="230" r="2" fill="rgba(139,26,10,0.9)"></circle>
        <circle cx="258" cy="230" r="4" fill="none" stroke="rgba(237,232,224,0.2)" stroke-width="1.5"></circle>
        <circle cx="272" cy="230" r="4" fill="none" stroke="rgba(237,232,224,0.2)" stroke-width="1.5"></circle>

        
        <path d="M598,76 Q600,73 728,75 Q730,75 730,192 Q728,194 598,194 Q596,194 598,76 Z" fill="url(#eq-v1)" stroke="rgba(237,232,224,0.52)" stroke-width="2"></path>
        <path d="M607,85 L720,85 L720,183 L607,183 Z" fill="url(#eq-v2)" stroke="rgba(139,26,10,0.2)" stroke-width="1"></path>
        
        <path d="M618,100 L680,99" stroke="rgba(237,232,224,0.45)" stroke-width="3"></path>
        <path d="M618,112 L702,111" stroke="rgba(237,232,224,0.18)" stroke-width="1.5"></path>
        <path d="M618,121 L686,120" stroke="rgba(237,232,224,0.14)" stroke-width="1.5"></path>
        
        <path d="M680,90 L718,89 L719,103 L681,104 Z" fill="rgba(139,26,10,0.55)" stroke="rgba(139,26,10,0.8)" stroke-width="1.5"></path>
        <text x="687" y="100" font-family="&#39;DM Mono&#39;, monospace" font-size="7.5" fill="rgba(237,232,224,0.9)" letter-spacing="1.5">LIVE</text>
        
        <path d="M607,168 L720,168 L720,180 L607,180 Z" fill="rgba(0,0,0,0.35)" stroke="none"></path>
        <text x="614" y="177" font-family="&#39;DM Mono&#39;, monospace" font-size="7" fill="rgba(237,232,224,0.3)" letter-spacing="1">00:01:42:14</text>
        
        <path d="M663,194 Q662,214 663,228" stroke="rgba(237,232,224,0.3)" stroke-width="2"></path>
        <path d="M638,228 Q663,224 688,228" stroke="rgba(237,232,224,0.3)" stroke-width="1.5"></path>

        
        <path d="M190,175 Q210,175 230,193" stroke="rgba(237,232,224,0.15)" stroke-width="1.5" stroke-dasharray="4 3" fill="none"></path>
        <path d="M572,193 Q585,193 598,135" stroke="rgba(237,232,224,0.15)" stroke-width="1.5" stroke-dasharray="4 3" fill="none"></path>

        
        <line x1="663" y1="76" x2="638" y2="56" stroke="rgba(237,232,224,0.18)" stroke-width="1"></line>
        <text x="570" y="52" font-family="&#39;DM Mono&#39;, monospace" font-size="9" fill="rgba(237,232,224,0.22)" letter-spacing="2">CONFIDENCE MONITOR</text>
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
