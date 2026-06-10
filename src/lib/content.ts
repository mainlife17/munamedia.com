import { createClient } from '@sanity/client';
import { pages, type SeoPage } from '../data/pages';
import { caseStudies, type CaseStudy } from '../data/cases';
import { blogPosts, type BlogPost } from '../data/blog';

const projectId = import.meta.env.PUBLIC_SANITY_PROJECT_ID;
const dataset = import.meta.env.PUBLIC_SANITY_DATASET || 'production';
const useSanity = Boolean(projectId && projectId !== 'replace-me');

const client = useSanity
  ? createClient({ projectId, dataset, apiVersion: '2026-06-10', useCdn: true })
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

const blogQuery = `*[_type == "blogPost" && workflowStatus in ["approved", "published"] && !noindex] | order(publishDate desc) {
  "slug": slug.current,
  title,
  "description": coalesce(excerpt, metaDescription),
  category,
  buyerStage,
  readingTime,
  publishDate,
  updatedDate,
  "author": coalesce(author->name, "Muna Media Strategy Team"),
  hero,
  sections[]{heading, body},
  "faqs": faq[]{"question": question, "answer": answer},
  "relatedServices": relatedServices[]->{"label": title, "href": "/" + slug.current + "/"}
}`;

function validPages(items: SeoPage[] | null): SeoPage[] {
  return items?.length ? items : pages;
}
function validCases(items: CaseStudy[] | null): CaseStudy[] {
  return items?.length ? items : caseStudies;
}
function validPosts(items: BlogPost[] | null): BlogPost[] {
  return items?.length ? items : blogPosts;
}

export async function getSeoPages(): Promise<SeoPage[]> {
  return validPages(await fetchFromSanity<SeoPage[]>(serviceQuery));
}

export async function getCaseStudies(): Promise<CaseStudy[]> {
  return validCases(await fetchFromSanity<CaseStudy[]>(caseQuery));
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  return validPosts(await fetchFromSanity<BlogPost[]>(blogQuery));
}

export async function getContentSource(): Promise<'sanity' | 'local'> {
  if (!client) return 'local';
  const result = await fetchFromSanity<number>('count(*[_type == "servicePage"])');
  return result && result > 0 ? 'sanity' : 'local';
}
