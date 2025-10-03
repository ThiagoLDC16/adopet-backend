import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const notificationscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => NotificationScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => NotificationScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => NotificationScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => NotificationScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => NotificationScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  message: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  userId: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const NotificationScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.NotificationScalarWhereWithAggregatesInput> = notificationscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.NotificationScalarWhereWithAggregatesInput>;
export const NotificationScalarWhereWithAggregatesInputObjectZodSchema = notificationscalarwherewithaggregatesinputSchema;
