import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AnimalCreateNestedOneWithoutMidiaInputObjectSchema as AnimalCreateNestedOneWithoutMidiaInputObjectSchema } from './AnimalCreateNestedOneWithoutMidiaInput.schema'

const makeSchema = () => z.object({
  type: z.string(),
  extension: z.string(),
  url: z.string(),
  animal: z.lazy(() => AnimalCreateNestedOneWithoutMidiaInputObjectSchema)
}).strict();
export const MidiaCreateInputObjectSchema: z.ZodType<Prisma.MidiaCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.MidiaCreateInput>;
export const MidiaCreateInputObjectZodSchema = makeSchema();
