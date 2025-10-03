import * as z from 'zod';
export const AnimalFindManyResultSchema = z.object({
  data: z.array(z.object({
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
})),
  pagination: z.object({
  page: z.number().int().min(1),
  pageSize: z.number().int().min(1),
  total: z.number().int().min(0),
  totalPages: z.number().int().min(0),
  hasNext: z.boolean(),
  hasPrev: z.boolean()
})
});