import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AnimalsCharacteristicsCreateManyAnimalInputObjectSchema as AnimalsCharacteristicsCreateManyAnimalInputObjectSchema } from './AnimalsCharacteristicsCreateManyAnimalInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => AnimalsCharacteristicsCreateManyAnimalInputObjectSchema), z.lazy(() => AnimalsCharacteristicsCreateManyAnimalInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const AnimalsCharacteristicsCreateManyAnimalInputEnvelopeObjectSchema: z.ZodType<Prisma.AnimalsCharacteristicsCreateManyAnimalInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.AnimalsCharacteristicsCreateManyAnimalInputEnvelope>;
export const AnimalsCharacteristicsCreateManyAnimalInputEnvelopeObjectZodSchema = makeSchema();
