import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CharacteristicSelectObjectSchema as CharacteristicSelectObjectSchema } from './CharacteristicSelect.schema';
import { CharacteristicIncludeObjectSchema as CharacteristicIncludeObjectSchema } from './CharacteristicInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => CharacteristicSelectObjectSchema).optional(),
  include: z.lazy(() => CharacteristicIncludeObjectSchema).optional()
}).strict();
export const CharacteristicArgsObjectSchema = makeSchema();
export const CharacteristicArgsObjectZodSchema = makeSchema();
