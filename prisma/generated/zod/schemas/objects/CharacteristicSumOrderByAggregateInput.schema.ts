import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional()
}).strict();
export const CharacteristicSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.CharacteristicSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.CharacteristicSumOrderByAggregateInput>;
export const CharacteristicSumOrderByAggregateInputObjectZodSchema = makeSchema();
