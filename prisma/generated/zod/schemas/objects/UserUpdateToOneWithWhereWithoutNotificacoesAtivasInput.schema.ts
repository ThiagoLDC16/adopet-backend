import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserUpdateWithoutNotificacoesAtivasInputObjectSchema as UserUpdateWithoutNotificacoesAtivasInputObjectSchema } from './UserUpdateWithoutNotificacoesAtivasInput.schema';
import { UserUncheckedUpdateWithoutNotificacoesAtivasInputObjectSchema as UserUncheckedUpdateWithoutNotificacoesAtivasInputObjectSchema } from './UserUncheckedUpdateWithoutNotificacoesAtivasInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserUpdateWithoutNotificacoesAtivasInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutNotificacoesAtivasInputObjectSchema)])
}).strict();
export const UserUpdateToOneWithWhereWithoutNotificacoesAtivasInputObjectSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutNotificacoesAtivasInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutNotificacoesAtivasInput>;
export const UserUpdateToOneWithWhereWithoutNotificacoesAtivasInputObjectZodSchema = makeSchema();
