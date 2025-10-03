import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  userId: z.literal(true).optional()
}).strict();
export const NotificationSumAggregateInputObjectSchema: z.ZodType<Prisma.NotificationSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.NotificationSumAggregateInputType>;
export const NotificationSumAggregateInputObjectZodSchema = makeSchema();
