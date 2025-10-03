import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { MidiaUncheckedUpdateManyWithoutAnimalNestedInputObjectSchema as MidiaUncheckedUpdateManyWithoutAnimalNestedInputObjectSchema } from './MidiaUncheckedUpdateManyWithoutAnimalNestedInput.schema';
import { AnimalsCharacteristicsUncheckedUpdateManyWithoutAnimalNestedInputObjectSchema as AnimalsCharacteristicsUncheckedUpdateManyWithoutAnimalNestedInputObjectSchema } from './AnimalsCharacteristicsUncheckedUpdateManyWithoutAnimalNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  age: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  species: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  breed: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  description: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  responsibleNGOId: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  midia: z.lazy(() => MidiaUncheckedUpdateManyWithoutAnimalNestedInputObjectSchema).optional(),
  characteristics: z.lazy(() => AnimalsCharacteristicsUncheckedUpdateManyWithoutAnimalNestedInputObjectSchema).optional()
}).strict();
export const AnimalUncheckedUpdateWithoutAdopterUserInputObjectSchema: z.ZodType<Prisma.AnimalUncheckedUpdateWithoutAdopterUserInput> = makeSchema() as unknown as z.ZodType<Prisma.AnimalUncheckedUpdateWithoutAdopterUserInput>;
export const AnimalUncheckedUpdateWithoutAdopterUserInputObjectZodSchema = makeSchema();
