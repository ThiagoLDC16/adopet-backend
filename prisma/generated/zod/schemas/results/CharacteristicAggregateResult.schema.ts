import * as z from 'zod';
export const CharacteristicAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    description: z.number(),
    animals: z.number()
  }).optional(),
  _sum: z.object({
    id: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    id: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.number().int().nullable(),
    description: z.string().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.number().int().nullable(),
    description: z.string().nullable()
  }).nullable().optional()});