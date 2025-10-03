import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserTypeSchema } from '../enums/UserType.schema';
import { NotificationCreateNestedManyWithoutUserInputObjectSchema as NotificationCreateNestedManyWithoutUserInputObjectSchema } from './NotificationCreateNestedManyWithoutUserInput.schema';
import { AnimalCreateNestedManyWithoutResponsibleNGOInputObjectSchema as AnimalCreateNestedManyWithoutResponsibleNGOInputObjectSchema } from './AnimalCreateNestedManyWithoutResponsibleNGOInput.schema';
import { AnimalCreateNestedManyWithoutAdopterUserInputObjectSchema as AnimalCreateNestedManyWithoutAdopterUserInputObjectSchema } from './AnimalCreateNestedManyWithoutAdopterUserInput.schema'

const makeSchema = () => z.object({
  email: z.string(),
  name: z.string(),
  password: z.string(),
  phone: z.string().optional().nullable(),
  cpf: z.string().optional().nullable(),
  cnpj: z.string().optional().nullable(),
  type: UserTypeSchema,
  createdAt: z.coerce.date().optional(),
  notificacoesAtivas: z.lazy(() => NotificationCreateNestedManyWithoutUserInputObjectSchema),
  ownedPets: z.lazy(() => AnimalCreateNestedManyWithoutResponsibleNGOInputObjectSchema),
  interestedPets: z.lazy(() => AnimalCreateNestedManyWithoutAdopterUserInputObjectSchema)
}).strict();
export const UserCreateInputObjectSchema: z.ZodType<Prisma.UserCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateInput>;
export const UserCreateInputObjectZodSchema = makeSchema();
