import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AnimalsCharacteristicsUncheckedCreateNestedManyWithoutCharacteristicInputObjectSchema as AnimalsCharacteristicsUncheckedCreateNestedManyWithoutCharacteristicInputObjectSchema } from './AnimalsCharacteristicsUncheckedCreateNestedManyWithoutCharacteristicInput.schema'

const makeSchema = () => z.object({
  id: z.number().int().optional(),
  description: z.string(),
  animals: z.lazy(() => AnimalsCharacteristicsUncheckedCreateNestedManyWithoutCharacteristicInputObjectSchema)
}).strict();
export const CharacteristicUncheckedCreateInputObjectSchema: z.ZodType<Prisma.CharacteristicUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.CharacteristicUncheckedCreateInput>;
export const CharacteristicUncheckedCreateInputObjectZodSchema = makeSchema();
