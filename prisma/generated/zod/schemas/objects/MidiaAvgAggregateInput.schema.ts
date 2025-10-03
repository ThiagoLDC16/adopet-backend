import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  animalId: z.literal(true).optional()
}).strict();
export const MidiaAvgAggregateInputObjectSchema: z.ZodType<Prisma.MidiaAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.MidiaAvgAggregateInputType>;
export const MidiaAvgAggregateInputObjectZodSchema = makeSchema();
