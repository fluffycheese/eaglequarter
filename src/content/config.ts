import { defineCollection, z } from "astro:content";

export const collections = {
  news: defineCollection({
    schema: z.object({
      title: z.string(),
      description: z.string(),
      pubDate: z.date(),
      tags: z.array(z.string()),
      heroImage: z.string().optional(),
    }),
  }),
};
