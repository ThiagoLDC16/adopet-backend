import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  description: z.string()
}).strict();
export const CharacteristicCreateWithoutAnimalsInputObjectSchema: z.ZodType<Prisma.CharacteristicCreateWithoutAnimalsInput> = makeSchema() as unknown as z.ZodType<Prisma.CharacteristicCreateWithoutAnimalsInput>;
export const CharacteristicCreateWithoutAnimalsInputObjectZodSchema = makeSchema();
