import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { MidiaSelectObjectSchema as MidiaSelectObjectSchema } from './MidiaSelect.schema';
import { MidiaIncludeObjectSchema as MidiaIncludeObjectSchema } from './MidiaInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => MidiaSelectObjectSchema).optional(),
  include: z.lazy(() => MidiaIncludeObjectSchema).optional()
}).strict();
export const MidiaArgsObjectSchema = makeSchema();
export const MidiaArgsObjectZodSchema = makeSchema();
