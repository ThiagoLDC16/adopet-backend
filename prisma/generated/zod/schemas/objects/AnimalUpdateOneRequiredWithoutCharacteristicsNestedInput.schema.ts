import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AnimalCreateWithoutCharacteristicsInputObjectSchema as AnimalCreateWithoutCharacteristicsInputObjectSchema } from './AnimalCreateWithoutCharacteristicsInput.schema';
import { AnimalUncheckedCreateWithoutCharacteristicsInputObjectSchema as AnimalUncheckedCreateWithoutCharacteristicsInputObjectSchema } from './AnimalUncheckedCreateWithoutCharacteristicsInput.schema';
import { AnimalCreateOrConnectWithoutCharacteristicsInputObjectSchema as AnimalCreateOrConnectWithoutCharacteristicsInputObjectSchema } from './AnimalCreateOrConnectWithoutCharacteristicsInput.schema';
import { AnimalUpsertWithoutCharacteristicsInputObjectSchema as AnimalUpsertWithoutCharacteristicsInputObjectSchema } from './AnimalUpsertWithoutCharacteristicsInput.schema';
import { AnimalWhereUniqueInputObjectSchema as AnimalWhereUniqueInputObjectSchema } from './AnimalWhereUniqueInput.schema';
import { AnimalUpdateToOneWithWhereWithoutCharacteristicsInputObjectSchema as AnimalUpdateToOneWithWhereWithoutCharacteristicsInputObjectSchema } from './AnimalUpdateToOneWithWhereWithoutCharacteristicsInput.schema';
import { AnimalUpdateWithoutCharacteristicsInputObjectSchema as AnimalUpdateWithoutCharacteristicsInputObjectSchema } from './AnimalUpdateWithoutCharacteristicsInput.schema';
import { AnimalUncheckedUpdateWithoutCharacteristicsInputObjectSchema as AnimalUncheckedUpdateWithoutCharacteristicsInputObjectSchema } from './AnimalUncheckedUpdateWithoutCharacteristicsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => AnimalCreateWithoutCharacteristicsInputObjectSchema), z.lazy(() => AnimalUncheckedCreateWithoutCharacteristicsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => AnimalCreateOrConnectWithoutCharacteristicsInputObjectSchema).optional(),
  upsert: z.lazy(() => AnimalUpsertWithoutCharacteristicsInputObjectSchema).optional(),
  connect: z.lazy(() => AnimalWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => AnimalUpdateToOneWithWhereWithoutCharacteristicsInputObjectSchema), z.lazy(() => AnimalUpdateWithoutCharacteristicsInputObjectSchema), z.lazy(() => AnimalUncheckedUpdateWithoutCharacteristicsInputObjectSchema)]).optional()
}).strict();
export const AnimalUpdateOneRequiredWithoutCharacteristicsNestedInputObjectSchema: z.ZodType<Prisma.AnimalUpdateOneRequiredWithoutCharacteristicsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.AnimalUpdateOneRequiredWithoutCharacteristicsNestedInput>;
export const AnimalUpdateOneRequiredWithoutCharacteristicsNestedInputObjectZodSchema = makeSchema();
