import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { AnimalsCharacteristicsOrderByRelationAggregateInputObjectSchema as AnimalsCharacteristicsOrderByRelationAggregateInputObjectSchema } from './AnimalsCharacteristicsOrderByRelationAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  description: SortOrderSchema.optional(),
  animals: z.lazy(() => AnimalsCharacteristicsOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const CharacteristicOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.CharacteristicOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.CharacteristicOrderByWithRelationInput>;
export const CharacteristicOrderByWithRelationInputObjectZodSchema = makeSchema();
