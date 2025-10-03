import * as z from 'zod';
export const AnimalDeleteManyResultSchema = z.object({
  count: z.number()
});