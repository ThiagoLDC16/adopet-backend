import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { MidiaOrderByRelationAggregateInputObjectSchema as MidiaOrderByRelationAggregateInputObjectSchema } from './MidiaOrderByRelationAggregateInput.schema';
import { AnimalsCharacteristicsOrderByRelationAggregateInputObjectSchema as AnimalsCharacteristicsOrderByRelationAggregateInputObjectSchema } from './AnimalsCharacteristicsOrderByRelationAggregateInput.schema';
import { UserOrderByWithRelationInputObjectSchema as UserOrderByWithRelationInputObjectSchema } from './UserOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  age: SortOrderSchema.optional(),
  species: SortOrderSchema.optional(),
  breed: SortOrderSchema.optional(),
  description: SortOrderSchema.optional(),
  responsibleNGOId: SortOrderSchema.optional(),
  adopterUserId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  midia: z.lazy(() => MidiaOrderByRelationAggregateInputObjectSchema).optional(),
  characteristics: z.lazy(() => AnimalsCharacteristicsOrderByRelationAggregateInputObjectSchema).optional(),
  responsibleNGO: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional(),
  adopterUser: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const AnimalOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.AnimalOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.AnimalOrderByWithRelationInput>;
export const AnimalOrderByWithRelationInputObjectZodSchema = makeSchema();
