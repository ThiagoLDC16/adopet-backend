import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  animalId: z.literal(true).optional(),
  characteristicId: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const AnimalsCharacteristicsCountAggregateInputObjectSchema: z.ZodType<Prisma.AnimalsCharacteristicsCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.AnimalsCharacteristicsCountAggregateInputType>;
export const AnimalsCharacteristicsCountAggregateInputObjectZodSchema = makeSchema();
