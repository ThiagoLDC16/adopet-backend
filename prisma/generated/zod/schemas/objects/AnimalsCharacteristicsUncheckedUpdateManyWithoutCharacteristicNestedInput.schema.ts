import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AnimalsCharacteristicsCreateWithoutCharacteristicInputObjectSchema as AnimalsCharacteristicsCreateWithoutCharacteristicInputObjectSchema } from './AnimalsCharacteristicsCreateWithoutCharacteristicInput.schema';
import { AnimalsCharacteristicsUncheckedCreateWithoutCharacteristicInputObjectSchema as AnimalsCharacteristicsUncheckedCreateWithoutCharacteristicInputObjectSchema } from './AnimalsCharacteristicsUncheckedCreateWithoutCharacteristicInput.schema';
import { AnimalsCharacteristicsCreateOrConnectWithoutCharacteristicInputObjectSchema as AnimalsCharacteristicsCreateOrConnectWithoutCharacteristicInputObjectSchema } from './AnimalsCharacteristicsCreateOrConnectWithoutCharacteristicInput.schema';
import { AnimalsCharacteristicsUpsertWithWhereUniqueWithoutCharacteristicInputObjectSchema as AnimalsCharacteristicsUpsertWithWhereUniqueWithoutCharacteristicInputObjectSchema } from './AnimalsCharacteristicsUpsertWithWhereUniqueWithoutCharacteristicInput.schema';
import { CharacteristicAnimalsCharacteristicsCreateManyCharacteristicInputEnvelopeObjectSchema as AnimalsCharacteristicsCreateManyCharacteristicInputEnvelopeObjectSchema } from './AnimalsCharacteristicsCreateManyCharacteristicInputEnvelope.schema';
import { AnimalsCharacteristicsWhereUniqueInputObjectSchema as AnimalsCharacteristicsWhereUniqueInputObjectSchema } from './AnimalsCharacteristicsWhereUniqueInput.schema';
import { AnimalsCharacteristicsUpdateWithWhereUniqueWithoutCharacteristicInputObjectSchema as AnimalsCharacteristicsUpdateWithWhereUniqueWithoutCharacteristicInputObjectSchema } from './AnimalsCharacteristicsUpdateWithWhereUniqueWithoutCharacteristicInput.schema';
import { AnimalsCharacteristicsUpdateManyWithWhereWithoutCharacteristicInputObjectSchema as AnimalsCharacteristicsUpdateManyWithWhereWithoutCharacteristicInputObjectSchema } from './AnimalsCharacteristicsUpdateManyWithWhereWithoutCharacteristicInput.schema';
import { AnimalsCharacteristicsScalarWhereInputObjectSchema as AnimalsCharacteristicsScalarWhereInputObjectSchema } from './AnimalsCharacteristicsScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => AnimalsCharacteristicsCreateWithoutCharacteristicInputObjectSchema), z.lazy(() => AnimalsCharacteristicsCreateWithoutCharacteristicInputObjectSchema).array(), z.lazy(() => AnimalsCharacteristicsUncheckedCreateWithoutCharacteristicInputObjectSchema), z.lazy(() => AnimalsCharacteristicsUncheckedCreateWithoutCharacteristicInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => AnimalsCharacteristicsCreateOrConnectWithoutCharacteristicInputObjectSchema), z.lazy(() => AnimalsCharacteristicsCreateOrConnectWithoutCharacteristicInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => AnimalsCharacteristicsUpsertWithWhereUniqueWithoutCharacteristicInputObjectSchema), z.lazy(() => AnimalsCharacteristicsUpsertWithWhereUniqueWithoutCharacteristicInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => AnimalsCharacteristicsCreateManyCharacteristicInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => AnimalsCharacteristicsWhereUniqueInputObjectSchema), z.lazy(() => AnimalsCharacteristicsWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => AnimalsCharacteristicsWhereUniqueInputObjectSchema), z.lazy(() => AnimalsCharacteristicsWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => AnimalsCharacteristicsWhereUniqueInputObjectSchema), z.lazy(() => AnimalsCharacteristicsWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => AnimalsCharacteristicsWhereUniqueInputObjectSchema), z.lazy(() => AnimalsCharacteristicsWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => AnimalsCharacteristicsUpdateWithWhereUniqueWithoutCharacteristicInputObjectSchema), z.lazy(() => AnimalsCharacteristicsUpdateWithWhereUniqueWithoutCharacteristicInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => AnimalsCharacteristicsUpdateManyWithWhereWithoutCharacteristicInputObjectSchema), z.lazy(() => AnimalsCharacteristicsUpdateManyWithWhereWithoutCharacteristicInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => AnimalsCharacteristicsScalarWhereInputObjectSchema), z.lazy(() => AnimalsCharacteristicsScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const AnimalsCharacteristicsUncheckedUpdateManyWithoutCharacteristicNestedInputObjectSchema: z.ZodType<Prisma.AnimalsCharacteristicsUncheckedUpdateManyWithoutCharacteristicNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.AnimalsCharacteristicsUncheckedUpdateManyWithoutCharacteristicNestedInput>;
export const AnimalsCharacteristicsUncheckedUpdateManyWithoutCharacteristicNestedInputObjectZodSchema = makeSchema();
