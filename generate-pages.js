// generate-pages.js
const fs = require('fs');
const path = require('path');

const pagesDir = path.join(__dirname, 'pages');
if (!fs.existsSync(pagesDir)) {
  fs.mkdirSync(pagesDir);
}

const VAN_FAVICON = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' rx='8' fill='%231B2430'/%3E%3Cpath d='M6 10 C6 9 7 8 8 8 L20 8 C22 8 23.5 9 24.5 11 L26.5 15 C26.8 15.5 27 16 27 17 L27 21 C27 21.6 26.6 22 26 22 L24 22 C24 23.7 22.7 25 21 25 C19.3 25 18 23.7 18 22 L14 22 C14 23.7 12.7 25 11 25 C9.3 25 8 23.7 8 22 L6 22 C5.4 22 5 21.6 5 21 L5 11 C5 10.4 5.4 10 6 10 Z' fill='%234A6B5D'/%3E%3Cpath d='M8 11 L13 11 C13.6 11 14 11.4 14 12 L14 15 L8 15 Z' fill='%23FAF9F6'/%3E%3Cpath d='M16 11 L20 11 L23.5 15 L16 15 Z' fill='%23FAF9F6'/%3E%3Ccircle cx='11' cy='22' r='2' fill='%231B2430'/%3E%3Ccircle cx='21' cy='22' r='2' fill='%231B2430'/%3E%3Ccircle cx='26' cy='18' r='1' fill='%23FAF9F6'/%3E%3C/svg%3E";

const VAN_LOGO_SVG = `<svg class="w-7 h-7 flex-shrink-0 shadow-sm rounded-lg" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="32" height="32" rx="8" fill="#1B2430"/>
  <path d="M6 10 C6 9 7 8 8 8 L20 8 C22 8 23.5 9 24.5 11 L26.5 15 C26.8 15.5 27 16 27 17 L27 21 C27 21.6 26.6 22 26 22 L24 22 C24 23.7 22.7 25 21 25 C19.3 25 18 23.7 18 22 L14 22 C14 23.7 12.7 25 11 25 C9.3 25 8 23.7 8 22 L6 22 C5.4 22 5 21.6 5 21 L5 11 C5 10.4 5.4 10 6 10 Z" fill="#4A6B5D"/>
  <path d="M8 11 L13 11 C13.6 11 14 11.4 14 12 L14 15 L8 15 Z" fill="#FAF9F6"/>
  <path d="M16 11 L20 11 L23.5 15 L16 15 Z" fill="#FAF9F6"/>
  <circle cx="11" cy="22" r="2" fill="#1B2430"/>
  <circle cx="21" cy="22" r="2" fill="#1B2430"/>
  <circle cx="26" cy="18" r="1" fill="#FAF9F6"/>
</svg>`;

const products = [
  // PRODUCT 1: TOKYO
  {
    file: 'product-1-tier-1.html',
    title: 'Tokyo 7-Day Complete Itinerary',
    category: 'City Guide',
    tier: 'PDF Only',
    price: '$12',
    token: Buffer.from('prod_2QGd81uLgEuQyMhsjbv1lq').toString('base64'),
    keywords: 'tokyo 7 day itinerary pdf download, solo travel tokyo guide pdf, tokyo metro transit guide, shinjuku walking route',
    metaDesc: 'Download our curated 7-day Tokyo itinerary PDF guide. Day-by-day train transit lines, hidden ramen alleys, and historic Yanaka walking tours.',
    heroSub: 'Day-by-day rail routes, hidden ramen alleys, tea houses & offline navigation.',
    specs: [
      '52-Page interactive high-res digital PDF',
      'Works offline on iPhone, Android, iPad & Kindle',
      'Tokyo Metro & Yamanote transit lines guide',
      'Curated food alleys, cocktail bars & ramen counters'
    ],
    otherTiers: [
      { name: 'Tier 2: PDF + Google Maps Pins ($23)', file: 'product-1-tier-2.html' },
      { name: 'Tier 3: PDF + Maps + Notion Hub ($48)', file: 'product-1-tier-3.html' },
      { name: 'Tier 4: Complete Tokyo Bundle ($64)', file: 'product-1-tier-4.html' }
    ]
  },
  {
    file: 'product-1-tier-2.html',
    title: 'Tokyo 7-Day Complete Itinerary',
    category: 'City Guide',
    tier: 'PDF + Maps',
    price: '$23',
    token: Buffer.from('prod_1vSpaVrOjUWK4D3dduyG9B').toString('base64'),
    keywords: 'tokyo google maps offline pins, shibuya hidden food spots google maps layer, tokyo interactive map itinerary',
    metaDesc: 'Explore Tokyo with our interactive Google Maps layer & 7-day itinerary PDF. Over 180+ verified geo-pins for hidden bars, temples, and cafes.',
    heroSub: 'PDF master guide plus 180+ verified Google Maps pins for seamless one-tap mobile navigation.',
    specs: [
      '52-Page interactive high-res digital PDF',
      '180+ Curated Google Maps direct pins (categorized)',
      'Offline pin layer for subway stations, food stalls & sights',
      'Lifetime pin database corrections & updates'
    ],
    otherTiers: [
      { name: 'Tier 1: PDF Only ($12)', file: 'product-1-tier-1.html' },
      { name: 'Tier 3: PDF + Maps + Notion Hub ($48)', file: 'product-1-tier-3.html' },
      { name: 'Tier 4: Complete Tokyo Bundle ($64)', file: 'product-1-tier-4.html' }
    ]
  },
  {
    file: 'product-1-tier-3.html',
    title: 'Tokyo 7-Day Complete Itinerary',
    category: 'City Guide',
    tier: 'PDF + Maps + Notion Hub',
    price: '$48',
    token: Buffer.from('prod_1L7NKHfIL9bQ3BXJ0n5Trw').toString('base64'),
    keywords: 'notion japan travel planner template, tokyo vacation itinerary notion hub, notion digital trip organizer tokyo',
    metaDesc: 'Master Tokyo travel planning with our Notion Trip Hub, interactive Google Maps pins, and 7-day itinerary PDF. Budgeting, booking tracking, and daily schedule.',
    heroSub: 'The complete digital workspace for your Tokyo trip: interactive Notion OS, Google Maps layer, and offline PDF guide.',
    specs: [
      'Interactive Notion Trip Operating System (duplicate in 1 tap)',
      'Expense tracker, packing matrix & reservation database',
      '180+ Google Maps pins integrated directly into Notion',
      '52-Page high-res digital PDF itinerary'
    ],
    otherTiers: [
      { name: 'Tier 1: PDF Only ($12)', file: 'product-1-tier-1.html' },
      { name: 'Tier 2: PDF + Maps ($23)', file: 'product-1-tier-2.html' },
      { name: 'Tier 4: Complete Tokyo Bundle ($64)', file: 'product-1-tier-4.html' }
    ]
  },
  {
    file: 'product-1-tier-4.html',
    title: 'Tokyo 7-Day Complete Itinerary',
    category: 'City Guide',
    tier: 'Complete Bundle',
    price: '$64',
    token: Buffer.from('prod_2p1seJwFXu1Jn3JziTIkjy').toString('base64'),
    keywords: 'ultimate tokyo trip planner bundle, tokyo digital travel system, tokyo itinerary lifetime updates, japan travel kit',
    metaDesc: 'The ultimate Tokyo expedition package. Includes PDF guide, Google Maps pins, Notion Trip Hub, phrasebook, and free lifetime updates.',
    heroSub: 'Every Tokyo tool in one toolkit: PDF guide, 180+ Google Maps pins, Notion OS, cultural audio etiquette, and free lifetime revisions.',
    specs: [
      'Everything in PDF, Maps & Notion Hub editions',
      'Japanese dining & izakaya audio phrasebook cheat sheet',
      'Seasonal cherry blossom & autumn foliage routing inserts',
      'Guaranteed lifetime digital guide updates'
    ],
    otherTiers: [
      { name: 'Tier 1: PDF Only ($12)', file: 'product-1-tier-1.html' },
      { name: 'Tier 2: PDF + Maps ($23)', file: 'product-1-tier-2.html' },
      { name: 'Tier 3: PDF + Maps + Notion Hub ($48)', file: 'product-1-tier-3.html' }
    ]
  },

  // PRODUCT 2: AMALFI COAST
  {
    file: 'product-2-tier-1.html',
    title: 'Amalfi Coast & Southern Italy',
    category: 'Regional Guide',
    tier: 'PDF Only',
    price: '$23',
    token: Buffer.from('prod_4ClgqXo15F5FMUHoVk9WYe').toString('base64'),
    keywords: 'amalfi coast ferry guide pdf, positano ravello 5 day itinerary download, southern italy road trip itinerary, capri day trip guide',
    metaDesc: 'Download our curated Amalfi Coast & Southern Italy itinerary PDF. Avoid gridlock traffic, navigate ferry lines, and uncover cliffside trattorias.',
    heroSub: 'Master Positano, Amalfi, Ravello & Capri without tourist traps or road congestion.',
    specs: [
      '48-Page high-resolution mobile-friendly PDF',
      'Ferry timetable strategy & dock transfer cheat sheet',
      'Luggage porter hacks and public bus line survival guide',
      'Curated cliffside trattorias and sunset aperitivo spots'
    ],
    otherTiers: [
      { name: 'Tier 2: PDF + Maps ($38)', file: 'product-2-tier-2.html' },
      { name: 'Tier 3: PDF + Maps + Notion Hub ($76)', file: 'product-2-tier-3.html' },
      { name: 'Tier 4: Complete Bundle ($96)', file: 'product-2-tier-4.html' }
    ]
  },
  {
    file: 'product-2-tier-2.html',
    title: 'Amalfi Coast & Southern Italy',
    category: 'Regional Guide',
    tier: 'PDF + Maps',
    price: '$38',
    token: Buffer.from('prod_hitRIEAQQroxumbMqd0jX').toString('base64'),
    keywords: 'amalfi coast google maps pins, capri boat hire cliffside dining map pins, positano scenic viewpoints map layer',
    metaDesc: 'Explore the Amalfi Coast with 140+ Google Maps pins & PDF guide. Uncover hidden beaches, private coves, and scenic Path of the Gods lookouts.',
    heroSub: 'Interactive Google Maps coordinates combined with day-by-day coastal routing intelligence.',
    specs: [
      '48-Page Amalfi Coast master PDF itinerary',
      '140+ Curated Google Maps pins (beaches, dining, docks)',
      'Secret swimming grottos and viewpoint coordinates',
      'Offline caching instructions for patchy coastal cell service'
    ],
    otherTiers: [
      { name: 'Tier 1: PDF Only ($23)', file: 'product-2-tier-1.html' },
      { name: 'Tier 3: PDF + Maps + Notion Hub ($76)', file: 'product-2-tier-3.html' },
      { name: 'Tier 4: Complete Bundle ($96)', file: 'product-2-tier-4.html' }
    ]
  },
  {
    file: 'product-2-tier-3.html',
    title: 'Amalfi Coast & Southern Italy',
    category: 'Regional Guide',
    tier: 'PDF + Maps + Notion Hub',
    price: '$76',
    token: Buffer.from('prod_1MhVOCx0OmEauCqfYwPlwD').toString('base64'),
    keywords: 'italy trip planner notion template, amalfi coast boutique stays notion hub, southern italy budget tracker notion',
    metaDesc: 'Plan your dream Amalfi vacation with our Notion Trip OS, Google Maps layers, and PDF itinerary. Track boat rentals, budget, and hotel bookings.',
    heroSub: 'Complete digital management for your Southern Italy journey across Positano, Capri, and Ravello.',
    specs: [
      'Interactive Notion Travel OS tailored for Italian coastlines',
      'Private boat charter comparison & budget sheet',
      'Ferry schedule tracker and hotel reservation database',
      '140+ Google Maps pins & 48-page PDF guide'
    ],
    otherTiers: [
      { name: 'Tier 1: PDF Only ($23)', file: 'product-2-tier-1.html' },
      { name: 'Tier 2: PDF + Maps ($38)', file: 'product-2-tier-2.html' },
      { name: 'Tier 4: Complete Bundle ($96)', file: 'product-2-tier-4.html' }
    ]
  },
  {
    file: 'product-2-tier-4.html',
    title: 'Amalfi Coast & Southern Italy',
    category: 'Regional Guide',
    tier: 'Complete Bundle',
    price: '$96',
    token: Buffer.from('prod_7UUF4c3wogoWH0SLU6fJ8m').toString('base64'),
    keywords: 'amalfi coast travel bundle lifetime updates, complete southern italy vacation toolkit, capri boat guide bundle',
    metaDesc: 'The definitive Amalfi Coast travel toolkit. Includes PDF itinerary, 140+ Google Maps pins, Notion OS, and private boat rental guides with lifetime updates.',
    heroSub: 'All Amalfi tools in one pass: PDF, Google Maps pins, Notion OS, boat rental contact directory, and lifetime seasonal updates.',
    specs: [
      'Full access: PDF guide, Google Maps layer & Notion OS',
      'Capri boat skipper contact directory & rental contracts',
      'Path of the Gods hiking GPS track (.gpx file)',
      'Free lifetime updates for seasonal ferry schedule shifts'
    ],
    otherTiers: [
      { name: 'Tier 1: PDF Only ($23)', file: 'product-2-tier-1.html' },
      { name: 'Tier 2: PDF + Maps ($38)', file: 'product-2-tier-2.html' },
      { name: 'Tier 3: PDF + Maps + Notion Hub ($76)', file: 'product-2-tier-3.html' }
    ]
  },

  // PRODUCT 3: ICELAND RING ROAD
  {
    file: 'product-3-tier-1.html',
    title: 'Iceland Ring Road Pass',
    category: 'Country Pass',
    tier: 'PDF Only',
    price: '$38',
    token: Buffer.from('prod_3dQGMnReSHMEyhlkZfAbsC').toString('base64'),
    keywords: 'iceland ring road 10 day itinerary pdf, route 1 iceland campervan guide, iceland waterfalls fuel stops pdf',
    metaDesc: 'Download our 10-day Iceland Ring Road Route 1 PDF guide. Turn-by-turn driving loops, gas station waypoints, thermal baths, and glacier hikes.',
    heroSub: 'Complete 10-day Route 1 driving blueprint: fuel stops, weather safety, hot springs, and campsite logistics.',
    specs: [
      '64-Page comprehensive driving itinerary PDF',
      'Campervan vs 4x4 car rental checklist & insurance advice',
      'Gravel road safety & weather app survival protocols',
      'Thermal bath comparisons (free hot pots vs Blue Lagoon)'
    ],
    otherTiers: [
      { name: 'Tier 2: PDF + Maps ($64)', file: 'product-3-tier-2.html' },
      { name: 'Tier 3: PDF + Maps + Notion Hub ($107)', file: 'product-3-tier-3.html' },
      { name: 'Tier 4: Complete Bundle ($143)', file: 'product-3-tier-4.html' }
    ]
  },
  {
    file: 'product-3-tier-2.html',
    title: 'Iceland Ring Road Pass',
    category: 'Country Pass',
    tier: 'PDF + Maps',
    price: '$64',
    token: Buffer.from('prod_4xSsaUNw3iMT4S63mQ7YZd').toString('base64'),
    keywords: 'iceland route 1 google maps coordinates, hot springs iceland map offline layer, iceland ring road gps points',
    metaDesc: 'Navigate Iceland’s Ring Road with 200+ offline Google Maps pins and 10-day PDF driving guide. Never miss a remote waterfall or fuel stop.',
    heroSub: 'Exact GPS pinpoint layers for every waterfall, gravel turnoff, and fuel pump along Route 1.',
    specs: [
      '64-Page Iceland Route 1 driving PDF',
      '200+ Verified Google Maps pins categorized by region',
      'Fuel station spacing alerts & emergency assistance pins',
      'Offline GPS coordinates for remote natural hot springs'
    ],
    otherTiers: [
      { name: 'Tier 1: PDF Only ($38)', file: 'product-3-tier-1.html' },
      { name: 'Tier 3: PDF + Maps + Notion Hub ($107)', file: 'product-3-tier-3.html' },
      { name: 'Tier 4: Complete Bundle ($143)', file: 'product-3-tier-4.html' }
    ]
  },
  {
    file: 'product-3-tier-3.html',
    title: 'Iceland Ring Road Pass',
    category: 'Country Pass',
    tier: 'PDF + Maps + Notion Hub',
    price: '$107',
    token: Buffer.from('prod_7MPnUHHZk9UqpmR1MvXC2N').toString('base64'),
    keywords: 'iceland campervan notion trip planner, notion ring road packing gear list, iceland itinerary expense calculator',
    metaDesc: 'The ultimate Iceland Ring Road Notion Hub. Includes Route 1 budget calculator, campervan inventory, 200+ Maps pins, and PDF guide.',
    heroSub: 'Total road trip command center: Notion OS, 200+ Google Maps pins, and 64-page driving manual.',
    specs: [
      'Notion Ring Road Operating System (weather, campsite tracker)',
      'Campervan packing & layered cold-weather gear checklist',
      '200+ Google Maps pin layer directly linked to Notion daily logs',
      '64-Page high-resolution driving manual PDF'
    ],
    otherTiers: [
      { name: 'Tier 1: PDF Only ($38)', file: 'product-3-tier-1.html' },
      { name: 'Tier 2: PDF + Maps ($64)', file: 'product-3-tier-2.html' },
      { name: 'Tier 4: Complete Bundle ($143)', file: 'product-3-tier-4.html' }
    ]
  },
  {
    file: 'product-3-tier-4.html',
    title: 'Iceland Ring Road Pass',
    category: 'Country Pass',
    tier: 'Complete Bundle',
    price: '$143',
    token: Buffer.from('prod_3tj02ZruXylnB33YshaWeE').toString('base64'),
    keywords: 'iceland expedition complete bundle, iceland ring road master kit pdf maps notion, iceland road trip lifetime updates',
    metaDesc: 'The complete Iceland Ring Road expedition kit. Includes PDF guide, 200+ Maps pins, Notion OS, Northern Lights chasing guide, and lifetime updates.',
    heroSub: 'Everything needed to circle Iceland safely: PDF, Maps layer, Notion OS, Aurora borealis tracker guide & lifetime updates.',
    specs: [
      'Full access: PDF guide, 200+ Google Maps pins & Notion Hub',
      'Aurora Borealis chasing manual & night camera settings',
      'Highlands F-road summer extension addendum (.gpx included)',
      'Guaranteed lifetime guide revisions and campsite updates'
    ],
    otherTiers: [
      { name: 'Tier 1: PDF Only ($38)', file: 'product-3-tier-1.html' },
      { name: 'Tier 2: PDF + Maps ($64)', file: 'product-3-tier-2.html' },
      { name: 'Tier 3: PDF + Maps + Notion Hub ($107)', file: 'product-3-tier-3.html' }
    ]
  },

  // PRODUCT 4: ALL-ACCESS WORLD PASS
  {
    file: 'product-4-tier-1.html',
    title: 'All-Access World Pass',
    category: 'Full Library Pass',
    tier: 'PDF Only',
    price: '$44',
    token: Buffer.from('prod_7LjC7F3pfhRJVXZ9EPgS7i').toString('base64'),
    keywords: 'global travel guides pdf library, world destination itinerary bundle pdf, velora all access pdf pass',
    metaDesc: 'Download our entire destination PDF itinerary library. Instant access to Tokyo, Amalfi Coast, Iceland, and upcoming global releases.',
    heroSub: 'Every destination PDF guide in one single pass: Tokyo, Amalfi, Iceland, and upcoming drops.',
    specs: [
      'Complete library of all destination PDF itineraries',
      '160+ Pages of curated routes and transit navigation',
      'Instant smartphone & e-reader offline downloads',
      'Access to newly released destination guides'
    ],
    otherTiers: [
      { name: 'Tier 2: PDF + Maps ($88)', file: 'product-4-tier-2.html' },
      { name: 'Tier 3: PDF + Maps + Notion Hub ($143)', file: 'product-4-tier-3.html' },
      { name: 'Tier 4: Complete Bundle ($229)', file: 'product-4-tier-4.html' }
    ]
  },
  {
    file: 'product-4-tier-2.html',
    title: 'All-Access World Pass',
    category: 'Full Library Pass',
    tier: 'PDF + Maps',
    price: '$88',
    token: Buffer.from('prod_1rwYdGzoRxT3NF88iTQnPN').toString('base64'),
    keywords: '600 google maps travel pins world pass, worldwide curated destination map layers, global digital itinerary bundle',
    metaDesc: 'Access 600+ curated Google Maps pins and the entire global travel guide PDF library. Instant one-tap navigation across Japan, Italy, and Iceland.',
    heroSub: 'Full PDF library plus 600+ curated Google Maps pins across Tokyo, Southern Italy, and Iceland.',
    specs: [
      'Complete PDF guide library for all destinations',
      '600+ Curated Google Maps direct pins worldwide',
      'Categorized layers for food, coffee, sights, stays & views',
      'Lifetime pin synchronizations and new pin additions'
    ],
    otherTiers: [
      { name: 'Tier 1: PDF Only ($44)', file: 'product-4-tier-1.html' },
      { name: 'Tier 3: PDF + Maps + Notion Hub ($143)', file: 'product-4-tier-3.html' },
      { name: 'Tier 4: Complete Bundle ($229)', file: 'product-4-tier-4.html' }
    ]
  },
  {
    file: 'product-4-tier-3.html',
    title: 'All-Access World Pass',
    category: 'Full Library Pass',
    tier: 'PDF + Maps + Notion Hub',
    price: '$143',
    token: Buffer.from('prod_41rzekaMu0DKTVdD6Wnhr2').toString('base64'),
    keywords: 'notion travel os complete suite, all destination notion planner world pass, full digital travel system notion',
    metaDesc: 'The complete Notion Travel OS suite paired with 600+ Google Maps pins and our complete PDF library. Manage every trip in one unified dashboard.',
    heroSub: 'Our flagship Notion Travel OS workspace + 600+ Google Maps pins + all destination PDF guides.',
    specs: [
      'Master Notion Travel OS suite (all trips in one dashboard)',
      'Budget trackers, itinerary timelines, and booking logs',
      '600+ Integrated Google Maps pinpoint database',
      'All present and future destination PDF itineraries'
    ],
    otherTiers: [
      { name: 'Tier 1: PDF Only ($44)', file: 'product-4-tier-1.html' },
      { name: 'Tier 2: PDF + Maps ($88)', file: 'product-4-tier-2.html' },
      { name: 'Tier 4: Complete Bundle ($229)', file: 'product-4-tier-4.html' }
    ]
  },
  {
    file: 'product-4-tier-4.html',
    title: 'All-Access World Pass',
    category: 'Full Library Pass',
    tier: 'Complete Bundle',
    price: '$229',
    token: Buffer.from('prod_5bNtpDdU2fBv5DFIgpHvfQ').toString('base64'),
    keywords: 'lifetime digital travel library pass, all destinations future updates access pass, ultimate global travel suite',
    metaDesc: 'Lifetime digital travel pass. Access every guide, Google Maps layer, Notion OS tool, and every future destination released by Velora Digital forever.',
    heroSub: 'The pinnacle pass: every guide, every pin, every Notion system, and all future destination drops included for life.',
    specs: [
      'Lifetime access to all current and future destination guides',
      '600+ Google Maps pins (auto-updated with new destinations)',
      'Full Notion Travel OS flagship workspace',
      'Priority customer concierge support and free lifetime updates'
    ],
    otherTiers: [
      { name: 'Tier 1: PDF Only ($44)', file: 'product-4-tier-1.html' },
      { name: 'Tier 2: PDF + Maps ($88)', file: 'product-4-tier-2.html' },
      { name: 'Tier 3: PDF + Maps + Notion Hub ($143)', file: 'product-4-tier-3.html' }
    ]
  }
];

function generateHTML(p) {
  const specsList = p.specs.map(s => `<div class="flex items-center gap-2"><span class="text-sage-600 font-bold">✓</span> <span>${s}</span></div>`).join('\n            ');
  const otherTiersList = p.otherTiers.map(t => `<a href="${t.file}" class="block hover:underline">${t.name} →</a>`).join('\n              ');

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${p.title} — ${p.tier} | Velora Digital</title>
  <meta name="description" content="${p.metaDesc}" />
  <meta name="keywords" content="${p.keywords}" />

  <!-- SVG Travel Campervan Favicon -->
  <link rel="icon" type="image/svg+xml" href="${VAN_FAVICON}">

  <!-- Google Fonts & Tailwind CDN -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <script src="https://cdn.tailwindcss.com"></script>

  <script>
    tailwind.config = {
      theme: {
        extend: {
          fontFamily: { sans: ['"Plus Jakarta Sans"', 'sans-serif'] },
          colors: {
            sand: { 50: '#FAF9F6', 100: '#F5F3EF', 200: '#EAE6DF' },
            slateNavy: { 800: '#1B2430', 900: '#111827' },
            sage: { 600: '#4A6B5D', 700: '#3D594C' }
          }
        }
      }
    }
  </script>
</head>
<body class="bg-sand-50 text-slateNavy-900 font-sans antialiased selection:bg-sage-600 selection:text-white">

  <!-- NAVIGATION WITH VAN LOGO -->
  <nav class="sticky top-0 z-40 bg-sand-50/90 backdrop-blur-md border-b border-sand-200">
    <div class="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
      <a href="../index.html" class="font-bold text-lg tracking-tight flex items-center gap-2.5 hover:opacity-90 transition">
        ${VAN_LOGO_SVG}
        <span>VELORA DIGITAL</span>
      </a>
      <a href="../index.html#catalog" class="text-xs font-semibold text-slate-600 hover:text-slateNavy-900 transition">
        ← Back to Catalog
      </a>
    </div>
  </nav>

  <!-- PRODUCT DETAIL SECTION -->
  <main class="py-12 px-6 max-w-5xl mx-auto">
    <!-- Breadcrumbs -->
    <div class="text-xs text-slate-400 mb-6 flex items-center gap-2">
      <a href="../index.html" class="hover:underline">Home</a>
      <span>/</span>
      <a href="../index.html#catalog" class="hover:underline">Catalog</a>
      <span>/</span>
      <span class="text-slate-600">${p.title}</span>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-12 gap-10">
      
      <!-- Left Media & SEO Column -->
      <div class="lg:col-span-7 space-y-6">
        <div class="w-full aspect-[4/3] rounded-3xl bg-slateNavy-900 text-white overflow-hidden shadow-lg border border-sand-200 relative flex flex-col justify-between p-8">
          <div class="absolute -top-24 -right-24 w-80 h-80 bg-sage-600/30 rounded-full blur-3xl"></div>
          <div class="relative z-10 flex justify-between items-start">
            <span class="bg-white/10 backdrop-blur-md text-sand-50 border border-white/20 text-xs uppercase tracking-widest px-3 py-1 rounded-full font-bold">
              ${p.category}
            </span>
            <span class="text-xs text-slate-300 font-mono">Format: ${p.tier}</span>
          </div>
          <div class="relative z-10 my-auto py-6">
            <div class="text-xs tracking-widest uppercase font-bold text-sage-600 mb-2">Velora Curated Edition</div>
            <h2 class="text-3xl sm:text-4xl font-extrabold tracking-tight">${p.title}</h2>
            <p class="text-slate-300 text-sm mt-2 max-w-md">${p.heroSub}</p>
          </div>
          <div class="relative z-10 flex items-center justify-between text-xs text-slate-400 border-t border-white/10 pt-4">
            <span>Instant Digital Access</span>
            <span>Lifetime Updates Included</span>
          </div>
        </div>

        <!-- Long-tail Keyword Rich Description -->
        <article class="bg-white p-8 rounded-2xl border border-sand-200 space-y-4 text-sm text-slate-600 leading-relaxed">
          <h2 class="text-xl font-bold text-slateNavy-900">Why choose this ${p.title} package?</h2>
          <p>
            Avoid the endless clutter of bookmarking inconsistent travel forums, outdated blogs, and bloated multi-hundred-page guidebooks. The <strong>${p.title} (${p.tier})</strong> is built specifically for modern mobile-first travelers who value precision, verified local navigation, and seamless organization.
          </p>
          <p>
            Every single transit leg, walking path, local dinner spot, and scenic vista has been hand-selected and verified to save you hours of on-the-ground confusion and avoid overpriced tourist traps.
          </p>
          <div class="pt-4 border-t border-sand-100">
            <h3 class="font-bold text-slateNavy-900 mb-2">Targeted Travel Intelligence:</h3>
            <p class="text-xs text-slate-500">
              Designed for travelers seeking <em>${p.keywords}</em> without sacrificing flexibility or authentic local experiences.
            </p>
          </div>
        </article>
      </div>

      <!-- Right Purchasing Card -->
      <div class="lg:col-span-5 space-y-6">
        <div class="bg-white rounded-3xl p-8 border border-sand-200 shadow-sm sticky top-24">
          <span class="text-xs font-bold uppercase tracking-wider text-sage-600">${p.category}</span>
          <h1 class="text-2xl font-bold text-slateNavy-900 mt-1">${p.title}</h1>
          <p class="text-xs text-slate-400 mt-0.5">Tier: ${p.tier}</p>

          <div class="mt-6 flex items-baseline gap-2">
            <span class="text-4xl font-extrabold text-slateNavy-900">${p.price}</span>
            <span class="text-xs text-slate-400">USD • One-time purchase</span>
          </div>

          <div class="mt-6 space-y-3 py-6 border-t border-b border-sand-200 text-sm text-slate-700">
            ${specsList}
          </div>

          <!-- Obfuscated Payment Button -->
          <button 
            type="button"
            onclick="routeCheckout('${p.token}')" 
            class="w-full mt-6 py-4 bg-slateNavy-900 hover:bg-slate-800 text-white rounded-full font-bold text-sm transition shadow-md flex items-center justify-center gap-2 cursor-pointer">
            <span>Unlock Instant Download</span>
            <span>→</span>
          </button>

          <p class="text-[11px] text-center text-slate-400 mt-3">
            Instant digital delivery • Secure checkout powered by Creem.io
          </p>

          <!-- Alternative Tiers for This Product -->
          <div class="mt-6 pt-6 border-t border-sand-100">
            <div class="text-xs font-semibold text-slate-500 mb-2">Looking for other formats?</div>
            <div class="space-y-1.5 text-xs text-sage-600">
              ${otherTiersList}
            </div>
          </div>
        </div>
      </div>

    </div>
  </main>

  <!-- FOOTER WITH VAN LOGO -->
  <footer class="border-t border-sand-200 bg-white py-12 px-6 mt-16">
    <div class="max-w-5xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-6 text-xs text-slate-500">
      <div class="flex items-center gap-2.5 font-bold text-slateNavy-900 text-sm">
        ${VAN_LOGO_SVG}
        <span>VELORA DIGITAL</span>
      </div>
      <div>
        © Velora Digital. Secure checkouts powered by Creem.io.
      </div>
      <div class="flex gap-4">
        <a href="../privacy.html" class="hover:underline">Privacy Policy</a>
        <a href="../terms.html" class="hover:underline">Terms of Service</a>
        <a href="mailto:veloradigitalofficial@hotmail.com" class="hover:underline">Contact</a>
      </div>
    </div>
  </footer>

  <!-- OBFUSCATED CHECKOUT ROUTER -->
  <script>
    function routeCheckout(token) {
      const p = "aHR0cHM6Ly93d3cuY3JlZW0uaW8vdGVzdC9wYXltZW50Lw==";
      const endpoint = atob(p) + atob(token);
      window.open(endpoint, '_blank', 'noopener,noreferrer');
    }
  </script>
</body>
</html>`;
}

// Generate all 16 files
products.forEach(prod => {
  const filePath = path.join(pagesDir, prod.file);
  fs.writeFileSync(filePath, generateHTML(prod), 'utf8');
  console.log(`✓ Generated: pages/${prod.file}`);
});

console.log('\\nDone! All 16 individual pages created successfully in /pages/ with the van favicon and van logo.');