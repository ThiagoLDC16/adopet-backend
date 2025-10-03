import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AnimalWhereInputObjectSchema as AnimalWhereInputObjectSchema } from './AnimalWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => AnimalWhereInputObjectSchema).optional(),
  isNot: z.lazy(() => AnimalWhereInputObjectSchema).optional()
}).strict();
export const AnimalScalarRelationFilterObjectSchema: z.ZodType<Prisma.AnimalScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.AnimalScalarRelationFilter>;
export const AnimalScalarRelationFilterObjectZodSchema = makeSchema();
