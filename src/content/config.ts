import { defineCollection, z } from "astro:content";

export const collections = {
  news: defineCollection({
    type: "content",
    schema: z.object({
      title: z.string(),
      description: z.string(),
      pubDate: z.date(),
      tags: z.array(z.string()),
      sourceName: z.string().optional(),
      heroImage: z.string().optional(),
      sourceUrl: z.string().url().optional()
    })
  })
};