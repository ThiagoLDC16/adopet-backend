import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { IntNullableFilterObjectSchema as IntNullableFilterObjectSchema } from './IntNullableFilter.schema';
import { MidiaListRelationFilterObjectSchema as MidiaListRelationFilterObjectSchema } from './MidiaListRelationFilter.schema';
import { AnimalsCharacteristicsListRelationFilterObjectSchema as AnimalsCharacteristicsListRelationFilterObjectSchema } from './AnimalsCharacteristicsListRelationFilter.schema';
import { UserScalarRelationFilterObjectSchema as UserScalarRelationFilterObjectSchema } from './UserScalarRelationFilter.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserNullableScalarRelationFilterObjectSchema as UserNullableScalarRelationFilterObjectSchema } from './UserNullableScalarRelationFilter.schema'

const animalwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => AnimalWhereInputObjectSchema), z.lazy(() => AnimalWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => AnimalWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => AnimalWhereInputObjectSchema), z.lazy(() => AnimalWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  age: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  species: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  breed: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  description: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  responsibleNGOId: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  adopterUserId: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  midia: z.lazy(() => MidiaListRelationFilterObjectSchema).optional(),
  characteristics: z.lazy(() => AnimalsCharacteristicsListRelationFilterObjectSchema).optional(),
  responsibleNGO: z.union([z.lazy(() => UserScalarRelationFilterObjectSchema), z.lazy(() => UserWhereInputObjectSchema)]).optional(),
  adopterUser: z.union([z.lazy(() => UserNullableScalarRelationFilterObjectSchema), z.lazy(() => UserWhereInputObjectSchema)]).optional()
}).strict();
export const AnimalWhereInputObjectSchema: z.ZodType<Prisma.AnimalWhereInput> = animalwhereinputSchema as unknown as z.ZodType<Prisma.AnimalWhereInput>;
export const AnimalWhereInputObjectZodSchema = animalwhereinputSchema;
