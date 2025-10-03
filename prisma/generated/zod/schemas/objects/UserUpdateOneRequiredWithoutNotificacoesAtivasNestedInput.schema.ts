import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserCreateWithoutNotificacoesAtivasInputObjectSchema as UserCreateWithoutNotificacoesAtivasInputObjectSchema } from './UserCreateWithoutNotificacoesAtivasInput.schema';
import { UserUncheckedCreateWithoutNotificacoesAtivasInputObjectSchema as UserUncheckedCreateWithoutNotificacoesAtivasInputObjectSchema } from './UserUncheckedCreateWithoutNotificacoesAtivasInput.schema';
import { UserCreateOrConnectWithoutNotificacoesAtivasInputObjectSchema as UserCreateOrConnectWithoutNotificacoesAtivasInputObjectSchema } from './UserCreateOrConnectWithoutNotificacoesAtivasInput.schema';
import { UserUpsertWithoutNotificacoesAtivasInputObjectSchema as UserUpsertWithoutNotificacoesAtivasInputObjectSchema } from './UserUpsertWithoutNotificacoesAtivasInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateToOneWithWhereWithoutNotificacoesAtivasInputObjectSchema as UserUpdateToOneWithWhereWithoutNotificacoesAtivasInputObjectSchema } from './UserUpdateToOneWithWhereWithoutNotificacoesAtivasInput.schema';
import { UserUpdateWithoutNotificacoesAtivasInputObjectSchema as UserUpdateWithoutNotificacoesAtivasInputObjectSchema } from './UserUpdateWithoutNotificacoesAtivasInput.schema';
import { UserUncheckedUpdateWithoutNotificacoesAtivasInputObjectSchema as UserUncheckedUpdateWithoutNotificacoesAtivasInputObjectSchema } from './UserUncheckedUpdateWithoutNotificacoesAtivasInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutNotificacoesAtivasInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutNotificacoesAtivasInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutNotificacoesAtivasInputObjectSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutNotificacoesAtivasInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserUpdateToOneWithWhereWithoutNotificacoesAtivasInputObjectSchema), z.lazy(() => UserUpdateWithoutNotificacoesAtivasInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutNotificacoesAtivasInputObjectSchema)]).optional()
}).strict();
export const UserUpdateOneRequiredWithoutNotificacoesAtivasNestedInputObjectSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutNotificacoesAtivasNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateOneRequiredWithoutNotificacoesAtivasNestedInput>;
export const UserUpdateOneRequiredWithoutNotificacoesAtivasNestedInputObjectZodSchema = makeSchema();
