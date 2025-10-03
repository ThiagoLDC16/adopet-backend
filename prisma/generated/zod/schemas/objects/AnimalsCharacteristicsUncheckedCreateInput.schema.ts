import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  animalId: z.number().int(),
  characteristicId: z.number().int()
}).strict();
export const AnimalsCharacteristicsUncheckedCreateInputObjectSchema: z.ZodType<Prisma.AnimalsCharacteristicsUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.AnimalsCharacteristicsUncheckedCreateInput>;
export const AnimalsCharacteristicsUncheckedCreateInputObjectZodSchema = makeSchema();
