import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  animalId: SortOrderSchema.optional(),
  characteristicId: SortOrderSchema.optional()
}).strict();
export const AnimalsCharacteristicsAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.AnimalsCharacteristicsAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.AnimalsCharacteristicsAvgOrderByAggregateInput>;
export const AnimalsCharacteristicsAvgOrderByAggregateInputObjectZodSchema = makeSchema();
