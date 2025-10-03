import * as z from 'zod';

// prettier-ignore
export const AnimalsCharacteristicsModelSchema = z.object({
    animalId: z.number().int(),
    characteristicId: z.number().int(),
    animal: z.unknown(),
    characteristic: z.unknown()
}).strict();

export type AnimalsCharacteristicsModelType = z.infer<typeof AnimalsCharacteristicsModelSchema>;
