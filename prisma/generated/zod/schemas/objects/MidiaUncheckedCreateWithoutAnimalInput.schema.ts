import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  type: z.string(),
  extension: z.string(),
  url: z.string()
}).strict();
export const MidiaUncheckedCreateWithoutAnimalInputObjectSchema: z.ZodType<Prisma.MidiaUncheckedCreateWithoutAnimalInput> = makeSchema() as unknown as z.ZodType<Prisma.MidiaUncheckedCreateWithoutAnimalInput>;
export const MidiaUncheckedCreateWithoutAnimalInputObjectZodSchema = makeSchema();
