import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { IntNullableWithAggregatesFilterObjectSchema as IntNullableWithAggregatesFilterObjectSchema } from './IntNullableWithAggregatesFilter.schema'

const animalscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => AnimalScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => AnimalScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => AnimalScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => AnimalScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => AnimalScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  name: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  age: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  species: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  breed: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  description: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  responsibleNGOId: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  adopterUserId: z.union([z.lazy(() => IntNullableWithAggregatesFilterObjectSchema), z.number().int()]).optional().nullable()
}).strict();
export const AnimalScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.AnimalScalarWhereWithAggregatesInput> = animalscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.AnimalScalarWhereWithAggregatesInput>;
export const AnimalScalarWhereWithAggregatesInputObjectZodSchema = animalscalarwherewithaggregatesinputSchema;
