import { z } from 'astro:content';

const ImageSchema = z.object({
  url: z.string().url(),
  width: z.number(),
  height: z.number(),
});

const FeaturedImageSchema = z.object({
  thumbnail: ImageSchema,
  medium: ImageSchema,
  medium_large: ImageSchema,
  large: ImageSchema,
  full: ImageSchema,
});

const VariablePairSchema = z.object({
  price: z.coerce.number(),
  size: z.string(),
});

const variablePriceSchema = z.object({
  variable_price: z.literal(true),
  small: VariablePairSchema,
  medium: VariablePairSchema,
  large: VariablePairSchema,
})

const FixedPriceSchema = z.object({
  variable_price: z.literal(false),
  price: z.coerce.number(),
})

export const ProductPriceSchema = z.discriminatedUnion('variable_price', [
  variablePriceSchema,
  FixedPriceSchema,
])

const categorySchema = z.object({
  id: z.number(),
  name: z.string(),
  slug: z.string(),
  acf: z.object({
    icon: z.string(),
  }),
});

export const CategoriesSchema = z.array(categorySchema);
export type Category = z.infer<typeof categorySchema>;

const productSchema = z.object({
  id: z.number(),
  slug: z.string(),
  title: z.object({
    rendered: z.string(),
  }),
  featured_media: z.number(),
  featured_images: FeaturedImageSchema,
  acf: ProductPriceSchema
});

export const ProductsSchema = z.array(productSchema);
export type Product = z.infer<typeof productSchema>;

const ProductWithVariablePriceSchema = productSchema.extend({
  acf: variablePriceSchema,
});

export type ProductWithVariablePrice = z.infer<typeof ProductWithVariablePriceSchema>;

const SelectedProductSchema = z.object({
  id: z.number(),
  name: z.string(),
  price: z.number(),
  size: z.optional(z.string()),
})

export type SelectedProduct = z.infer<typeof SelectedProductSchema>;
