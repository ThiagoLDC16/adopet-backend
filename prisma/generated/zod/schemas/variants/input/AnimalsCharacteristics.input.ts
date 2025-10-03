import * as z from 'zod';

// prettier-ignore
export const AnimalsCharacteristicsInputSchema = z.object({
    animalId: z.number().int(),
    characteristicId: z.number().int(),
    animal: z.unknown(),
    characteristic: z.unknown()
}).strict();

export type AnimalsCharacteristicsInputType = z.infer<typeof AnimalsCharacteristicsInputSchema>;
