// ================================================================
// Fractalysium — Newsroom Data
// Add new items by copying an entry and changing the fields.
// ================================================================

export type MediaType = 'news' | 'blog' | 'media' | 'photo' | 'video';

export type NewsroomItem = {
  id:       string;
  type:     MediaType;
  title:    string;
  summary:  string;
  date:     string;
  tag:      string;
  image:    string;
  href:     string;          // internal slug or external URL
  external: boolean;
  duration?: string;         // for videos
  source?:   string;         // for media / press coverage
};

export const newsroomItems: NewsroomItem[] = [
  // ── NEWS ───────────────────────────────────────────────────
  {
    id: 'n01', type: 'news',
    title: 'Fractalysium Completes EU AI Act High Risk System Conformity Assessment',
    summary: 'Our Cognitive Planetary Intelligence platform has completed the conformity assessment process under the EU AI Act, enabling deployment in emergency response and border monitoring contexts across the European Union.',
    date: 'April 2026', tag: 'Company News',
    image: '/assets/images/satellite-orbit.jpg',
    href: '/marketing/news/cognitive-planetary-intelligence', external: false,
  },
  {
    id: 'n02', type: 'news',
    title: 'Fractalysium Maritime Domain Awareness Enters Operational Trial',
    summary: 'Our dark vessel detection system has entered operational trial with a European coastal authority, processing Sentinel-1 SAR data across three maritime corridors in real time.',
    date: 'March 2026', tag: 'Operations',
    image: '/assets/images/earth-surface.jpg',
    href: '/marketing/news/maritime-dark-vessel-detection', external: false,
  },
  {
    id: 'n03', type: 'news',
    title: 'Wildfire Detection System Achieves Under 60 Second Alert Latency',
    summary: 'Following extensive testing across the 2025 fire season, our Meteosat-based wildfire detection engine now delivers actionable alerts in under 60 seconds from ignition detection.',
    date: 'February 2026', tag: 'Technology',
    image: '/assets/images/earth-surface-2.jpg',
    href: '/marketing/news/wildfire-detection-under-60-seconds', external: false,
  },

  // ── BLOG ───────────────────────────────────────────────────
  {
    id: 'b01', type: 'blog',
    title: 'Why Causal Reasoning Is the Missing Layer in Earth Observation AI',
    summary: 'Detection classifies pixels. Reasoning explains what they mean. This post explores the cognitive gap between conventional EO pipelines and true planetary intelligence systems.',
    date: 'April 2026', tag: 'Insight',
    image: '/assets/images/spacecraft.jpg',
    href: '/marketing/news/cognitive-planetary-intelligence', external: false,
  },
  {
    id: 'b02', type: 'blog',
    title: 'The Copernicus Advantage: Why Open Satellite Data Changes Everything',
    summary: 'Eight billion euros of European infrastructure, freely available under EU treaty law. We explain why this is the most underused competitive advantage in European technology.',
    date: 'March 2026', tag: 'Opinion',
    image: '/assets/images/dish-blue.jpg',
    href: '/marketing/news/copernicus-data-sovereign-foundation', external: false,
  },
  {
    id: 'b03', type: 'blog',
    title: 'Building for the EU AI Act From Day One',
    summary: 'Compliance built from the first commit is a different product from compliance bolted on at the end. Here is what designing for EU AI Act conformity looks like in practice.',
    date: 'January 2026', tag: 'Engineering',
    image: '/assets/images/dish-sunset.jpg',
    href: '/marketing/news/eu-ai-act-satellite-intelligence', external: false,
  },

  // ── MEDIA / PRESS ───────────────────────────────────────────
  {
    id: 'm01', type: 'media',
    title: 'Fractalysium Featured in European Space Policy Report 2026',
    summary: 'The annual European Space Policy Report highlights Fractalysium as a leading example of Copernicus-native intelligence platforms designed for EU AI Act compliance.',
    date: 'April 2026', tag: 'Press', source: 'European Space Policy Institute',
    image: '/assets/images/hero.jpg',
    href: '#', external: true,
  },
  {
    id: 'm02', type: 'media',
    title: 'Interview: Building Sovereign AI for European Defence',
    summary: 'Our CEO Walter Bizzari speaks with Defence Technology International on European satellite intelligence sovereignty and the case for Copernicus-native platforms.',
    date: 'March 2026', tag: 'Interview', source: 'Defence Technology International',
    image: '/assets/images/spacecraft.jpg',
    href: '#', external: true,
  },
  {
    id: 'm03', type: 'media',
    title: 'Fractalysium CTO on AI Latency in Disaster Response Systems',
    summary: 'Harshit Mishra discusses the engineering challenges of achieving sub-60-second satellite intelligence latency in a conversation with GeoIntelligence Weekly.',
    date: 'February 2026', tag: 'Interview', source: 'GeoIntelligence Weekly',
    image: '/assets/images/dish-sunset.jpg',
    href: '#', external: true,
  },

  // ── PHOTOS ─────────────────────────────────────────────────
  {
    id: 'p01', type: 'photo',
    title: 'Sentinel-1 SAR Dark Vessel Detection — Mediterranean Exercise',
    summary: 'Radar imagery from the January 2026 maritime domain awareness exercise covering three European maritime corridors.',
    date: 'January 2026', tag: 'Field Exercise',
    image: '/assets/images/earth-surface.jpg',
    href: '#', external: false,
  },
  {
    id: 'p02', type: 'photo',
    title: 'Copernicus Ground Station — Data Receiving Operations',
    summary: 'Sentinel data reception at a European ground station, part of the Copernicus infrastructure that underpins our platform.',
    date: 'December 2025', tag: 'Infrastructure',
    image: '/assets/images/dish-blue.jpg',
    href: '#', external: false,
  },
  {
    id: 'p03', type: 'photo',
    title: 'Earth Surface Thermal Analysis — Wildfire Season 2025',
    summary: 'Sentinel-3 thermal composite showing land surface temperature anomalies across the Iberian Peninsula during peak wildfire season.',
    date: 'September 2025', tag: 'Analysis',
    image: '/assets/images/earth-surface-2.jpg',
    href: '#', external: false,
  },

  // ── VIDEO ───────────────────────────────────────────────────
  {
    id: 'v01', type: 'video',
    title: 'Platform Demo: Wildfire Cognitive Alert in Real Time',
    summary: 'A walkthrough of the Fractalysium cognitive alert pipeline from Meteosat thermal detection to actionable spread forecast, demonstrated live with 2025 fire season data.',
    date: 'March 2026', tag: 'Demo', duration: '8 min',
    image: '/assets/images/earth-surface.jpg',
    href: '#', external: false,
  },
  {
    id: 'v02', type: 'video',
    title: 'Explainer: How Sentinel-1 SAR Detects Dark Vessels',
    summary: 'A short technical explainer on synthetic aperture radar maritime surveillance — how the physics works and what our AI layer adds on top of raw SAR detections.',
    date: 'February 2026', tag: 'Explainer', duration: '5 min',
    image: '/assets/images/satellite-orbit.jpg',
    href: '#', external: false,
  },
  {
    id: 'v03', type: 'video',
    title: 'CEO Interview: European Sovereign Intelligence in 2026',
    summary: 'Walter Bizzari on the strategic importance of European satellite intelligence sovereignty, the EU AI Act as a quality signal, and Fractalysium\'s roadmap.',
    date: 'January 2026', tag: 'Leadership', duration: '12 min',
    image: '/assets/images/spacecraft.jpg',
    href: '#', external: false,
  },
];

// Helpers
export const getByType = (type: MediaType) =>
  newsroomItems.filter(i => i.type === type);

export const getLatest = (count = 6) =>
  [...newsroomItems].slice(0, count);

export const TABS = [
  { id: 'all',   label: 'All'    },
  { id: 'news',  label: 'News'   },
  { id: 'blog',  label: 'Blog'   },
  { id: 'media', label: 'Media'  },
  { id: 'photo', label: 'Photos' },
  { id: 'video', label: 'Videos' },
] as const;
