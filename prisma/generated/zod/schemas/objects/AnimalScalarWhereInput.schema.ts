import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { IntNullableFilterObjectSchema as IntNullableFilterObjectSchema } from './IntNullableFilter.schema'

const animalscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => AnimalScalarWhereInputObjectSchema), z.lazy(() => AnimalScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => AnimalScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => AnimalScalarWhereInputObjectSchema), z.lazy(() => AnimalScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  age: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  species: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  breed: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  description: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  responsibleNGOId: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  adopterUserId: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable()
}).strict();
export const AnimalScalarWhereInputObjectSchema: z.ZodType<Prisma.AnimalScalarWhereInput> = animalscalarwhereinputSchema as unknown as z.ZodType<Prisma.AnimalScalarWhereInput>;
export const AnimalScalarWhereInputObjectZodSchema = animalscalarwhereinputSchema;
