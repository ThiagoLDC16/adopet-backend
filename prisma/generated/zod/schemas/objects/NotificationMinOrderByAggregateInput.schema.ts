import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  message: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional()
}).strict();
export const NotificationMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.NotificationMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.NotificationMinOrderByAggregateInput>;
export const NotificationMinOrderByAggregateInputObjectZodSchema = makeSchema();
