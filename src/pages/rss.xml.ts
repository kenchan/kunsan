import rss from '@astrojs/rss';
import { marked } from 'marked';
import { ArticleFetcher } from '../libs/article_fetcher';

const fetcher = new ArticleFetcher();

const articlesPage = await fetcher.fetchMultiple();
const articles = articlesPage.nodes;

export const get = () => rss({
  title: 'けんちゃんくんさんのWeb日記',
  description: "kenchanの日々の記録",
  site: import.meta.env.SITE,
  items: articles.map((article) => ({
    link: "/" + encodeURI(article.title),
    title: article.title,
    pubDate: new Date(article.publishedOn),
    content: marked.parse(article.body),
  }))
})
