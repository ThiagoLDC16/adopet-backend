import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { MidiaWhereUniqueInputObjectSchema as MidiaWhereUniqueInputObjectSchema } from './MidiaWhereUniqueInput.schema';
import { MidiaCreateWithoutAnimalInputObjectSchema as MidiaCreateWithoutAnimalInputObjectSchema } from './MidiaCreateWithoutAnimalInput.schema';
import { MidiaUncheckedCreateWithoutAnimalInputObjectSchema as MidiaUncheckedCreateWithoutAnimalInputObjectSchema } from './MidiaUncheckedCreateWithoutAnimalInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => MidiaWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => MidiaCreateWithoutAnimalInputObjectSchema), z.lazy(() => MidiaUncheckedCreateWithoutAnimalInputObjectSchema)])
}).strict();
export const MidiaCreateOrConnectWithoutAnimalInputObjectSchema: z.ZodType<Prisma.MidiaCreateOrConnectWithoutAnimalInput> = makeSchema() as unknown as z.ZodType<Prisma.MidiaCreateOrConnectWithoutAnimalInput>;
export const MidiaCreateOrConnectWithoutAnimalInputObjectZodSchema = makeSchema();
