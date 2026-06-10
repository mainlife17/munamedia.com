export type SeoPage = {
  slug: string;
  title: string;
  description: string;
  h1: string;
  eyebrow: string;
  intro: string;
  markets: string[];
  services: string[];
  proof: string[];
  faqs: { q: string; a: string }[];
};

export const pages: SeoPage[] = [
  {
    slug: 'central-asia/advertising-agency',
    title: 'Advertising Agency in Central Asia | Muna Agency',
    description: 'Muna Agency helps international brands plan and launch advertising campaigns across Uzbekistan, Kazakhstan, Kyrgyzstan and Tajikistan.',
    h1: 'Advertising Agency in Central Asia',
    eyebrow: 'Central Asia market entry',
    intro: 'We help brands enter Central Asia with media planning, creative adaptation, paid media, influencer campaigns, Telegram placements, outdoor media and reporting.',
    markets: ['Uzbekistan', 'Kazakhstan', 'Kyrgyzstan', 'Tajikistan'],
    services: ['Media planning', 'Media buying', 'Influencer marketing', 'Telegram marketing', 'BTL and events', 'Outdoor advertising'],
    proof: ['Regional planning instead of one-country guesswork', 'Online and offline channels in one campaign view', 'Paid diagnostics before budget allocation'],
    faqs: [
      { q: 'Which countries do you cover?', a: 'The first focus is Uzbekistan, Kazakhstan, Kyrgyzstan and Tajikistan.' },
      { q: 'Do you work with international brands?', a: 'Yes. The site is built for companies entering Central Asia or scaling regional campaigns.' }
    ]
  },
  {
    slug: 'central-asia/media-buying-agency',
    title: 'Media Buying Agency in Central Asia | Muna Agency',
    description: 'Regional media buying for Central Asia: paid social, search, Telegram, influencers, outdoor placements and campaign reporting.',
    h1: 'Media Buying Agency in Central Asia',
    eyebrow: 'Regional media buying',
    intro: 'We build media plans by market, budget and audience, then manage placements and reporting across online and offline channels.',
    markets: ['Uzbekistan', 'Kazakhstan', 'Kyrgyzstan', 'Tajikistan'],
    services: ['Paid social', 'Google Ads', 'Telegram placements', 'Influencer placements', 'LED screens', 'Campaign reporting'],
    proof: ['Budget split by country and channel', 'Placement control and transparent reporting', 'Campaign setup for reach, leads, traffic or sales'],
    faqs: [
      { q: 'Can you buy media in several countries?', a: 'Yes. We structure the plan by country, channel and business goal.' },
      { q: 'Do you provide reports?', a: 'Yes. Reporting is part of the launch and optimization process.' }
    ]
  },
  {
    slug: 'central-asia/digital-marketing-agency',
    title: 'Digital Marketing Agency in Central Asia | Muna Agency',
    description: 'Digital marketing agency for Central Asia: paid media, SEO, SMM, Telegram marketing, creator campaigns and conversion-focused launch plans.',
    h1: 'Digital Marketing Agency in Central Asia',
    eyebrow: 'Digital growth across the region',
    intro: 'We help teams turn Central Asia market entry into a practical digital plan: channels, budget, landing pages, tracking and reporting.',
    markets: ['Uzbekistan', 'Kazakhstan', 'Kyrgyzstan', 'Tajikistan'],
    services: ['Digital strategy', 'SMM', 'PPC', 'SEO', 'AEO and GEO', 'Telegram marketing'],
    proof: ['Channel mix based on market behavior', 'Demand generation and performance tracking', 'Content and paid media connected in one plan'],
    faqs: [
      { q: 'Do you only do ads?', a: 'No. We combine strategy, paid media, content, search visibility and reporting.' }
    ]
  },
  {
    slug: 'central-asia/performance-marketing-agency',
    title: 'Performance Marketing Agency in Central Asia | Muna Agency',
    description: 'Performance marketing for Central Asia: paid acquisition, funnel tracking, landing page recommendations and budget optimization.',
    h1: 'Performance Marketing Agency in Central Asia',
    eyebrow: 'Measurable demand',
    intro: 'We plan and optimize campaigns around leads, sales, traffic and measurable demand instead of vanity metrics.',
    markets: ['Uzbekistan', 'Kazakhstan', 'Kyrgyzstan', 'Tajikistan'],
    services: ['PPC advertising', 'Paid social', 'Lead generation', 'Landing page diagnostics', 'Analytics setup', 'Optimization'],
    proof: ['Metrics agreed before launch', 'Budget control by channel', 'Optimization based on actual campaign data'],
    faqs: [
      { q: 'Do you guarantee sales?', a: 'No agency can honestly guarantee sales. We build the system, measure results and optimize spend.' }
    ]
  },
  {
    slug: 'uzbekistan/advertising-agency',
    title: 'Advertising Agency in Uzbekistan | Muna Agency',
    description: 'Advertising agency in Uzbekistan for international and local brands: media planning, Telegram, influencers, PPC, SMM, BTL and outdoor advertising.',
    h1: 'Advertising Agency in Uzbekistan',
    eyebrow: 'Uzbekistan market launch',
    intro: 'We help brands plan and launch campaigns in Uzbekistan with the right mix of digital, Telegram, influencers, outdoor, events and performance channels.',
    markets: ['Tashkent', 'Uzbekistan', 'Central Asia'],
    services: ['Telegram marketing', 'Influencer marketing', 'Google Ads', 'Meta Ads', 'SMM', 'Outdoor advertising'],
    proof: ['Local market knowledge', 'Campaign planning for brands and lead generation', 'Online and offline execution'],
    faqs: [
      { q: 'Can you help with Tashkent campaigns?', a: 'Yes. Tashkent is a key market for Uzbekistan campaigns.' }
    ]
  },
  {
    slug: 'uzbekistan/media-buying-agency',
    title: 'Media Buying Agency in Uzbekistan | Muna Agency',
    description: 'Media buying in Uzbekistan: digital placements, Telegram channels, influencers, PPC, outdoor media and reporting.',
    h1: 'Media Buying Agency in Uzbekistan',
    eyebrow: 'Uzbekistan media buying',
    intro: 'We manage media buying in Uzbekistan across digital and offline channels with a clear plan, budget split and reporting.',
    markets: ['Uzbekistan', 'Tashkent'],
    services: ['Media planning', 'Telegram channels', 'Influencer placements', 'PPC', 'LED screens', 'Reporting'],
    proof: ['Budget allocation by channel', 'Placement control', 'Reporting for management teams'],
    faqs: [{ q: 'Can you work with both online and offline media?', a: 'Yes. Campaigns can include paid digital, Telegram, creators, outdoor and activations.' }]
  },
  {
    slug: 'uzbekistan/digital-marketing-agency',
    title: 'Digital Marketing Agency in Uzbekistan | Muna Agency',
    description: 'Digital marketing agency in Uzbekistan: paid ads, SEO, SMM, Telegram marketing, influencer marketing and campaign reporting.',
    h1: 'Digital Marketing Agency in Uzbekistan',
    eyebrow: 'Digital campaigns in Uzbekistan',
    intro: 'We build digital campaigns for brands that need visibility, leads, traffic and growth in Uzbekistan.',
    markets: ['Uzbekistan', 'Tashkent'],
    services: ['Paid ads', 'SEO', 'SMM', 'Telegram marketing', 'Influencer marketing', 'Analytics'],
    proof: ['Local channel mix', 'Clear launch process', 'Performance reporting'],
    faqs: [{ q: 'Do you run Telegram campaigns?', a: 'Yes. Telegram marketing is one of the core channels for Uzbekistan.' }]
  },
  {
    slug: 'kazakhstan/advertising-agency',
    title: 'Advertising Agency in Kazakhstan | Muna Agency',
    description: 'Advertising agency in Kazakhstan for brands entering or scaling in the market: media planning, digital campaigns, influencers and performance marketing.',
    h1: 'Advertising Agency in Kazakhstan',
    eyebrow: 'Kazakhstan market launch',
    intro: 'We help brands plan Kazakhstan campaigns and connect them with broader Central Asia strategy when needed.',
    markets: ['Kazakhstan', 'Almaty', 'Astana', 'Central Asia'],
    services: ['Media planning', 'Paid social', 'Google Ads', 'Influencer marketing', 'SMM', 'Reporting'],
    proof: ['Country-specific planning', 'Regional campaign logic', 'Management reporting'],
    faqs: [{ q: 'Can Kazakhstan be part of a regional campaign?', a: 'Yes. We can plan Kazakhstan separately or as part of Central Asia.' }]
  },
  {
    slug: 'kazakhstan/media-buying-agency',
    title: 'Media Buying Agency in Kazakhstan | Muna Agency',
    description: 'Media buying agency for Kazakhstan: paid media, influencers, search, social and campaign reporting for brands.',
    h1: 'Media Buying Agency in Kazakhstan',
    eyebrow: 'Kazakhstan media buying',
    intro: 'We plan and manage media buying in Kazakhstan with clear budgets, channels and reporting.',
    markets: ['Kazakhstan', 'Almaty', 'Astana'],
    services: ['Paid media', 'Google Ads', 'Meta Ads', 'Influencers', 'Reporting'],
    proof: ['Market-specific channel plan', 'Controlled launch process', 'Optimization by results'],
    faqs: [{ q: 'Do you support international companies?', a: 'Yes. The service is designed for brands entering or expanding in the region.' }]
  },
  {
    slug: 'kazakhstan/digital-marketing-agency',
    title: 'Digital Marketing Agency in Kazakhstan | Muna Agency',
    description: 'Digital marketing agency in Kazakhstan: paid media, social media, search, influencers and analytics for growth campaigns.',
    h1: 'Digital Marketing Agency in Kazakhstan',
    eyebrow: 'Kazakhstan digital marketing',
    intro: 'We help brands launch and optimize digital campaigns in Kazakhstan with a practical channel plan and reporting.',
    markets: ['Kazakhstan', 'Central Asia'],
    services: ['Digital strategy', 'Paid media', 'SMM', 'SEO', 'Influencer marketing', 'Analytics'],
    proof: ['Channel planning', 'Campaign execution', 'Reporting for decision-making'],
    faqs: [{ q: 'Can you build a plan before launch?', a: 'Yes. We start with paid diagnostics and media planning.' }]
  },
  {
    slug: 'case-studies',
    title: 'Muna Agency Case Studies | Central Asia Advertising Work',
    description: 'Selected advertising and media work from Muna Media across Central Asia.',
    h1: 'Case Studies',
    eyebrow: 'Proof of work',
    intro: 'Selected work will show how Muna plans and launches campaigns for brands in Central Asia.',
    markets: ['Uzbekistan', 'Kazakhstan', 'Central Asia'],
    services: ['Media strategy', 'Campaign launch', 'Reporting'],
    proof: ['Add public cases: UnionPay, Xiaomi, Huawei, UNICEF, Yandex Eats if approved'],
    faqs: [{ q: 'Why are some case details limited?', a: 'Some campaign data can only be shared after client approval.' }]
  }
];
