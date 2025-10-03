import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema'

const midiascalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => MidiaScalarWhereInputObjectSchema), z.lazy(() => MidiaScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => MidiaScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => MidiaScalarWhereInputObjectSchema), z.lazy(() => MidiaScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  type: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  extension: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  url: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  animalId: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional()
}).strict();
export const MidiaScalarWhereInputObjectSchema: z.ZodType<Prisma.MidiaScalarWhereInput> = midiascalarwhereinputSchema as unknown as z.ZodType<Prisma.MidiaScalarWhereInput>;
export const MidiaScalarWhereInputObjectZodSchema = midiascalarwhereinputSchema;
