import { createClient } from '@sanity/client';
import { pages, type SeoPage } from '../data/pages';
import { caseStudies, type CaseStudy } from '../data/cases';
import { blogPosts, type BlogPost } from '../data/blog';

const projectId = import.meta.env.PUBLIC_SANITY_PROJECT_ID || 'eulrkmkt';
const dataset = import.meta.env.PUBLIC_SANITY_DATASET || 'production';
const useSanity = Boolean(projectId && projectId !== 'replace-me');

const client = useSanity
  ? createClient({ projectId, dataset, apiVersion: '2025-08-15', useCdn: false })
  : null;

async function fetchFromSanity<T>(query: string): Promise<T | null> {
  if (!client) return null;
  try {
    return await client.fetch<T>(query);
  } catch (error) {
    console.warn('Sanity fetch failed, using local fallback:', error);
    return null;
  }
}

const serviceQuery = `*[_type == "servicePage" && workflowStatus in ["approved", "published"] && !noindex] | order(priority desc) {
  "slug": slug.current,
  "title": coalesce(metaTitle, title),
  "description": coalesce(metaDescription, heroSubheadline),
  "h1": heroHeadline,
  "eyebrow": heroEyebrow,
  "intro": heroSubheadline,
  "markets": coalesce(markets, []),
  "services": coalesce(deliverables, []),
  "proof": coalesce(customerPains, []),
  "faqs": faq[]{"q": question, "a": answer}
}`;

const caseQuery = `*[_type == "caseStudy" && workflowStatus in ["approved", "published"] && permissionLevel == "public" && !noindex] {
  "slug": slug.current,
  client,
  industry,
  market,
  services,
  "sourceUrl": canonical,
  "headline": coalesce(metaDescription, executiveSummary),
  executiveSummary,
  challenge,
  strategy,
  execution,
  results[]{metric, value, note},
  whatWorked,
  "missingData": []
}`;

const blogQuery = `*[
  (_type == "blogPost" && workflowStatus in ["approved", "published"] && !noindex) ||
  (_type == "post" && defined(slug.current))
] | order(coalesce(publishDate, publishedAt) desc) {
  "slug": slug.current,
  title,
  "description": coalesce(excerpt, metaDescription, pt::text(body)[0..155]),
  "category": coalesce(category, "Blog"),
  "buyerStage": coalesce(buyerStage, "awareness"),
  "readingTime": coalesce(readingTime, "4 min read"),
  "publishDate": coalesce(publishDate, publishedAt[0..9]),
  "updatedDate": coalesce(updatedDate, publishedAt[0..9]),
  "author": coalesce(author->name, "Muna Media Strategy Team"),
  "hero": coalesce(hero, pt::text(body)[0..220]),
  "sections": select(defined(sections) => sections[]{heading, body}, defined(body) => [{"heading": "Article", "body": [pt::text(body)]}], []),
  "faqs": coalesce(faq[]{"question": question, "answer": answer}, []),
  "relatedServices": coalesce(relatedServices[]->{"label": title, "href": "/" + slug.current + "/"}, [])
}`;

function mergeBySlug<T extends { slug: string }>(localItems: T[], sanityItems: T[] | null): T[] {
  if (!sanityItems?.length) return localItems;

  const merged = new Map<string, T>();
  for (const item of localItems) merged.set(item.slug, item);
  for (const item of sanityItems) merged.set(item.slug, item);
  return Array.from(merged.values());
}

export async function getSeoPages(): Promise<SeoPage[]> {
  return mergeBySlug(pages, await fetchFromSanity<SeoPage[]>(serviceQuery));
}

export async function getCaseStudies(): Promise<CaseStudy[]> {
  return mergeBySlug(caseStudies, await fetchFromSanity<CaseStudy[]>(caseQuery));
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  return mergeBySlug(blogPosts, await fetchFromSanity<BlogPost[]>(blogQuery));
}

export async function getContentSource(): Promise<'sanity' | 'local'> {
  if (!client) return 'local';
  const result = await fetchFromSanity<number>('count(*[_type == "servicePage"])');
  return result && result > 0 ? 'sanity' : 'local';
}
