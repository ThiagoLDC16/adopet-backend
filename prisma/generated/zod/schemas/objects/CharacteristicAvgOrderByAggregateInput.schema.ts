import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional()
}).strict();
export const CharacteristicAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.CharacteristicAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.CharacteristicAvgOrderByAggregateInput>;
export const CharacteristicAvgOrderByAggregateInputObjectZodSchema = makeSchema();
