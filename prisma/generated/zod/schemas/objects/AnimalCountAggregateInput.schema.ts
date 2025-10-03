import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  name: z.literal(true).optional(),
  age: z.literal(true).optional(),
  species: z.literal(true).optional(),
  breed: z.literal(true).optional(),
  description: z.literal(true).optional(),
  responsibleNGOId: z.literal(true).optional(),
  adopterUserId: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const AnimalCountAggregateInputObjectSchema: z.ZodType<Prisma.AnimalCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.AnimalCountAggregateInputType>;
export const AnimalCountAggregateInputObjectZodSchema = makeSchema();
