import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AnimalArgsObjectSchema as AnimalArgsObjectSchema } from './AnimalArgs.schema';
import { CharacteristicArgsObjectSchema as CharacteristicArgsObjectSchema } from './CharacteristicArgs.schema'

const makeSchema = () => z.object({
  animal: z.union([z.boolean(), z.lazy(() => AnimalArgsObjectSchema)]).optional(),
  characteristic: z.union([z.boolean(), z.lazy(() => CharacteristicArgsObjectSchema)]).optional()
}).strict();
export const AnimalsCharacteristicsIncludeObjectSchema: z.ZodType<Prisma.AnimalsCharacteristicsInclude> = makeSchema() as unknown as z.ZodType<Prisma.AnimalsCharacteristicsInclude>;
export const AnimalsCharacteristicsIncludeObjectZodSchema = makeSchema();
