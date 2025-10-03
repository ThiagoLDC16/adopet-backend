import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AnimalCreateWithoutResponsibleNGOInputObjectSchema as AnimalCreateWithoutResponsibleNGOInputObjectSchema } from './AnimalCreateWithoutResponsibleNGOInput.schema';
import { AnimalUncheckedCreateWithoutResponsibleNGOInputObjectSchema as AnimalUncheckedCreateWithoutResponsibleNGOInputObjectSchema } from './AnimalUncheckedCreateWithoutResponsibleNGOInput.schema';
import { AnimalCreateOrConnectWithoutResponsibleNGOInputObjectSchema as AnimalCreateOrConnectWithoutResponsibleNGOInputObjectSchema } from './AnimalCreateOrConnectWithoutResponsibleNGOInput.schema';
import { AnimalUpsertWithWhereUniqueWithoutResponsibleNGOInputObjectSchema as AnimalUpsertWithWhereUniqueWithoutResponsibleNGOInputObjectSchema } from './AnimalUpsertWithWhereUniqueWithoutResponsibleNGOInput.schema';
import { ResponsibleNGOAnimalCreateManyResponsibleNGOInputEnvelopeObjectSchema as AnimalCreateManyResponsibleNGOInputEnvelopeObjectSchema } from './AnimalCreateManyResponsibleNGOInputEnvelope.schema';
import { AnimalWhereUniqueInputObjectSchema as AnimalWhereUniqueInputObjectSchema } from './AnimalWhereUniqueInput.schema';
import { AnimalUpdateWithWhereUniqueWithoutResponsibleNGOInputObjectSchema as AnimalUpdateWithWhereUniqueWithoutResponsibleNGOInputObjectSchema } from './AnimalUpdateWithWhereUniqueWithoutResponsibleNGOInput.schema';
import { AnimalUpdateManyWithWhereWithoutResponsibleNGOInputObjectSchema as AnimalUpdateManyWithWhereWithoutResponsibleNGOInputObjectSchema } from './AnimalUpdateManyWithWhereWithoutResponsibleNGOInput.schema';
import { AnimalScalarWhereInputObjectSchema as AnimalScalarWhereInputObjectSchema } from './AnimalScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => AnimalCreateWithoutResponsibleNGOInputObjectSchema), z.lazy(() => AnimalCreateWithoutResponsibleNGOInputObjectSchema).array(), z.lazy(() => AnimalUncheckedCreateWithoutResponsibleNGOInputObjectSchema), z.lazy(() => AnimalUncheckedCreateWithoutResponsibleNGOInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => AnimalCreateOrConnectWithoutResponsibleNGOInputObjectSchema), z.lazy(() => AnimalCreateOrConnectWithoutResponsibleNGOInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => AnimalUpsertWithWhereUniqueWithoutResponsibleNGOInputObjectSchema), z.lazy(() => AnimalUpsertWithWhereUniqueWithoutResponsibleNGOInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => AnimalCreateManyResponsibleNGOInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => AnimalWhereUniqueInputObjectSchema), z.lazy(() => AnimalWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => AnimalWhereUniqueInputObjectSchema), z.lazy(() => AnimalWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => AnimalWhereUniqueInputObjectSchema), z.lazy(() => AnimalWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => AnimalWhereUniqueInputObjectSchema), z.lazy(() => AnimalWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => AnimalUpdateWithWhereUniqueWithoutResponsibleNGOInputObjectSchema), z.lazy(() => AnimalUpdateWithWhereUniqueWithoutResponsibleNGOInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => AnimalUpdateManyWithWhereWithoutResponsibleNGOInputObjectSchema), z.lazy(() => AnimalUpdateManyWithWhereWithoutResponsibleNGOInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => AnimalScalarWhereInputObjectSchema), z.lazy(() => AnimalScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const AnimalUpdateManyWithoutResponsibleNGONestedInputObjectSchema: z.ZodType<Prisma.AnimalUpdateManyWithoutResponsibleNGONestedInput> = makeSchema() as unknown as z.ZodType<Prisma.AnimalUpdateManyWithoutResponsibleNGONestedInput>;
export const AnimalUpdateManyWithoutResponsibleNGONestedInputObjectZodSchema = makeSchema();
