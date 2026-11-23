// =============================================================================
//  ESPOSITO'S ICE & PARTY RENTALS: ALL SITE CONTENT LIVES HERE
// -----------------------------------------------------------------------------
//  Edit this file to change text, hours, products, towns, reviews and photos.
//  You should not need to touch any component to update the website.
//
//  Flags you will see:
//    verify: "owner"            -> copied from the current site; confirm with owner
//    status: "needs-owner-approval" -> do not publish until owner says yes
//    price: null                -> prices are hidden for now; type a value to show one
//
//  Photos: put the file in  src/assets/photos/  and write its file name here.
//          Use null to show a branded "photo coming soon" placeholder.
//          Every photo is listed in images.md (AI vs real, prompt, where used).
// =============================================================================

export const business = {
  name: "Esposito's Ice & Party Rentals",
  shortName: "Esposito's Ice",
  url: "https://espositosice.net",
  since: 1979,
  phone: { display: "(973) 267-2355", tel: "+19732672355" },
  address: {
    street: "200 Speedwell Ave",
    city: "Morris Plains",
    state: "NJ",
    zip: "07950",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=200+Speedwell+Ave+Morris+Plains+NJ+07950",
  },
  counties: ["Morris", "Somerset", "Essex"],
  spanishBadge: "Se Habla Español",
  emergency: {
    // Current site: "Ice machine not working? We offer 24 hour emergency ice delivery."
    // verify: "owner" -> confirm the emergency line is the same number as the shop.
    headline: "Ice machine not working?",
    text: "We offer 24-hour emergency ice delivery.",
  },
  social: {
    instagram: "https://www.instagram.com/espositosice_/",
    // verify: "owner" -> the current site uses TWO Facebook pages.
    // This one is in the header and page metadata. The other is
    // https://www.facebook.com/espositos.ice/  (footer "Follow Us").
    facebook: "https://www.facebook.com/people/Espositos-Ice-Party-Rental/61578849127613/",
    googleReviews: "https://bit.ly/41EoP8l", // link from the current site
  },
  // Turn off before launch on espositosice.net. While true, search engines are
  // told not to index the preview (so it can't compete with the live site).
  isPreview: true,
};

// -----------------------------------------------------------------------------
// HOURS (verify: "owner"). 24-hour clock, New Jersey time.
// day: 0 = Sunday ... 6 = Saturday. Use null for a closed day.
// -----------------------------------------------------------------------------
export const hours = {
  verify: "owner",
  timezone: "America/New_York",
  week: [
    { day: 0, label: "Sunday", open: "09:30", close: "13:00" },
    { day: 1, label: "Monday", open: "08:00", close: "15:00" },
    { day: 2, label: "Tuesday", open: "08:00", close: "15:00" },
    { day: 3, label: "Wednesday", open: "08:00", close: "15:00" },
    { day: 4, label: "Thursday", open: "08:00", close: "15:00" },
    { day: 5, label: "Friday", open: "08:00", close: "15:00" },
    { day: 6, label: "Saturday", open: "09:00", close: "15:00" },
  ] as { day: number; label: string; open: string | null; close: string | null }[],
  // How hours are shown in lists (grouped)
  summary: [
    { days: "Monday – Friday", time: "8 am – 3 pm" },
    { days: "Saturday", time: "9 am – 3 pm" },
    { days: "Sunday", time: "9:30 am – 1 pm" },
  ],
};

// -----------------------------------------------------------------------------
// HISTORY (from the current About page)
// -----------------------------------------------------------------------------
export const history = [
  {
    year: "1979",
    title: "Joe Esposito starts the business",
    text: "Joseph Esposito, a family man who worked in refrigeration, expanded into packaged ice. Run by family, Esposito's became Northern New Jersey's local ice supplier for eateries, venues and events.",
  },
  {
    year: "1998",
    title: "The O'Hagan family takes over",
    text: "When Joe retired, the O'Hagan family bought the company to own and run a family business. They kept the Esposito's name and the way it treats customers.",
  },
  {
    year: "Today",
    title: "Still chilling parties",
    text: "Bagged ice, dry ice, luges, freezer rentals and party gear, delivered across Morris, Somerset and Essex counties.",
  },
];

// -----------------------------------------------------------------------------
// DELIVERY (from the current product pages)
// -----------------------------------------------------------------------------
export const delivery = {
  points: [
    "Delivery is available within our service area.",
    "A minimum order is required for delivery.",
    "Rates vary by location.",
    "Rush and after-hours deliveries are available.",
  ],
  townsNote:
    "Is your town not listed? We may still be able to make the run. Call or send a quote request and we'll let you know.",
  towns: {
    Morris: ["Boonton", "Chatham", "Chester", "Denville", "Dover", "East Hanover", "Harding", "Kinnelon", "Madison", "Mendham", "Morris Plains", "Morristown", "Mountain Lakes", "Parsippany", "Randolph", "Rockaway", "Roxbury"],
    Somerset: ["Bedminster", "Bernards Township", "Basking Ridge", "Liberty Corner", "Bernardsville", "Branchburg", "Bridgewater", "Far Hills", "Peapack-Gladstone"],
    Essex: ["Caldwell", "Essex Fells", "Fairfield", "Livingston", "Millburn", "Short Hills", "North Caldwell", "West Caldwell"],
  } as Record<string, string[]>,
};

// -----------------------------------------------------------------------------
// PRODUCTS
// Each product: id (used in links like /ice-products/#dry-ice), text, photo,
// and a spec table. price: null everywhere = no prices shown.
// -----------------------------------------------------------------------------
export type SpecRow = { item: string; detail?: string; note?: string; price?: string | null; photo?: string | null };

export const products = {
  bagged: {
    id: "bagged-ice",
    name: "Bagged ice",
    short: "Cubed, crushed and block ice, bagged and ready for pickup or delivery.",
    text: "We offer ice in numerous forms and sizes, including bagged ice, cubed ice, crushed ice and ice blocks. Come to our Morris Plains location or place a delivery order.",
    photo: "site-crushed-ice-scoop.jpg",
    photoAlt: "Crushed ice with a metal scoop",
    specNote: "Crushed ice is available in all sizes for an additional cost.",
    specs: [
      { item: "Cube ice bag", detail: "5 lb", price: null },
      { item: "Cube ice bag", detail: "16 lb", price: null },
      { item: "Cube ice bag", detail: "40 lb", price: null },
      { item: "Sleeve", detail: "8 bags × 5 lb", price: null },
      { item: "Ice block", detail: "10 lb", price: null },
      { item: "Ice block", detail: "75 lb", price: null },
      { item: "Ice block", detail: "150 lb", price: null },
      { item: "Ice block", detail: "300 lb", price: null },
    ] as SpecRow[],
  },
  dry: {
    id: "dry-ice",
    name: "Dry ice",
    short: "Blocks, crushed and pellets for shipping, downed freezers, science and fog effects.",
    text: "We offer dry ice in blocks, crushed and pellets. Great for parties, concerts, Halloween, science experiments and more. Come to our Morris Plains location or place a delivery order.",
    photo: "site-dry-ice-block.jpg",
    photoAlt: "A block of dry ice with vapor rising off it",
    specs: [
      { item: "Dry ice block", detail: "10 lb", price: null },
      { item: "Crushed dry ice", detail: "50 lb", price: null },
      { item: "Dry ice pellets", detail: "50 lb", note: "3 days' notice required", price: null },
    ] as SpecRow[],
    forms: [
      {
        title: "Blocks",
        text: "The most popular option. They work well for most shipping projects, downed freezers and science experiments, and break into smaller pieces with relative ease. Blocks have the smallest surface area, so they last the longest.",
      },
      {
        title: "Crushed and pellets",
        text: "Best when space is tight, for example a shipping box with no room for a block. They don't last as long, but they surround the whole package and fit into tight spots.",
      },
    ],
    funFact: "Dry ice has a surface temperature of −109.3 °F. As it warms it turns straight into carbon dioxide gas instead of melting.",
    handlingPdf: "/docs/dry-ice-handling.pdf",
    handling: [
      "Wear gloves. Bare skin on dry ice causes frostbite.",
      "Store it in an insulated container. Better insulation, longer life.",
      "Never store it in an airtight container. The gas builds pressure.",
      "Never store it in a small, unventilated room. The CO₂ it releases is unhealthy to breathe.",
      "In a car, open a window or turn on the vents.",
      "Keep it off tile or solid-surface countertops. The cold can crack them.",
      "To dispose of it, unwrap it and leave it outside or in a well-ventilated room. It leaves no residue.",
      "Treat dry ice burns like heat burns. For minor burns, apply antibiotic ointment and cover with a breathable material.",
    ],
  },
  luges: {
    id: "party-luges",
    name: "Party luges",
    short: "Carved from a single clear block, with two channels and a bottle holder in the rear.",
    text: "We design and hand-carve ice luges: an ice sculpture made to serve chilled shots to your guests. Our luges are carved from a single clear ice block, with two channels carved on an incline and a bottle holder in the rear. We also offer frozen shot glasses, plus luge trays and stands to catch melting water.",
    photo: "real-luge-event.jpg",
    photoAlt: "A carved ice luge on a table at an event",
    photo2: "real-luge-closeup.jpg",
    photo2Alt: "Close-up of a hand-carved ice luge with two channels",
    specs: [
      { item: "Ice party luge", detail: "30 × 20 in, about 100 lb", note: "Standard design only", price: null },
      { item: "Luge trays and stands", detail: "Catch melting water", price: null },
      { item: "Frozen shot glasses", price: null },
    ] as SpecRow[],
    pickupNote: "Party luges are pickup only at our Morris Plains location. Delivery is not available for this item.",
  },
  artisan: {
    id: "artisan-ice",
    name: "Artisan ice",
    short: "Crystal-clear, slow-melting cubes and spears for cocktails and single pours.",
    text: "Clear ice cubes and spears made from sculpture-grade ice. Slow melting and crystal clear, made for classic lowball cocktails and single-pour spirits.",
    // verify: "owner" -> these two photos look like supplier photos; confirm we can use them.
    photo: "site-artisan-rock.jpg",
    photoAlt: "A clear 2-inch ice cube held in metal tongs",
    named: [
      {
        name: "The Rock",
        shape: "Square",
        size: "2 × 2 × 2 in",
        text: "Our most popular clear cube. Superb for lowball cocktails and single-pour spirits.",
        packs: "Bulk bags of 24 or 48",
        photo: "site-artisan-rock.jpg",
        photoAlt: "The Rock: a clear 2-inch ice cube",
      },
      {
        // verify: "owner" -> current site says "The Spare"; may be a typo for "The Spear".
        name: "The Spare",
        shape: "Rectangular",
        size: "5 × 1.5 × 1.5 in",
        text: "A tall, oversized cube for punch bowls, spirit tastings and cocktail displays. Melts slowly and evenly.",
        packs: "Bulk bags of 24 or 48",
        photo: "site-artisan-spear.jpg",
        photoAlt: "A tall clear ice spear",
      },
    ],
    specs: [
      { item: "Artisan ice squares", detail: "Tray of 12", price: null },
      { item: "Artisan ice squares", detail: "Pack of 72", price: null },
      { item: "Artisan ice squares", detail: "Bag of 80", price: null },
      { item: "Artisan ice spheres", detail: "Tray of 6", price: null },
      { item: "Artisan ice spheres", detail: "Pack of 48", price: null },
      { item: "Artisan ice spheres", detail: "Bag of 86", price: null },
    ] as SpecRow[],
  },
  freezers: {
    id: "freezer-rental",
    name: "Freezer rental",
    short: "Three styles of ice freezers for events, short or long term, delivered in our area.",
    text: "Freezer rentals for special events so you don't run out of ice. Our freezers come in three styles based on your needs. Rentals include delivery within our service area. Please book in advance to ensure availability.",
    photo: "site-freezer-slanted.jpg",
    photoAlt: "A white bagged-ice freezer",
    terms: ["Short-term and long-term rentals", "Delivery within our service area included", "Book in advance to ensure availability"],
    styles: [
      { name: "Slanted", photo: "site-freezer-slanted.jpg", photoAlt: "Slanted-front ice freezer", capacity: null },
      { name: "Upright", photo: "site-freezer-upright.jpg", photoAlt: "Upright ice freezer", capacity: null },
      { name: "Wide", photo: "site-freezer-wide.jpg", photoAlt: "Wide ice freezer", capacity: null },
    ] as { name: string; photo: string | null; photoAlt: string; capacity: string | null }[],
    // verify: "owner" -> the current site lists only these two sizes, without saying which style is which.
    sizes: [
      { item: "55 × 75 in freezer", detail: "Holds 39 bags of 40 lb (1,560 lb)", price: null },
      { item: "50 × 55 in freezer", detail: "Holds 18 bags of 40 lb (720 lb)", price: null },
    ] as SpecRow[],
  },
  party: {
    id: "party-rentals",
    name: "Party rentals",
    short: "Tables, chairs, coolers, food machines and more, delivered right to you.",
    text: "Esposito's Party Rentals offers tables, chairs, coolers, food machines and more, with swift deliveries right to your location. Our rentals suit relaxed events and get-togethers: BBQs, family parties and children's parties. We clean and prepare every item before and after each event.",
    photo: "site-folding-chairs.jpg",
    photoAlt: "Stack of white folding chairs",
    inventory: [
      { name: "Party furniture and tent", photo: "site-folding-chairs.jpg", photoAlt: "White folding chairs" },
      { name: "Coolers and keg keepers", photo: "site-keg-coolers.jpg", photoAlt: "Two keg cooler units with taps" },
      { name: "Popcorn, cotton candy and snow cone machines", photo: "site-popcorn-machine.jpg", photoAlt: "Popcorn machine at a party" },
      { name: "Packaged ice freezers", photo: "site-freezer-upright.jpg", photoAlt: "Upright ice freezer" },
    ],
    deliveryNote: "For one flat rate we supply, deliver and pick up your party supplies. Rates vary by location.",
  },
};

// The product list shown on the home page, in order
export const homeProducts = [
  { ...pick(products.bagged), href: "/ice-products/#bagged-ice" },
  { ...pick(products.dry), href: "/ice-products/#dry-ice" },
  { ...pick(products.luges), href: "/ice-products/#party-luges" },
  { ...pick(products.artisan), href: "/ice-products/#artisan-ice" },
  { ...pick(products.freezers), href: "/freezer-rental/" },
  { ...pick(products.party), href: "/party-rentals/" },
];
function pick(p: { id: string; name: string; short: string; photo: string | null; photoAlt: string }) {
  return { id: p.id, name: p.name, short: p.short, photo: p.photo, photoAlt: p.photoAlt };
}

// -----------------------------------------------------------------------------
// GALLERY (Party Rentals page)
// -----------------------------------------------------------------------------
export const gallery = [
  { photo: "real-luge-closeup.jpg", alt: "Hand-carved ice luge" },
  { photo: "site-gallery-oysters.jpg", alt: "Oysters on a bed of crushed ice" },
  { photo: "site-gallery-champagne.jpg", alt: "Champagne bottles in an ice bucket" },
  { photo: "site-dry-ice-fog.jpg", alt: "Dry ice fog pouring from a bowl" },
  { photo: "site-gallery-bottles.jpg", alt: "Bottled drinks in ice" },
  { photo: "site-gallery-scoops.jpg", alt: "Two ice scoops in crushed ice" },
  { photo: "site-gallery-bags.jpg", alt: "Bags of ice cubes" },
  { photo: "real-luge-event.jpg", alt: "Ice luge set up at an event" },
];

// -----------------------------------------------------------------------------
// REVIEWS: only the two featured quotes from the current site.
// status: "needs-owner-approval" -> confirm before launch.
// -----------------------------------------------------------------------------
export const reviews = [
  {
    status: "needs-owner-approval",
    title: "These guys are great!",
    quote:
      "We are having a big event with 300 people and we ran out of ice! I called and Esposito was here in under 2 hours with 2 tons of ice! I have used these guys before at another business and I got the same great service then.",
    author: "Chris W.",
    source: "Google Reviews",
  },
  {
    status: "needs-owner-approval",
    title: "Fabulous!",
    quote:
      "Just fabulous people and prices! If you're looking for dry ice, they're your people. Friendly, affordable and fast.",
    author: "Magen M.",
    source: "Google Reviews",
  },
];

// -----------------------------------------------------------------------------
// FAQ: every answer comes from a fact on the current site.
// -----------------------------------------------------------------------------
export const faq = [
  { q: "Do you deliver?", a: "Yes, within our service area in Morris, Somerset and Essex counties. A minimum order is required, and rates vary by location. Rush and after-hours deliveries are available." },
  { q: "My ice machine broke. Can you help today?", a: "Yes. We offer 24-hour emergency ice delivery. Call (973) 267-2355." },
  { q: "Can you deliver a party luge?", a: "No. Party luges are pickup only at 200 Speedwell Ave in Morris Plains, and they come in our standard design." },
  { q: "How much notice do you need for dry ice pellets?", a: "Please give us 3 days' notice for 50 lb dry ice pellets." },
  { q: "Do you have crushed ice?", a: "Yes. Crushed ice is available in all bag sizes for an additional cost." },
  { q: "Do I need to book a freezer in advance?", a: "Yes, please book in advance to ensure availability. Freezer rentals include delivery within our service area." },
  { q: "¿Hablan español?", a: "Sí. Se habla español." },
];

// -----------------------------------------------------------------------------
// QUOTE FORM
// mode "netlify": submissions go to the Netlify Forms inbox for this site.
//   Nothing is emailed to anyone until you add an email in
//   Netlify > Site > Forms > Form notifications.
// On localhost the form always runs in demo mode (nothing is sent).
// -----------------------------------------------------------------------------
export const quoteForm = {
  mode: "netlify" as "netlify" | "demo",
  name: "quote",
  productOptions: ["Bagged ice", "Dry ice", "Party luges", "Freezer rental", "Party rentals"],
  success: "Thanks! Your request was sent. For anything urgent, call (973) 267-2355.",
};

// -----------------------------------------------------------------------------
// ICE CALCULATOR (home page, "How much ice do I need?")
// These numbers are a COMMON RULE OF THUMB, not yet confirmed by the owner.
// When the owner gives his numbers, change them here and the calculator updates.
// -----------------------------------------------------------------------------
export const iceCalculator = {
  guests: { min: 10, max: 500, step: 5, start: 50 },
  hours: { min: 1, max: 12, start: 4 },
  // Pounds of ice per guest for an event of `baseHours` hours
  uses: [
    { id: "drinks", label: "Drinks only", lbPerGuest: 1 },
    { id: "coolers", label: "Drinks + coolers", lbPerGuest: 2, start: true },
    { id: "bar", label: "Full bar + coolers", lbPerGuest: 2.5 },
  ],
  // Extra ice for warm weather (1.25 = 25% more)
  settings: [
    { id: "indoors", label: "Indoors", hint: "Any season", factor: 1 },
    { id: "mild", label: "Outdoors", hint: "Spring or fall", factor: 1.1 },
    { id: "hot", label: "Outdoors", hint: "Summer", factor: 1.25, start: true },
  ],
  baseHours: 4,     // per-guest amounts above cover this many hours…
  extraPerHour: 0.1, // …then add 10% for each extra hour
  bagSizes: [40, 16, 5], // cube bag sizes the calculator may suggest (see products.bagged)
  bigOrderLb: 400,  // at or above this, suggest a freezer rental
  quoteProduct: "Bagged ice", // pre-selected in the quote form (must match quoteForm.productOptions)
};

// -----------------------------------------------------------------------------
// IMAGES used for mood (AI-generated, see images.md) and SEO text per page
// -----------------------------------------------------------------------------
export const moodImages = {
  hero: "ai-hero-ice-cubes.jpg",
  pageHeader: "ai-hero-ice-wall.jpg",
  heroAlt: "Clear ice cubes catching the light against a dark background",
  pageHeaderAlt: "Stacked blocks of clear ice in soft daylight",
  texture: "ai-crushed-ice-texture.jpg",
  bottles: "ai-bottles-on-ice.jpg",
  bottlesAlt: "Bottles chilling in a tub of ice at a backyard party",
  party: "ai-backyard-party.jpg",
  partyAlt: "A backyard party at dusk under string lights",
};

export const seo = {
  home: {
    title: "Esposito's Ice & Party Rentals | Ice & Dry Ice in Morris Plains, NJ",
    description: "Bagged ice, dry ice, party luges, freezer rentals and party rentals in Morris Plains, NJ since 1979. Delivery to Morris, Somerset and Essex counties. 24-hour emergency ice.",
  },
  ice: {
    title: "Ice Products: Bagged Ice, Dry Ice, Luges & Artisan Ice | Esposito's Ice",
    description: "Cube and block ice, dry ice blocks, crushed and pellets, hand-carved party luges and clear artisan ice. Pickup in Morris Plains, NJ or delivery in our area.",
  },
  freezer: {
    title: "Ice Freezer Rental for Events in NJ | Esposito's Ice",
    description: "Rent a slanted, upright or wide ice freezer for your event. Short or long term, delivery included in Morris, Somerset and Essex counties. Book in advance.",
  },
  party: {
    title: "Party Rentals NJ: Tables, Chairs, Coolers & Food Machines | Esposito's Ice",
    description: "Party furniture and tents, coolers and keg keepers, popcorn, cotton candy and snow cone machines, and ice freezers. Delivered and picked up in our NJ service area.",
  },
  about: {
    title: "About Esposito's Ice | Morris Plains, NJ Since 1979",
    description: "Founded in 1979 by Joseph Esposito and run by the O'Hagan family since 1998. Northern New Jersey's local ice supplier.",
  },
  contact: {
    title: "Contact & Quote Request | Esposito's Ice, Morris Plains NJ",
    description: "Call (973) 267-2355 or send a quote request. 200 Speedwell Ave, Morris Plains, NJ 07950. Se habla español.",
  },
};
