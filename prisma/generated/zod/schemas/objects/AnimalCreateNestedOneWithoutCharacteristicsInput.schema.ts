import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AnimalCreateWithoutCharacteristicsInputObjectSchema as AnimalCreateWithoutCharacteristicsInputObjectSchema } from './AnimalCreateWithoutCharacteristicsInput.schema';
import { AnimalUncheckedCreateWithoutCharacteristicsInputObjectSchema as AnimalUncheckedCreateWithoutCharacteristicsInputObjectSchema } from './AnimalUncheckedCreateWithoutCharacteristicsInput.schema';
import { AnimalCreateOrConnectWithoutCharacteristicsInputObjectSchema as AnimalCreateOrConnectWithoutCharacteristicsInputObjectSchema } from './AnimalCreateOrConnectWithoutCharacteristicsInput.schema';
import { AnimalWhereUniqueInputObjectSchema as AnimalWhereUniqueInputObjectSchema } from './AnimalWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => AnimalCreateWithoutCharacteristicsInputObjectSchema), z.lazy(() => AnimalUncheckedCreateWithoutCharacteristicsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => AnimalCreateOrConnectWithoutCharacteristicsInputObjectSchema).optional(),
  connect: z.lazy(() => AnimalWhereUniqueInputObjectSchema).optional()
}).strict();
export const AnimalCreateNestedOneWithoutCharacteristicsInputObjectSchema: z.ZodType<Prisma.AnimalCreateNestedOneWithoutCharacteristicsInput> = makeSchema() as unknown as z.ZodType<Prisma.AnimalCreateNestedOneWithoutCharacteristicsInput>;
export const AnimalCreateNestedOneWithoutCharacteristicsInputObjectZodSchema = makeSchema();
