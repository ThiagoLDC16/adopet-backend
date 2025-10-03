import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  description: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const CharacteristicCountAggregateInputObjectSchema: z.ZodType<Prisma.CharacteristicCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.CharacteristicCountAggregateInputType>;
export const CharacteristicCountAggregateInputObjectZodSchema = makeSchema();
