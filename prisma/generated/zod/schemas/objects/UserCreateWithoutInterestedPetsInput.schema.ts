import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserTypeSchema } from '../enums/UserType.schema';
import { NotificationCreateNestedManyWithoutUserInputObjectSchema as NotificationCreateNestedManyWithoutUserInputObjectSchema } from './NotificationCreateNestedManyWithoutUserInput.schema';
import { AnimalCreateNestedManyWithoutResponsibleNGOInputObjectSchema as AnimalCreateNestedManyWithoutResponsibleNGOInputObjectSchema } from './AnimalCreateNestedManyWithoutResponsibleNGOInput.schema'

const makeSchema = () => z.object({
  email: z.string(),
  name: z.string(),
  password: z.string(),
  phone: z.string().optional().nullable(),
  cpf: z.string().optional().nullable(),
  cnpj: z.string().optional().nullable(),
  type: UserTypeSchema,
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  notificacoesAtivas: z.lazy(() => NotificationCreateNestedManyWithoutUserInputObjectSchema).optional(),
  ownedPets: z.lazy(() => AnimalCreateNestedManyWithoutResponsibleNGOInputObjectSchema).optional()
}).strict();
export const UserCreateWithoutInterestedPetsInputObjectSchema: z.ZodType<Prisma.UserCreateWithoutInterestedPetsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateWithoutInterestedPetsInput>;
export const UserCreateWithoutInterestedPetsInputObjectZodSchema = makeSchema();
