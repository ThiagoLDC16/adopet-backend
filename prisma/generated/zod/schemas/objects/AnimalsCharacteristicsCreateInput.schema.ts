import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AnimalCreateNestedOneWithoutCharacteristicsInputObjectSchema as AnimalCreateNestedOneWithoutCharacteristicsInputObjectSchema } from './AnimalCreateNestedOneWithoutCharacteristicsInput.schema';
import { CharacteristicCreateNestedOneWithoutAnimalsInputObjectSchema as CharacteristicCreateNestedOneWithoutAnimalsInputObjectSchema } from './CharacteristicCreateNestedOneWithoutAnimalsInput.schema'

const makeSchema = () => z.object({
  animal: z.lazy(() => AnimalCreateNestedOneWithoutCharacteristicsInputObjectSchema),
  characteristic: z.lazy(() => CharacteristicCreateNestedOneWithoutAnimalsInputObjectSchema)
}).strict();
export const AnimalsCharacteristicsCreateInputObjectSchema: z.ZodType<Prisma.AnimalsCharacteristicsCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.AnimalsCharacteristicsCreateInput>;
export const AnimalsCharacteristicsCreateInputObjectZodSchema = makeSchema();
