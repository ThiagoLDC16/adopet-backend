import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AnimalWhereInputObjectSchema as AnimalWhereInputObjectSchema } from './AnimalWhereInput.schema';
import { AnimalUpdateWithoutCharacteristicsInputObjectSchema as AnimalUpdateWithoutCharacteristicsInputObjectSchema } from './AnimalUpdateWithoutCharacteristicsInput.schema';
import { AnimalUncheckedUpdateWithoutCharacteristicsInputObjectSchema as AnimalUncheckedUpdateWithoutCharacteristicsInputObjectSchema } from './AnimalUncheckedUpdateWithoutCharacteristicsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AnimalWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => AnimalUpdateWithoutCharacteristicsInputObjectSchema), z.lazy(() => AnimalUncheckedUpdateWithoutCharacteristicsInputObjectSchema)])
}).strict();
export const AnimalUpdateToOneWithWhereWithoutCharacteristicsInputObjectSchema: z.ZodType<Prisma.AnimalUpdateToOneWithWhereWithoutCharacteristicsInput> = makeSchema() as unknown as z.ZodType<Prisma.AnimalUpdateToOneWithWhereWithoutCharacteristicsInput>;
export const AnimalUpdateToOneWithWhereWithoutCharacteristicsInputObjectZodSchema = makeSchema();
