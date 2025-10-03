import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { UserOrderByWithRelationInputObjectSchema as UserOrderByWithRelationInputObjectSchema } from './UserOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  message: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  user: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const NotificationOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.NotificationOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.NotificationOrderByWithRelationInput>;
export const NotificationOrderByWithRelationInputObjectZodSchema = makeSchema();
