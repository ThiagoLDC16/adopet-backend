import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional()
}).strict();
export const NotificationAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.NotificationAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.NotificationAvgOrderByAggregateInput>;
export const NotificationAvgOrderByAggregateInputObjectZodSchema = makeSchema();
