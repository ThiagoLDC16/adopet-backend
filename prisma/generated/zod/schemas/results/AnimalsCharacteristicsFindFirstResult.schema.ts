import * as z from 'zod';
export const AnimalsCharacteristicsFindFirstResultSchema = z.nullable(z.object({
  animalId: z.number().int(),
  characteristicId: z.number().int(),
  animal: z.unknown(),
  characteristic: z.unknown()
}));