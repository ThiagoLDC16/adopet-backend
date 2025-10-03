import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  animalId: z.literal(true).optional(),
  characteristicId: z.literal(true).optional()
}).strict();
export const AnimalsCharacteristicsMaxAggregateInputObjectSchema: z.ZodType<Prisma.AnimalsCharacteristicsMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.AnimalsCharacteristicsMaxAggregateInputType>;
export const AnimalsCharacteristicsMaxAggregateInputObjectZodSchema = makeSchema();
