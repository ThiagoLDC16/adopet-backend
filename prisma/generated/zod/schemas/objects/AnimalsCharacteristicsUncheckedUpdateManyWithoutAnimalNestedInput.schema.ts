import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AnimalsCharacteristicsCreateWithoutAnimalInputObjectSchema as AnimalsCharacteristicsCreateWithoutAnimalInputObjectSchema } from './AnimalsCharacteristicsCreateWithoutAnimalInput.schema';
import { AnimalsCharacteristicsUncheckedCreateWithoutAnimalInputObjectSchema as AnimalsCharacteristicsUncheckedCreateWithoutAnimalInputObjectSchema } from './AnimalsCharacteristicsUncheckedCreateWithoutAnimalInput.schema';
import { AnimalsCharacteristicsCreateOrConnectWithoutAnimalInputObjectSchema as AnimalsCharacteristicsCreateOrConnectWithoutAnimalInputObjectSchema } from './AnimalsCharacteristicsCreateOrConnectWithoutAnimalInput.schema';
import { AnimalsCharacteristicsUpsertWithWhereUniqueWithoutAnimalInputObjectSchema as AnimalsCharacteristicsUpsertWithWhereUniqueWithoutAnimalInputObjectSchema } from './AnimalsCharacteristicsUpsertWithWhereUniqueWithoutAnimalInput.schema';
import { AnimalsCharacteristicsCreateManyAnimalInputEnvelopeObjectSchema as AnimalsCharacteristicsCreateManyAnimalInputEnvelopeObjectSchema } from './AnimalsCharacteristicsCreateManyAnimalInputEnvelope.schema';
import { AnimalsCharacteristicsWhereUniqueInputObjectSchema as AnimalsCharacteristicsWhereUniqueInputObjectSchema } from './AnimalsCharacteristicsWhereUniqueInput.schema';
import { AnimalsCharacteristicsUpdateWithWhereUniqueWithoutAnimalInputObjectSchema as AnimalsCharacteristicsUpdateWithWhereUniqueWithoutAnimalInputObjectSchema } from './AnimalsCharacteristicsUpdateWithWhereUniqueWithoutAnimalInput.schema';
import { AnimalsCharacteristicsUpdateManyWithWhereWithoutAnimalInputObjectSchema as AnimalsCharacteristicsUpdateManyWithWhereWithoutAnimalInputObjectSchema } from './AnimalsCharacteristicsUpdateManyWithWhereWithoutAnimalInput.schema';
import { AnimalsCharacteristicsScalarWhereInputObjectSchema as AnimalsCharacteristicsScalarWhereInputObjectSchema } from './AnimalsCharacteristicsScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => AnimalsCharacteristicsCreateWithoutAnimalInputObjectSchema), z.lazy(() => AnimalsCharacteristicsCreateWithoutAnimalInputObjectSchema).array(), z.lazy(() => AnimalsCharacteristicsUncheckedCreateWithoutAnimalInputObjectSchema), z.lazy(() => AnimalsCharacteristicsUncheckedCreateWithoutAnimalInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => AnimalsCharacteristicsCreateOrConnectWithoutAnimalInputObjectSchema), z.lazy(() => AnimalsCharacteristicsCreateOrConnectWithoutAnimalInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => AnimalsCharacteristicsUpsertWithWhereUniqueWithoutAnimalInputObjectSchema), z.lazy(() => AnimalsCharacteristicsUpsertWithWhereUniqueWithoutAnimalInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => AnimalsCharacteristicsCreateManyAnimalInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => AnimalsCharacteristicsWhereUniqueInputObjectSchema), z.lazy(() => AnimalsCharacteristicsWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => AnimalsCharacteristicsWhereUniqueInputObjectSchema), z.lazy(() => AnimalsCharacteristicsWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => AnimalsCharacteristicsWhereUniqueInputObjectSchema), z.lazy(() => AnimalsCharacteristicsWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => AnimalsCharacteristicsWhereUniqueInputObjectSchema), z.lazy(() => AnimalsCharacteristicsWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => AnimalsCharacteristicsUpdateWithWhereUniqueWithoutAnimalInputObjectSchema), z.lazy(() => AnimalsCharacteristicsUpdateWithWhereUniqueWithoutAnimalInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => AnimalsCharacteristicsUpdateManyWithWhereWithoutAnimalInputObjectSchema), z.lazy(() => AnimalsCharacteristicsUpdateManyWithWhereWithoutAnimalInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => AnimalsCharacteristicsScalarWhereInputObjectSchema), z.lazy(() => AnimalsCharacteristicsScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const AnimalsCharacteristicsUncheckedUpdateManyWithoutAnimalNestedInputObjectSchema: z.ZodType<Prisma.AnimalsCharacteristicsUncheckedUpdateManyWithoutAnimalNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.AnimalsCharacteristicsUncheckedUpdateManyWithoutAnimalNestedInput>;
export const AnimalsCharacteristicsUncheckedUpdateManyWithoutAnimalNestedInputObjectZodSchema = makeSchema();
