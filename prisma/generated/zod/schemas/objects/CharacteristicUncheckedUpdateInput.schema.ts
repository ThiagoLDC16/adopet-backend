import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { AnimalsCharacteristicsUncheckedUpdateManyWithoutCharacteristicNestedInputObjectSchema as AnimalsCharacteristicsUncheckedUpdateManyWithoutCharacteristicNestedInputObjectSchema } from './AnimalsCharacteristicsUncheckedUpdateManyWithoutCharacteristicNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  description: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  animals: z.lazy(() => AnimalsCharacteristicsUncheckedUpdateManyWithoutCharacteristicNestedInputObjectSchema).optional()
}).strict();
export const CharacteristicUncheckedUpdateInputObjectSchema: z.ZodType<Prisma.CharacteristicUncheckedUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.CharacteristicUncheckedUpdateInput>;
export const CharacteristicUncheckedUpdateInputObjectZodSchema = makeSchema();
