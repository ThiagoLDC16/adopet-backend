import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserTypeSchema } from '../enums/UserType.schema';
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
  updatedAt: z.coerce.date().optional(),
  ownedPets: z.lazy(() => AnimalCreateNestedManyWithoutResponsibleNGOInputObjectSchema).optional(),
  interestedPets: z.lazy(() => AnimalCreateNestedManyWithoutAdopterUserInputObjectSchema).optional()
}).strict();
export const UserCreateWithoutNotificacoesAtivasInputObjectSchema: z.ZodType<Prisma.UserCreateWithoutNotificacoesAtivasInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateWithoutNotificacoesAtivasInput>;
export const UserCreateWithoutNotificacoesAtivasInputObjectZodSchema = makeSchema();
