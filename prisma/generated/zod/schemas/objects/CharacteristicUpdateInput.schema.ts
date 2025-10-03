import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { AnimalsCharacteristicsUpdateManyWithoutCharacteristicNestedInputObjectSchema as AnimalsCharacteristicsUpdateManyWithoutCharacteristicNestedInputObjectSchema } from './AnimalsCharacteristicsUpdateManyWithoutCharacteristicNestedInput.schema'

const makeSchema = () => z.object({
  description: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  animals: z.lazy(() => AnimalsCharacteristicsUpdateManyWithoutCharacteristicNestedInputObjectSchema).optional()
}).strict();
export const CharacteristicUpdateInputObjectSchema: z.ZodType<Prisma.CharacteristicUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.CharacteristicUpdateInput>;
export const CharacteristicUpdateInputObjectZodSchema = makeSchema();
