import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AnimalCreateWithoutAdopterUserInputObjectSchema as AnimalCreateWithoutAdopterUserInputObjectSchema } from './AnimalCreateWithoutAdopterUserInput.schema';
import { AnimalUncheckedCreateWithoutAdopterUserInputObjectSchema as AnimalUncheckedCreateWithoutAdopterUserInputObjectSchema } from './AnimalUncheckedCreateWithoutAdopterUserInput.schema';
import { AnimalCreateOrConnectWithoutAdopterUserInputObjectSchema as AnimalCreateOrConnectWithoutAdopterUserInputObjectSchema } from './AnimalCreateOrConnectWithoutAdopterUserInput.schema';
import { AnimalUpsertWithWhereUniqueWithoutAdopterUserInputObjectSchema as AnimalUpsertWithWhereUniqueWithoutAdopterUserInputObjectSchema } from './AnimalUpsertWithWhereUniqueWithoutAdopterUserInput.schema';
import { AdopterUserAnimalCreateManyAdopterUserInputEnvelopeObjectSchema as AnimalCreateManyAdopterUserInputEnvelopeObjectSchema } from './AnimalCreateManyAdopterUserInputEnvelope.schema';
import { AnimalWhereUniqueInputObjectSchema as AnimalWhereUniqueInputObjectSchema } from './AnimalWhereUniqueInput.schema';
import { AnimalUpdateWithWhereUniqueWithoutAdopterUserInputObjectSchema as AnimalUpdateWithWhereUniqueWithoutAdopterUserInputObjectSchema } from './AnimalUpdateWithWhereUniqueWithoutAdopterUserInput.schema';
import { AnimalUpdateManyWithWhereWithoutAdopterUserInputObjectSchema as AnimalUpdateManyWithWhereWithoutAdopterUserInputObjectSchema } from './AnimalUpdateManyWithWhereWithoutAdopterUserInput.schema';
import { AnimalScalarWhereInputObjectSchema as AnimalScalarWhereInputObjectSchema } from './AnimalScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => AnimalCreateWithoutAdopterUserInputObjectSchema), z.lazy(() => AnimalCreateWithoutAdopterUserInputObjectSchema).array(), z.lazy(() => AnimalUncheckedCreateWithoutAdopterUserInputObjectSchema), z.lazy(() => AnimalUncheckedCreateWithoutAdopterUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => AnimalCreateOrConnectWithoutAdopterUserInputObjectSchema), z.lazy(() => AnimalCreateOrConnectWithoutAdopterUserInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => AnimalUpsertWithWhereUniqueWithoutAdopterUserInputObjectSchema), z.lazy(() => AnimalUpsertWithWhereUniqueWithoutAdopterUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => AnimalCreateManyAdopterUserInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => AnimalWhereUniqueInputObjectSchema), z.lazy(() => AnimalWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => AnimalWhereUniqueInputObjectSchema), z.lazy(() => AnimalWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => AnimalWhereUniqueInputObjectSchema), z.lazy(() => AnimalWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => AnimalWhereUniqueInputObjectSchema), z.lazy(() => AnimalWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => AnimalUpdateWithWhereUniqueWithoutAdopterUserInputObjectSchema), z.lazy(() => AnimalUpdateWithWhereUniqueWithoutAdopterUserInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => AnimalUpdateManyWithWhereWithoutAdopterUserInputObjectSchema), z.lazy(() => AnimalUpdateManyWithWhereWithoutAdopterUserInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => AnimalScalarWhereInputObjectSchema), z.lazy(() => AnimalScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const AnimalUpdateManyWithoutAdopterUserNestedInputObjectSchema: z.ZodType<Prisma.AnimalUpdateManyWithoutAdopterUserNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.AnimalUpdateManyWithoutAdopterUserNestedInput>;
export const AnimalUpdateManyWithoutAdopterUserNestedInputObjectZodSchema = makeSchema();
