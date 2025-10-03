import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  animalId: z.literal(true).optional(),
  characteristicId: z.literal(true).optional()
}).strict();
export const AnimalsCharacteristicsAvgAggregateInputObjectSchema: z.ZodType<Prisma.AnimalsCharacteristicsAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.AnimalsCharacteristicsAvgAggregateInputType>;
export const AnimalsCharacteristicsAvgAggregateInputObjectZodSchema = makeSchema();
