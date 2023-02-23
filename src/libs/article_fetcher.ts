interface ArticleFetcher {
  fetch(slug: string): Promise<Article>;
  fetchMultiple(before?: string | undefined, after?: string | undefined, num?: 10): Promise<ArticlesPage>;
}

interface Article {
  title: string;
  body: string;
  publishedOn: Date;
}

interface PageInfo {
  hasPreviousPage: boolean;
  hasNextPage: boolean;
  startCursor: string;
  endCursor: string;
}

interface ArticlesPage {
  nodes: [Article];
  pageInfo: PageInfo;
}

class ArticleFetcher {
  ENDPOINT_URL = "https://diary.shu-cream.net/graphql";

  constructor() { }

  async fetchMultiple(before?, after?, num = 10): Promise<ArticlesPage> {
    const query = (before !== null) ?
      `last: ${num} before: "${before}"`
      : (after !== null) ?
        `first: ${num} after: "${after}"`
        : `first: ${num}`;

    const response = await fetch("https://diary.shu-cream.net/graphql",
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          query: `
              query {
                articles(${query}) {
                  nodes {
                    title
                    body
                  }
                  pageInfo {
                    hasPreviousPage
                    hasNextPage
                    startCursor
                    endCursor
                  }
                }
              }
            `
        })
      }
    )

    const json = await response.json();
    const articlesPage: ArticlesPage = await json.data.articles;
    return articlesPage;
  }

  async fetchOne(slug: string): Promise<Article> {

    const response = await fetch(this.ENDPOINT_URL,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          query: `
              query {
                article(slug: "${slug?.replaceAll('"', '\\\"')}") {
                  title
                  body
                }
              }
            `
        })
      }
    )

    const json = await response.json();
    return await json.data.article;
  }
}

export { ArticleFetcher }
