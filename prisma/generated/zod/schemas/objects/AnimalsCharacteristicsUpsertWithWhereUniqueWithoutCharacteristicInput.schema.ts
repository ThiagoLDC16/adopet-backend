import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AnimalsCharacteristicsWhereUniqueInputObjectSchema as AnimalsCharacteristicsWhereUniqueInputObjectSchema } from './AnimalsCharacteristicsWhereUniqueInput.schema';
import { AnimalsCharacteristicsUpdateWithoutCharacteristicInputObjectSchema as AnimalsCharacteristicsUpdateWithoutCharacteristicInputObjectSchema } from './AnimalsCharacteristicsUpdateWithoutCharacteristicInput.schema';
import { AnimalsCharacteristicsUncheckedUpdateWithoutCharacteristicInputObjectSchema as AnimalsCharacteristicsUncheckedUpdateWithoutCharacteristicInputObjectSchema } from './AnimalsCharacteristicsUncheckedUpdateWithoutCharacteristicInput.schema';
import { AnimalsCharacteristicsCreateWithoutCharacteristicInputObjectSchema as AnimalsCharacteristicsCreateWithoutCharacteristicInputObjectSchema } from './AnimalsCharacteristicsCreateWithoutCharacteristicInput.schema';
import { AnimalsCharacteristicsUncheckedCreateWithoutCharacteristicInputObjectSchema as AnimalsCharacteristicsUncheckedCreateWithoutCharacteristicInputObjectSchema } from './AnimalsCharacteristicsUncheckedCreateWithoutCharacteristicInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AnimalsCharacteristicsWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => AnimalsCharacteristicsUpdateWithoutCharacteristicInputObjectSchema), z.lazy(() => AnimalsCharacteristicsUncheckedUpdateWithoutCharacteristicInputObjectSchema)]),
  create: z.union([z.lazy(() => AnimalsCharacteristicsCreateWithoutCharacteristicInputObjectSchema), z.lazy(() => AnimalsCharacteristicsUncheckedCreateWithoutCharacteristicInputObjectSchema)])
}).strict();
export const AnimalsCharacteristicsUpsertWithWhereUniqueWithoutCharacteristicInputObjectSchema: z.ZodType<Prisma.AnimalsCharacteristicsUpsertWithWhereUniqueWithoutCharacteristicInput> = makeSchema() as unknown as z.ZodType<Prisma.AnimalsCharacteristicsUpsertWithWhereUniqueWithoutCharacteristicInput>;
export const AnimalsCharacteristicsUpsertWithWhereUniqueWithoutCharacteristicInputObjectZodSchema = makeSchema();
