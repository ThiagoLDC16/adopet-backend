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
export const MidiaMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.MidiaMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.MidiaMaxOrderByAggregateInput>;
export const MidiaMaxOrderByAggregateInputObjectZodSchema = makeSchema();
