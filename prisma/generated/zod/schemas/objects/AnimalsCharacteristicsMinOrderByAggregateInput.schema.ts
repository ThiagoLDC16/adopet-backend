import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  animalId: SortOrderSchema.optional(),
  characteristicId: SortOrderSchema.optional()
}).strict();
export const AnimalsCharacteristicsMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.AnimalsCharacteristicsMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.AnimalsCharacteristicsMinOrderByAggregateInput>;
export const AnimalsCharacteristicsMinOrderByAggregateInputObjectZodSchema = makeSchema();
