import * as z from 'zod';

// prettier-ignore
export const MidiaResultSchema = z.object({
    id: z.number().int(),
    type: z.string(),
    extension: z.string(),
    url: z.string(),
    animalId: z.number().int(),
    animal: z.unknown()
}).strict();

export type MidiaResultType = z.infer<typeof MidiaResultSchema>;
