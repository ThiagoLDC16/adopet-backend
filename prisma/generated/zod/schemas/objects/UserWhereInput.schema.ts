import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { EnumUserTypeFilterObjectSchema as EnumUserTypeFilterObjectSchema } from './EnumUserTypeFilter.schema';
import { UserTypeSchema } from '../enums/UserType.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { NotificationListRelationFilterObjectSchema as NotificationListRelationFilterObjectSchema } from './NotificationListRelationFilter.schema';
import { AnimalListRelationFilterObjectSchema as AnimalListRelationFilterObjectSchema } from './AnimalListRelationFilter.schema'

const userwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => UserWhereInputObjectSchema), z.lazy(() => UserWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => UserWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => UserWhereInputObjectSchema), z.lazy(() => UserWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  email: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  password: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  phone: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  cpf: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  cnpj: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  type: z.union([z.lazy(() => EnumUserTypeFilterObjectSchema), UserTypeSchema]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  notificacoesAtivas: z.lazy(() => NotificationListRelationFilterObjectSchema).optional(),
  ownedPets: z.lazy(() => AnimalListRelationFilterObjectSchema).optional(),
  interestedPets: z.lazy(() => AnimalListRelationFilterObjectSchema).optional()
}).strict();
export const UserWhereInputObjectSchema: z.ZodType<Prisma.UserWhereInput> = userwhereinputSchema as unknown as z.ZodType<Prisma.UserWhereInput>;
export const UserWhereInputObjectZodSchema = userwhereinputSchema;
