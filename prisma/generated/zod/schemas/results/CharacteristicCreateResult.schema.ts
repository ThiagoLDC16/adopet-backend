import * as z from 'zod';
export const CharacteristicCreateResultSchema = z.object({
  id: z.number().int(),
  description: z.string(),
  animals: z.array(z.unknown())
});