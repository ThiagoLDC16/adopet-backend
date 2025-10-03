import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  characteristicId: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const AnimalsCharacteristicsUncheckedUpdateWithoutAnimalInputObjectSchema: z.ZodType<Prisma.AnimalsCharacteristicsUncheckedUpdateWithoutAnimalInput> = makeSchema() as unknown as z.ZodType<Prisma.AnimalsCharacteristicsUncheckedUpdateWithoutAnimalInput>;
export const AnimalsCharacteristicsUncheckedUpdateWithoutAnimalInputObjectZodSchema = makeSchema();
