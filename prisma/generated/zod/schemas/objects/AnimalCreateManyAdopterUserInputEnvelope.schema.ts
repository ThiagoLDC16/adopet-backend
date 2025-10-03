import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AdopterUserAnimalCreateManyAdopterUserInputObjectSchema as AnimalCreateManyAdopterUserInputObjectSchema } from './AnimalCreateManyAdopterUserInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => AnimalCreateManyAdopterUserInputObjectSchema), z.lazy(() => AnimalCreateManyAdopterUserInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const AnimalCreateManyAdopterUserInputEnvelopeObjectSchema: z.ZodType<Prisma.AnimalCreateManyAdopterUserInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.AnimalCreateManyAdopterUserInputEnvelope>;
export const AnimalCreateManyAdopterUserInputEnvelopeObjectZodSchema = makeSchema();
