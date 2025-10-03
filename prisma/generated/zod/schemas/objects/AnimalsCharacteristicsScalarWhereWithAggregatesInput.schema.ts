import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema'

const animalscharacteristicsscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => AnimalsCharacteristicsScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => AnimalsCharacteristicsScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => AnimalsCharacteristicsScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => AnimalsCharacteristicsScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => AnimalsCharacteristicsScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  animalId: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  characteristicId: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional()
}).strict();
export const AnimalsCharacteristicsScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.AnimalsCharacteristicsScalarWhereWithAggregatesInput> = animalscharacteristicsscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.AnimalsCharacteristicsScalarWhereWithAggregatesInput>;
export const AnimalsCharacteristicsScalarWhereWithAggregatesInputObjectZodSchema = animalscharacteristicsscalarwherewithaggregatesinputSchema;
