import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AnimalWhereUniqueInputObjectSchema as AnimalWhereUniqueInputObjectSchema } from './AnimalWhereUniqueInput.schema';
import { AnimalUpdateWithoutAdopterUserInputObjectSchema as AnimalUpdateWithoutAdopterUserInputObjectSchema } from './AnimalUpdateWithoutAdopterUserInput.schema';
import { AnimalUncheckedUpdateWithoutAdopterUserInputObjectSchema as AnimalUncheckedUpdateWithoutAdopterUserInputObjectSchema } from './AnimalUncheckedUpdateWithoutAdopterUserInput.schema';
import { AnimalCreateWithoutAdopterUserInputObjectSchema as AnimalCreateWithoutAdopterUserInputObjectSchema } from './AnimalCreateWithoutAdopterUserInput.schema';
import { AnimalUncheckedCreateWithoutAdopterUserInputObjectSchema as AnimalUncheckedCreateWithoutAdopterUserInputObjectSchema } from './AnimalUncheckedCreateWithoutAdopterUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AnimalWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => AnimalUpdateWithoutAdopterUserInputObjectSchema), z.lazy(() => AnimalUncheckedUpdateWithoutAdopterUserInputObjectSchema)]),
  create: z.union([z.lazy(() => AnimalCreateWithoutAdopterUserInputObjectSchema), z.lazy(() => AnimalUncheckedCreateWithoutAdopterUserInputObjectSchema)])
}).strict();
export const AnimalUpsertWithWhereUniqueWithoutAdopterUserInputObjectSchema: z.ZodType<Prisma.AnimalUpsertWithWhereUniqueWithoutAdopterUserInput> = makeSchema() as unknown as z.ZodType<Prisma.AnimalUpsertWithWhereUniqueWithoutAdopterUserInput>;
export const AnimalUpsertWithWhereUniqueWithoutAdopterUserInputObjectZodSchema = makeSchema();
