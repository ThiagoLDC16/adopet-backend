import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AnimalsCharacteristicsCreateWithoutAnimalInputObjectSchema as AnimalsCharacteristicsCreateWithoutAnimalInputObjectSchema } from './AnimalsCharacteristicsCreateWithoutAnimalInput.schema';
import { AnimalsCharacteristicsUncheckedCreateWithoutAnimalInputObjectSchema as AnimalsCharacteristicsUncheckedCreateWithoutAnimalInputObjectSchema } from './AnimalsCharacteristicsUncheckedCreateWithoutAnimalInput.schema';
import { AnimalsCharacteristicsCreateOrConnectWithoutAnimalInputObjectSchema as AnimalsCharacteristicsCreateOrConnectWithoutAnimalInputObjectSchema } from './AnimalsCharacteristicsCreateOrConnectWithoutAnimalInput.schema';
import { AnimalsCharacteristicsCreateManyAnimalInputEnvelopeObjectSchema as AnimalsCharacteristicsCreateManyAnimalInputEnvelopeObjectSchema } from './AnimalsCharacteristicsCreateManyAnimalInputEnvelope.schema';
import { AnimalsCharacteristicsWhereUniqueInputObjectSchema as AnimalsCharacteristicsWhereUniqueInputObjectSchema } from './AnimalsCharacteristicsWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => AnimalsCharacteristicsCreateWithoutAnimalInputObjectSchema), z.lazy(() => AnimalsCharacteristicsCreateWithoutAnimalInputObjectSchema).array(), z.lazy(() => AnimalsCharacteristicsUncheckedCreateWithoutAnimalInputObjectSchema), z.lazy(() => AnimalsCharacteristicsUncheckedCreateWithoutAnimalInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => AnimalsCharacteristicsCreateOrConnectWithoutAnimalInputObjectSchema), z.lazy(() => AnimalsCharacteristicsCreateOrConnectWithoutAnimalInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => AnimalsCharacteristicsCreateManyAnimalInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => AnimalsCharacteristicsWhereUniqueInputObjectSchema), z.lazy(() => AnimalsCharacteristicsWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const AnimalsCharacteristicsUncheckedCreateNestedManyWithoutAnimalInputObjectSchema: z.ZodType<Prisma.AnimalsCharacteristicsUncheckedCreateNestedManyWithoutAnimalInput> = makeSchema() as unknown as z.ZodType<Prisma.AnimalsCharacteristicsUncheckedCreateNestedManyWithoutAnimalInput>;
export const AnimalsCharacteristicsUncheckedCreateNestedManyWithoutAnimalInputObjectZodSchema = makeSchema();
