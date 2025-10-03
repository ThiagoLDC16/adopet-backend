import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema'

const characteristicscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => CharacteristicScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => CharacteristicScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => CharacteristicScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => CharacteristicScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => CharacteristicScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  description: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional()
}).strict();
export const CharacteristicScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.CharacteristicScalarWhereWithAggregatesInput> = characteristicscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.CharacteristicScalarWhereWithAggregatesInput>;
export const CharacteristicScalarWhereWithAggregatesInputObjectZodSchema = characteristicscalarwherewithaggregatesinputSchema;
