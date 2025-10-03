import * as z from 'zod';

export const AnimalsCharacteristicsScalarFieldEnumSchema = z.enum(['animalId', 'characteristicId'])

export type AnimalsCharacteristicsScalarFieldEnum = z.infer<typeof AnimalsCharacteristicsScalarFieldEnumSchema>;