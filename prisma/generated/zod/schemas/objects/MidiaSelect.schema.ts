import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AnimalArgsObjectSchema as AnimalArgsObjectSchema } from './AnimalArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  type: z.boolean().optional(),
  extension: z.boolean().optional(),
  url: z.boolean().optional(),
  animalId: z.boolean().optional(),
  animal: z.union([z.boolean(), z.lazy(() => AnimalArgsObjectSchema)]).optional()
}).strict();
export const MidiaSelectObjectSchema: z.ZodType<Prisma.MidiaSelect> = makeSchema() as unknown as z.ZodType<Prisma.MidiaSelect>;
export const MidiaSelectObjectZodSchema = makeSchema();
