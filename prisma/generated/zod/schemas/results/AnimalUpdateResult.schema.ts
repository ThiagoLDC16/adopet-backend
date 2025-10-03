import * as z from 'zod';
export const AnimalUpdateResultSchema = z.nullable(z.object({
  id: z.number().int(),
  name: z.string(),
  age: z.number().int(),
  species: z.string(),
  breed: z.string(),
  midia: z.array(z.unknown()),
  characteristics: z.array(z.unknown()),
  description: z.string(),
  responsibleNGO: z.unknown(),
  responsibleNGOId: z.number().int(),
  adopterUser: z.unknown().optional(),
  adopterUserId: z.number().int().optional()
}));