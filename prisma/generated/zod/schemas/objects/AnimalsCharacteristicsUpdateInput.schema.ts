import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AnimalUpdateOneRequiredWithoutCharacteristicsNestedInputObjectSchema as AnimalUpdateOneRequiredWithoutCharacteristicsNestedInputObjectSchema } from './AnimalUpdateOneRequiredWithoutCharacteristicsNestedInput.schema';
import { CharacteristicUpdateOneRequiredWithoutAnimalsNestedInputObjectSchema as CharacteristicUpdateOneRequiredWithoutAnimalsNestedInputObjectSchema } from './CharacteristicUpdateOneRequiredWithoutAnimalsNestedInput.schema'

const makeSchema = () => z.object({
  animal: z.lazy(() => AnimalUpdateOneRequiredWithoutCharacteristicsNestedInputObjectSchema).optional(),
  characteristic: z.lazy(() => CharacteristicUpdateOneRequiredWithoutAnimalsNestedInputObjectSchema).optional()
}).strict();
export const AnimalsCharacteristicsUpdateInputObjectSchema: z.ZodType<Prisma.AnimalsCharacteristicsUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.AnimalsCharacteristicsUpdateInput>;
export const AnimalsCharacteristicsUpdateInputObjectZodSchema = makeSchema();
