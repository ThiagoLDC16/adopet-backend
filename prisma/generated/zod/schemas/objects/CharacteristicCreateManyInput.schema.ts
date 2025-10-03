import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  description: z.string()
}).strict();
export const CharacteristicCreateManyInputObjectSchema: z.ZodType<Prisma.CharacteristicCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.CharacteristicCreateManyInput>;
export const CharacteristicCreateManyInputObjectZodSchema = makeSchema();
