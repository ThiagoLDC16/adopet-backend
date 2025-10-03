import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ResponsibleNGOAnimalCreateManyResponsibleNGOInputObjectSchema as AnimalCreateManyResponsibleNGOInputObjectSchema } from './AnimalCreateManyResponsibleNGOInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => AnimalCreateManyResponsibleNGOInputObjectSchema), z.lazy(() => AnimalCreateManyResponsibleNGOInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const AnimalCreateManyResponsibleNGOInputEnvelopeObjectSchema: z.ZodType<Prisma.AnimalCreateManyResponsibleNGOInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.AnimalCreateManyResponsibleNGOInputEnvelope>;
export const AnimalCreateManyResponsibleNGOInputEnvelopeObjectZodSchema = makeSchema();
