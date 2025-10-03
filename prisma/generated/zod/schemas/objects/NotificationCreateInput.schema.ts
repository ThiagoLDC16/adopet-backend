import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserCreateNestedOneWithoutNotificacoesAtivasInputObjectSchema as UserCreateNestedOneWithoutNotificacoesAtivasInputObjectSchema } from './UserCreateNestedOneWithoutNotificacoesAtivasInput.schema'

const makeSchema = () => z.object({
  message: z.string(),
  createdAt: z.coerce.date().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutNotificacoesAtivasInputObjectSchema)
}).strict();
export const NotificationCreateInputObjectSchema: z.ZodType<Prisma.NotificationCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.NotificationCreateInput>;
export const NotificationCreateInputObjectZodSchema = makeSchema();
