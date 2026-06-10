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
    title: 'Advertising Agency in Central Asia | Muna Media',
    description: 'Muna Media helps international brands plan and launch advertising campaigns across Uzbekistan, Kazakhstan, Kyrgyzstan and Tajikistan.',
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
    title: 'Media Buying Agency in Central Asia | Muna Media',
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
    title: 'Digital Marketing Agency in Central Asia | Muna Media',
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
    title: 'Performance Marketing Agency in Central Asia | Muna Media',
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
    title: 'Advertising Agency in Uzbekistan | Muna Media',
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
    title: 'Media Buying Agency in Uzbekistan | Muna Media',
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
    title: 'Digital Marketing Agency in Uzbekistan | Muna Media',
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
    title: 'Advertising Agency in Kazakhstan | Muna Media',
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
    title: 'Media Buying Agency in Kazakhstan | Muna Media',
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
    title: 'Digital Marketing Agency in Kazakhstan | Muna Media',
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
    slug: 'services/media-buying',
    title: 'Open-Book Media Buying in Central Asia | Muna Media',
    description: 'Transparent media buying for Uzbekistan and Central Asia with open-book pricing, channel planning, local execution and real-time reporting.',
    h1: 'Open-Book Media Buying for Central Asia',
    eyebrow: 'Priority service',
    intro: 'Plan, buy and optimize media across Central Asia with transparent inventory costs, no hidden media markups and management-ready reporting.',
    markets: ['Uzbekistan', 'Kazakhstan', 'Central Asia'],
    services: ['Media planning', 'Media buying', 'Open-book pricing', 'Reporting', 'Optimization'],
    proof: ['No hidden media markups', 'Regional channel planning', 'Real-time reporting through Minora AI'],
    faqs: [{ q: 'What does open-book media buying mean?', a: 'The client can see the media inventory cost and the agency fee separately, instead of receiving a blended price with hidden markups.' }]
  },
  {
    slug: 'services/telegram-marketing',
    title: 'Telegram Marketing in Uzbekistan and Central Asia | Muna Media',
    description: 'Telegram marketing campaigns for Uzbekistan and Central Asia: channel buying, community placements, creative adaptation and conversion tracking.',
    h1: 'Telegram Marketing for Uzbekistan and Central Asia',
    eyebrow: 'Priority service',
    intro: 'Use Telegram as a serious acquisition and brand channel with channel selection, placement control, creative adaptation and performance tracking.',
    markets: ['Uzbekistan', 'Central Asia'],
    services: ['Telegram channel buying', 'Community placements', 'Creative adaptation', 'Campaign tracking'],
    proof: ['Local channel knowledge', 'Placement control', 'Conversion-focused execution'],
    faqs: [{ q: 'Do you only buy posts in channels?', a: 'No. Telegram marketing can include channel buying, communities, bots, landing flows, retargeting and reporting.' }]
  },
  {
    slug: 'services/influencer-marketing',
    title: 'Influencer Marketing in Central Asia | Muna Media',
    description: 'Influencer marketing for Uzbekistan and Central Asia with creator selection, negotiation, campaign launch and reporting.',
    h1: 'Influencer Marketing for Central Asia',
    eyebrow: 'Priority service',
    intro: 'We select creators, negotiate placements, localize campaign messages and measure delivery for brands operating in Central Asia.',
    markets: ['Uzbekistan', 'Kazakhstan', 'Central Asia'],
    services: ['Creator selection', 'Negotiation', 'Content briefing', 'Reporting'],
    proof: ['Local creator network', 'Brand-safe execution', 'Campaign reporting'],
    faqs: [{ q: 'Can influencer marketing be part of a larger launch?', a: 'Yes. It works best when connected with media buying, Telegram, landing pages and performance tracking.' }]
  },
  {
    slug: 'services/digital-performance-marketing',
    title: 'Digital Performance Marketing in Central Asia | Muna Media',
    description: 'Performance marketing for Central Asia focused on CAC, LTV, lead generation, tracking and optimization.',
    h1: 'Digital Performance Marketing for Central Asia',
    eyebrow: 'Growth system',
    intro: 'Build paid acquisition around measurable business outcomes: leads, installs, sales, CAC and LTV signals.',
    markets: ['Uzbekistan', 'Kazakhstan', 'Central Asia'],
    services: ['Paid social', 'Search', 'Lead generation', 'Analytics', 'Optimization'],
    proof: ['CAC/LTV focus', 'Tracking setup', 'Budget optimization'],
    faqs: [{ q: 'Do you optimize only for clicks?', a: 'No. The operating model should connect campaigns to business metrics wherever tracking allows it.' }]
  },
  {
    slug: 'services/seo-aeo-geo',
    title: 'SEO, AEO and GEO for Central Asia | Muna Media',
    description: 'Search and AI visibility for brands entering Central Asia: SEO, answer engine optimization and generative engine optimization.',
    h1: 'SEO, AEO and GEO for Central Asia',
    eyebrow: 'Visibility system',
    intro: 'Help customers and AI assistants discover your brand through search, answer engines and structured regional content.',
    markets: ['Uzbekistan', 'Central Asia'],
    services: ['SEO', 'AEO', 'GEO', 'Content architecture', 'Technical SEO'],
    proof: ['Search visibility', 'AI-readable positioning', 'Regional content strategy'],
    faqs: [{ q: 'Why does AI visibility matter?', a: 'Executives increasingly research vendors through ChatGPT, Perplexity and Google AI surfaces, not only classic search results.' }]
  },
  {
    slug: 'services/orm-serm-reputation',
    title: 'ORM and SERM in Central Asia | Muna Media',
    description: 'Online reputation and search reputation management for brands operating in Uzbekistan and Central Asia.',
    h1: 'ORM and SERM for Central Asia',
    eyebrow: 'Reputation protection',
    intro: 'Control reputation risks across search, maps, reviews, local media and social channels before they damage conversion.',
    markets: ['Uzbekistan', 'Central Asia'],
    services: ['ORM', 'SERM', 'Review monitoring', 'Reputation response', 'Search control'],
    proof: ['Reputation risk control', 'Local context', 'Conversion protection'],
    faqs: [{ q: 'Is reputation work only PR?', a: 'No. In local markets, reputation directly affects paid traffic conversion, maps, reviews and sales funnel performance.' }]
  },
  {
    slug: 'services/ooh-dooh-advertising',
    title: 'OOH and DOOH Advertising in Uzbekistan | Muna Media',
    description: 'Outdoor and digital outdoor advertising in Uzbekistan and Central Asia: LED screens, transport, metro, airport and city media.',
    h1: 'OOH and DOOH Advertising in Uzbekistan',
    eyebrow: 'Offline media',
    intro: 'Plan and buy outdoor media across key urban placements with reporting and integration into broader campaigns.',
    markets: ['Tashkent', 'Uzbekistan', 'Central Asia'],
    services: ['LED screens', 'Transport media', 'Metro', 'Airport ads', 'City media'],
    proof: ['Local inventory knowledge', 'Placement coordination', 'Campaign integration'],
    faqs: [{ q: 'Can OOH be combined with digital?', a: 'Yes. OOH works best when connected with digital retargeting, search demand and campaign measurement.' }]
  },
  {
    slug: 'services/btl-events',
    title: 'BTL and Event Marketing in Uzbekistan | Muna Media',
    description: 'BTL activations, retail campaigns, events and partner mechanics for brands in Uzbekistan and Central Asia.',
    h1: 'BTL and Event Marketing in Uzbekistan',
    eyebrow: 'Activation',
    intro: 'Run field, retail and partner activations with local coordination, staffing, vendor control and reporting.',
    markets: ['Uzbekistan', 'Central Asia'],
    services: ['BTL', 'Retail activations', 'Events', 'Partner mechanics', 'Reporting'],
    proof: ['Retail partner coordination', 'Operational control', 'Brand-safe execution'],
    faqs: [{ q: 'Can you manage retail partners?', a: 'Yes. BTL projects can include partner coordination, staff, locations, materials and reporting.' }]
  },
  {
    slug: 'services/market-entry-central-asia',
    title: 'Market Entry Marketing for Central Asia | Muna Media',
    description: 'Market entry planning and marketing execution for brands entering Uzbekistan and Central Asia.',
    h1: 'Market Entry Marketing for Central Asia',
    eyebrow: 'Market entry',
    intro: 'Build the first 90-day launch plan for Uzbekistan and Central Asia: risks, channels, budget, partners, tracking and execution.',
    markets: ['Uzbekistan', 'Kazakhstan', 'Central Asia'],
    services: ['Market diagnostic', 'Launch plan', 'Channel strategy', 'Risk control', 'Execution roadmap'],
    proof: ['Lower launch risk', 'Local channel planning', 'Execution-ready roadmap'],
    faqs: [{ q: 'Do you work on one-time projects?', a: 'The preferred model is long-term retainer plus success fee, but market-entry diagnostics can start the relationship.' }]
  },
  {
    slug: 'platform/minora-ai-dashboards',
    title: 'Minora AI Dashboards for Marketing Reporting | Muna Media',
    description: 'Real-time campaign dashboards for spend transparency, media delivery, CAC/LTV signals and management reporting.',
    h1: 'Minora AI Dashboards for Real-Time Marketing Control',
    eyebrow: 'Platform',
    intro: 'Minora AI gives clients real-time visibility into spend, delivery and campaign performance instead of waiting for static monthly reports.',
    markets: ['Central Asia'],
    services: ['Dashboards', 'Reporting', 'Spend transparency', 'Performance monitoring'],
    proof: ['Real-time visibility', 'Open-book support', 'Management-ready reporting'],
    faqs: [{ q: 'Is Minora AI required for every client?', a: 'It is part of the enterprise operating model where real-time visibility and transparency are needed.' }]
  },
  {
    slug: 'case-studies',
    title: 'Muna Media Case Studies | Central Asia Advertising Work',
    description: 'Selected advertising and media work from Muna Media across Central Asia.',
    h1: 'Case Studies',
    eyebrow: 'Proof of work',
    intro: 'Selected work will show how Muna plans and launches campaigns for brands in Central Asia.',
    markets: ['Uzbekistan', 'Kazakhstan', 'Central Asia'],
    services: ['Media strategy', 'Campaign launch', 'Reporting'],
    proof: ['Add public cases: UnionPay, Xiaomi, Huawei, UNICEF, Yandex Eats if approved'],
    faqs: [{ q: 'Why are some case details limited?', a: 'Some campaign data can only be shared after client approval.' }]
  },
  {
    slug: 'services',
    title: 'Muna Media Services | Central Asia Marketing Execution',
    description: 'Enterprise marketing execution, regional strategy and local campaign operations by Muna Media.',
    h1: 'Services',
    eyebrow: 'Muna Media',
    intro: 'This page is part of the Muna Media enterprise website rebuild. Detailed CMS-driven content will be added in the next phase.',
    markets: ['Uzbekistan', 'Central Asia'],
    services: ['Strategy', 'Media buying', 'Telegram marketing', 'Influencer marketing', 'Reporting'],
    proof: ['Open-book pricing', 'Local execution', 'Minora AI dashboards'],
    faqs: [{ q: 'Can Muna Media support enterprise clients?', a: 'Yes. The operating model is built around transparency, local execution and management-ready reporting.' }]
  },
  {
    slug: 'solutions',
    title: 'Muna Media Solutions | Central Asia Growth',
    description: 'Enterprise marketing execution, regional strategy and local campaign operations by Muna Media.',
    h1: 'Solutions',
    eyebrow: 'Muna Media',
    intro: 'This page is part of the Muna Media enterprise website rebuild. Detailed CMS-driven content will be added in the next phase.',
    markets: ['Uzbekistan', 'Central Asia'],
    services: ['Strategy', 'Media buying', 'Telegram marketing', 'Influencer marketing', 'Reporting'],
    proof: ['Open-book pricing', 'Local execution', 'Minora AI dashboards'],
    faqs: [{ q: 'Can Muna Media support enterprise clients?', a: 'Yes. The operating model is built around transparency, local execution and management-ready reporting.' }]
  },
  {
    slug: 'industries',
    title: 'Muna Media Industries | Central Asia Marketing',
    description: 'Enterprise marketing execution, regional strategy and local campaign operations by Muna Media.',
    h1: 'Industries',
    eyebrow: 'Muna Media',
    intro: 'This page is part of the Muna Media enterprise website rebuild. Detailed CMS-driven content will be added in the next phase.',
    markets: ['Uzbekistan', 'Central Asia'],
    services: ['Strategy', 'Media buying', 'Telegram marketing', 'Influencer marketing', 'Reporting'],
    proof: ['Open-book pricing', 'Local execution', 'Minora AI dashboards'],
    faqs: [{ q: 'Can Muna Media support enterprise clients?', a: 'Yes. The operating model is built around transparency, local execution and management-ready reporting.' }]
  },
  {
    slug: 'blog',
    title: 'Muna Media Blog | Central Asia Marketing Insights',
    description: 'Enterprise marketing execution, regional strategy and local campaign operations by Muna Media.',
    h1: 'Blog',
    eyebrow: 'Muna Media',
    intro: 'This page is part of the Muna Media enterprise website rebuild. Detailed CMS-driven content will be added in the next phase.',
    markets: ['Uzbekistan', 'Central Asia'],
    services: ['Strategy', 'Media buying', 'Telegram marketing', 'Influencer marketing', 'Reporting'],
    proof: ['Open-book pricing', 'Local execution', 'Minora AI dashboards'],
    faqs: [{ q: 'Can Muna Media support enterprise clients?', a: 'Yes. The operating model is built around transparency, local execution and management-ready reporting.' }]
  },
  {
    slug: 'solutions/market-entry',
    title: 'Market Entry Solution | Muna Media',
    description: 'Enterprise marketing execution, regional strategy and local campaign operations by Muna Media.',
    h1: 'Market Entry Solution',
    eyebrow: 'Muna Media',
    intro: 'This page is part of the Muna Media enterprise website rebuild. Detailed CMS-driven content will be added in the next phase.',
    markets: ['Uzbekistan', 'Central Asia'],
    services: ['Strategy', 'Media buying', 'Telegram marketing', 'Influencer marketing', 'Reporting'],
    proof: ['Open-book pricing', 'Local execution', 'Minora AI dashboards'],
    faqs: [{ q: 'Can Muna Media support enterprise clients?', a: 'Yes. The operating model is built around transparency, local execution and management-ready reporting.' }]
  },
  {
    slug: 'solutions/lead-generation',
    title: 'Lead Generation Solution | Muna Media',
    description: 'Enterprise marketing execution, regional strategy and local campaign operations by Muna Media.',
    h1: 'Lead Generation Solution',
    eyebrow: 'Muna Media',
    intro: 'This page is part of the Muna Media enterprise website rebuild. Detailed CMS-driven content will be added in the next phase.',
    markets: ['Uzbekistan', 'Central Asia'],
    services: ['Strategy', 'Media buying', 'Telegram marketing', 'Influencer marketing', 'Reporting'],
    proof: ['Open-book pricing', 'Local execution', 'Minora AI dashboards'],
    faqs: [{ q: 'Can Muna Media support enterprise clients?', a: 'Yes. The operating model is built around transparency, local execution and management-ready reporting.' }]
  },
  {
    slug: 'solutions/reputation-protection',
    title: 'Reputation Protection Solution | Muna Media',
    description: 'Enterprise marketing execution, regional strategy and local campaign operations by Muna Media.',
    h1: 'Reputation Protection Solution',
    eyebrow: 'Muna Media',
    intro: 'This page is part of the Muna Media enterprise website rebuild. Detailed CMS-driven content will be added in the next phase.',
    markets: ['Uzbekistan', 'Central Asia'],
    services: ['Strategy', 'Media buying', 'Telegram marketing', 'Influencer marketing', 'Reporting'],
    proof: ['Open-book pricing', 'Local execution', 'Minora AI dashboards'],
    faqs: [{ q: 'Can Muna Media support enterprise clients?', a: 'Yes. The operating model is built around transparency, local execution and management-ready reporting.' }]
  },
  {
    slug: 'solutions/app-growth',
    title: 'App Growth Solution | Muna Media',
    description: 'Enterprise marketing execution, regional strategy and local campaign operations by Muna Media.',
    h1: 'App Growth Solution',
    eyebrow: 'Muna Media',
    intro: 'This page is part of the Muna Media enterprise website rebuild. Detailed CMS-driven content will be added in the next phase.',
    markets: ['Uzbekistan', 'Central Asia'],
    services: ['Strategy', 'Media buying', 'Telegram marketing', 'Influencer marketing', 'Reporting'],
    proof: ['Open-book pricing', 'Local execution', 'Minora AI dashboards'],
    faqs: [{ q: 'Can Muna Media support enterprise clients?', a: 'Yes. The operating model is built around transparency, local execution and management-ready reporting.' }]
  },
  {
    slug: 'solutions/ecommerce-growth',
    title: 'E-commerce Growth Solution | Muna Media',
    description: 'Enterprise marketing execution, regional strategy and local campaign operations by Muna Media.',
    h1: 'E-commerce Growth Solution',
    eyebrow: 'Muna Media',
    intro: 'This page is part of the Muna Media enterprise website rebuild. Detailed CMS-driven content will be added in the next phase.',
    markets: ['Uzbekistan', 'Central Asia'],
    services: ['Strategy', 'Media buying', 'Telegram marketing', 'Influencer marketing', 'Reporting'],
    proof: ['Open-book pricing', 'Local execution', 'Minora AI dashboards'],
    faqs: [{ q: 'Can Muna Media support enterprise clients?', a: 'Yes. The operating model is built around transparency, local execution and management-ready reporting.' }]
  },
  {
    slug: 'industries/fintech-marketing-central-asia',
    title: 'Fintech Marketing in Central Asia | Muna Media',
    description: 'Enterprise marketing execution, regional strategy and local campaign operations by Muna Media.',
    h1: 'Fintech Marketing in Central Asia',
    eyebrow: 'Muna Media',
    intro: 'This page is part of the Muna Media enterprise website rebuild. Detailed CMS-driven content will be added in the next phase.',
    markets: ['Uzbekistan', 'Central Asia'],
    services: ['Strategy', 'Media buying', 'Telegram marketing', 'Influencer marketing', 'Reporting'],
    proof: ['Open-book pricing', 'Local execution', 'Minora AI dashboards'],
    faqs: [{ q: 'Can Muna Media support enterprise clients?', a: 'Yes. The operating model is built around transparency, local execution and management-ready reporting.' }]
  },
  {
    slug: 'industries/banking-finance-marketing',
    title: 'Banking and Finance Marketing | Muna Media',
    description: 'Enterprise marketing execution, regional strategy and local campaign operations by Muna Media.',
    h1: 'Banking and Finance Marketing',
    eyebrow: 'Muna Media',
    intro: 'This page is part of the Muna Media enterprise website rebuild. Detailed CMS-driven content will be added in the next phase.',
    markets: ['Uzbekistan', 'Central Asia'],
    services: ['Strategy', 'Media buying', 'Telegram marketing', 'Influencer marketing', 'Reporting'],
    proof: ['Open-book pricing', 'Local execution', 'Minora AI dashboards'],
    faqs: [{ q: 'Can Muna Media support enterprise clients?', a: 'Yes. The operating model is built around transparency, local execution and management-ready reporting.' }]
  },
  {
    slug: 'industries/ecommerce-growth-central-asia',
    title: 'E-commerce Growth in Central Asia | Muna Media',
    description: 'Enterprise marketing execution, regional strategy and local campaign operations by Muna Media.',
    h1: 'E-commerce Growth in Central Asia',
    eyebrow: 'Muna Media',
    intro: 'This page is part of the Muna Media enterprise website rebuild. Detailed CMS-driven content will be added in the next phase.',
    markets: ['Uzbekistan', 'Central Asia'],
    services: ['Strategy', 'Media buying', 'Telegram marketing', 'Influencer marketing', 'Reporting'],
    proof: ['Open-book pricing', 'Local execution', 'Minora AI dashboards'],
    faqs: [{ q: 'Can Muna Media support enterprise clients?', a: 'Yes. The operating model is built around transparency, local execution and management-ready reporting.' }]
  },
  {
    slug: 'industries/travel-tourism-marketing',
    title: 'Travel and Tourism Marketing | Muna Media',
    description: 'Enterprise marketing execution, regional strategy and local campaign operations by Muna Media.',
    h1: 'Travel and Tourism Marketing',
    eyebrow: 'Muna Media',
    intro: 'This page is part of the Muna Media enterprise website rebuild. Detailed CMS-driven content will be added in the next phase.',
    markets: ['Uzbekistan', 'Central Asia'],
    services: ['Strategy', 'Media buying', 'Telegram marketing', 'Influencer marketing', 'Reporting'],
    proof: ['Open-book pricing', 'Local execution', 'Minora AI dashboards'],
    faqs: [{ q: 'Can Muna Media support enterprise clients?', a: 'Yes. The operating model is built around transparency, local execution and management-ready reporting.' }]
  },
  {
    slug: 'industries/gaming-marketing-central-asia',
    title: 'Gaming Marketing in Central Asia | Muna Media',
    description: 'Enterprise marketing execution, regional strategy and local campaign operations by Muna Media.',
    h1: 'Gaming Marketing in Central Asia',
    eyebrow: 'Muna Media',
    intro: 'This page is part of the Muna Media enterprise website rebuild. Detailed CMS-driven content will be added in the next phase.',
    markets: ['Uzbekistan', 'Central Asia'],
    services: ['Strategy', 'Media buying', 'Telegram marketing', 'Influencer marketing', 'Reporting'],
    proof: ['Open-book pricing', 'Local execution', 'Minora AI dashboards'],
    faqs: [{ q: 'Can Muna Media support enterprise clients?', a: 'Yes. The operating model is built around transparency, local execution and management-ready reporting.' }]
  },
  {
    slug: 'industries/education-marketing',
    title: 'Education Marketing in Central Asia | Muna Media',
    description: 'Enterprise marketing execution, regional strategy and local campaign operations by Muna Media.',
    h1: 'Education Marketing in Central Asia',
    eyebrow: 'Muna Media',
    intro: 'This page is part of the Muna Media enterprise website rebuild. Detailed CMS-driven content will be added in the next phase.',
    markets: ['Uzbekistan', 'Central Asia'],
    services: ['Strategy', 'Media buying', 'Telegram marketing', 'Influencer marketing', 'Reporting'],
    proof: ['Open-book pricing', 'Local execution', 'Minora AI dashboards'],
    faqs: [{ q: 'Can Muna Media support enterprise clients?', a: 'Yes. The operating model is built around transparency, local execution and management-ready reporting.' }]
  },
  {
    slug: 'industries/fashion-retail-marketing',
    title: 'Fashion and Retail Marketing | Muna Media',
    description: 'Enterprise marketing execution, regional strategy and local campaign operations by Muna Media.',
    h1: 'Fashion and Retail Marketing',
    eyebrow: 'Muna Media',
    intro: 'This page is part of the Muna Media enterprise website rebuild. Detailed CMS-driven content will be added in the next phase.',
    markets: ['Uzbekistan', 'Central Asia'],
    services: ['Strategy', 'Media buying', 'Telegram marketing', 'Influencer marketing', 'Reporting'],
    proof: ['Open-book pricing', 'Local execution', 'Minora AI dashboards'],
    faqs: [{ q: 'Can Muna Media support enterprise clients?', a: 'Yes. The operating model is built around transparency, local execution and management-ready reporting.' }]
  }
];
