import * as z from 'zod';

// prettier-ignore
export const CharacteristicInputSchema = z.object({
    id: z.number().int(),
    description: z.string(),
    animals: z.array(z.unknown())
}).strict();

export type CharacteristicInputType = z.infer<typeof CharacteristicInputSchema>;
