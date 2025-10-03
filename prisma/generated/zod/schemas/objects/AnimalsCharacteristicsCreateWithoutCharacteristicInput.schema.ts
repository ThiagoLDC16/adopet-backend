import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AnimalCreateNestedOneWithoutCharacteristicsInputObjectSchema as AnimalCreateNestedOneWithoutCharacteristicsInputObjectSchema } from './AnimalCreateNestedOneWithoutCharacteristicsInput.schema'

const makeSchema = () => z.object({
  animal: z.lazy(() => AnimalCreateNestedOneWithoutCharacteristicsInputObjectSchema)
}).strict();
export const AnimalsCharacteristicsCreateWithoutCharacteristicInputObjectSchema: z.ZodType<Prisma.AnimalsCharacteristicsCreateWithoutCharacteristicInput> = makeSchema() as unknown as z.ZodType<Prisma.AnimalsCharacteristicsCreateWithoutCharacteristicInput>;
export const AnimalsCharacteristicsCreateWithoutCharacteristicInputObjectZodSchema = makeSchema();
