import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AnimalWhereUniqueInputObjectSchema as AnimalWhereUniqueInputObjectSchema } from './AnimalWhereUniqueInput.schema';
import { AnimalCreateWithoutCharacteristicsInputObjectSchema as AnimalCreateWithoutCharacteristicsInputObjectSchema } from './AnimalCreateWithoutCharacteristicsInput.schema';
import { AnimalUncheckedCreateWithoutCharacteristicsInputObjectSchema as AnimalUncheckedCreateWithoutCharacteristicsInputObjectSchema } from './AnimalUncheckedCreateWithoutCharacteristicsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AnimalWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => AnimalCreateWithoutCharacteristicsInputObjectSchema), z.lazy(() => AnimalUncheckedCreateWithoutCharacteristicsInputObjectSchema)])
}).strict();
export const AnimalCreateOrConnectWithoutCharacteristicsInputObjectSchema: z.ZodType<Prisma.AnimalCreateOrConnectWithoutCharacteristicsInput> = makeSchema() as unknown as z.ZodType<Prisma.AnimalCreateOrConnectWithoutCharacteristicsInput>;
export const AnimalCreateOrConnectWithoutCharacteristicsInputObjectZodSchema = makeSchema();
