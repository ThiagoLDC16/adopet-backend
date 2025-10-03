import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  description: SortOrderSchema.optional()
}).strict();
export const CharacteristicMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.CharacteristicMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.CharacteristicMaxOrderByAggregateInput>;
export const CharacteristicMaxOrderByAggregateInputObjectZodSchema = makeSchema();
