import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AnimalsCharacteristicsWhereUniqueInputObjectSchema as AnimalsCharacteristicsWhereUniqueInputObjectSchema } from './AnimalsCharacteristicsWhereUniqueInput.schema';
import { AnimalsCharacteristicsCreateWithoutCharacteristicInputObjectSchema as AnimalsCharacteristicsCreateWithoutCharacteristicInputObjectSchema } from './AnimalsCharacteristicsCreateWithoutCharacteristicInput.schema';
import { AnimalsCharacteristicsUncheckedCreateWithoutCharacteristicInputObjectSchema as AnimalsCharacteristicsUncheckedCreateWithoutCharacteristicInputObjectSchema } from './AnimalsCharacteristicsUncheckedCreateWithoutCharacteristicInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AnimalsCharacteristicsWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => AnimalsCharacteristicsCreateWithoutCharacteristicInputObjectSchema), z.lazy(() => AnimalsCharacteristicsUncheckedCreateWithoutCharacteristicInputObjectSchema)])
}).strict();
export const AnimalsCharacteristicsCreateOrConnectWithoutCharacteristicInputObjectSchema: z.ZodType<Prisma.AnimalsCharacteristicsCreateOrConnectWithoutCharacteristicInput> = makeSchema() as unknown as z.ZodType<Prisma.AnimalsCharacteristicsCreateOrConnectWithoutCharacteristicInput>;
export const AnimalsCharacteristicsCreateOrConnectWithoutCharacteristicInputObjectZodSchema = makeSchema();
