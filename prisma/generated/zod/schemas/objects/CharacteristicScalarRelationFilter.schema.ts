import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CharacteristicWhereInputObjectSchema as CharacteristicWhereInputObjectSchema } from './CharacteristicWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => CharacteristicWhereInputObjectSchema).optional(),
  isNot: z.lazy(() => CharacteristicWhereInputObjectSchema).optional()
}).strict();
export const CharacteristicScalarRelationFilterObjectSchema: z.ZodType<Prisma.CharacteristicScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.CharacteristicScalarRelationFilter>;
export const CharacteristicScalarRelationFilterObjectZodSchema = makeSchema();
