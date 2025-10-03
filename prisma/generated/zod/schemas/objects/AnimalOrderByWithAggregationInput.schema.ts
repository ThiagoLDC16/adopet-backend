import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { AnimalCountOrderByAggregateInputObjectSchema as AnimalCountOrderByAggregateInputObjectSchema } from './AnimalCountOrderByAggregateInput.schema';
import { AnimalAvgOrderByAggregateInputObjectSchema as AnimalAvgOrderByAggregateInputObjectSchema } from './AnimalAvgOrderByAggregateInput.schema';
import { AnimalMaxOrderByAggregateInputObjectSchema as AnimalMaxOrderByAggregateInputObjectSchema } from './AnimalMaxOrderByAggregateInput.schema';
import { AnimalMinOrderByAggregateInputObjectSchema as AnimalMinOrderByAggregateInputObjectSchema } from './AnimalMinOrderByAggregateInput.schema';
import { AnimalSumOrderByAggregateInputObjectSchema as AnimalSumOrderByAggregateInputObjectSchema } from './AnimalSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  age: SortOrderSchema.optional(),
  species: SortOrderSchema.optional(),
  breed: SortOrderSchema.optional(),
  description: SortOrderSchema.optional(),
  responsibleNGOId: SortOrderSchema.optional(),
  adopterUserId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  _count: z.lazy(() => AnimalCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => AnimalAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => AnimalMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => AnimalMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => AnimalSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const AnimalOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.AnimalOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.AnimalOrderByWithAggregationInput>;
export const AnimalOrderByWithAggregationInputObjectZodSchema = makeSchema();
