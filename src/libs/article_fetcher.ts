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

  async fetchMultiple(before = '', after = '', num = 10): Promise<ArticlesPage> {
    const query = (before !== '') ?
      `last: ${num} before: "${before}"`
      : (after !== '') ?
        `first: ${num} after: "${after}"`
        : `first: ${num}`;

    const response = await fetch("https://note.kenchankunsan.com/graphql",
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
