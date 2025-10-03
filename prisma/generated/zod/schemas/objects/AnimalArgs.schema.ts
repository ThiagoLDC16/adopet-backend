import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AnimalSelectObjectSchema as AnimalSelectObjectSchema } from './AnimalSelect.schema';
import { AnimalIncludeObjectSchema as AnimalIncludeObjectSchema } from './AnimalInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => AnimalSelectObjectSchema).optional(),
  include: z.lazy(() => AnimalIncludeObjectSchema).optional()
}).strict();
export const AnimalArgsObjectSchema = makeSchema();
export const AnimalArgsObjectZodSchema = makeSchema();
