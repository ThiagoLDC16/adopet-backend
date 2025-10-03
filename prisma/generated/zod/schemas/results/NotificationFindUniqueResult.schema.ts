import * as z from 'zod';
export const NotificationFindUniqueResultSchema = z.nullable(z.object({
  id: z.number().int(),
  message: z.string(),
  userId: z.number().int(),
  user: z.unknown(),
  createdAt: z.date()
}));