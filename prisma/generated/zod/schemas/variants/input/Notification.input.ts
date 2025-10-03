import * as z from 'zod';

// prettier-ignore
export const NotificationInputSchema = z.object({
    id: z.number().int(),
    message: z.string(),
    userId: z.number().int(),
    user: z.unknown(),
    createdAt: z.date()
}).strict();

export type NotificationInputType = z.infer<typeof NotificationInputSchema>;
