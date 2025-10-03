import * as z from 'zod';
export const MidiaDeleteResultSchema = z.nullable(z.object({
  id: z.number().int(),
  type: z.string(),
  extension: z.string(),
  url: z.string(),
  animalId: z.number().int(),
  animal: z.unknown()
}));