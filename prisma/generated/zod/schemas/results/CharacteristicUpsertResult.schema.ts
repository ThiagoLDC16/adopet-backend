import * as z from 'zod';
export const CharacteristicUpsertResultSchema = z.object({
  id: z.number().int(),
  description: z.string(),
  animals: z.array(z.unknown())
});