import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  message: z.string(),
  userId: z.number().int(),
  createdAt: z.coerce.date().optional()
}).strict();
export const NotificationCreateManyInputObjectSchema: z.ZodType<Prisma.NotificationCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.NotificationCreateManyInput>;
export const NotificationCreateManyInputObjectZodSchema = makeSchema();
