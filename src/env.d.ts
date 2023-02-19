/// <reference types="astro/client" />

interface Article {
  title: string;
  body: string;
}

interface PageInfo {
  hasPreviousPage: boolean;
  hasNextPage: boolean;
  startCursor: string;
  endCursor: string;
}
