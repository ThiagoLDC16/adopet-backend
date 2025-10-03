import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  type: z.literal(true).optional(),
  extension: z.literal(true).optional(),
  url: z.literal(true).optional(),
  animalId: z.literal(true).optional()
}).strict();
export const MidiaMinAggregateInputObjectSchema: z.ZodType<Prisma.MidiaMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.MidiaMinAggregateInputType>;
export const MidiaMinAggregateInputObjectZodSchema = makeSchema();
