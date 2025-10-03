import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CharacteristicUpdateOneRequiredWithoutAnimalsNestedInputObjectSchema as CharacteristicUpdateOneRequiredWithoutAnimalsNestedInputObjectSchema } from './CharacteristicUpdateOneRequiredWithoutAnimalsNestedInput.schema'

const makeSchema = () => z.object({
  characteristic: z.lazy(() => CharacteristicUpdateOneRequiredWithoutAnimalsNestedInputObjectSchema).optional()
}).strict();
export const AnimalsCharacteristicsUpdateWithoutAnimalInputObjectSchema: z.ZodType<Prisma.AnimalsCharacteristicsUpdateWithoutAnimalInput> = makeSchema() as unknown as z.ZodType<Prisma.AnimalsCharacteristicsUpdateWithoutAnimalInput>;
export const AnimalsCharacteristicsUpdateWithoutAnimalInputObjectZodSchema = makeSchema();
