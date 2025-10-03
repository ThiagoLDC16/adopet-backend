import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AnimalCreateWithoutMidiaInputObjectSchema as AnimalCreateWithoutMidiaInputObjectSchema } from './AnimalCreateWithoutMidiaInput.schema';
import { AnimalUncheckedCreateWithoutMidiaInputObjectSchema as AnimalUncheckedCreateWithoutMidiaInputObjectSchema } from './AnimalUncheckedCreateWithoutMidiaInput.schema';
import { AnimalCreateOrConnectWithoutMidiaInputObjectSchema as AnimalCreateOrConnectWithoutMidiaInputObjectSchema } from './AnimalCreateOrConnectWithoutMidiaInput.schema';
import { AnimalWhereUniqueInputObjectSchema as AnimalWhereUniqueInputObjectSchema } from './AnimalWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => AnimalCreateWithoutMidiaInputObjectSchema), z.lazy(() => AnimalUncheckedCreateWithoutMidiaInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => AnimalCreateOrConnectWithoutMidiaInputObjectSchema).optional(),
  connect: z.lazy(() => AnimalWhereUniqueInputObjectSchema).optional()
}).strict();
export const AnimalCreateNestedOneWithoutMidiaInputObjectSchema: z.ZodType<Prisma.AnimalCreateNestedOneWithoutMidiaInput> = makeSchema() as unknown as z.ZodType<Prisma.AnimalCreateNestedOneWithoutMidiaInput>;
export const AnimalCreateNestedOneWithoutMidiaInputObjectZodSchema = makeSchema();
