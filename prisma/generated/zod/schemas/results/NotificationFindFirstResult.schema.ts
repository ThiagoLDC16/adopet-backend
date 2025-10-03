import * as z from 'zod';
export const NotificationFindFirstResultSchema = z.nullable(z.object({
  id: z.number().int(),
  message: z.string(),
  userId: z.number().int(),
  user: z.unknown(),
  createdAt: z.date()
}));