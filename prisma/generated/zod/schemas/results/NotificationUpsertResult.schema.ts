import * as z from 'zod';
export const NotificationUpsertResultSchema = z.object({
  id: z.number().int(),
  message: z.string(),
  userId: z.number().int(),
  user: z.unknown(),
  createdAt: z.date()
});