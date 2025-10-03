import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  type: z.string(),
  extension: z.string(),
  url: z.string()
}).strict();
export const MidiaCreateManyAnimalInputObjectSchema: z.ZodType<Prisma.MidiaCreateManyAnimalInput> = makeSchema() as unknown as z.ZodType<Prisma.MidiaCreateManyAnimalInput>;
export const MidiaCreateManyAnimalInputObjectZodSchema = makeSchema();
