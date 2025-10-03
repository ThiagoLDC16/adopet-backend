import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  animalId: z.literal(true).optional(),
  characteristicId: z.literal(true).optional()
}).strict();
export const AnimalsCharacteristicsMinAggregateInputObjectSchema: z.ZodType<Prisma.AnimalsCharacteristicsMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.AnimalsCharacteristicsMinAggregateInputType>;
export const AnimalsCharacteristicsMinAggregateInputObjectZodSchema = makeSchema();
