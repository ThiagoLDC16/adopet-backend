import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserTypeSchema } from '../enums/UserType.schema';
import { NotificationUncheckedCreateNestedManyWithoutUserInputObjectSchema as NotificationUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './NotificationUncheckedCreateNestedManyWithoutUserInput.schema';
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
  notificacoesAtivas: z.lazy(() => NotificationUncheckedCreateNestedManyWithoutUserInputObjectSchema),
  ownedPets: z.lazy(() => AnimalUncheckedCreateNestedManyWithoutResponsibleNGOInputObjectSchema),
  interestedPets: z.lazy(() => AnimalUncheckedCreateNestedManyWithoutAdopterUserInputObjectSchema)
}).strict();
export const UserUncheckedCreateInputObjectSchema: z.ZodType<Prisma.UserUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUncheckedCreateInput>;
export const UserUncheckedCreateInputObjectZodSchema = makeSchema();
