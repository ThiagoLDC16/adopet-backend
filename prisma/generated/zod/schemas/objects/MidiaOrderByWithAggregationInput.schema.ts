import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { MidiaCountOrderByAggregateInputObjectSchema as MidiaCountOrderByAggregateInputObjectSchema } from './MidiaCountOrderByAggregateInput.schema';
import { MidiaAvgOrderByAggregateInputObjectSchema as MidiaAvgOrderByAggregateInputObjectSchema } from './MidiaAvgOrderByAggregateInput.schema';
import { MidiaMaxOrderByAggregateInputObjectSchema as MidiaMaxOrderByAggregateInputObjectSchema } from './MidiaMaxOrderByAggregateInput.schema';
import { MidiaMinOrderByAggregateInputObjectSchema as MidiaMinOrderByAggregateInputObjectSchema } from './MidiaMinOrderByAggregateInput.schema';
import { MidiaSumOrderByAggregateInputObjectSchema as MidiaSumOrderByAggregateInputObjectSchema } from './MidiaSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  type: SortOrderSchema.optional(),
  extension: SortOrderSchema.optional(),
  url: SortOrderSchema.optional(),
  animalId: SortOrderSchema.optional(),
  _count: z.lazy(() => MidiaCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => MidiaAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => MidiaMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => MidiaMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => MidiaSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const MidiaOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.MidiaOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.MidiaOrderByWithAggregationInput>;
export const MidiaOrderByWithAggregationInputObjectZodSchema = makeSchema();
