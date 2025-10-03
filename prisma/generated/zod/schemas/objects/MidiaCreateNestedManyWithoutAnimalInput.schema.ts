import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { MidiaCreateWithoutAnimalInputObjectSchema as MidiaCreateWithoutAnimalInputObjectSchema } from './MidiaCreateWithoutAnimalInput.schema';
import { MidiaUncheckedCreateWithoutAnimalInputObjectSchema as MidiaUncheckedCreateWithoutAnimalInputObjectSchema } from './MidiaUncheckedCreateWithoutAnimalInput.schema';
import { MidiaCreateOrConnectWithoutAnimalInputObjectSchema as MidiaCreateOrConnectWithoutAnimalInputObjectSchema } from './MidiaCreateOrConnectWithoutAnimalInput.schema';
import { AnimalMidiaCreateManyAnimalInputEnvelopeObjectSchema as MidiaCreateManyAnimalInputEnvelopeObjectSchema } from './MidiaCreateManyAnimalInputEnvelope.schema';
import { MidiaWhereUniqueInputObjectSchema as MidiaWhereUniqueInputObjectSchema } from './MidiaWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => MidiaCreateWithoutAnimalInputObjectSchema), z.lazy(() => MidiaCreateWithoutAnimalInputObjectSchema).array(), z.lazy(() => MidiaUncheckedCreateWithoutAnimalInputObjectSchema), z.lazy(() => MidiaUncheckedCreateWithoutAnimalInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => MidiaCreateOrConnectWithoutAnimalInputObjectSchema), z.lazy(() => MidiaCreateOrConnectWithoutAnimalInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => MidiaCreateManyAnimalInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => MidiaWhereUniqueInputObjectSchema), z.lazy(() => MidiaWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const MidiaCreateNestedManyWithoutAnimalInputObjectSchema: z.ZodType<Prisma.MidiaCreateNestedManyWithoutAnimalInput> = makeSchema() as unknown as z.ZodType<Prisma.MidiaCreateNestedManyWithoutAnimalInput>;
export const MidiaCreateNestedManyWithoutAnimalInputObjectZodSchema = makeSchema();
