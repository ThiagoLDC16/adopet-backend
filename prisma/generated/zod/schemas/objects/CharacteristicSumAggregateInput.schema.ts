import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional()
}).strict();
export const CharacteristicSumAggregateInputObjectSchema: z.ZodType<Prisma.CharacteristicSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.CharacteristicSumAggregateInputType>;
export const CharacteristicSumAggregateInputObjectZodSchema = makeSchema();
