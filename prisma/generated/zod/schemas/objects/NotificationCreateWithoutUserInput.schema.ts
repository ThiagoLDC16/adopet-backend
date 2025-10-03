import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  message: z.string(),
  createdAt: z.coerce.date().optional()
}).strict();
export const NotificationCreateWithoutUserInputObjectSchema: z.ZodType<Prisma.NotificationCreateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.NotificationCreateWithoutUserInput>;
export const NotificationCreateWithoutUserInputObjectZodSchema = makeSchema();
