import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  animalId: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  characteristicId: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const AnimalsCharacteristicsUncheckedUpdateManyInputObjectSchema: z.ZodType<Prisma.AnimalsCharacteristicsUncheckedUpdateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.AnimalsCharacteristicsUncheckedUpdateManyInput>;
export const AnimalsCharacteristicsUncheckedUpdateManyInputObjectZodSchema = makeSchema();
