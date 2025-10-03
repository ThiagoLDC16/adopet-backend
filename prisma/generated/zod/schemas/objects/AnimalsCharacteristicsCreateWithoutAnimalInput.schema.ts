import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CharacteristicCreateNestedOneWithoutAnimalsInputObjectSchema as CharacteristicCreateNestedOneWithoutAnimalsInputObjectSchema } from './CharacteristicCreateNestedOneWithoutAnimalsInput.schema'

const makeSchema = () => z.object({
  characteristic: z.lazy(() => CharacteristicCreateNestedOneWithoutAnimalsInputObjectSchema)
}).strict();
export const AnimalsCharacteristicsCreateWithoutAnimalInputObjectSchema: z.ZodType<Prisma.AnimalsCharacteristicsCreateWithoutAnimalInput> = makeSchema() as unknown as z.ZodType<Prisma.AnimalsCharacteristicsCreateWithoutAnimalInput>;
export const AnimalsCharacteristicsCreateWithoutAnimalInputObjectZodSchema = makeSchema();
