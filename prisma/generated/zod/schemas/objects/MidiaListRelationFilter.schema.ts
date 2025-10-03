import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { MidiaWhereInputObjectSchema as MidiaWhereInputObjectSchema } from './MidiaWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => MidiaWhereInputObjectSchema).optional(),
  some: z.lazy(() => MidiaWhereInputObjectSchema).optional(),
  none: z.lazy(() => MidiaWhereInputObjectSchema).optional()
}).strict();
export const MidiaListRelationFilterObjectSchema: z.ZodType<Prisma.MidiaListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.MidiaListRelationFilter>;
export const MidiaListRelationFilterObjectZodSchema = makeSchema();
