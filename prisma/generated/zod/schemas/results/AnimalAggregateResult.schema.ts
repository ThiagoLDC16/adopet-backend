import * as z from 'zod';
export const AnimalAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    name: z.number(),
    age: z.number(),
    species: z.number(),
    breed: z.number(),
    midia: z.number(),
    characteristics: z.number(),
    description: z.number(),
    responsibleNGO: z.number(),
    responsibleNGOId: z.number(),
    adopterUser: z.number(),
    adopterUserId: z.number()
  }).optional(),
  _sum: z.object({
    id: z.number().nullable(),
    age: z.number().nullable(),
    responsibleNGOId: z.number().nullable(),
    adopterUserId: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    id: z.number().nullable(),
    age: z.number().nullable(),
    responsibleNGOId: z.number().nullable(),
    adopterUserId: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.number().int().nullable(),
    name: z.string().nullable(),
    age: z.number().int().nullable(),
    species: z.string().nullable(),
    breed: z.string().nullable(),
    description: z.string().nullable(),
    responsibleNGOId: z.number().int().nullable(),
    adopterUserId: z.number().int().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.number().int().nullable(),
    name: z.string().nullable(),
    age: z.number().int().nullable(),
    species: z.string().nullable(),
    breed: z.string().nullable(),
    description: z.string().nullable(),
    responsibleNGOId: z.number().int().nullable(),
    adopterUserId: z.number().int().nullable()
  }).nullable().optional()});