export type CaseStudy = {
  slug: string;
  client: string;
  industry: string;
  market: string;
  services: string[];
  sourceUrl: string;
  headline: string;
  year?: string;
  clientProfile?: string;
  executiveSummary: string;
  businessGoal?: string;
  challenge: string;
  strategy: string;
  execution: string;
  operationalScope?: string[];
  results: { metric: string; value: string; note: string }[];
  publicEvidence?: string[];
  whatWorked: string[];
  nextBestAction?: string;
  sourceNotes?: string;
  missingData?: string[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: 'unionpay-international',
    client: 'UnionPay International',
    industry: 'Payments',
    market: 'Uzbekistan',
    services: ['BTL', 'Retail partnerships', 'Media support'],
    sourceUrl: 'https://munamedia.me/cases/union-pay',
    headline: 'Six-month BTL activation with major retail and fuel partners in Uzbekistan.',
    executiveSummary: 'UnionPay needed a practical local activation model in Uzbekistan. Muna Media helped organize a six-month BTL campaign and brought major retail and fuel partners into the promotion, including Korzinka.uz, Makro, Havas and Uzbekneftegaz.',
    challenge: 'The campaign required more than media placement. It needed partner coordination, clear consumer mechanics and reliable local execution across several retail environments.',
    strategy: 'Build the campaign around consumer participation and trusted local partners, then use BTL operations to turn payment awareness into real-world usage moments.',
    execution: 'Muna Media coordinated campaign mechanics, partner participation and local activation support across retail and fuel locations.',
    results: [{ metric: 'Campaign duration', value: '6 months', note: 'Publicly available from the source case description.' }, { metric: 'Partner network', value: '4 major partners', note: 'Korzinka.uz, Makro, Havas and Uzbekneftegaz were named publicly.' }],
    whatWorked: ['Local partner network', 'Retail and fuel environment relevance', 'BTL execution instead of awareness-only media'],
    missingData: ['Transaction uplift', 'participation count', 'media budget', 'regional split']
  },
  {
    slug: 'xiaomi-uzbekistan',
    client: 'Xiaomi',
    industry: 'Consumer electronics',
    market: 'Uzbekistan',
    services: ['Marketing support', 'Media buying', 'Local execution'],
    sourceUrl: 'https://munamedia.me/cases/xiaomi',
    headline: 'Full marketing and advertising support for Xiaomi in Uzbekistan.',
    executiveSummary: 'Muna Media supported the official Xiaomi presence in Uzbekistan with marketing and advertising execution tailored to the local market.',
    challenge: 'A global consumer electronics brand needs local execution that preserves brand standards while adapting channels, language and media behavior to Uzbekistan.',
    strategy: 'Use a coordinated local marketing setup: align media, creative adaptation, launch communications and local execution under one operating partner.',
    execution: 'Muna Media provided ongoing marketing and advertising support for Xiaomi’s Uzbekistan representation.',
    results: [{ metric: 'Scope', value: 'Full support', note: 'Public source describes full marketing and advertising support.' }],
    whatWorked: ['Brand-standard local execution', 'Integrated media support', 'Single local coordination layer'],
    missingData: ['Campaign period', 'channels used', 'sales/awareness metrics']
  },
  {
    slug: 'yandex-eats-uzbekistan',
    client: 'Yandex Eats',
    industry: 'Foodtech',
    market: 'Uzbekistan',
    services: ['Launch strategy', 'Promotion mechanics', 'Campaign planning'],
    sourceUrl: 'https://munamedia.me/cases/yandex-eats',
    headline: 'Advertising campaign launch in Uzbekistan with promotion strategy and mechanics.',
    executiveSummary: 'Muna Media helped Yandex Eats launch an advertising campaign in Uzbekistan by developing the promotion and campaign strategy for the local market.',
    challenge: 'Food delivery launches require fast local adoption, clear promo mechanics and channels that can convert both supply-side awareness and consumer demand.',
    strategy: 'Design a campaign around a local promotion mechanic and align the communication strategy with market behavior in Uzbekistan.',
    execution: 'Muna Media developed the campaign approach and promotional strategy for the launch.',
    results: [{ metric: 'Launch market', value: 'Uzbekistan', note: 'Publicly stated in source description.' }],
    whatWorked: ['Market-specific campaign mechanics', 'Launch-focused positioning', 'Consumer activation logic'],
    missingData: ['Order growth', 'CAC', 'promo redemption rate', 'media channels']
  },
  {
    slug: 'golden-crown-app-growth',
    client: 'Zolotaya Korona',
    industry: 'Money transfers',
    market: 'Uzbekistan / Central Asia',
    services: ['App growth', 'Media buying', 'Performance marketing'],
    sourceUrl: 'https://munamedia.me/cases/zolotaya-korona',
    headline: 'Increasing app downloads and registrations for a money transfer service.',
    executiveSummary: 'Muna Media supported Zolotaya Korona with a growth campaign focused on increasing app downloads and registrations.',
    challenge: 'Money transfer services need both trust and conversion. The campaign had to drive registrations while protecting brand reliability.',
    strategy: 'Use conversion-oriented channels and localized messaging to connect money-transfer use cases with app registration behavior.',
    execution: 'The campaign focused on app acquisition and registration growth.',
    results: [{ metric: 'Primary outcome', value: 'Downloads and registrations increased', note: 'Public source describes the outcome qualitatively.' }],
    whatWorked: ['Conversion-focused campaign objective', 'Localized trust messaging', 'App growth orientation'],
    missingData: ['Install volume', 'registration conversion rate', 'CPA/CAC']
  },
  {
    slug: 'salampay-launch',
    client: 'SalamPay',
    industry: 'Fintech / migrant banking',
    market: 'Russia / Central Asia audience',
    services: ['360 marketing', 'Celebrity ambassador', 'Launch campaign'],
    sourceUrl: 'https://munamedia.me/cases/salampay-khabib-celebrity-ambassador-360-marketing-campaign',
    headline: 'Launch of a money transfer and banking product for Central Asian and Azerbaijani migrants.',
    executiveSummary: 'Muna Media helped SalamPay launch a new financial product for migrants from Central Asia and Azerbaijan in Russia, using a 360-degree marketing approach and celebrity ambassador logic.',
    challenge: 'The product needed trust, awareness and relevance for migrant audiences that depend on reliable financial services.',
    strategy: 'Combine mass awareness, ambassador credibility and performance-oriented execution to introduce the product as a trusted financial solution.',
    execution: 'Muna Media supported the launch campaign for the money transfer and banking service.',
    results: [{ metric: 'Campaign type', value: '360 launch', note: 'Source describes a 360 marketing campaign.' }],
    whatWorked: ['Clear audience definition', 'Trust-building celebrity layer', 'Integrated launch execution'],
    missingData: ['Reach', 'registrations', 'CAC', 'brand lift']
  },
  {
    slug: 'huawei-product-promotion',
    client: 'Huawei',
    industry: 'Consumer technology',
    market: 'Uzbekistan',
    services: ['Product advertising', 'Media planning', 'Local execution'],
    sourceUrl: 'https://munamedia.me/cases/huawei',
    headline: 'Promotion of a new Huawei product in the local market.',
    executiveSummary: 'Muna Media supported Huawei with advertising for a new product, adapting execution to the local market context.',
    challenge: 'A technology product launch needs fast awareness, clear product communication and local media execution that supports retail demand.',
    strategy: 'Translate the product launch into channel-ready local messaging and controlled media execution.',
    execution: 'Muna Media managed advertising support for the Huawei product campaign.',
    results: [{ metric: 'Campaign focus', value: 'New product promotion', note: 'Public source describes the project at a high level.' }],
    whatWorked: ['Product launch focus', 'Local channel adaptation', 'Brand-safe execution'],
    missingData: ['Product name', 'channels', 'reach', 'sales impact']
  },
  {
    slug: 'open-card-bnpl',
    client: 'Open Card',
    industry: 'Fintech / BNPL',
    market: 'Uzbekistan',
    services: ['Integrated promotion', 'Fintech marketing', 'Media buying'],
    sourceUrl: 'https://munamedia.me/cases/open-card-bnpl-marketing-uzbekistan-case-study',
    headline: 'Integrated promotion of the Open BNPL service in Uzbekistan.',
    executiveSummary: 'Muna Media supported Open Card with complex promotion for a BNPL service in Uzbekistan.',
    challenge: 'BNPL requires both education and trust. Users need to understand the product and feel safe using it for purchases.',
    strategy: 'Build communication around practical consumer benefit, local trust and channel combinations that can drive adoption.',
    execution: 'Muna Media handled integrated promotion for the BNPL service.',
    results: [{ metric: 'Category', value: 'BNPL promotion', note: 'Public source describes complex promotion of the service.' }],
    whatWorked: ['Fintech-specific messaging', 'Local adoption focus', 'Integrated channel mix'],
    missingData: ['Applications', 'activation rate', 'merchant coverage']
  },
  {
    slug: 'kabrita-telegram-marketing',
    client: 'Kabrita',
    industry: 'Baby nutrition',
    market: 'Uzbekistan',
    services: ['Telegram marketing', 'Influencer/community promotion'],
    sourceUrl: 'https://munamedia.me/case/kabrita',
    headline: 'Promotion of baby nutrition through Telegram marketing.',
    executiveSummary: 'Muna Media helped Kabrita promote baby nutrition products through Telegram marketing in Uzbekistan.',
    challenge: 'Baby nutrition marketing depends on trust, relevance and careful audience targeting among parents and caregivers.',
    strategy: 'Use Telegram as a trusted content and community channel, matching brand message with relevant local audiences.',
    execution: 'Muna Media planned and executed Telegram marketing activity for Kabrita.',
    results: [{ metric: 'Primary channel', value: 'Telegram', note: 'Public source identifies Telegram marketing as the promotion channel.' }],
    whatWorked: ['Channel-audience fit', 'Trust-sensitive category handling', 'Localized community reach'],
    missingData: ['Channel list', 'reach', 'engagement', 'sales impact']
  },
  {
    slug: 'yadea-led-screens',
    client: 'Yadea',
    industry: 'Electric mobility',
    market: 'Uzbekistan',
    services: ['OOH', 'LED screens'],
    sourceUrl: 'https://munamedia.me/case/yadea',
    headline: 'Brand placement on LED screens.',
    executiveSummary: 'Muna Media supported Yadea with LED screen placements to increase brand visibility in the local market.',
    challenge: 'Electric mobility brands need visibility and repeated exposure in urban environments where potential buyers move and commute.',
    strategy: 'Use LED screen inventory as a high-frequency urban visibility layer for brand awareness.',
    execution: 'Muna Media coordinated LED screen placement for Yadea.',
    results: [{ metric: 'Channel', value: 'LED screens', note: 'Public source describes effective LED screen placement.' }],
    whatWorked: ['Urban visibility', 'OOH channel fit', 'Simple brand exposure mechanic'],
    missingData: ['Locations', 'impressions', 'flight dates']
  },
  {
    slug: 'uzbekistan-airways-pr',
    client: 'Uzbekistan Airways',
    industry: 'Aviation',
    market: 'Uzbekistan',
    services: ['PR', 'News distribution'],
    sourceUrl: 'https://munamedia.me/case/uzairways',
    headline: 'Fast placement of news about the agreement between Uzbekistan Airways and SITA Mission Watch.',
    executiveSummary: 'Muna Media helped distribute news about the agreement between Uzbekistan Airways and SITA Mission Watch.',
    challenge: 'Corporate aviation communications require speed, accuracy and credible distribution.',
    strategy: 'Prepare and distribute the news quickly while preserving the official corporate message.',
    execution: 'Muna Media handled operational news placement.',
    results: [{ metric: 'Execution type', value: 'Rapid news placement', note: 'Public source describes fast placement.' }],
    whatWorked: ['Speed', 'Corporate message control', 'Relevant media placement'],
    missingData: ['Publications list', 'reach', 'publication dates']
  },
  {
    slug: 'mts-bank-voice-assistant',
    client: 'MTS Bank',
    industry: 'Banking',
    market: 'Russia / regional support',
    services: ['Audio production', 'Voice integration'],
    sourceUrl: 'https://munamedia.me/mtc-case',
    headline: 'Voiceover and integration for the MTS Bank voice assistant.',
    executiveSummary: 'Muna Media supported MTS Bank with voiceover production and integration for a voice assistant experience.',
    challenge: 'Voice interfaces require clear audio, brand-consistent tone and technically correct integration into the customer support flow.',
    strategy: 'Create and integrate voice content that supports the bank’s digital customer experience.',
    execution: 'Muna Media handled voiceover and integration work.',
    results: [{ metric: 'Deliverable', value: 'Voice assistant audio integrated', note: 'Public source describes voiceover and integration.' }],
    whatWorked: ['Audio production quality', 'Digital service integration', 'Brand consistency'],
    missingData: ['Call volume', 'completion rate', 'customer satisfaction']
  },
  {
    slug: 'unistream-growth',
    client: 'Unistream',
    industry: 'Money transfers',
    market: 'Uzbekistan / Central Asia',
    services: ['Brand awareness', 'Growth marketing'],
    sourceUrl: 'https://munamedia.me/cases/unistream',
    headline: 'Increasing transfers and brand awareness.',
    executiveSummary: 'Muna Media supported Unistream with a campaign focused on increasing money transfers and strengthening brand awareness.',
    challenge: 'Money transfer brands need to earn trust and remain top-of-mind during high-intent transfer moments.',
    strategy: 'Combine awareness and conversion-oriented communication to drive usage and brand recall.',
    execution: 'Muna Media supported campaign execution for Unistream.',
    results: [{ metric: 'Outcome', value: 'Transfers and awareness increased', note: 'Public source describes the result qualitatively.' }],
    whatWorked: ['Trust category experience', 'Awareness plus conversion logic', 'Localized execution'],
    missingData: ['Transfer volume', 'brand lift', 'CAC']
  },
  {
    slug: 'unisat-video-production',
    client: 'UniSat',
    industry: 'Technology / education',
    market: 'Uzbekistan',
    services: ['Video production'],
    sourceUrl: 'https://munamedia.me/case/unisat',
    headline: 'Professional video production for UniSat.',
    executiveSummary: 'Muna Media produced video content for UniSat, supporting the project with professional production capabilities.',
    challenge: 'Technology and education projects need clear storytelling to make complex ideas accessible.',
    strategy: 'Use video production to package the project message in a format that is easier to understand and distribute.',
    execution: 'Muna Media delivered video production work for UniSat.',
    results: [{ metric: 'Deliverable', value: 'Professional video production', note: 'Public source describes the deliverable.' }],
    whatWorked: ['Clear visual storytelling', 'Production support', 'Message packaging'],
    missingData: ['Video links', 'distribution channels', 'performance metrics']
  },
  {
    slug: 'nl-international-leads',
    client: 'NL International',
    industry: 'Direct sales / wellness',
    market: 'Uzbekistan',
    services: ['Lead generation', 'Campaign optimization'],
    sourceUrl: 'https://munamedia.me/cases/nl',
    headline: 'Increasing relevant applications and project participants.',
    executiveSummary: 'Muna Media helped NL International increase relevant applications and participant interest for the project.',
    challenge: 'Lead-generation campaigns need quality, not only volume. The key is to attract people who match the project requirements.',
    strategy: 'Optimize campaign communication and targeting around relevant applications and participant fit.',
    execution: 'Muna Media supported the campaign with lead-generation execution.',
    results: [{ metric: 'Outcome', value: 'Relevant applications and participants increased', note: 'Public source describes qualitative growth.' }],
    whatWorked: ['Lead quality focus', 'Audience fit', 'Application-oriented messaging'],
    missingData: ['Lead volume', 'conversion rate', 'cost per relevant application']
  },
  {
    slug: 'yobidoyobi-two-channel-strategy',
    client: 'Ёбидоёби',
    industry: 'Food delivery / restaurant chain',
    market: 'Uzbekistan',
    services: ['Two-channel strategy', 'Local launch marketing'],
    sourceUrl: 'https://munamedia.me/case/yobidoyobi',
    headline: 'Two-channel strategy for an international sushi and rolls delivery chain in Uzbekistan.',
    executiveSummary: 'Muna Media supported Ёбидоёби with a two-channel strategy for the Uzbekistan market.',
    challenge: 'Food delivery brands need fast local recognition and repeat orders in a competitive market.',
    strategy: 'Use a focused two-channel approach to build awareness and trigger conversion without overcomplicating the launch.',
    execution: 'Muna Media developed and supported the two-channel local marketing strategy.',
    results: [{ metric: 'Strategy type', value: 'Two-channel approach', note: 'Public source describes the strategy.' }],
    whatWorked: ['Focused channel selection', 'Local market adaptation', 'Clear conversion goal'],
    missingData: ['Channels used', 'orders', 'CAC', 'repeat purchase']
  },
  {
    slug: 'urussa-led-screens',
    client: 'Urussa',
    industry: 'Consumer brand',
    market: 'Uzbekistan',
    services: ['OOH', 'LED screens'],
    sourceUrl: 'https://munamedia.me/case/urussa',
    headline: 'Brand placement on LED screens.',
    executiveSummary: 'Muna Media supported Urussa with LED screen placements for brand visibility.',
    challenge: 'The brand needed visible city placements to strengthen awareness in high-traffic environments.',
    strategy: 'Use LED screens as an outdoor visibility channel with repeated exposure.',
    execution: 'Muna Media coordinated LED screen advertising placement.',
    results: [{ metric: 'Channel', value: 'LED screens', note: 'Public source describes effective LED screen placement.' }],
    whatWorked: ['OOH visibility', 'Urban exposure', 'Simple campaign execution'],
    missingData: ['Locations', 'impressions', 'campaign dates']
  }
];
