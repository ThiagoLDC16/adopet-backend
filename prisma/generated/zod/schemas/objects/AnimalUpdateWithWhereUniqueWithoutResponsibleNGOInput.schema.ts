import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AnimalWhereUniqueInputObjectSchema as AnimalWhereUniqueInputObjectSchema } from './AnimalWhereUniqueInput.schema';
import { AnimalUpdateWithoutResponsibleNGOInputObjectSchema as AnimalUpdateWithoutResponsibleNGOInputObjectSchema } from './AnimalUpdateWithoutResponsibleNGOInput.schema';
import { AnimalUncheckedUpdateWithoutResponsibleNGOInputObjectSchema as AnimalUncheckedUpdateWithoutResponsibleNGOInputObjectSchema } from './AnimalUncheckedUpdateWithoutResponsibleNGOInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AnimalWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => AnimalUpdateWithoutResponsibleNGOInputObjectSchema), z.lazy(() => AnimalUncheckedUpdateWithoutResponsibleNGOInputObjectSchema)])
}).strict();
export const AnimalUpdateWithWhereUniqueWithoutResponsibleNGOInputObjectSchema: z.ZodType<Prisma.AnimalUpdateWithWhereUniqueWithoutResponsibleNGOInput> = makeSchema() as unknown as z.ZodType<Prisma.AnimalUpdateWithWhereUniqueWithoutResponsibleNGOInput>;
export const AnimalUpdateWithWhereUniqueWithoutResponsibleNGOInputObjectZodSchema = makeSchema();
