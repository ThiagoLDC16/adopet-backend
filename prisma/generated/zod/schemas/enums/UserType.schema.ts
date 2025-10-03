import * as z from 'zod';

export const UserTypeSchema = z.enum(['USER', 'ONG'])

export type UserType = z.infer<typeof UserTypeSchema>;