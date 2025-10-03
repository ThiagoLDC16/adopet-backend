import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  animalId: z.number().int(),
  characteristicId: z.number().int()
}).strict();
export const AnimalsCharacteristicsCreateManyInputObjectSchema: z.ZodType<Prisma.AnimalsCharacteristicsCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.AnimalsCharacteristicsCreateManyInput>;
export const AnimalsCharacteristicsCreateManyInputObjectZodSchema = makeSchema();
