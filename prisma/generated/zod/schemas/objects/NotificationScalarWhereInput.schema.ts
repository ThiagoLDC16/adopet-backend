import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

const notificationscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => NotificationScalarWhereInputObjectSchema), z.lazy(() => NotificationScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => NotificationScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => NotificationScalarWhereInputObjectSchema), z.lazy(() => NotificationScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  message: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  userId: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const NotificationScalarWhereInputObjectSchema: z.ZodType<Prisma.NotificationScalarWhereInput> = notificationscalarwhereinputSchema as unknown as z.ZodType<Prisma.NotificationScalarWhereInput>;
export const NotificationScalarWhereInputObjectZodSchema = notificationscalarwhereinputSchema;
