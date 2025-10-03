import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const AnimalOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.AnimalOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.AnimalOrderByRelationAggregateInput>;
export const AnimalOrderByRelationAggregateInputObjectZodSchema = makeSchema();
