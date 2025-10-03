import * as z from 'zod';

// prettier-ignore
export const CharacteristicModelSchema = z.object({
    id: z.number().int(),
    description: z.string(),
    animals: z.array(z.unknown())
}).strict();

export type CharacteristicModelType = z.infer<typeof CharacteristicModelSchema>;
