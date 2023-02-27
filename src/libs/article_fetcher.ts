interface Article {
  title: string;
  body: string;
  publishedOn: string;
  createdAt: string;
  updatedAt: string;
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
  ENDPOINT_URL = "https://note.kenchankunsan.com/graphql";

  constructor() { }

  async fetchMultiple(before = '', after = '', num = 10): Promise<ArticlesPage> {
    const query = (before !== '') ?
      `last: ${num} before: "${before}"`
      : (after !== '') ?
        `first: ${num} after: "${after}"`
        : `first: ${num}`;

    const response = await fetch(this.ENDPOINT_URL,
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
                    publishedOn
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
    const articlesPage: ArticlesPage = json.data.articles;
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
                  publishedOn
                  createdAt
                  updatedAt
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
