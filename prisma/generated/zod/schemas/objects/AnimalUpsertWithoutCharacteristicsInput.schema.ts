import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AnimalUpdateWithoutCharacteristicsInputObjectSchema as AnimalUpdateWithoutCharacteristicsInputObjectSchema } from './AnimalUpdateWithoutCharacteristicsInput.schema';
import { AnimalUncheckedUpdateWithoutCharacteristicsInputObjectSchema as AnimalUncheckedUpdateWithoutCharacteristicsInputObjectSchema } from './AnimalUncheckedUpdateWithoutCharacteristicsInput.schema';
import { AnimalCreateWithoutCharacteristicsInputObjectSchema as AnimalCreateWithoutCharacteristicsInputObjectSchema } from './AnimalCreateWithoutCharacteristicsInput.schema';
import { AnimalUncheckedCreateWithoutCharacteristicsInputObjectSchema as AnimalUncheckedCreateWithoutCharacteristicsInputObjectSchema } from './AnimalUncheckedCreateWithoutCharacteristicsInput.schema';
import { AnimalWhereInputObjectSchema as AnimalWhereInputObjectSchema } from './AnimalWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => AnimalUpdateWithoutCharacteristicsInputObjectSchema), z.lazy(() => AnimalUncheckedUpdateWithoutCharacteristicsInputObjectSchema)]),
  create: z.union([z.lazy(() => AnimalCreateWithoutCharacteristicsInputObjectSchema), z.lazy(() => AnimalUncheckedCreateWithoutCharacteristicsInputObjectSchema)]),
  where: z.lazy(() => AnimalWhereInputObjectSchema).optional()
}).strict();
export const AnimalUpsertWithoutCharacteristicsInputObjectSchema: z.ZodType<Prisma.AnimalUpsertWithoutCharacteristicsInput> = makeSchema() as unknown as z.ZodType<Prisma.AnimalUpsertWithoutCharacteristicsInput>;
export const AnimalUpsertWithoutCharacteristicsInputObjectZodSchema = makeSchema();
