import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AnimalsCharacteristicsScalarWhereInputObjectSchema as AnimalsCharacteristicsScalarWhereInputObjectSchema } from './AnimalsCharacteristicsScalarWhereInput.schema';
import { AnimalsCharacteristicsUpdateManyMutationInputObjectSchema as AnimalsCharacteristicsUpdateManyMutationInputObjectSchema } from './AnimalsCharacteristicsUpdateManyMutationInput.schema';
import { AnimalsCharacteristicsUncheckedUpdateManyWithoutCharacteristicInputObjectSchema as AnimalsCharacteristicsUncheckedUpdateManyWithoutCharacteristicInputObjectSchema } from './AnimalsCharacteristicsUncheckedUpdateManyWithoutCharacteristicInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AnimalsCharacteristicsScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => AnimalsCharacteristicsUpdateManyMutationInputObjectSchema), z.lazy(() => AnimalsCharacteristicsUncheckedUpdateManyWithoutCharacteristicInputObjectSchema)])
}).strict();
export const AnimalsCharacteristicsUpdateManyWithWhereWithoutCharacteristicInputObjectSchema: z.ZodType<Prisma.AnimalsCharacteristicsUpdateManyWithWhereWithoutCharacteristicInput> = makeSchema() as unknown as z.ZodType<Prisma.AnimalsCharacteristicsUpdateManyWithWhereWithoutCharacteristicInput>;
export const AnimalsCharacteristicsUpdateManyWithWhereWithoutCharacteristicInputObjectZodSchema = makeSchema();
