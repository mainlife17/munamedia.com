import type { CaseStudy } from './cases';

export type CaseStudyEnhancement = Partial<Pick<CaseStudy, 'year' | 'clientProfile' | 'businessGoal' | 'operationalScope' | 'results' | 'publicEvidence' | 'nextBestAction' | 'sourceNotes'>>;

export const caseEnhancements: Record<string, CaseStudyEnhancement> = {
  'unionpay-international': {
    clientProfile: 'Global payment network operating across 180 countries and thousands of financial institutions.',
    businessGoal: 'Increase UnionPay card usage in the HUMO ecosystem through a six-month consumer promotion with clear mechanics and local partners.',
    operationalScope: ['BTL promotion mechanics', 'Campaign website and Telegram bot for receipt upload', 'Weekly prize draws', 'Retail and fuel partner coordination', 'Targeted media, influencer and Telegram support'],
    results: [
      { metric: 'Campaign duration', value: '6 months', note: 'Public source disclosed the BTL campaign duration.' },
      { metric: 'Partner network', value: '4 major partners', note: 'Korzinka.uz, Makro, Havas and Uzbekneftegaz were named publicly.' },
      { metric: 'Promotion mechanic', value: '$5+ weekly purchase threshold', note: 'Public source disclosed the purchase threshold for weekly prize participation.' }
    ],
    publicEvidence: ['Six-month campaign duration', 'Named partners: Korzinka.uz, Makro, Havas and Uzbekneftegaz', 'Participation flow: card activation, weekly purchases above $5, receipt upload and prize draws'],
    nextBestAction: 'Add approved transaction uplift, participant count and HUMO card usage data before using this case in enterprise sales decks.',
    sourceNotes: 'Public source page disclosed campaign mechanics, partner names, locations and channel mix. Financial and transaction metrics were not publicly disclosed.'
  },
  'xiaomi-uzbekistan': {
    clientProfile: 'Global consumer electronics brand building its official local presence in Uzbekistan.',
    businessGoal: 'Strengthen Xiaomi position in Uzbekistan, increase awareness of new smartphone lines and build a stable social communication channel.',
    operationalScope: ['Official social media management for Instagram, Telegram and Facebook', 'Product and lifestyle photo shoots', 'Brand collaborations including PUBG', 'Xiaomi 13T presentation event', 'Local content production and community communication'],
    publicEvidence: ['Official pages managed across Instagram, Telegram and Facebook', 'Xiaomi 13T launch presentation organized', 'Collaboration with PUBG disclosed on the public case page'],
    nextBestAction: 'Add approved reach, engagement, event attendance and product-launch performance data.',
    sourceNotes: 'Public source page disclosed goals, channels, content production, collaborations and presentation work.'
  },
  'yandex-eats-uzbekistan': {
    year: '2024',
    clientProfile: 'Food delivery platform operating across CIS markets.',
    businessGoal: 'Increase order activity and user engagement in Kazakhstan and Uzbekistan through a large prize promotion.',
    operationalScope: ['Promotion terms development', 'Prize fund procurement', 'Tax-agent operations', 'Winner communication and prize delivery', 'Live prize draws with bilingual hosts and professional studio production'],
    results: [
      { metric: 'Orders', value: '888,239', note: 'Public source disclosed aggregate orders across Kazakhstan and Uzbekistan.' },
      { metric: 'Campaign markets', value: '2 countries', note: 'Kazakhstan and Uzbekistan were disclosed as campaign markets.' },
      { metric: 'Campaign period', value: 'April - June 2024', note: 'Public source disclosed country-specific campaign dates.' }
    ],
    publicEvidence: ['Campaign period disclosed for Kazakhstan: 17 April - 21 June 2024', 'Campaign period disclosed for Uzbekistan: 10 April - 14 June 2024', 'Public source lists 888,239 orders and winners across Kazakhstan and Uzbekistan'],
    nextBestAction: 'Separate Uzbekistan-only performance, paid media spend and promo redemption data for the final case version.',
    sourceNotes: 'Public source page disclosed period, countries, operating responsibilities and order count. Country-level split was not disclosed.'
  },
  'golden-crown-app-growth': {
    clientProfile: 'Money-transfer service with a large CIS user base and app-first growth objective.',
    businessGoal: 'Increase mobile app installs, registrations and transfer volume from Uzbekistan to Russia.',
    operationalScope: ['OOH in Tashkent, Samarkand, Bukhara, Andijan and Fergana', 'Transit media on buses, stations and metro placements', 'Facebook and Instagram advertising', 'Telegram PR activity', 'Influencer marketing', 'Video production', 'Airport and railway-station activations'],
    publicEvidence: ['Public page discloses significant increase in app downloads and registrations', 'Public page discloses increased transfer volume from Uzbekistan to Russia', 'Channel mix included LED screens, transport, metro, airport, Telegram, influencers and social ads'],
    nextBestAction: 'Add install volume, registration conversion rate, CPA and transfer-volume uplift after client approval.',
    sourceNotes: 'Public source page disclosed channels and qualitative outcomes; exact acquisition metrics were not public.'
  },
  'salampay-launch': {
    year: '2022',
    clientProfile: 'Money-transfer and banking service for migrants from Central Asia and Azerbaijan in Russia.',
    businessGoal: 'Launch a new fintech product with trust, mass awareness and mobile-app adoption.',
    operationalScope: ['Ambassador strategy with Khabib Nurmagomedov and Eagles MMA', 'Exclusive ambassador content distribution', 'Premium merch concept and production direction', 'YouTube blogger integrations and sponsored content'],
    results: [
      { metric: 'Total reach', value: '27,086,000+', note: 'Public source disclosed total campaign reach.' },
      { metric: 'App downloads', value: '430,000', note: 'Public source disclosed mobile app download volume.' },
      { metric: 'Ambassador layer', value: 'Khabib + Eagles MMA', note: 'Public source disclosed the ambassador strategy.' }
    ],
    publicEvidence: ['Public source discloses total reach above 27,086,000', 'Public source discloses 430,000 mobile app downloads', 'Ambassador layer included Khabib Nurmagomedov and Eagles MMA'],
    nextBestAction: 'Add CAC, activation rate and cohort retention if the client approves deeper performance disclosure.',
    sourceNotes: 'Public source page disclosed year, market, ambassador strategy, reach and app downloads.'
  },
  'huawei-product-promotion': {
    clientProfile: 'Global technology brand promoting Huawei Band 6 in the local market.',
    businessGoal: 'Run a digital campaign for Huawei Band 6 across search, display, YouTube and Meta inventory.',
    operationalScope: ['Google search advertising', 'Google Display Network advertising', 'YouTube video advertising', 'Facebook and Instagram video advertising', 'Meta traffic optimization'],
    results: [
      { metric: 'Google Search KPI', value: '544.44%', note: 'Public source disclosed 450 planned vs 2,450 delivered.' },
      { metric: 'Google Display KPI', value: '326.8%', note: 'Public source disclosed 250,000 planned vs 817,000 delivered.' },
      { metric: 'YouTube KPI', value: '102.3%', note: 'Public source disclosed 260,000 planned vs 266,000 delivered.' }
    ],
    publicEvidence: ['Google search KPI: 450 planned vs 2,450 delivered, 544.44%', 'Google Display Network KPI: 250,000 planned vs 817,000 delivered, 326.8%', 'YouTube video KPI: 260,000 planned vs 266,000 delivered, 102.3%'],
    nextBestAction: 'Clarify whether KPI values represent clicks, impressions or another agreed metric before using them in a sales deck.',
    sourceNotes: 'Public source page disclosed channel mix and KPI table. Metric unit labels require confirmation.'
  },
  'open-card-bnpl': {
    year: '2024',
    clientProfile: 'Uzbekistan BNPL fintech offering interest-free installments up to 12 months.',
    businessGoal: 'Launch and scale a new BNPL product while controlling CAC and building trust in a competitive fintech category.',
    operationalScope: ['Google Ads for transactional BNPL queries', 'Bid, creative and extension optimization', 'Full-cycle video production', 'Brand-awareness campaigns around convenience and no prepayment'],
    publicEvidence: ['Public source discloses product benefit: installments up to 12 months without initial payment or overpayment', 'Search campaigns targeted queries such as muddatli to‘lov, рассрочка and телефон в рассрочку', 'Public source states the approach improved CTR and lowered app-install cost'],
    nextBestAction: 'Add actual CAC, install volume, approved CTR and activation data before final publication.',
    sourceNotes: 'Public source page disclosed positioning, search strategy, video production and qualitative performance impact.'
  },
  'kabrita-telegram-marketing': {
    year: '2025',
    clientProfile: 'International goat-milk baby nutrition brand present in 40+ countries.',
    businessGoal: 'Build awareness and trust among mothers and young families in Uzbekistan with efficient niche-channel targeting.',
    operationalScope: ['Telegram media planning', 'Placement in thematic parenting and family channels', 'Message localization for trust-sensitive baby nutrition category'],
    results: [
      { metric: 'Telegram channels', value: '20', note: 'Public source disclosed thematic channel count.' },
      { metric: 'Combined audience', value: '235,000+', note: 'Public source disclosed aggregate subscriber base.' },
      { metric: 'Primary channel', value: 'Telegram', note: 'Public source identified Telegram as the main activation channel.' }
    ],
    publicEvidence: ['Campaign ran across 20 thematic Telegram channels', 'Combined public audience disclosed as 235,000+ subscribers', 'Public source positions Telegram as the main activation channel'],
    nextBestAction: 'Add reach, view-through rate, engagement, traffic and retail-sales impact after approval.',
    sourceNotes: 'Public source page disclosed year, market, channel count and aggregate audience size.'
  },
  'yadea-led-screens': {
    year: '2025',
    clientProfile: 'Electric two-wheeler manufacturer expanding local visibility in Uzbekistan.',
    businessGoal: 'Support regional brand awareness and flagship-store opening with high-traffic outdoor placements.',
    operationalScope: ['OOH placement planning', 'Billboard buying', 'Regional placement in Kokand and Samarkand', 'Visibility support for flagship retail launch'],
    results: [
      { metric: 'Billboards', value: '13', note: 'Public source disclosed billboard count.' },
      { metric: 'Cities', value: 'Kokand + Samarkand', note: 'Public source disclosed the regional placement focus.' },
      { metric: 'Launch support', value: 'Flagship store', note: 'Campaign supported awareness around a flagship store opening.' }
    ],
    publicEvidence: ['13 billboards disclosed on the public source page', 'Key cities: Kokand and Samarkand', 'Campaign supported flagship-store opening awareness'],
    nextBestAction: 'Add exact locations, estimated impressions and store-visit uplift if available.',
    sourceNotes: 'Public source page disclosed year, market, city focus and billboard count.'
  },
  'uzbekistan-airways-pr': {
    clientProfile: 'National aviation brand requiring fast corporate news distribution.',
    businessGoal: 'Distribute corporate news about the agreement between Uzbekistan Airways and SITA Mission Watch quickly and accurately.',
    operationalScope: ['PR coordination', 'News placement', 'Corporate message control'],
    publicEvidence: ['Legacy public case title references rapid news placement for the Uzbekistan Airways and SITA Mission Watch agreement'],
    nextBestAction: 'Recover or replace the public source page and add publication list, dates and reach.',
    sourceNotes: 'Source URL returned 403 during the latest technical extraction, so only previously available public case metadata is used.'
  },
  'mts-bank-voice-assistant': {
    year: '2021',
    clientProfile: 'Russian digital commercial bank serving a multilingual customer base.',
    businessGoal: 'Improve customer-service accessibility for Uzbek, Tajik and Kyrgyz speakers using the bank voice assistant.',
    operationalScope: ['Audience analysis', 'Professional native-speaker voice talent selection', 'Banking-script adaptation', 'Unified audio style for corporate consistency', 'Voiceover production and integration support'],
    publicEvidence: ['Languages disclosed: Uzbek, Tajik and Kyrgyz', 'Public source identifies the customer-service problem as language barriers in Russian-language IVR', 'Public source discloses professional voiceover and integration work'],
    nextBestAction: 'Add call completion, IVR drop-off and customer satisfaction metrics if approved by the client.',
    sourceNotes: 'Public source page disclosed year, market, language scope, problem and execution approach.'
  },
  'unistream-growth': {
    year: '2022',
    clientProfile: 'International money-transfer system with 20+ years of global market experience and operations in 100+ countries.',
    businessGoal: 'Increase brand awareness, trust and active use of Unistream services in Uzbekistan.',
    operationalScope: ['OOH on North railway station in Tashkent', 'LED screen video placements in high-traffic areas', 'YouTube blogger integrations', 'Sponsored content with local creators'],
    publicEvidence: ['Public source discloses North railway station OOH placement', 'Public source discloses LED-screen video placements in Tashkent', 'Named integrations included UZBOOMTV, DAXSHAT MMA and Oybek Raimberdiyev'],
    nextBestAction: 'Add transfer-volume uplift, brand-lift study and creator-level performance data.',
    sourceNotes: 'Public source page disclosed year, market, OOH placements and creator integrations.'
  },
  'unisat-video-production': {
    year: '2021',
    clientProfile: 'Educational technology and STEM project connected with space, engineering and programming education.',
    businessGoal: 'Use professional video production to support women in STEM, technical education and inclusive innovation storytelling.',
    operationalScope: ['Script development', 'Shoot planning', 'Professional film crew and equipment', 'Editing, color correction and sound design', 'Culturally sensitive storytelling for Uzbek youth'],
    publicEvidence: ['Public source identifies the goal as supporting women in STEM', 'Full-cycle production disclosed: pre-production, production and post-production', 'Quality bar aligned with international organization standards'],
    nextBestAction: 'Add final video asset links, distribution channels and audience metrics.',
    sourceNotes: 'Public source page disclosed year, market, production scope and creative approach.'
  },
  'nl-international-leads': {
    clientProfile: 'Direct-sales and wellness company entering the Uzbekistan information field.',
    businessGoal: 'Represent marketing interests locally, build official digital presence and create a fair lead-distribution mechanism for business partners.',
    operationalScope: ['Reputation audit', 'Digital market-entry strategy', 'Social media launch', 'Monthly image recommendations', 'Performance advertising', 'Lead-distribution MVP and full platform rollout', 'Influencer integration planning'],
    publicEvidence: ['Public source discloses reputation audit and digital strategy', 'Social rollout included Instagram, Reels, Telegram and TikTok', 'A lead-distribution mechanism for advertising leads was part of the work'],
    nextBestAction: 'Add lead volume, cost per qualified lead and partner-distribution outcomes.',
    sourceNotes: 'Public source page disclosed tasks, rollout stages and lead-distribution platform concept.'
  },
  'yobidoyobi-two-channel-strategy': {
    clientProfile: 'International sushi and rolls delivery chain entering Uzbekistan.',
    businessGoal: 'Build local recognition and order demand through a focused two-channel strategy.',
    operationalScope: ['Local launch strategy', 'Channel selection', 'Conversion-oriented campaign planning'],
    publicEvidence: ['Legacy public case metadata identifies a two-channel strategy for Uzbekistan market launch'],
    nextBestAction: 'Recover source page access and add channels used, order impact, CAC and repeat-purchase data.',
    sourceNotes: 'Source URL returned 403 during the latest technical extraction, so only existing public case metadata is used.'
  },
  'urussa-led-screens': {
    year: '2023',
    clientProfile: 'FMCG brand from the Russian agricultural group Resource, focused on poultry meat and sunflower oil.',
    businessGoal: 'Increase point-of-sale visibility and preference in a competitive Uzbekistan FMCG category.',
    operationalScope: ['LED screen placement planning', 'Point-of-sale visibility strategy', 'High-traffic placement buying in Tashkent'],
    results: [
      { metric: 'LED screens', value: '10', note: 'Public source disclosed LED screen count.' },
      { metric: 'Market', value: 'Uzbekistan FMCG', note: 'Public source disclosed market and category.' },
      { metric: 'Placement context', value: 'Point of sale', note: 'Public source positioned the campaign around retail visibility.' }
    ],
    publicEvidence: ['10 LED screens disclosed on the public source page', 'Category: poultry meat and sunflower oil', 'Market: Uzbekistan, FMCG'],
    nextBestAction: 'Add location list, estimated impressions and retail-sales impact if available.',
    sourceNotes: 'Public source page disclosed year, category, challenge and LED screen count.'
  }
};

export function enhanceCaseStudy<T extends CaseStudy>(study: T): T {
  return { ...study, ...caseEnhancements[study.slug] };
}

export function enhanceCaseStudies<T extends CaseStudy>(studies: T[]): T[] {
  return studies.map(enhanceCaseStudy);
}
