import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  animalId: z.literal(true).optional(),
  characteristicId: z.literal(true).optional()
}).strict();
export const AnimalsCharacteristicsSumAggregateInputObjectSchema: z.ZodType<Prisma.AnimalsCharacteristicsSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.AnimalsCharacteristicsSumAggregateInputType>;
export const AnimalsCharacteristicsSumAggregateInputObjectZodSchema = makeSchema();
