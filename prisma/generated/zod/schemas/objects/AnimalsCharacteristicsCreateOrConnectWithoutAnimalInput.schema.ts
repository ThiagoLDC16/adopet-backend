import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AnimalsCharacteristicsWhereUniqueInputObjectSchema as AnimalsCharacteristicsWhereUniqueInputObjectSchema } from './AnimalsCharacteristicsWhereUniqueInput.schema';
import { AnimalsCharacteristicsCreateWithoutAnimalInputObjectSchema as AnimalsCharacteristicsCreateWithoutAnimalInputObjectSchema } from './AnimalsCharacteristicsCreateWithoutAnimalInput.schema';
import { AnimalsCharacteristicsUncheckedCreateWithoutAnimalInputObjectSchema as AnimalsCharacteristicsUncheckedCreateWithoutAnimalInputObjectSchema } from './AnimalsCharacteristicsUncheckedCreateWithoutAnimalInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AnimalsCharacteristicsWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => AnimalsCharacteristicsCreateWithoutAnimalInputObjectSchema), z.lazy(() => AnimalsCharacteristicsUncheckedCreateWithoutAnimalInputObjectSchema)])
}).strict();
export const AnimalsCharacteristicsCreateOrConnectWithoutAnimalInputObjectSchema: z.ZodType<Prisma.AnimalsCharacteristicsCreateOrConnectWithoutAnimalInput> = makeSchema() as unknown as z.ZodType<Prisma.AnimalsCharacteristicsCreateOrConnectWithoutAnimalInput>;
export const AnimalsCharacteristicsCreateOrConnectWithoutAnimalInputObjectZodSchema = makeSchema();
