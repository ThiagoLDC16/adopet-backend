import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AnimalWhereUniqueInputObjectSchema as AnimalWhereUniqueInputObjectSchema } from './AnimalWhereUniqueInput.schema';
import { AnimalCreateWithoutAdopterUserInputObjectSchema as AnimalCreateWithoutAdopterUserInputObjectSchema } from './AnimalCreateWithoutAdopterUserInput.schema';
import { AnimalUncheckedCreateWithoutAdopterUserInputObjectSchema as AnimalUncheckedCreateWithoutAdopterUserInputObjectSchema } from './AnimalUncheckedCreateWithoutAdopterUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AnimalWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => AnimalCreateWithoutAdopterUserInputObjectSchema), z.lazy(() => AnimalUncheckedCreateWithoutAdopterUserInputObjectSchema)])
}).strict();
export const AnimalCreateOrConnectWithoutAdopterUserInputObjectSchema: z.ZodType<Prisma.AnimalCreateOrConnectWithoutAdopterUserInput> = makeSchema() as unknown as z.ZodType<Prisma.AnimalCreateOrConnectWithoutAdopterUserInput>;
export const AnimalCreateOrConnectWithoutAdopterUserInputObjectZodSchema = makeSchema();
