import * as z from 'zod';
export const AnimalsCharacteristicsUpsertResultSchema = z.object({
  animalId: z.number().int(),
  characteristicId: z.number().int(),
  animal: z.unknown(),
  characteristic: z.unknown()
});