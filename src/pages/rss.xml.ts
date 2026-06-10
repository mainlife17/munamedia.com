import { blogPosts } from '../data/blog';

export async function GET() {
  const site = 'https://munaagency.com';
  const items = blogPosts.map((post) => `
  <item>
    <title><![CDATA[${post.title}]]></title>
    <link>${site}/blog/${post.slug}/</link>
    <guid>${site}/blog/${post.slug}/</guid>
    <description><![CDATA[${post.description}]]></description>
    <pubDate>${new Date(post.publishDate).toUTCString()}</pubDate>
    <category><![CDATA[${post.category}]]></category>
  </item>`).join('');
  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
<channel>
  <title>Muna Media Blog</title>
  <link>${site}/blog/</link>
  <description>Central Asia marketing, media buying and market-entry insights from Muna Media.</description>
  <language>en</language>${items}
</channel>
</rss>`;
  return new Response(rss, { headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' } });
}
