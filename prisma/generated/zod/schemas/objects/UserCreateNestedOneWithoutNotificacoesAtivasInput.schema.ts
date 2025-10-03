import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserCreateWithoutNotificacoesAtivasInputObjectSchema as UserCreateWithoutNotificacoesAtivasInputObjectSchema } from './UserCreateWithoutNotificacoesAtivasInput.schema';
import { UserUncheckedCreateWithoutNotificacoesAtivasInputObjectSchema as UserUncheckedCreateWithoutNotificacoesAtivasInputObjectSchema } from './UserUncheckedCreateWithoutNotificacoesAtivasInput.schema';
import { UserCreateOrConnectWithoutNotificacoesAtivasInputObjectSchema as UserCreateOrConnectWithoutNotificacoesAtivasInputObjectSchema } from './UserCreateOrConnectWithoutNotificacoesAtivasInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutNotificacoesAtivasInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutNotificacoesAtivasInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutNotificacoesAtivasInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional()
}).strict();
export const UserCreateNestedOneWithoutNotificacoesAtivasInputObjectSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutNotificacoesAtivasInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateNestedOneWithoutNotificacoesAtivasInput>;
export const UserCreateNestedOneWithoutNotificacoesAtivasInputObjectZodSchema = makeSchema();
