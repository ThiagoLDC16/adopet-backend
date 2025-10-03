import * as z from 'zod';
export const MidiaGroupByResultSchema = z.array(z.object({
  id: z.number().int(),
  type: z.string(),
  extension: z.string(),
  url: z.string(),
  animalId: z.number().int(),
  _count: z.object({
    id: z.number(),
    type: z.number(),
    extension: z.number(),
    url: z.number(),
    animalId: z.number(),
    animal: z.number()
  }).optional(),
  _sum: z.object({
    id: z.number().nullable(),
    animalId: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    id: z.number().nullable(),
    animalId: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.number().int().nullable(),
    type: z.string().nullable(),
    extension: z.string().nullable(),
    url: z.string().nullable(),
    animalId: z.number().int().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.number().int().nullable(),
    type: z.string().nullable(),
    extension: z.string().nullable(),
    url: z.string().nullable(),
    animalId: z.number().int().nullable()
  }).nullable().optional()
}));