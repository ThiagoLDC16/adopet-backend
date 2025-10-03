import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AnimalArgsObjectSchema as AnimalArgsObjectSchema } from './AnimalArgs.schema'

const makeSchema = () => z.object({
  animal: z.union([z.boolean(), z.lazy(() => AnimalArgsObjectSchema)]).optional()
}).strict();
export const MidiaIncludeObjectSchema: z.ZodType<Prisma.MidiaInclude> = makeSchema() as unknown as z.ZodType<Prisma.MidiaInclude>;
export const MidiaIncludeObjectZodSchema = makeSchema();
