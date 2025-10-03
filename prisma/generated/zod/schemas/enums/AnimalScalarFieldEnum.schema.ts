import * as z from 'zod';

export const AnimalScalarFieldEnumSchema = z.enum(['id', 'name', 'age', 'species', 'breed', 'description', 'responsibleNGOId', 'adopterUserId'])

export type AnimalScalarFieldEnum = z.infer<typeof AnimalScalarFieldEnumSchema>;