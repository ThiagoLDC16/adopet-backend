import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  animalId: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const AnimalsCharacteristicsUncheckedUpdateManyWithoutCharacteristicInputObjectSchema: z.ZodType<Prisma.AnimalsCharacteristicsUncheckedUpdateManyWithoutCharacteristicInput> = makeSchema() as unknown as z.ZodType<Prisma.AnimalsCharacteristicsUncheckedUpdateManyWithoutCharacteristicInput>;
export const AnimalsCharacteristicsUncheckedUpdateManyWithoutCharacteristicInputObjectZodSchema = makeSchema();
