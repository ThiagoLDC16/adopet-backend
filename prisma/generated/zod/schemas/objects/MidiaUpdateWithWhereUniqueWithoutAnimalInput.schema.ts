import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { MidiaWhereUniqueInputObjectSchema as MidiaWhereUniqueInputObjectSchema } from './MidiaWhereUniqueInput.schema';
import { MidiaUpdateWithoutAnimalInputObjectSchema as MidiaUpdateWithoutAnimalInputObjectSchema } from './MidiaUpdateWithoutAnimalInput.schema';
import { MidiaUncheckedUpdateWithoutAnimalInputObjectSchema as MidiaUncheckedUpdateWithoutAnimalInputObjectSchema } from './MidiaUncheckedUpdateWithoutAnimalInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => MidiaWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => MidiaUpdateWithoutAnimalInputObjectSchema), z.lazy(() => MidiaUncheckedUpdateWithoutAnimalInputObjectSchema)])
}).strict();
export const MidiaUpdateWithWhereUniqueWithoutAnimalInputObjectSchema: z.ZodType<Prisma.MidiaUpdateWithWhereUniqueWithoutAnimalInput> = makeSchema() as unknown as z.ZodType<Prisma.MidiaUpdateWithWhereUniqueWithoutAnimalInput>;
export const MidiaUpdateWithWhereUniqueWithoutAnimalInputObjectZodSchema = makeSchema();
