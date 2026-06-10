import { defineField, defineType } from 'sanity';

const workflow = defineField({
  name: 'workflowStatus',
  title: 'Workflow status',
  type: 'string',
  initialValue: 'draft',
  options: {
    list: [
      { title: 'Draft', value: 'draft' },
      { title: 'Review', value: 'review' },
      { title: 'Approved', value: 'approved' },
      { title: 'Published', value: 'published' }
    ],
    layout: 'radio'
  },
  validation: (Rule) => Rule.required()
});

const seoFields = [
  defineField({ name: 'metaTitle', title: 'Meta title', type: 'string', validation: (Rule) => Rule.max(70) }),
  defineField({ name: 'metaDescription', title: 'Meta description', type: 'text', rows: 3, validation: (Rule) => Rule.max(160) }),
  defineField({ name: 'canonical', title: 'Canonical URL', type: 'url' }),
  defineField({ name: 'noindex', title: 'Noindex', type: 'boolean', initialValue: false })
];

export const servicePage = defineType({
  name: 'servicePage',
  title: 'Service page',
  type: 'document',
  fields: [
    workflow,
    defineField({ name: 'title', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'slug', type: 'slug', options: { source: 'title' }, validation: (Rule) => Rule.required() }),
    defineField({ name: 'priority', type: 'number', initialValue: 50 }),
    defineField({ name: 'heroEyebrow', type: 'string' }),
    defineField({ name: 'heroHeadline', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'heroSubheadline', type: 'text', rows: 3 }),
    defineField({ name: 'primaryCta', type: 'string', initialValue: 'Request a media plan' }),
    defineField({ name: 'customerPains', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'deliverables', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'process', type: 'array', of: [{ type: 'object', fields: [defineField({ name: 'step', type: 'string' }), defineField({ name: 'description', type: 'text' })] }] }),
    defineField({ name: 'relatedCases', type: 'array', of: [{ type: 'reference', to: [{ type: 'caseStudy' }] }] }),
    defineField({ name: 'faq', type: 'array', of: [{ type: 'object', fields: [defineField({ name: 'question', type: 'string' }), defineField({ name: 'answer', type: 'text' })] }] }),
    ...seoFields
  ]
});

export const caseStudy = defineType({
  name: 'caseStudy',
  title: 'Case study',
  type: 'document',
  fields: [
    workflow,
    defineField({ name: 'client', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'slug', type: 'slug', options: { source: 'client' }, validation: (Rule) => Rule.required() }),
    defineField({ name: 'industry', type: 'string' }),
    defineField({ name: 'market', type: 'string', initialValue: 'Uzbekistan' }),
    defineField({ name: 'year', type: 'string' }),
    defineField({ name: 'services', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'permissionLevel', title: 'Public permission level', type: 'string', initialValue: 'public', options: { list: ['public', 'anonymized', 'internal_only'] } }),
    defineField({ name: 'executiveSummary', type: 'text', rows: 4 }),
    defineField({ name: 'challenge', type: 'text', rows: 5 }),
    defineField({ name: 'strategy', type: 'text', rows: 5 }),
    defineField({ name: 'execution', type: 'text', rows: 5 }),
    defineField({ name: 'results', type: 'array', of: [{ type: 'object', fields: [defineField({ name: 'metric', type: 'string' }), defineField({ name: 'value', type: 'string' }), defineField({ name: 'note', type: 'text' })] }] }),
    defineField({ name: 'whatWorked', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'testimonial', type: 'reference', to: [{ type: 'testimonial' }] }),
    defineField({ name: 'relatedServices', type: 'array', of: [{ type: 'reference', to: [{ type: 'servicePage' }] }] }),
    ...seoFields
  ]
});

export const blogPost = defineType({
  name: 'blogPost',
  title: 'Blog post',
  type: 'document',
  fields: [
    workflow,
    defineField({ name: 'title', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'slug', type: 'slug', options: { source: 'title' }, validation: (Rule) => Rule.required() }),
    defineField({ name: 'language', type: 'string', initialValue: 'en', options: { list: ['en', 'ru', 'uz', 'zh'] } }),
    defineField({ name: 'author', type: 'reference', to: [{ type: 'author' }] }),
    defineField({ name: 'category', type: 'string', options: { list: ['Market Entry', 'Media Buying', 'Telegram Marketing', 'Influencer Marketing', 'AI & Analytics', 'Reputation', 'Case Breakdowns'] } }),
    defineField({ name: 'excerpt', type: 'text', rows: 3 }),
    defineField({ name: 'targetKeyword', type: 'string' }),
    defineField({ name: 'buyerStage', type: 'string', options: { list: ['awareness', 'consideration', 'decision', 'implementation'] } }),
    defineField({ name: 'body', type: 'array', of: [{ type: 'block' }, { type: 'image' }] }),
    defineField({ name: 'relatedServices', type: 'array', of: [{ type: 'reference', to: [{ type: 'servicePage' }] }] }),
    ...seoFields
  ]
});

export const testimonial = defineType({
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    workflow,
    defineField({ name: 'quote', type: 'text', rows: 4, validation: (Rule) => Rule.required() }),
    defineField({ name: 'personName', type: 'string' }),
    defineField({ name: 'personTitle', type: 'string' }),
    defineField({ name: 'company', type: 'string' }),
    defineField({ name: 'approvalStatus', type: 'string', initialValue: 'draft_pending_client_approval', options: { list: ['draft_pending_client_approval', 'approved', 'do_not_publish'] } })
  ]
});

export const clientLogo = defineType({
  name: 'clientLogo',
  title: 'Client logo',
  type: 'document',
  fields: [
    workflow,
    defineField({ name: 'name', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'logo', type: 'image' }),
    defineField({ name: 'industry', type: 'string' }),
    defineField({ name: 'canPublish', type: 'boolean', initialValue: true })
  ]
});

export const author = defineType({
  name: 'author',
  title: 'Author',
  type: 'document',
  fields: [
    defineField({ name: 'name', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'role', type: 'string' }),
    defineField({ name: 'bio', type: 'text' }),
    defineField({ name: 'photo', type: 'image' })
  ]
});

export const schemaTypes = [servicePage, caseStudy, blogPost, testimonial, clientLogo, author];
