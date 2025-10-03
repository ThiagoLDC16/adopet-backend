import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { MidiaCreateWithoutAnimalInputObjectSchema as MidiaCreateWithoutAnimalInputObjectSchema } from './MidiaCreateWithoutAnimalInput.schema';
import { MidiaUncheckedCreateWithoutAnimalInputObjectSchema as MidiaUncheckedCreateWithoutAnimalInputObjectSchema } from './MidiaUncheckedCreateWithoutAnimalInput.schema';
import { MidiaCreateOrConnectWithoutAnimalInputObjectSchema as MidiaCreateOrConnectWithoutAnimalInputObjectSchema } from './MidiaCreateOrConnectWithoutAnimalInput.schema';
import { MidiaUpsertWithWhereUniqueWithoutAnimalInputObjectSchema as MidiaUpsertWithWhereUniqueWithoutAnimalInputObjectSchema } from './MidiaUpsertWithWhereUniqueWithoutAnimalInput.schema';
import { AnimalMidiaCreateManyAnimalInputEnvelopeObjectSchema as MidiaCreateManyAnimalInputEnvelopeObjectSchema } from './MidiaCreateManyAnimalInputEnvelope.schema';
import { MidiaWhereUniqueInputObjectSchema as MidiaWhereUniqueInputObjectSchema } from './MidiaWhereUniqueInput.schema';
import { MidiaUpdateWithWhereUniqueWithoutAnimalInputObjectSchema as MidiaUpdateWithWhereUniqueWithoutAnimalInputObjectSchema } from './MidiaUpdateWithWhereUniqueWithoutAnimalInput.schema';
import { MidiaUpdateManyWithWhereWithoutAnimalInputObjectSchema as MidiaUpdateManyWithWhereWithoutAnimalInputObjectSchema } from './MidiaUpdateManyWithWhereWithoutAnimalInput.schema';
import { MidiaScalarWhereInputObjectSchema as MidiaScalarWhereInputObjectSchema } from './MidiaScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => MidiaCreateWithoutAnimalInputObjectSchema), z.lazy(() => MidiaCreateWithoutAnimalInputObjectSchema).array(), z.lazy(() => MidiaUncheckedCreateWithoutAnimalInputObjectSchema), z.lazy(() => MidiaUncheckedCreateWithoutAnimalInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => MidiaCreateOrConnectWithoutAnimalInputObjectSchema), z.lazy(() => MidiaCreateOrConnectWithoutAnimalInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => MidiaUpsertWithWhereUniqueWithoutAnimalInputObjectSchema), z.lazy(() => MidiaUpsertWithWhereUniqueWithoutAnimalInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => MidiaCreateManyAnimalInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => MidiaWhereUniqueInputObjectSchema), z.lazy(() => MidiaWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => MidiaWhereUniqueInputObjectSchema), z.lazy(() => MidiaWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => MidiaWhereUniqueInputObjectSchema), z.lazy(() => MidiaWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => MidiaWhereUniqueInputObjectSchema), z.lazy(() => MidiaWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => MidiaUpdateWithWhereUniqueWithoutAnimalInputObjectSchema), z.lazy(() => MidiaUpdateWithWhereUniqueWithoutAnimalInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => MidiaUpdateManyWithWhereWithoutAnimalInputObjectSchema), z.lazy(() => MidiaUpdateManyWithWhereWithoutAnimalInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => MidiaScalarWhereInputObjectSchema), z.lazy(() => MidiaScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const MidiaUncheckedUpdateManyWithoutAnimalNestedInputObjectSchema: z.ZodType<Prisma.MidiaUncheckedUpdateManyWithoutAnimalNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.MidiaUncheckedUpdateManyWithoutAnimalNestedInput>;
export const MidiaUncheckedUpdateManyWithoutAnimalNestedInputObjectZodSchema = makeSchema();
