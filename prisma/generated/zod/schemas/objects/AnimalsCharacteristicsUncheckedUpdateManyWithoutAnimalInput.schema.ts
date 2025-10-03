import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  characteristicId: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const AnimalsCharacteristicsUncheckedUpdateManyWithoutAnimalInputObjectSchema: z.ZodType<Prisma.AnimalsCharacteristicsUncheckedUpdateManyWithoutAnimalInput> = makeSchema() as unknown as z.ZodType<Prisma.AnimalsCharacteristicsUncheckedUpdateManyWithoutAnimalInput>;
export const AnimalsCharacteristicsUncheckedUpdateManyWithoutAnimalInputObjectZodSchema = makeSchema();
