import * as z from 'zod';

// prettier-ignore
export const AnimalResultSchema = z.object({
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
    adopterUser: z.unknown().nullable(),
    adopterUserId: z.number().int().nullable()
}).strict();

export type AnimalResultType = z.infer<typeof AnimalResultSchema>;
