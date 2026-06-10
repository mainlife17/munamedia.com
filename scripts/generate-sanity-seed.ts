import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { pages } from '../src/data/pages';
import { caseStudies } from '../src/data/cases';
import { blogPosts } from '../src/data/blog';

const outFile = resolve(process.cwd(), 'sanity/seed/muna-media-seed.ndjson');
mkdirSync(dirname(outFile), { recursive: true });

const idSafe = (value: string) => value.toLowerCase().replace(/[^a-z0-9-]+/g, '-').replace(/^-|-$/g, '');
const slug = (current: string) => ({ _type: 'slug', current });
const ref = (id: string) => ({ _type: 'reference', _ref: id });
const block = (text: string, style = 'normal') => ({
  _type: 'block',
  _key: idSafe(`${style}-${text}`).slice(0, 48) || Math.random().toString(36).slice(2),
  style,
  markDefs: [],
  children: [{ _type: 'span', _key: idSafe(text).slice(0, 48) || Math.random().toString(36).slice(2), text, marks: [] }]
});

const serviceIdBySlug = new Map<string, string>();
const docs: unknown[] = [];

docs.push({
  _id: 'author.muna-media-strategy-team',
  _type: 'author',
  name: 'Muna Media Strategy Team',
  role: 'Market entry and media execution team',
  bio: 'Muna Media strategy, media buying, analytics and local execution team for Uzbekistan and Central Asia.'
});

const priorityServices = new Set([
  'services/media-buying',
  'services/telegram-marketing',
  'services/influencer-marketing',
  'services/digital-performance-marketing',
  'services/seo-aeo-geo',
  'services/orm-serm-reputation',
  'services/ooh-dooh-advertising',
  'services/btl-events',
  'services/market-entry-central-asia'
]);

for (const page of pages.filter((page) => page.slug.startsWith('services/') || page.slug.startsWith('solutions/') || page.slug.startsWith('industries/'))) {
  const id = `servicePage.${idSafe(page.slug)}`;
  serviceIdBySlug.set(page.slug, id);
  docs.push({
    _id: id,
    _type: 'servicePage',
    workflowStatus: priorityServices.has(page.slug) ? 'approved' : 'review',
    title: page.h1,
    slug: slug(page.slug),
    priority: priorityServices.has(page.slug) ? 90 : 50,
    heroEyebrow: page.eyebrow,
    heroHeadline: page.h1,
    heroSubheadline: page.intro,
    primaryCta: 'Request a market plan',
    markets: page.markets,
    customerPains: page.proof,
    deliverables: page.services,
    process: [
      { _key: 'diagnostics', step: 'Diagnostics', description: 'Define the market, audience, risks, channels, budget logic and measurement model before launch.' },
      { _key: 'launch', step: 'Launch', description: 'Coordinate media, creative adaptation, placements, tracking and reporting in one operating plan.' },
      { _key: 'optimization', step: 'Optimization', description: 'Move budget and attention toward the channels producing the strongest business signal.' }
    ],
    faq: page.faqs.map((item, index) => ({ _key: `faq-${index}`, question: item.q, answer: item.a })),
    metaTitle: page.title,
    metaDescription: page.description,
    canonical: `https://munaagency.com/${page.slug}/`,
    noindex: false
  });
}

for (const study of caseStudies) {
  docs.push({
    _id: `caseStudy.${idSafe(study.slug)}`,
    _type: 'caseStudy',
    workflowStatus: 'approved',
    client: study.client,
    slug: slug(study.slug),
    industry: study.industry,
    market: study.market,
    services: study.services,
    permissionLevel: 'public',
    executiveSummary: study.executiveSummary,
    challenge: study.challenge,
    strategy: study.strategy,
    execution: study.execution,
    results: study.results.map((result, index) => ({ _key: `result-${index}`, metric: result.metric, value: result.value, note: result.note })),
    whatWorked: study.whatWorked,
    metaTitle: `${study.client} Case Study | Muna Media`,
    metaDescription: study.headline.slice(0, 155),
    canonical: `https://munaagency.com/cases/${study.slug}/`,
    noindex: false
  });
}

for (const post of blogPosts) {
  const body = [block(post.hero), ...post.sections.flatMap((section) => [block(section.heading, 'h2'), ...section.body.map((paragraph) => block(paragraph))])];
  docs.push({
    _id: `blogPost.${idSafe(post.slug)}`,
    _type: 'blogPost',
    workflowStatus: 'approved',
    title: post.title,
    slug: slug(post.slug),
    language: 'en',
    author: ref('author.muna-media-strategy-team'),
    category: post.category,
    excerpt: post.description,
    hero: post.hero,
    readingTime: post.readingTime,
    publishDate: post.publishDate,
    updatedDate: post.updatedDate,
    targetKeyword: post.slug.replace(/-/g, ' '),
    buyerStage: post.buyerStage,
    body,
    sections: post.sections.map((section, index) => ({ _key: `section-${index}`, heading: section.heading, body: section.body })),
    faq: post.faqs.map((faq, index) => ({ _key: `faq-${index}`, question: faq.question, answer: faq.answer })),
    relatedServices: post.relatedServices.map((service) => serviceIdBySlug.get(service.href.replace(/^\//, '').replace(/\/$/, ''))).filter(Boolean).map((id) => ref(id as string)),
    metaTitle: `${post.title} | Muna Media`,
    metaDescription: post.description,
    canonical: `https://munaagency.com/blog/${post.slug}/`,
    noindex: false
  });
}

const logoNames = ['UnionPay International', 'Xiaomi', 'Yandex Eats', 'Huawei', 'Uzbekistan Airways', 'Zolotaya Korona', 'Kabrita', 'Yadea'];
for (const name of logoNames) {
  docs.push({
    _id: `clientLogo.${idSafe(name)}`,
    _type: 'clientLogo',
    workflowStatus: 'approved',
    name,
    industry: 'Enterprise client',
    canPublish: true
  });
}

const testimonialCompanies = ['UnionPay International', 'Xiaomi', 'Yandex Eats'];
for (const company of testimonialCompanies) {
  docs.push({
    _id: `testimonial.${idSafe(company)}`,
    _type: 'testimonial',
    workflowStatus: 'draft',
    quote: `Draft testimonial placeholder for ${company}. Replace with approved client quote before publishing.`,
    personName: '',
    personTitle: '',
    company,
    approvalStatus: 'draft_pending_client_approval'
  });
}

writeFileSync(outFile, docs.map((doc) => JSON.stringify(doc)).join('\n') + '\n');
console.log(`Wrote ${docs.length} documents to ${outFile}`);
