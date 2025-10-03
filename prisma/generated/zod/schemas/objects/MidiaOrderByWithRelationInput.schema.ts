import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { AnimalOrderByWithRelationInputObjectSchema as AnimalOrderByWithRelationInputObjectSchema } from './AnimalOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  type: SortOrderSchema.optional(),
  extension: SortOrderSchema.optional(),
  url: SortOrderSchema.optional(),
  animalId: SortOrderSchema.optional(),
  animal: z.lazy(() => AnimalOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const MidiaOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.MidiaOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.MidiaOrderByWithRelationInput>;
export const MidiaOrderByWithRelationInputObjectZodSchema = makeSchema();
