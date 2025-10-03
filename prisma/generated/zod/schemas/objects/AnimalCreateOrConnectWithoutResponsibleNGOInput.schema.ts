import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AnimalWhereUniqueInputObjectSchema as AnimalWhereUniqueInputObjectSchema } from './AnimalWhereUniqueInput.schema';
import { AnimalCreateWithoutResponsibleNGOInputObjectSchema as AnimalCreateWithoutResponsibleNGOInputObjectSchema } from './AnimalCreateWithoutResponsibleNGOInput.schema';
import { AnimalUncheckedCreateWithoutResponsibleNGOInputObjectSchema as AnimalUncheckedCreateWithoutResponsibleNGOInputObjectSchema } from './AnimalUncheckedCreateWithoutResponsibleNGOInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AnimalWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => AnimalCreateWithoutResponsibleNGOInputObjectSchema), z.lazy(() => AnimalUncheckedCreateWithoutResponsibleNGOInputObjectSchema)])
}).strict();
export const AnimalCreateOrConnectWithoutResponsibleNGOInputObjectSchema: z.ZodType<Prisma.AnimalCreateOrConnectWithoutResponsibleNGOInput> = makeSchema() as unknown as z.ZodType<Prisma.AnimalCreateOrConnectWithoutResponsibleNGOInput>;
export const AnimalCreateOrConnectWithoutResponsibleNGOInputObjectZodSchema = makeSchema();
