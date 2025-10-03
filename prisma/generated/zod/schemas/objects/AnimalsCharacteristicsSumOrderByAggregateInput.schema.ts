import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  animalId: SortOrderSchema.optional(),
  characteristicId: SortOrderSchema.optional()
}).strict();
export const AnimalsCharacteristicsSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.AnimalsCharacteristicsSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.AnimalsCharacteristicsSumOrderByAggregateInput>;
export const AnimalsCharacteristicsSumOrderByAggregateInputObjectZodSchema = makeSchema();
