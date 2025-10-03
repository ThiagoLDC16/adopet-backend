import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserUpdateWithoutNotificacoesAtivasInputObjectSchema as UserUpdateWithoutNotificacoesAtivasInputObjectSchema } from './UserUpdateWithoutNotificacoesAtivasInput.schema';
import { UserUncheckedUpdateWithoutNotificacoesAtivasInputObjectSchema as UserUncheckedUpdateWithoutNotificacoesAtivasInputObjectSchema } from './UserUncheckedUpdateWithoutNotificacoesAtivasInput.schema';
import { UserCreateWithoutNotificacoesAtivasInputObjectSchema as UserCreateWithoutNotificacoesAtivasInputObjectSchema } from './UserCreateWithoutNotificacoesAtivasInput.schema';
import { UserUncheckedCreateWithoutNotificacoesAtivasInputObjectSchema as UserUncheckedCreateWithoutNotificacoesAtivasInputObjectSchema } from './UserUncheckedCreateWithoutNotificacoesAtivasInput.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => UserUpdateWithoutNotificacoesAtivasInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutNotificacoesAtivasInputObjectSchema)]),
  create: z.union([z.lazy(() => UserCreateWithoutNotificacoesAtivasInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutNotificacoesAtivasInputObjectSchema)]),
  where: z.lazy(() => UserWhereInputObjectSchema).optional()
}).strict();
export const UserUpsertWithoutNotificacoesAtivasInputObjectSchema: z.ZodType<Prisma.UserUpsertWithoutNotificacoesAtivasInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpsertWithoutNotificacoesAtivasInput>;
export const UserUpsertWithoutNotificacoesAtivasInputObjectZodSchema = makeSchema();
