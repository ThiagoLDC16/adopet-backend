import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema'

const midiascalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => MidiaScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => MidiaScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => MidiaScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => MidiaScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => MidiaScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  type: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  extension: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  url: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  animalId: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional()
}).strict();
export const MidiaScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.MidiaScalarWhereWithAggregatesInput> = midiascalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.MidiaScalarWhereWithAggregatesInput>;
export const MidiaScalarWhereWithAggregatesInputObjectZodSchema = midiascalarwherewithaggregatesinputSchema;
