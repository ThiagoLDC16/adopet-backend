import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AnimalsCharacteristicsWhereUniqueInputObjectSchema as AnimalsCharacteristicsWhereUniqueInputObjectSchema } from './AnimalsCharacteristicsWhereUniqueInput.schema';
import { AnimalsCharacteristicsUpdateWithoutAnimalInputObjectSchema as AnimalsCharacteristicsUpdateWithoutAnimalInputObjectSchema } from './AnimalsCharacteristicsUpdateWithoutAnimalInput.schema';
import { AnimalsCharacteristicsUncheckedUpdateWithoutAnimalInputObjectSchema as AnimalsCharacteristicsUncheckedUpdateWithoutAnimalInputObjectSchema } from './AnimalsCharacteristicsUncheckedUpdateWithoutAnimalInput.schema';
import { AnimalsCharacteristicsCreateWithoutAnimalInputObjectSchema as AnimalsCharacteristicsCreateWithoutAnimalInputObjectSchema } from './AnimalsCharacteristicsCreateWithoutAnimalInput.schema';
import { AnimalsCharacteristicsUncheckedCreateWithoutAnimalInputObjectSchema as AnimalsCharacteristicsUncheckedCreateWithoutAnimalInputObjectSchema } from './AnimalsCharacteristicsUncheckedCreateWithoutAnimalInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AnimalsCharacteristicsWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => AnimalsCharacteristicsUpdateWithoutAnimalInputObjectSchema), z.lazy(() => AnimalsCharacteristicsUncheckedUpdateWithoutAnimalInputObjectSchema)]),
  create: z.union([z.lazy(() => AnimalsCharacteristicsCreateWithoutAnimalInputObjectSchema), z.lazy(() => AnimalsCharacteristicsUncheckedCreateWithoutAnimalInputObjectSchema)])
}).strict();
export const AnimalsCharacteristicsUpsertWithWhereUniqueWithoutAnimalInputObjectSchema: z.ZodType<Prisma.AnimalsCharacteristicsUpsertWithWhereUniqueWithoutAnimalInput> = makeSchema() as unknown as z.ZodType<Prisma.AnimalsCharacteristicsUpsertWithWhereUniqueWithoutAnimalInput>;
export const AnimalsCharacteristicsUpsertWithWhereUniqueWithoutAnimalInputObjectZodSchema = makeSchema();
