import * as z from 'zod';

// prettier-ignore
export const CharacteristicResultSchema = z.object({
    id: z.number().int(),
    description: z.string(),
    animals: z.array(z.unknown())
}).strict();

export type CharacteristicResultType = z.infer<typeof CharacteristicResultSchema>;
