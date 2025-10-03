import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { AnimalsCharacteristicsListRelationFilterObjectSchema as AnimalsCharacteristicsListRelationFilterObjectSchema } from './AnimalsCharacteristicsListRelationFilter.schema'

const characteristicwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => CharacteristicWhereInputObjectSchema), z.lazy(() => CharacteristicWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => CharacteristicWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => CharacteristicWhereInputObjectSchema), z.lazy(() => CharacteristicWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  description: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  animals: z.lazy(() => AnimalsCharacteristicsListRelationFilterObjectSchema).optional()
}).strict();
export const CharacteristicWhereInputObjectSchema: z.ZodType<Prisma.CharacteristicWhereInput> = characteristicwhereinputSchema as unknown as z.ZodType<Prisma.CharacteristicWhereInput>;
export const CharacteristicWhereInputObjectZodSchema = characteristicwhereinputSchema;
