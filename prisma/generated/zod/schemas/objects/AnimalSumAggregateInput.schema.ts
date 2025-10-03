import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  age: z.literal(true).optional(),
  responsibleNGOId: z.literal(true).optional(),
  adopterUserId: z.literal(true).optional()
}).strict();
export const AnimalSumAggregateInputObjectSchema: z.ZodType<Prisma.AnimalSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.AnimalSumAggregateInputType>;
export const AnimalSumAggregateInputObjectZodSchema = makeSchema();
