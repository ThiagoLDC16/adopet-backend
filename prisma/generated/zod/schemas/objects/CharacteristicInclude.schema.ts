import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AnimalsCharacteristicsFindManySchema as AnimalsCharacteristicsFindManySchema } from '../findManyAnimalsCharacteristics.schema';
import { CharacteristicCountOutputTypeArgsObjectSchema as CharacteristicCountOutputTypeArgsObjectSchema } from './CharacteristicCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  animals: z.union([z.boolean(), z.lazy(() => AnimalsCharacteristicsFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => CharacteristicCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const CharacteristicIncludeObjectSchema: z.ZodType<Prisma.CharacteristicInclude> = makeSchema() as unknown as z.ZodType<Prisma.CharacteristicInclude>;
export const CharacteristicIncludeObjectZodSchema = makeSchema();
