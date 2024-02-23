import { defineCollection, z } from 'astro:content';

const articleCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    publishedOn: z.date(),
    createdAt: z.date(),
    updatedAt: z.date(),
  }),
});
export const collections = {
  'article': articleCollection,
};
