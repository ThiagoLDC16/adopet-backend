import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  type: z.literal(true).optional(),
  extension: z.literal(true).optional(),
  url: z.literal(true).optional(),
  animalId: z.literal(true).optional()
}).strict();
export const MidiaMaxAggregateInputObjectSchema: z.ZodType<Prisma.MidiaMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.MidiaMaxAggregateInputType>;
export const MidiaMaxAggregateInputObjectZodSchema = makeSchema();
