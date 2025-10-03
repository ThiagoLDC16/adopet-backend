import * as z from 'zod';
export const NotificationAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    message: z.number(),
    userId: z.number(),
    user: z.number(),
    createdAt: z.number()
  }).optional(),
  _sum: z.object({
    id: z.number().nullable(),
    userId: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    id: z.number().nullable(),
    userId: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.number().int().nullable(),
    message: z.string().nullable(),
    userId: z.number().int().nullable(),
    createdAt: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.number().int().nullable(),
    message: z.string().nullable(),
    userId: z.number().int().nullable(),
    createdAt: z.date().nullable()
  }).nullable().optional()});