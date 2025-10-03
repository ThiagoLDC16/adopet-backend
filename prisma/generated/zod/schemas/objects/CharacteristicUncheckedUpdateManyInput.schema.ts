import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  description: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const CharacteristicUncheckedUpdateManyInputObjectSchema: z.ZodType<Prisma.CharacteristicUncheckedUpdateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.CharacteristicUncheckedUpdateManyInput>;
export const CharacteristicUncheckedUpdateManyInputObjectZodSchema = makeSchema();
