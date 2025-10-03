import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional()
}).strict();
export const CharacteristicAvgAggregateInputObjectSchema: z.ZodType<Prisma.CharacteristicAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.CharacteristicAvgAggregateInputType>;
export const CharacteristicAvgAggregateInputObjectZodSchema = makeSchema();
