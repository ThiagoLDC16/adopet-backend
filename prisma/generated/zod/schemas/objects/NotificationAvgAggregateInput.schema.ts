import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  userId: z.literal(true).optional()
}).strict();
export const NotificationAvgAggregateInputObjectSchema: z.ZodType<Prisma.NotificationAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.NotificationAvgAggregateInputType>;
export const NotificationAvgAggregateInputObjectZodSchema = makeSchema();
