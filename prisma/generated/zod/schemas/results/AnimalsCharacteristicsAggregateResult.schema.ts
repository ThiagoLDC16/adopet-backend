import * as z from 'zod';
export const AnimalsCharacteristicsAggregateResultSchema = z.object({  _count: z.object({
    animalId: z.number(),
    characteristicId: z.number(),
    animal: z.number(),
    characteristic: z.number()
  }).optional(),
  _sum: z.object({
    animalId: z.number().nullable(),
    characteristicId: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    animalId: z.number().nullable(),
    characteristicId: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    animalId: z.number().int().nullable(),
    characteristicId: z.number().int().nullable()
  }).nullable().optional(),
  _max: z.object({
    animalId: z.number().int().nullable(),
    characteristicId: z.number().int().nullable()
  }).nullable().optional()});