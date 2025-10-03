import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional()
}).strict();
export const NotificationSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.NotificationSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.NotificationSumOrderByAggregateInput>;
export const NotificationSumOrderByAggregateInputObjectZodSchema = makeSchema();
