import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { NotificationCountOrderByAggregateInputObjectSchema as NotificationCountOrderByAggregateInputObjectSchema } from './NotificationCountOrderByAggregateInput.schema';
import { NotificationAvgOrderByAggregateInputObjectSchema as NotificationAvgOrderByAggregateInputObjectSchema } from './NotificationAvgOrderByAggregateInput.schema';
import { NotificationMaxOrderByAggregateInputObjectSchema as NotificationMaxOrderByAggregateInputObjectSchema } from './NotificationMaxOrderByAggregateInput.schema';
import { NotificationMinOrderByAggregateInputObjectSchema as NotificationMinOrderByAggregateInputObjectSchema } from './NotificationMinOrderByAggregateInput.schema';
import { NotificationSumOrderByAggregateInputObjectSchema as NotificationSumOrderByAggregateInputObjectSchema } from './NotificationSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  message: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  _count: z.lazy(() => NotificationCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => NotificationAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => NotificationMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => NotificationMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => NotificationSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const NotificationOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.NotificationOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.NotificationOrderByWithAggregationInput>;
export const NotificationOrderByWithAggregationInputObjectZodSchema = makeSchema();
