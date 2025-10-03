import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  age: SortOrderSchema.optional(),
  species: SortOrderSchema.optional(),
  breed: SortOrderSchema.optional(),
  description: SortOrderSchema.optional(),
  responsibleNGOId: SortOrderSchema.optional(),
  adopterUserId: SortOrderSchema.optional()
}).strict();
export const AnimalMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.AnimalMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.AnimalMinOrderByAggregateInput>;
export const AnimalMinOrderByAggregateInputObjectZodSchema = makeSchema();
