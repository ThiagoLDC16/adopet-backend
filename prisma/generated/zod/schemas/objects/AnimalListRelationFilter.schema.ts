import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AnimalWhereInputObjectSchema as AnimalWhereInputObjectSchema } from './AnimalWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => AnimalWhereInputObjectSchema).optional(),
  some: z.lazy(() => AnimalWhereInputObjectSchema).optional(),
  none: z.lazy(() => AnimalWhereInputObjectSchema).optional()
}).strict();
export const AnimalListRelationFilterObjectSchema: z.ZodType<Prisma.AnimalListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.AnimalListRelationFilter>;
export const AnimalListRelationFilterObjectZodSchema = makeSchema();
