import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { AnimalScalarRelationFilterObjectSchema as AnimalScalarRelationFilterObjectSchema } from './AnimalScalarRelationFilter.schema';
import { AnimalWhereInputObjectSchema as AnimalWhereInputObjectSchema } from './AnimalWhereInput.schema'

const midiawhereinputSchema = z.object({
  AND: z.union([z.lazy(() => MidiaWhereInputObjectSchema), z.lazy(() => MidiaWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => MidiaWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => MidiaWhereInputObjectSchema), z.lazy(() => MidiaWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  type: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  extension: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  url: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  animalId: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  animal: z.union([z.lazy(() => AnimalScalarRelationFilterObjectSchema), z.lazy(() => AnimalWhereInputObjectSchema)]).optional()
}).strict();
export const MidiaWhereInputObjectSchema: z.ZodType<Prisma.MidiaWhereInput> = midiawhereinputSchema as unknown as z.ZodType<Prisma.MidiaWhereInput>;
export const MidiaWhereInputObjectZodSchema = midiawhereinputSchema;
