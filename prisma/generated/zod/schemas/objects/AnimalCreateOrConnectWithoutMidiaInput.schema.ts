import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AnimalWhereUniqueInputObjectSchema as AnimalWhereUniqueInputObjectSchema } from './AnimalWhereUniqueInput.schema';
import { AnimalCreateWithoutMidiaInputObjectSchema as AnimalCreateWithoutMidiaInputObjectSchema } from './AnimalCreateWithoutMidiaInput.schema';
import { AnimalUncheckedCreateWithoutMidiaInputObjectSchema as AnimalUncheckedCreateWithoutMidiaInputObjectSchema } from './AnimalUncheckedCreateWithoutMidiaInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AnimalWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => AnimalCreateWithoutMidiaInputObjectSchema), z.lazy(() => AnimalUncheckedCreateWithoutMidiaInputObjectSchema)])
}).strict();
export const AnimalCreateOrConnectWithoutMidiaInputObjectSchema: z.ZodType<Prisma.AnimalCreateOrConnectWithoutMidiaInput> = makeSchema() as unknown as z.ZodType<Prisma.AnimalCreateOrConnectWithoutMidiaInput>;
export const AnimalCreateOrConnectWithoutMidiaInputObjectZodSchema = makeSchema();
