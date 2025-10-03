import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AnimalsCharacteristicsWhereUniqueInputObjectSchema as AnimalsCharacteristicsWhereUniqueInputObjectSchema } from './AnimalsCharacteristicsWhereUniqueInput.schema';
import { AnimalsCharacteristicsUpdateWithoutCharacteristicInputObjectSchema as AnimalsCharacteristicsUpdateWithoutCharacteristicInputObjectSchema } from './AnimalsCharacteristicsUpdateWithoutCharacteristicInput.schema';
import { AnimalsCharacteristicsUncheckedUpdateWithoutCharacteristicInputObjectSchema as AnimalsCharacteristicsUncheckedUpdateWithoutCharacteristicInputObjectSchema } from './AnimalsCharacteristicsUncheckedUpdateWithoutCharacteristicInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AnimalsCharacteristicsWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => AnimalsCharacteristicsUpdateWithoutCharacteristicInputObjectSchema), z.lazy(() => AnimalsCharacteristicsUncheckedUpdateWithoutCharacteristicInputObjectSchema)])
}).strict();
export const AnimalsCharacteristicsUpdateWithWhereUniqueWithoutCharacteristicInputObjectSchema: z.ZodType<Prisma.AnimalsCharacteristicsUpdateWithWhereUniqueWithoutCharacteristicInput> = makeSchema() as unknown as z.ZodType<Prisma.AnimalsCharacteristicsUpdateWithWhereUniqueWithoutCharacteristicInput>;
export const AnimalsCharacteristicsUpdateWithWhereUniqueWithoutCharacteristicInputObjectZodSchema = makeSchema();
