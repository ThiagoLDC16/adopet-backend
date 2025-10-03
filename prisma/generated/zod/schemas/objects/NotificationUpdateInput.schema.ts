import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { UserUpdateOneRequiredWithoutNotificacoesAtivasNestedInputObjectSchema as UserUpdateOneRequiredWithoutNotificacoesAtivasNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutNotificacoesAtivasNestedInput.schema'

const makeSchema = () => z.object({
  message: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutNotificacoesAtivasNestedInputObjectSchema).optional()
}).strict();
export const NotificationUpdateInputObjectSchema: z.ZodType<Prisma.NotificationUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.NotificationUpdateInput>;
export const NotificationUpdateInputObjectZodSchema = makeSchema();
