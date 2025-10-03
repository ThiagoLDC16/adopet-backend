import * as z from 'zod';

// prettier-ignore
export const AnimalsCharacteristicsResultSchema = z.object({
    animalId: z.number().int(),
    characteristicId: z.number().int(),
    animal: z.unknown(),
    characteristic: z.unknown()
}).strict();

export type AnimalsCharacteristicsResultType = z.infer<typeof AnimalsCharacteristicsResultSchema>;
