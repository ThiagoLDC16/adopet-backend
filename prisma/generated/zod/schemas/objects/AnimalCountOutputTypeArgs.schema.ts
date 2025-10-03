import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AnimalCountOutputTypeSelectObjectSchema as AnimalCountOutputTypeSelectObjectSchema } from './AnimalCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => AnimalCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const AnimalCountOutputTypeArgsObjectSchema = makeSchema();
export const AnimalCountOutputTypeArgsObjectZodSchema = makeSchema();
