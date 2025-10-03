import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  animalId: z.number().int(),
  characteristicId: z.number().int()
}).strict();
export const AnimalsCharacteristicsAnimalIdCharacteristicIdCompoundUniqueInputObjectSchema: z.ZodType<Prisma.AnimalsCharacteristicsAnimalIdCharacteristicIdCompoundUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.AnimalsCharacteristicsAnimalIdCharacteristicIdCompoundUniqueInput>;
export const AnimalsCharacteristicsAnimalIdCharacteristicIdCompoundUniqueInputObjectZodSchema = makeSchema();
