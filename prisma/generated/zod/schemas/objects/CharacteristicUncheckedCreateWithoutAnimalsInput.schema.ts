import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  description: z.string()
}).strict();
export const CharacteristicUncheckedCreateWithoutAnimalsInputObjectSchema: z.ZodType<Prisma.CharacteristicUncheckedCreateWithoutAnimalsInput> = makeSchema() as unknown as z.ZodType<Prisma.CharacteristicUncheckedCreateWithoutAnimalsInput>;
export const CharacteristicUncheckedCreateWithoutAnimalsInputObjectZodSchema = makeSchema();
