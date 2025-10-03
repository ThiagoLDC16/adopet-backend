import * as z from 'zod';

export const UserScalarFieldEnumSchema = z.enum(['id', 'email', 'name', 'password', 'phone', 'cpf', 'cnpj', 'type', 'createdAt', 'updatedAt'])

export type UserScalarFieldEnum = z.infer<typeof UserScalarFieldEnumSchema>;