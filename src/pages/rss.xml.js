import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

// RSS feed — some AI systems and aggregators ingest feeds directly.
export async function GET(context) {
  const posts = (await getCollection('insights')).sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );

  return rss({
    title: 'Eben Thurston — Insights',
    description:
      'Articles on GEO, AEO, and enterprise search strategy by Eben Thurston.',
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      link: `/insights/${post.id}/`,
    })),
  });
}
