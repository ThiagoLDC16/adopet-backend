import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { MidiaUpdateManyWithoutAnimalNestedInputObjectSchema as MidiaUpdateManyWithoutAnimalNestedInputObjectSchema } from './MidiaUpdateManyWithoutAnimalNestedInput.schema';
import { AnimalsCharacteristicsUpdateManyWithoutAnimalNestedInputObjectSchema as AnimalsCharacteristicsUpdateManyWithoutAnimalNestedInputObjectSchema } from './AnimalsCharacteristicsUpdateManyWithoutAnimalNestedInput.schema';
import { UserUpdateOneRequiredWithoutOwnedPetsNestedInputObjectSchema as UserUpdateOneRequiredWithoutOwnedPetsNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutOwnedPetsNestedInput.schema'

const makeSchema = () => z.object({
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  age: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  species: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  breed: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  description: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  midia: z.lazy(() => MidiaUpdateManyWithoutAnimalNestedInputObjectSchema).optional(),
  characteristics: z.lazy(() => AnimalsCharacteristicsUpdateManyWithoutAnimalNestedInputObjectSchema).optional(),
  responsibleNGO: z.lazy(() => UserUpdateOneRequiredWithoutOwnedPetsNestedInputObjectSchema).optional()
}).strict();
export const AnimalUpdateWithoutAdopterUserInputObjectSchema: z.ZodType<Prisma.AnimalUpdateWithoutAdopterUserInput> = makeSchema() as unknown as z.ZodType<Prisma.AnimalUpdateWithoutAdopterUserInput>;
export const AnimalUpdateWithoutAdopterUserInputObjectZodSchema = makeSchema();
