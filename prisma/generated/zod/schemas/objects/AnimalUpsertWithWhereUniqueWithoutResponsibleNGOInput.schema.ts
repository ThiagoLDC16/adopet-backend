import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AnimalWhereUniqueInputObjectSchema as AnimalWhereUniqueInputObjectSchema } from './AnimalWhereUniqueInput.schema';
import { AnimalUpdateWithoutResponsibleNGOInputObjectSchema as AnimalUpdateWithoutResponsibleNGOInputObjectSchema } from './AnimalUpdateWithoutResponsibleNGOInput.schema';
import { AnimalUncheckedUpdateWithoutResponsibleNGOInputObjectSchema as AnimalUncheckedUpdateWithoutResponsibleNGOInputObjectSchema } from './AnimalUncheckedUpdateWithoutResponsibleNGOInput.schema';
import { AnimalCreateWithoutResponsibleNGOInputObjectSchema as AnimalCreateWithoutResponsibleNGOInputObjectSchema } from './AnimalCreateWithoutResponsibleNGOInput.schema';
import { AnimalUncheckedCreateWithoutResponsibleNGOInputObjectSchema as AnimalUncheckedCreateWithoutResponsibleNGOInputObjectSchema } from './AnimalUncheckedCreateWithoutResponsibleNGOInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AnimalWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => AnimalUpdateWithoutResponsibleNGOInputObjectSchema), z.lazy(() => AnimalUncheckedUpdateWithoutResponsibleNGOInputObjectSchema)]),
  create: z.union([z.lazy(() => AnimalCreateWithoutResponsibleNGOInputObjectSchema), z.lazy(() => AnimalUncheckedCreateWithoutResponsibleNGOInputObjectSchema)])
}).strict();
export const AnimalUpsertWithWhereUniqueWithoutResponsibleNGOInputObjectSchema: z.ZodType<Prisma.AnimalUpsertWithWhereUniqueWithoutResponsibleNGOInput> = makeSchema() as unknown as z.ZodType<Prisma.AnimalUpsertWithWhereUniqueWithoutResponsibleNGOInput>;
export const AnimalUpsertWithWhereUniqueWithoutResponsibleNGOInputObjectZodSchema = makeSchema();
