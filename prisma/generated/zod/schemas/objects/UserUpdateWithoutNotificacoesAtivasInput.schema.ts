import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { UserTypeSchema } from '../enums/UserType.schema';
import { EnumUserTypeFieldUpdateOperationsInputObjectSchema as EnumUserTypeFieldUpdateOperationsInputObjectSchema } from './EnumUserTypeFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { AnimalUpdateManyWithoutResponsibleNGONestedInputObjectSchema as AnimalUpdateManyWithoutResponsibleNGONestedInputObjectSchema } from './AnimalUpdateManyWithoutResponsibleNGONestedInput.schema';
import { AnimalUpdateManyWithoutAdopterUserNestedInputObjectSchema as AnimalUpdateManyWithoutAdopterUserNestedInputObjectSchema } from './AnimalUpdateManyWithoutAdopterUserNestedInput.schema'

const makeSchema = () => z.object({
  email: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  password: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  phone: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  cpf: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  cnpj: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  type: z.union([UserTypeSchema, z.lazy(() => EnumUserTypeFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  ownedPets: z.lazy(() => AnimalUpdateManyWithoutResponsibleNGONestedInputObjectSchema).optional(),
  interestedPets: z.lazy(() => AnimalUpdateManyWithoutAdopterUserNestedInputObjectSchema).optional()
}).strict();
export const UserUpdateWithoutNotificacoesAtivasInputObjectSchema: z.ZodType<Prisma.UserUpdateWithoutNotificacoesAtivasInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateWithoutNotificacoesAtivasInput>;
export const UserUpdateWithoutNotificacoesAtivasInputObjectZodSchema = makeSchema();
