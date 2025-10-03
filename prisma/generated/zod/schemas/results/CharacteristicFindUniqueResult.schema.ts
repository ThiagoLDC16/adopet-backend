import * as z from 'zod';
export const CharacteristicFindUniqueResultSchema = z.nullable(z.object({
  id: z.number().int(),
  description: z.string(),
  animals: z.array(z.unknown())
}));