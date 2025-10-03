import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableIntFieldUpdateOperationsInputObjectSchema as NullableIntFieldUpdateOperationsInputObjectSchema } from './NullableIntFieldUpdateOperationsInput.schema';
import { MidiaUncheckedUpdateManyWithoutAnimalNestedInputObjectSchema as MidiaUncheckedUpdateManyWithoutAnimalNestedInputObjectSchema } from './MidiaUncheckedUpdateManyWithoutAnimalNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  age: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  species: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  breed: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  description: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  responsibleNGOId: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  adopterUserId: z.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  midia: z.lazy(() => MidiaUncheckedUpdateManyWithoutAnimalNestedInputObjectSchema).optional()
}).strict();
export const AnimalUncheckedUpdateWithoutCharacteristicsInputObjectSchema: z.ZodType<Prisma.AnimalUncheckedUpdateWithoutCharacteristicsInput> = makeSchema() as unknown as z.ZodType<Prisma.AnimalUncheckedUpdateWithoutCharacteristicsInput>;
export const AnimalUncheckedUpdateWithoutCharacteristicsInputObjectZodSchema = makeSchema();
