import * as z from 'zod';
export const AnimalsCharacteristicsFindManyResultSchema = z.object({
  data: z.array(z.object({
  animalId: z.number().int(),
  characteristicId: z.number().int(),
  animal: z.unknown(),
  characteristic: z.unknown()
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