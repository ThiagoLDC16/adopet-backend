import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserTypeSchema } from '../enums/UserType.schema';
import { AnimalUncheckedCreateNestedManyWithoutResponsibleNGOInputObjectSchema as AnimalUncheckedCreateNestedManyWithoutResponsibleNGOInputObjectSchema } from './AnimalUncheckedCreateNestedManyWithoutResponsibleNGOInput.schema';
import { AnimalUncheckedCreateNestedManyWithoutAdopterUserInputObjectSchema as AnimalUncheckedCreateNestedManyWithoutAdopterUserInputObjectSchema } from './AnimalUncheckedCreateNestedManyWithoutAdopterUserInput.schema'

const makeSchema = () => z.object({
  id: z.number().int().optional(),
  email: z.string(),
  name: z.string(),
  password: z.string(),
  phone: z.string().optional().nullable(),
  cpf: z.string().optional().nullable(),
  cnpj: z.string().optional().nullable(),
  type: UserTypeSchema,
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  ownedPets: z.lazy(() => AnimalUncheckedCreateNestedManyWithoutResponsibleNGOInputObjectSchema).optional(),
  interestedPets: z.lazy(() => AnimalUncheckedCreateNestedManyWithoutAdopterUserInputObjectSchema).optional()
}).strict();
export const UserUncheckedCreateWithoutNotificacoesAtivasInputObjectSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutNotificacoesAtivasInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUncheckedCreateWithoutNotificacoesAtivasInput>;
export const UserUncheckedCreateWithoutNotificacoesAtivasInputObjectZodSchema = makeSchema();
