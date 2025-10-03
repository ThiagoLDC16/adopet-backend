import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AnimalsCharacteristicsWhereUniqueInputObjectSchema as AnimalsCharacteristicsWhereUniqueInputObjectSchema } from './AnimalsCharacteristicsWhereUniqueInput.schema';
import { AnimalsCharacteristicsUpdateWithoutAnimalInputObjectSchema as AnimalsCharacteristicsUpdateWithoutAnimalInputObjectSchema } from './AnimalsCharacteristicsUpdateWithoutAnimalInput.schema';
import { AnimalsCharacteristicsUncheckedUpdateWithoutAnimalInputObjectSchema as AnimalsCharacteristicsUncheckedUpdateWithoutAnimalInputObjectSchema } from './AnimalsCharacteristicsUncheckedUpdateWithoutAnimalInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AnimalsCharacteristicsWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => AnimalsCharacteristicsUpdateWithoutAnimalInputObjectSchema), z.lazy(() => AnimalsCharacteristicsUncheckedUpdateWithoutAnimalInputObjectSchema)])
}).strict();
export const AnimalsCharacteristicsUpdateWithWhereUniqueWithoutAnimalInputObjectSchema: z.ZodType<Prisma.AnimalsCharacteristicsUpdateWithWhereUniqueWithoutAnimalInput> = makeSchema() as unknown as z.ZodType<Prisma.AnimalsCharacteristicsUpdateWithWhereUniqueWithoutAnimalInput>;
export const AnimalsCharacteristicsUpdateWithWhereUniqueWithoutAnimalInputObjectZodSchema = makeSchema();
