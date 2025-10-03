import * as z from 'zod';

export const MidiaScalarFieldEnumSchema = z.enum(['id', 'type', 'extension', 'url', 'animalId'])

export type MidiaScalarFieldEnum = z.infer<typeof MidiaScalarFieldEnumSchema>;