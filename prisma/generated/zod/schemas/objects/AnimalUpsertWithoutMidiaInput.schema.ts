import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AnimalUpdateWithoutMidiaInputObjectSchema as AnimalUpdateWithoutMidiaInputObjectSchema } from './AnimalUpdateWithoutMidiaInput.schema';
import { AnimalUncheckedUpdateWithoutMidiaInputObjectSchema as AnimalUncheckedUpdateWithoutMidiaInputObjectSchema } from './AnimalUncheckedUpdateWithoutMidiaInput.schema';
import { AnimalCreateWithoutMidiaInputObjectSchema as AnimalCreateWithoutMidiaInputObjectSchema } from './AnimalCreateWithoutMidiaInput.schema';
import { AnimalUncheckedCreateWithoutMidiaInputObjectSchema as AnimalUncheckedCreateWithoutMidiaInputObjectSchema } from './AnimalUncheckedCreateWithoutMidiaInput.schema';
import { AnimalWhereInputObjectSchema as AnimalWhereInputObjectSchema } from './AnimalWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => AnimalUpdateWithoutMidiaInputObjectSchema), z.lazy(() => AnimalUncheckedUpdateWithoutMidiaInputObjectSchema)]),
  create: z.union([z.lazy(() => AnimalCreateWithoutMidiaInputObjectSchema), z.lazy(() => AnimalUncheckedCreateWithoutMidiaInputObjectSchema)]),
  where: z.lazy(() => AnimalWhereInputObjectSchema).optional()
}).strict();
export const AnimalUpsertWithoutMidiaInputObjectSchema: z.ZodType<Prisma.AnimalUpsertWithoutMidiaInput> = makeSchema() as unknown as z.ZodType<Prisma.AnimalUpsertWithoutMidiaInput>;
export const AnimalUpsertWithoutMidiaInputObjectZodSchema = makeSchema();
