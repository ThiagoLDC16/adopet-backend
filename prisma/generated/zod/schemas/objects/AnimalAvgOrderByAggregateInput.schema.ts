import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  age: SortOrderSchema.optional(),
  responsibleNGOId: SortOrderSchema.optional(),
  adopterUserId: SortOrderSchema.optional()
}).strict();
export const AnimalAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.AnimalAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.AnimalAvgOrderByAggregateInput>;
export const AnimalAvgOrderByAggregateInputObjectZodSchema = makeSchema();
