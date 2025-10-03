import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CharacteristicCountOutputTypeSelectObjectSchema as CharacteristicCountOutputTypeSelectObjectSchema } from './CharacteristicCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => CharacteristicCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const CharacteristicCountOutputTypeArgsObjectSchema = makeSchema();
export const CharacteristicCountOutputTypeArgsObjectZodSchema = makeSchema();
