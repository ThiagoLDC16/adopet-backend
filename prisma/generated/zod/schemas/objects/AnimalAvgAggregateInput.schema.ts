import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  age: z.literal(true).optional(),
  responsibleNGOId: z.literal(true).optional(),
  adopterUserId: z.literal(true).optional()
}).strict();
export const AnimalAvgAggregateInputObjectSchema: z.ZodType<Prisma.AnimalAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.AnimalAvgAggregateInputType>;
export const AnimalAvgAggregateInputObjectZodSchema = makeSchema();
