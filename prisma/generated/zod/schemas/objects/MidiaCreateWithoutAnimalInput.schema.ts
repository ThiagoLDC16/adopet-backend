import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  type: z.string(),
  extension: z.string(),
  url: z.string()
}).strict();
export const MidiaCreateWithoutAnimalInputObjectSchema: z.ZodType<Prisma.MidiaCreateWithoutAnimalInput> = makeSchema() as unknown as z.ZodType<Prisma.MidiaCreateWithoutAnimalInput>;
export const MidiaCreateWithoutAnimalInputObjectZodSchema = makeSchema();
