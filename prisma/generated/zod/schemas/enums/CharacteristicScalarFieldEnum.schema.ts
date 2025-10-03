import * as z from 'zod';

export const CharacteristicScalarFieldEnumSchema = z.enum(['id', 'description'])

export type CharacteristicScalarFieldEnum = z.infer<typeof CharacteristicScalarFieldEnumSchema>;