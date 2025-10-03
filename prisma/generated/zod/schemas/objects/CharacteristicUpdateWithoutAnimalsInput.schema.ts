import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  description: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const CharacteristicUpdateWithoutAnimalsInputObjectSchema: z.ZodType<Prisma.CharacteristicUpdateWithoutAnimalsInput> = makeSchema() as unknown as z.ZodType<Prisma.CharacteristicUpdateWithoutAnimalsInput>;
export const CharacteristicUpdateWithoutAnimalsInputObjectZodSchema = makeSchema();
