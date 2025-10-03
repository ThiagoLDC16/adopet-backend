import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { MidiaWhereUniqueInputObjectSchema as MidiaWhereUniqueInputObjectSchema } from './MidiaWhereUniqueInput.schema';
import { MidiaUpdateWithoutAnimalInputObjectSchema as MidiaUpdateWithoutAnimalInputObjectSchema } from './MidiaUpdateWithoutAnimalInput.schema';
import { MidiaUncheckedUpdateWithoutAnimalInputObjectSchema as MidiaUncheckedUpdateWithoutAnimalInputObjectSchema } from './MidiaUncheckedUpdateWithoutAnimalInput.schema';
import { MidiaCreateWithoutAnimalInputObjectSchema as MidiaCreateWithoutAnimalInputObjectSchema } from './MidiaCreateWithoutAnimalInput.schema';
import { MidiaUncheckedCreateWithoutAnimalInputObjectSchema as MidiaUncheckedCreateWithoutAnimalInputObjectSchema } from './MidiaUncheckedCreateWithoutAnimalInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => MidiaWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => MidiaUpdateWithoutAnimalInputObjectSchema), z.lazy(() => MidiaUncheckedUpdateWithoutAnimalInputObjectSchema)]),
  create: z.union([z.lazy(() => MidiaCreateWithoutAnimalInputObjectSchema), z.lazy(() => MidiaUncheckedCreateWithoutAnimalInputObjectSchema)])
}).strict();
export const MidiaUpsertWithWhereUniqueWithoutAnimalInputObjectSchema: z.ZodType<Prisma.MidiaUpsertWithWhereUniqueWithoutAnimalInput> = makeSchema() as unknown as z.ZodType<Prisma.MidiaUpsertWithWhereUniqueWithoutAnimalInput>;
export const MidiaUpsertWithWhereUniqueWithoutAnimalInputObjectZodSchema = makeSchema();
