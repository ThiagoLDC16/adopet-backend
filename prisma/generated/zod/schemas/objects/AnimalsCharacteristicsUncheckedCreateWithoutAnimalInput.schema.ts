import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  characteristicId: z.number().int()
}).strict();
export const AnimalsCharacteristicsUncheckedCreateWithoutAnimalInputObjectSchema: z.ZodType<Prisma.AnimalsCharacteristicsUncheckedCreateWithoutAnimalInput> = makeSchema() as unknown as z.ZodType<Prisma.AnimalsCharacteristicsUncheckedCreateWithoutAnimalInput>;
export const AnimalsCharacteristicsUncheckedCreateWithoutAnimalInputObjectZodSchema = makeSchema();
