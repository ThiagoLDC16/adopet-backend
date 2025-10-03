import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  animalId: z.number().int()
}).strict();
export const AnimalsCharacteristicsCreateManyCharacteristicInputObjectSchema: z.ZodType<Prisma.AnimalsCharacteristicsCreateManyCharacteristicInput> = makeSchema() as unknown as z.ZodType<Prisma.AnimalsCharacteristicsCreateManyCharacteristicInput>;
export const AnimalsCharacteristicsCreateManyCharacteristicInputObjectZodSchema = makeSchema();
