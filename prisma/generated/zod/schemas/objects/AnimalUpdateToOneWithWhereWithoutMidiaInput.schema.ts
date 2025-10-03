import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AnimalWhereInputObjectSchema as AnimalWhereInputObjectSchema } from './AnimalWhereInput.schema';
import { AnimalUpdateWithoutMidiaInputObjectSchema as AnimalUpdateWithoutMidiaInputObjectSchema } from './AnimalUpdateWithoutMidiaInput.schema';
import { AnimalUncheckedUpdateWithoutMidiaInputObjectSchema as AnimalUncheckedUpdateWithoutMidiaInputObjectSchema } from './AnimalUncheckedUpdateWithoutMidiaInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AnimalWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => AnimalUpdateWithoutMidiaInputObjectSchema), z.lazy(() => AnimalUncheckedUpdateWithoutMidiaInputObjectSchema)])
}).strict();
export const AnimalUpdateToOneWithWhereWithoutMidiaInputObjectSchema: z.ZodType<Prisma.AnimalUpdateToOneWithWhereWithoutMidiaInput> = makeSchema() as unknown as z.ZodType<Prisma.AnimalUpdateToOneWithWhereWithoutMidiaInput>;
export const AnimalUpdateToOneWithWhereWithoutMidiaInputObjectZodSchema = makeSchema();
