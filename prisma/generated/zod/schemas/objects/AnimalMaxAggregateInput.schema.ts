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
  adopterUserId: z.literal(true).optional()
}).strict();
export const AnimalMaxAggregateInputObjectSchema: z.ZodType<Prisma.AnimalMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.AnimalMaxAggregateInputType>;
export const AnimalMaxAggregateInputObjectZodSchema = makeSchema();
