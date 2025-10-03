import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  animalId: z.number().int()
}).strict();
export const AnimalsCharacteristicsUncheckedCreateWithoutCharacteristicInputObjectSchema: z.ZodType<Prisma.AnimalsCharacteristicsUncheckedCreateWithoutCharacteristicInput> = makeSchema() as unknown as z.ZodType<Prisma.AnimalsCharacteristicsUncheckedCreateWithoutCharacteristicInput>;
export const AnimalsCharacteristicsUncheckedCreateWithoutCharacteristicInputObjectZodSchema = makeSchema();
