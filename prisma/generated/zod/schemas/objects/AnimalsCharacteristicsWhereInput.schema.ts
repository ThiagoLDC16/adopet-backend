import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { AnimalScalarRelationFilterObjectSchema as AnimalScalarRelationFilterObjectSchema } from './AnimalScalarRelationFilter.schema';
import { AnimalWhereInputObjectSchema as AnimalWhereInputObjectSchema } from './AnimalWhereInput.schema';
import { CharacteristicScalarRelationFilterObjectSchema as CharacteristicScalarRelationFilterObjectSchema } from './CharacteristicScalarRelationFilter.schema';
import { CharacteristicWhereInputObjectSchema as CharacteristicWhereInputObjectSchema } from './CharacteristicWhereInput.schema'

const animalscharacteristicswhereinputSchema = z.object({
  AND: z.union([z.lazy(() => AnimalsCharacteristicsWhereInputObjectSchema), z.lazy(() => AnimalsCharacteristicsWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => AnimalsCharacteristicsWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => AnimalsCharacteristicsWhereInputObjectSchema), z.lazy(() => AnimalsCharacteristicsWhereInputObjectSchema).array()]).optional(),
  animalId: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  characteristicId: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  animal: z.union([z.lazy(() => AnimalScalarRelationFilterObjectSchema), z.lazy(() => AnimalWhereInputObjectSchema)]).optional(),
  characteristic: z.union([z.lazy(() => CharacteristicScalarRelationFilterObjectSchema), z.lazy(() => CharacteristicWhereInputObjectSchema)]).optional()
}).strict();
export const AnimalsCharacteristicsWhereInputObjectSchema: z.ZodType<Prisma.AnimalsCharacteristicsWhereInput> = animalscharacteristicswhereinputSchema as unknown as z.ZodType<Prisma.AnimalsCharacteristicsWhereInput>;
export const AnimalsCharacteristicsWhereInputObjectZodSchema = animalscharacteristicswhereinputSchema;
