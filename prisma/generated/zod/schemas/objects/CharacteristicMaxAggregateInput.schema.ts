import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  description: z.literal(true).optional()
}).strict();
export const CharacteristicMaxAggregateInputObjectSchema: z.ZodType<Prisma.CharacteristicMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.CharacteristicMaxAggregateInputType>;
export const CharacteristicMaxAggregateInputObjectZodSchema = makeSchema();
