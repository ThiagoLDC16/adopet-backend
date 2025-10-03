import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AnimalMidiaCreateManyAnimalInputObjectSchema as MidiaCreateManyAnimalInputObjectSchema } from './MidiaCreateManyAnimalInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => MidiaCreateManyAnimalInputObjectSchema), z.lazy(() => MidiaCreateManyAnimalInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const MidiaCreateManyAnimalInputEnvelopeObjectSchema: z.ZodType<Prisma.MidiaCreateManyAnimalInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.MidiaCreateManyAnimalInputEnvelope>;
export const MidiaCreateManyAnimalInputEnvelopeObjectZodSchema = makeSchema();
