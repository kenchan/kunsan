import rss from '@astrojs/rss';
import { marked } from 'marked';
import { getCollection } from "astro:content";

export async function GET() {
  const articles = (await getCollection("article")).sort((a, b) => {
    return a.data.publishedOn < b.data.publishedOn ? 1 : -1;
  }).slice(0, 10);

  return rss({
    title: 'けんちゃんくんさんのWeb日記',
    description: "kenchanの日々の記録",
    site: import.meta.env.SITE,
    items: articles.map((article) => ({
      link: "/" + article.data.slug,
      title: article.data.title,
      pubDate: article.data.publishedOn,
      content: marked.parse(article.body)
    }))
  })
}
