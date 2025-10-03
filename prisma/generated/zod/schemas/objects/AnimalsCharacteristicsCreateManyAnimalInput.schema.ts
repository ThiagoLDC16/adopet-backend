import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  characteristicId: z.number().int()
}).strict();
export const AnimalsCharacteristicsCreateManyAnimalInputObjectSchema: z.ZodType<Prisma.AnimalsCharacteristicsCreateManyAnimalInput> = makeSchema() as unknown as z.ZodType<Prisma.AnimalsCharacteristicsCreateManyAnimalInput>;
export const AnimalsCharacteristicsCreateManyAnimalInputObjectZodSchema = makeSchema();
