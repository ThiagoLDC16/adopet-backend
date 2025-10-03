import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { AnimalsCharacteristicsCountOrderByAggregateInputObjectSchema as AnimalsCharacteristicsCountOrderByAggregateInputObjectSchema } from './AnimalsCharacteristicsCountOrderByAggregateInput.schema';
import { AnimalsCharacteristicsAvgOrderByAggregateInputObjectSchema as AnimalsCharacteristicsAvgOrderByAggregateInputObjectSchema } from './AnimalsCharacteristicsAvgOrderByAggregateInput.schema';
import { AnimalsCharacteristicsMaxOrderByAggregateInputObjectSchema as AnimalsCharacteristicsMaxOrderByAggregateInputObjectSchema } from './AnimalsCharacteristicsMaxOrderByAggregateInput.schema';
import { AnimalsCharacteristicsMinOrderByAggregateInputObjectSchema as AnimalsCharacteristicsMinOrderByAggregateInputObjectSchema } from './AnimalsCharacteristicsMinOrderByAggregateInput.schema';
import { AnimalsCharacteristicsSumOrderByAggregateInputObjectSchema as AnimalsCharacteristicsSumOrderByAggregateInputObjectSchema } from './AnimalsCharacteristicsSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  animalId: SortOrderSchema.optional(),
  characteristicId: SortOrderSchema.optional(),
  _count: z.lazy(() => AnimalsCharacteristicsCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => AnimalsCharacteristicsAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => AnimalsCharacteristicsMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => AnimalsCharacteristicsMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => AnimalsCharacteristicsSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const AnimalsCharacteristicsOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.AnimalsCharacteristicsOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.AnimalsCharacteristicsOrderByWithAggregationInput>;
export const AnimalsCharacteristicsOrderByWithAggregationInputObjectZodSchema = makeSchema();
