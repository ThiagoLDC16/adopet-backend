import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { CharacteristicCountOrderByAggregateInputObjectSchema as CharacteristicCountOrderByAggregateInputObjectSchema } from './CharacteristicCountOrderByAggregateInput.schema';
import { CharacteristicAvgOrderByAggregateInputObjectSchema as CharacteristicAvgOrderByAggregateInputObjectSchema } from './CharacteristicAvgOrderByAggregateInput.schema';
import { CharacteristicMaxOrderByAggregateInputObjectSchema as CharacteristicMaxOrderByAggregateInputObjectSchema } from './CharacteristicMaxOrderByAggregateInput.schema';
import { CharacteristicMinOrderByAggregateInputObjectSchema as CharacteristicMinOrderByAggregateInputObjectSchema } from './CharacteristicMinOrderByAggregateInput.schema';
import { CharacteristicSumOrderByAggregateInputObjectSchema as CharacteristicSumOrderByAggregateInputObjectSchema } from './CharacteristicSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  description: SortOrderSchema.optional(),
  _count: z.lazy(() => CharacteristicCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => CharacteristicAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => CharacteristicMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => CharacteristicMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => CharacteristicSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const CharacteristicOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.CharacteristicOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.CharacteristicOrderByWithAggregationInput>;
export const CharacteristicOrderByWithAggregationInputObjectZodSchema = makeSchema();
