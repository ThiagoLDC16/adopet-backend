import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  animalId: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  characteristicId: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const AnimalsCharacteristicsUncheckedUpdateInputObjectSchema: z.ZodType<Prisma.AnimalsCharacteristicsUncheckedUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.AnimalsCharacteristicsUncheckedUpdateInput>;
export const AnimalsCharacteristicsUncheckedUpdateInputObjectZodSchema = makeSchema();
