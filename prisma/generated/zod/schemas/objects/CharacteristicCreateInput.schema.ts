import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AnimalsCharacteristicsCreateNestedManyWithoutCharacteristicInputObjectSchema as AnimalsCharacteristicsCreateNestedManyWithoutCharacteristicInputObjectSchema } from './AnimalsCharacteristicsCreateNestedManyWithoutCharacteristicInput.schema'

const makeSchema = () => z.object({
  description: z.string(),
  animals: z.lazy(() => AnimalsCharacteristicsCreateNestedManyWithoutCharacteristicInputObjectSchema)
}).strict();
export const CharacteristicCreateInputObjectSchema: z.ZodType<Prisma.CharacteristicCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.CharacteristicCreateInput>;
export const CharacteristicCreateInputObjectZodSchema = makeSchema();
