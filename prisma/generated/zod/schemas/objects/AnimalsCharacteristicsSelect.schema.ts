import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AnimalArgsObjectSchema as AnimalArgsObjectSchema } from './AnimalArgs.schema';
import { CharacteristicArgsObjectSchema as CharacteristicArgsObjectSchema } from './CharacteristicArgs.schema'

const makeSchema = () => z.object({
  animalId: z.boolean().optional(),
  characteristicId: z.boolean().optional(),
  animal: z.union([z.boolean(), z.lazy(() => AnimalArgsObjectSchema)]).optional(),
  characteristic: z.union([z.boolean(), z.lazy(() => CharacteristicArgsObjectSchema)]).optional()
}).strict();
export const AnimalsCharacteristicsSelectObjectSchema: z.ZodType<Prisma.AnimalsCharacteristicsSelect> = makeSchema() as unknown as z.ZodType<Prisma.AnimalsCharacteristicsSelect>;
export const AnimalsCharacteristicsSelectObjectZodSchema = makeSchema();
