import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AnimalsCharacteristicsSelectObjectSchema as AnimalsCharacteristicsSelectObjectSchema } from './AnimalsCharacteristicsSelect.schema';
import { AnimalsCharacteristicsIncludeObjectSchema as AnimalsCharacteristicsIncludeObjectSchema } from './AnimalsCharacteristicsInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => AnimalsCharacteristicsSelectObjectSchema).optional(),
  include: z.lazy(() => AnimalsCharacteristicsIncludeObjectSchema).optional()
}).strict();
export const AnimalsCharacteristicsArgsObjectSchema = makeSchema();
export const AnimalsCharacteristicsArgsObjectZodSchema = makeSchema();
