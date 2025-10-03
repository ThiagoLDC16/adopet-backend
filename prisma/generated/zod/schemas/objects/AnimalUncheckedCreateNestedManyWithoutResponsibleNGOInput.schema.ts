import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AnimalCreateWithoutResponsibleNGOInputObjectSchema as AnimalCreateWithoutResponsibleNGOInputObjectSchema } from './AnimalCreateWithoutResponsibleNGOInput.schema';
import { AnimalUncheckedCreateWithoutResponsibleNGOInputObjectSchema as AnimalUncheckedCreateWithoutResponsibleNGOInputObjectSchema } from './AnimalUncheckedCreateWithoutResponsibleNGOInput.schema';
import { AnimalCreateOrConnectWithoutResponsibleNGOInputObjectSchema as AnimalCreateOrConnectWithoutResponsibleNGOInputObjectSchema } from './AnimalCreateOrConnectWithoutResponsibleNGOInput.schema';
import { ResponsibleNGOAnimalCreateManyResponsibleNGOInputEnvelopeObjectSchema as AnimalCreateManyResponsibleNGOInputEnvelopeObjectSchema } from './AnimalCreateManyResponsibleNGOInputEnvelope.schema';
import { AnimalWhereUniqueInputObjectSchema as AnimalWhereUniqueInputObjectSchema } from './AnimalWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => AnimalCreateWithoutResponsibleNGOInputObjectSchema), z.lazy(() => AnimalCreateWithoutResponsibleNGOInputObjectSchema).array(), z.lazy(() => AnimalUncheckedCreateWithoutResponsibleNGOInputObjectSchema), z.lazy(() => AnimalUncheckedCreateWithoutResponsibleNGOInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => AnimalCreateOrConnectWithoutResponsibleNGOInputObjectSchema), z.lazy(() => AnimalCreateOrConnectWithoutResponsibleNGOInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => AnimalCreateManyResponsibleNGOInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => AnimalWhereUniqueInputObjectSchema), z.lazy(() => AnimalWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const AnimalUncheckedCreateNestedManyWithoutResponsibleNGOInputObjectSchema: z.ZodType<Prisma.AnimalUncheckedCreateNestedManyWithoutResponsibleNGOInput> = makeSchema() as unknown as z.ZodType<Prisma.AnimalUncheckedCreateNestedManyWithoutResponsibleNGOInput>;
export const AnimalUncheckedCreateNestedManyWithoutResponsibleNGOInputObjectZodSchema = makeSchema();
