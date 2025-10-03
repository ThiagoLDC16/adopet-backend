import * as z from 'zod';

export const NotificationScalarFieldEnumSchema = z.enum(['id', 'message', 'userId', 'createdAt'])

export type NotificationScalarFieldEnum = z.infer<typeof NotificationScalarFieldEnumSchema>;