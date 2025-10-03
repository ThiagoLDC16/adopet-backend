import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AnimalsCharacteristicsFindManySchema as AnimalsCharacteristicsFindManySchema } from '../findManyAnimalsCharacteristics.schema';
import { CharacteristicCountOutputTypeArgsObjectSchema as CharacteristicCountOutputTypeArgsObjectSchema } from './CharacteristicCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  description: z.boolean().optional(),
  animals: z.union([z.boolean(), z.lazy(() => AnimalsCharacteristicsFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => CharacteristicCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const CharacteristicSelectObjectSchema: z.ZodType<Prisma.CharacteristicSelect> = makeSchema() as unknown as z.ZodType<Prisma.CharacteristicSelect>;
export const CharacteristicSelectObjectZodSchema = makeSchema();
