import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CharacteristicAnimalsCharacteristicsCreateManyCharacteristicInputObjectSchema as AnimalsCharacteristicsCreateManyCharacteristicInputObjectSchema } from './AnimalsCharacteristicsCreateManyCharacteristicInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => AnimalsCharacteristicsCreateManyCharacteristicInputObjectSchema), z.lazy(() => AnimalsCharacteristicsCreateManyCharacteristicInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const AnimalsCharacteristicsCreateManyCharacteristicInputEnvelopeObjectSchema: z.ZodType<Prisma.AnimalsCharacteristicsCreateManyCharacteristicInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.AnimalsCharacteristicsCreateManyCharacteristicInputEnvelope>;
export const AnimalsCharacteristicsCreateManyCharacteristicInputEnvelopeObjectZodSchema = makeSchema();
