import * as z from 'zod';
export const MidiaFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.number().int(),
  type: z.string(),
  extension: z.string(),
  url: z.string(),
  animalId: z.number().int(),
  animal: z.unknown()
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