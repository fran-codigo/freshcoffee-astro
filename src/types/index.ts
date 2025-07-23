import { z } from 'astro:content';

const categorySchema = z.object({
  id: z.number(),
  name: z.string(),
  slug: z.string(),
  acf: z.object({
    icon: z.string(),
  }),
});

export const CategoriesSchema = z.array(categorySchema);
