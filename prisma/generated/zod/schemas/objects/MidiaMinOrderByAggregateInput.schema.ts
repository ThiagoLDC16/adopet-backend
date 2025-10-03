import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  type: SortOrderSchema.optional(),
  extension: SortOrderSchema.optional(),
  url: SortOrderSchema.optional(),
  animalId: SortOrderSchema.optional()
}).strict();
export const MidiaMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.MidiaMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.MidiaMinOrderByAggregateInput>;
export const MidiaMinOrderByAggregateInputObjectZodSchema = makeSchema();
