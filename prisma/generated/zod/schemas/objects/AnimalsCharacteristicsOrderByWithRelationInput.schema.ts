import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { AnimalOrderByWithRelationInputObjectSchema as AnimalOrderByWithRelationInputObjectSchema } from './AnimalOrderByWithRelationInput.schema';
import { CharacteristicOrderByWithRelationInputObjectSchema as CharacteristicOrderByWithRelationInputObjectSchema } from './CharacteristicOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  animalId: SortOrderSchema.optional(),
  characteristicId: SortOrderSchema.optional(),
  animal: z.lazy(() => AnimalOrderByWithRelationInputObjectSchema).optional(),
  characteristic: z.lazy(() => CharacteristicOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const AnimalsCharacteristicsOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.AnimalsCharacteristicsOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.AnimalsCharacteristicsOrderByWithRelationInput>;
export const AnimalsCharacteristicsOrderByWithRelationInputObjectZodSchema = makeSchema();
