import * as z from 'zod';
export const AnimalCreateManyResultSchema = z.object({
  count: z.number()
});