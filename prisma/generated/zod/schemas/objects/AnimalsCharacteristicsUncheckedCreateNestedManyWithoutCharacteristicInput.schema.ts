import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AnimalsCharacteristicsCreateWithoutCharacteristicInputObjectSchema as AnimalsCharacteristicsCreateWithoutCharacteristicInputObjectSchema } from './AnimalsCharacteristicsCreateWithoutCharacteristicInput.schema';
import { AnimalsCharacteristicsUncheckedCreateWithoutCharacteristicInputObjectSchema as AnimalsCharacteristicsUncheckedCreateWithoutCharacteristicInputObjectSchema } from './AnimalsCharacteristicsUncheckedCreateWithoutCharacteristicInput.schema';
import { AnimalsCharacteristicsCreateOrConnectWithoutCharacteristicInputObjectSchema as AnimalsCharacteristicsCreateOrConnectWithoutCharacteristicInputObjectSchema } from './AnimalsCharacteristicsCreateOrConnectWithoutCharacteristicInput.schema';
import { CharacteristicAnimalsCharacteristicsCreateManyCharacteristicInputEnvelopeObjectSchema as AnimalsCharacteristicsCreateManyCharacteristicInputEnvelopeObjectSchema } from './AnimalsCharacteristicsCreateManyCharacteristicInputEnvelope.schema';
import { AnimalsCharacteristicsWhereUniqueInputObjectSchema as AnimalsCharacteristicsWhereUniqueInputObjectSchema } from './AnimalsCharacteristicsWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => AnimalsCharacteristicsCreateWithoutCharacteristicInputObjectSchema), z.lazy(() => AnimalsCharacteristicsCreateWithoutCharacteristicInputObjectSchema).array(), z.lazy(() => AnimalsCharacteristicsUncheckedCreateWithoutCharacteristicInputObjectSchema), z.lazy(() => AnimalsCharacteristicsUncheckedCreateWithoutCharacteristicInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => AnimalsCharacteristicsCreateOrConnectWithoutCharacteristicInputObjectSchema), z.lazy(() => AnimalsCharacteristicsCreateOrConnectWithoutCharacteristicInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => AnimalsCharacteristicsCreateManyCharacteristicInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => AnimalsCharacteristicsWhereUniqueInputObjectSchema), z.lazy(() => AnimalsCharacteristicsWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const AnimalsCharacteristicsUncheckedCreateNestedManyWithoutCharacteristicInputObjectSchema: z.ZodType<Prisma.AnimalsCharacteristicsUncheckedCreateNestedManyWithoutCharacteristicInput> = makeSchema() as unknown as z.ZodType<Prisma.AnimalsCharacteristicsUncheckedCreateNestedManyWithoutCharacteristicInput>;
export const AnimalsCharacteristicsUncheckedCreateNestedManyWithoutCharacteristicInputObjectZodSchema = makeSchema();
