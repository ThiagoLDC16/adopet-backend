import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  midia: z.boolean().optional(),
  characteristics: z.boolean().optional()
}).strict();
export const AnimalCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.AnimalCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.AnimalCountOutputTypeSelect>;
export const AnimalCountOutputTypeSelectObjectZodSchema = makeSchema();
