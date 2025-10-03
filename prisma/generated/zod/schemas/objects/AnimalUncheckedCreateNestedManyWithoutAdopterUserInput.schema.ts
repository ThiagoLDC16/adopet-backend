import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AnimalCreateWithoutAdopterUserInputObjectSchema as AnimalCreateWithoutAdopterUserInputObjectSchema } from './AnimalCreateWithoutAdopterUserInput.schema';
import { AnimalUncheckedCreateWithoutAdopterUserInputObjectSchema as AnimalUncheckedCreateWithoutAdopterUserInputObjectSchema } from './AnimalUncheckedCreateWithoutAdopterUserInput.schema';
import { AnimalCreateOrConnectWithoutAdopterUserInputObjectSchema as AnimalCreateOrConnectWithoutAdopterUserInputObjectSchema } from './AnimalCreateOrConnectWithoutAdopterUserInput.schema';
import { AdopterUserAnimalCreateManyAdopterUserInputEnvelopeObjectSchema as AnimalCreateManyAdopterUserInputEnvelopeObjectSchema } from './AnimalCreateManyAdopterUserInputEnvelope.schema';
import { AnimalWhereUniqueInputObjectSchema as AnimalWhereUniqueInputObjectSchema } from './AnimalWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => AnimalCreateWithoutAdopterUserInputObjectSchema), z.lazy(() => AnimalCreateWithoutAdopterUserInputObjectSchema).array(), z.lazy(() => AnimalUncheckedCreateWithoutAdopterUserInputObjectSchema), z.lazy(() => AnimalUncheckedCreateWithoutAdopterUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => AnimalCreateOrConnectWithoutAdopterUserInputObjectSchema), z.lazy(() => AnimalCreateOrConnectWithoutAdopterUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => AnimalCreateManyAdopterUserInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => AnimalWhereUniqueInputObjectSchema), z.lazy(() => AnimalWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const AnimalUncheckedCreateNestedManyWithoutAdopterUserInputObjectSchema: z.ZodType<Prisma.AnimalUncheckedCreateNestedManyWithoutAdopterUserInput> = makeSchema() as unknown as z.ZodType<Prisma.AnimalUncheckedCreateNestedManyWithoutAdopterUserInput>;
export const AnimalUncheckedCreateNestedManyWithoutAdopterUserInputObjectZodSchema = makeSchema();
