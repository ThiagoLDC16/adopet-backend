import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AnimalsCharacteristicsWhereInputObjectSchema as AnimalsCharacteristicsWhereInputObjectSchema } from './AnimalsCharacteristicsWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => AnimalsCharacteristicsWhereInputObjectSchema).optional(),
  some: z.lazy(() => AnimalsCharacteristicsWhereInputObjectSchema).optional(),
  none: z.lazy(() => AnimalsCharacteristicsWhereInputObjectSchema).optional()
}).strict();
export const AnimalsCharacteristicsListRelationFilterObjectSchema: z.ZodType<Prisma.AnimalsCharacteristicsListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.AnimalsCharacteristicsListRelationFilter>;
export const AnimalsCharacteristicsListRelationFilterObjectZodSchema = makeSchema();
