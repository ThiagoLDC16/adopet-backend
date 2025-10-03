import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  animalId: SortOrderSchema.optional()
}).strict();
export const MidiaAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.MidiaAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.MidiaAvgOrderByAggregateInput>;
export const MidiaAvgOrderByAggregateInputObjectZodSchema = makeSchema();
