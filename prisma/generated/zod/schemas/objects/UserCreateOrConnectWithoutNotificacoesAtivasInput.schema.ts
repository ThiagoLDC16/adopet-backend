import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutNotificacoesAtivasInputObjectSchema as UserCreateWithoutNotificacoesAtivasInputObjectSchema } from './UserCreateWithoutNotificacoesAtivasInput.schema';
import { UserUncheckedCreateWithoutNotificacoesAtivasInputObjectSchema as UserUncheckedCreateWithoutNotificacoesAtivasInputObjectSchema } from './UserUncheckedCreateWithoutNotificacoesAtivasInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserCreateWithoutNotificacoesAtivasInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutNotificacoesAtivasInputObjectSchema)])
}).strict();
export const UserCreateOrConnectWithoutNotificacoesAtivasInputObjectSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutNotificacoesAtivasInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateOrConnectWithoutNotificacoesAtivasInput>;
export const UserCreateOrConnectWithoutNotificacoesAtivasInputObjectZodSchema = makeSchema();
