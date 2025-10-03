import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const MidiaOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.MidiaOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.MidiaOrderByRelationAggregateInput>;
export const MidiaOrderByRelationAggregateInputObjectZodSchema = makeSchema();
