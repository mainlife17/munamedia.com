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
    description: 'Transparent media buying for Uzbekistan and Central Asia with media planning, Telegram, creators, OOH, paid channels, placement control and Minora AI reporting.',
    h1: 'Open-book media buying for Central Asia',
    eyebrow: 'Priority service',
    intro: 'We plan, buy and optimize media across Uzbekistan and Central Asia with visible inventory costs, separate agency fees and management-ready reporting. The goal is simple: the client understands where the budget goes and what each channel is expected to do.',
    markets: ['Uzbekistan', 'Kazakhstan', 'Kyrgyzstan', 'Tajikistan', 'Central Asia'],
    services: ['Media strategy', 'Budget split by market', 'Paid social and search', 'Telegram placements', 'Creator and influencer buying', 'OOH / DOOH coordination', 'Minora AI reporting'],
    proof: ['No hidden media markups', 'Placement and vendor control by channel', 'Budget optimization based on campaign delivery and business signals'],
    faqs: [
      { q: 'What does open-book media buying mean?', a: 'The client can see media inventory cost, agency fee and management scope separately instead of receiving one blended price.' },
      { q: 'Which channels can be included?', a: 'Paid social, search, Telegram, creators, local digital inventory, OOH / DOOH and activation channels when they fit the campaign.' },
      { q: 'Who is this for?', a: 'CMOs, CFOs and procurement teams that need budget control, transparent execution and clear reporting in a regional market.' }
    ]
  },
  {
    slug: 'services/telegram-marketing',
    title: 'Telegram Marketing in Uzbekistan and Central Asia | Muna Media',
    description: 'Telegram marketing campaigns for Uzbekistan and Central Asia: channel buying, community placements, creative adaptation, bots, landing flows and conversion tracking.',
    h1: 'Telegram marketing for Uzbekistan and Central Asia',
    eyebrow: 'Priority channel',
    intro: 'Telegram is a serious discovery and conversion channel in Uzbekistan. We plan channel buying, community placements, bot or landing flows, creative adaptation and measurement so Telegram becomes part of the full campaign, not a random post purchase.',
    markets: ['Uzbekistan', 'Kazakhstan', 'Central Asia'],
    services: ['Telegram channel strategy', 'Channel and community buying', 'Creative adaptation', 'Bot and landing flows', 'Tracking and retargeting logic', 'Placement reporting'],
    proof: ['Channel selection based on audience and brand safety', 'Placement control and campaign documentation', 'Telegram connected with paid media, creators and landing pages'],
    faqs: [
      { q: 'Do you only buy posts in Telegram channels?', a: 'No. Telegram work can include channel buying, communities, bots, landing flows, retargeting logic and reporting.' },
      { q: 'Can you check channel quality?', a: 'Yes. We review fit, audience logic, content, past activity and brand-safety risks before recommending placements.' },
      { q: 'Is Telegram useful for B2B?', a: 'It can be, especially for fintech, SaaS, education, recruitment and local business communities when the funnel is designed correctly.' }
    ]
  },
  {
    slug: 'services/influencer-marketing',
    title: 'Influencer Marketing in Central Asia | Muna Media',
    description: 'Influencer marketing for Uzbekistan and Central Asia with creator selection, negotiation, briefing, production control, launch and reporting.',
    h1: 'Influencer marketing for Central Asia',
    eyebrow: 'Creator campaigns',
    intro: 'We select creators, negotiate placements, localize the message and measure delivery for brands operating in Uzbekistan and Central Asia. Creator work is planned as part of the media system, not as isolated posts.',
    markets: ['Uzbekistan', 'Kazakhstan', 'Central Asia'],
    services: ['Creator selection', 'Negotiation', 'Briefing and content control', 'Production coordination', 'Campaign launch', 'Reporting'],
    proof: ['Local creator and category context', 'Brand-safe approvals and documentation', 'Creator campaigns connected with media buying and landing flows'],
    faqs: [
      { q: 'Can influencer marketing be part of a larger launch?', a: 'Yes. It works best when connected with media buying, Telegram, landing pages and performance tracking.' },
      { q: 'Do you handle negotiation?', a: 'Yes. We coordinate pricing, terms, posting schedule, content requirements and reporting expectations.' },
      { q: 'Can you work with strict brand guidelines?', a: 'Yes. We structure briefing and approval so local content stays aligned with the brand.' }
    ]
  },
  {
    slug: 'services/digital-performance-marketing',
    title: 'Digital Performance Marketing in Central Asia | Muna Media',
    description: 'Performance marketing for Central Asia focused on leads, CAC, LTV signals, paid acquisition, tracking, landing pages and budget optimization.',
    h1: 'Digital performance marketing for Central Asia',
    eyebrow: 'Growth system',
    intro: 'We build paid acquisition around measurable business outcomes: leads, installs, sales, CAC and LTV signals. Campaigns are planned with tracking, landing page readiness and budget optimization from the start.',
    markets: ['Uzbekistan', 'Kazakhstan', 'Central Asia'],
    services: ['Paid social', 'Search ads', 'Lead generation', 'App growth campaigns', 'Landing page diagnostics', 'Analytics and event tracking', 'Budget optimization'],
    proof: ['Metrics agreed before launch', 'Optimization rules tied to real funnel signals', 'Reporting that supports management decisions, not only ad-platform screenshots'],
    faqs: [
      { q: 'Do you guarantee sales?', a: 'No agency can honestly guarantee sales. We build the acquisition system, measure results and optimize budget based on the data available.' },
      { q: 'Can you work with our current landing pages?', a: 'Yes. We audit tracking, page speed, message match and conversion path before scaling traffic.' },
      { q: 'Can performance campaigns include Telegram?', a: 'Yes. Telegram can support acquisition when connected to landing pages, bots, retargeting and reporting.' }
    ]
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
    description: '90-day market entry planning and marketing execution for brands entering Uzbekistan and Central Asia: risks, channels, budget, partners and launch operations.',
    h1: 'Market entry marketing for Central Asia',
    eyebrow: 'Market entry',
    intro: 'We help brands enter Uzbekistan and Central Asia with a practical 90-day launch plan. The deliverable covers market logic, customer behavior, channel mix, budget, local risks, tracking readiness and first-wave execution.',
    markets: ['Uzbekistan', 'Kazakhstan', 'Central Asia'],
    services: ['Market diagnostics', 'Competitor and channel review', '90-day launch plan', 'Media budget logic', 'Local vendor coordination', 'Tracking and reporting setup'],
    proof: ['Lower launch risk before budget commitment', 'Execution-ready roadmap instead of a generic presentation', 'Local media, Telegram, creator and OOH knowledge in one plan'],
    faqs: [
      { q: 'What do we receive first?', a: 'A 90-day launch plan with target audiences, channel mix, budget logic, risks, timeline, owners and reporting model.' },
      { q: 'Can this start before legal entity setup?', a: 'Yes. We can prepare market and media planning while the business setup is still in progress, then launch when approvals are ready.' },
      { q: 'Is this only for Uzbekistan?', a: 'Uzbekistan is the core market, but the same planning model can cover Kazakhstan and broader Central Asia.' }
    ]
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
    slug: 'services',
    title: 'Muna Media Services | Enterprise Marketing Integrator in Central Asia',
    description: 'Market entry, open-book media buying, Telegram marketing, influencer campaigns, OOH, performance marketing and Minora AI reporting for Uzbekistan and Central Asia.',
    h1: 'Services for launching and scaling in Central Asia',
    eyebrow: 'Service architecture',
    intro: 'Muna Media connects strategy, media buying, creator campaigns, Telegram, OOH, local execution and reporting in one operating model. Use us when separate vendors create delay, hidden costs and unclear responsibility.',
    markets: ['Uzbekistan', 'Kazakhstan', 'Kyrgyzstan', 'Tajikistan', 'Central Asia'],
    services: ['Market entry strategy', 'Open-book media buying', 'Telegram marketing', 'Influencer marketing', 'OOH / DOOH', 'Performance marketing', 'Minora AI reporting'],
    proof: ['One accountable team across strategy, buying and execution', 'Transparent media cost and agency fee structure', 'Campaign reporting built for CMOs, CFOs and procurement teams'],
    faqs: [
      { q: 'Which service should a new market entrant start with?', a: 'Start with market entry diagnostics and a 90-day launch plan. It defines audiences, risks, channels, budget logic and the first execution wave.' },
      { q: 'Can Muna Media act as one regional partner?', a: 'Yes. The model is designed to reduce vendor fragmentation across media, creators, Telegram, OOH, production and reporting.' },
      { q: 'Do you show media costs separately?', a: 'Yes. Open-book media buying separates inventory cost, agency fee and management scope.' }
    ]
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
    slug: 'solutions/market-entry',
    title: 'Market Entry Solution for Central Asia | Muna Media',
    description: 'A practical market entry solution for brands launching in Uzbekistan and Central Asia: strategy, media plan, execution setup, local partners and reporting.',
    h1: 'Market Entry Solution',
    eyebrow: 'Solution',
    intro: 'Use this when the question is not just “where should we advertise?” but “how do we enter the market with fewer mistakes?” Muna Media builds the launch plan and stays accountable for local execution.',
    markets: ['Uzbekistan', 'Kazakhstan', 'Central Asia'],
    services: ['Market entry diagnostics', 'Launch positioning', 'Channel and media plan', 'Vendor and creator setup', 'Campaign launch', 'Executive reporting'],
    proof: ['One plan connects strategy, media and execution', 'Local market risks are documented before launch', 'The first 90 days have owners, budget logic and reporting cadence'],
    faqs: [
      { q: 'Who should use this solution?', a: 'International brands, regional teams, founders and country managers preparing a launch in Uzbekistan or Central Asia.' },
      { q: 'How is this different from a strategy deck?', a: 'The output is execution-ready: channel mix, budget logic, timeline, risks, owners, tracking and launch tasks.' }
    ]
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
