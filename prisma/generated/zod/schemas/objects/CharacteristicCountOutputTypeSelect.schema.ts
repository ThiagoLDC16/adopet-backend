import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  animals: z.boolean().optional()
}).strict();
export const CharacteristicCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.CharacteristicCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.CharacteristicCountOutputTypeSelect>;
export const CharacteristicCountOutputTypeSelectObjectZodSchema = makeSchema();
