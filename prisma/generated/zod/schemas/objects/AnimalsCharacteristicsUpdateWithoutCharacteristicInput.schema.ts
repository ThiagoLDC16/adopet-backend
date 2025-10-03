import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AnimalUpdateOneRequiredWithoutCharacteristicsNestedInputObjectSchema as AnimalUpdateOneRequiredWithoutCharacteristicsNestedInputObjectSchema } from './AnimalUpdateOneRequiredWithoutCharacteristicsNestedInput.schema'

const makeSchema = () => z.object({
  animal: z.lazy(() => AnimalUpdateOneRequiredWithoutCharacteristicsNestedInputObjectSchema).optional()
}).strict();
export const AnimalsCharacteristicsUpdateWithoutCharacteristicInputObjectSchema: z.ZodType<Prisma.AnimalsCharacteristicsUpdateWithoutCharacteristicInput> = makeSchema() as unknown as z.ZodType<Prisma.AnimalsCharacteristicsUpdateWithoutCharacteristicInput>;
export const AnimalsCharacteristicsUpdateWithoutCharacteristicInputObjectZodSchema = makeSchema();
