import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  type: z.string(),
  extension: z.string(),
  url: z.string(),
  animalId: z.number().int()
}).strict();
export const MidiaCreateManyInputObjectSchema: z.ZodType<Prisma.MidiaCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.MidiaCreateManyInput>;
export const MidiaCreateManyInputObjectZodSchema = makeSchema();
