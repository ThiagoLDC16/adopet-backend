import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  description: z.literal(true).optional()
}).strict();
export const CharacteristicMinAggregateInputObjectSchema: z.ZodType<Prisma.CharacteristicMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.CharacteristicMinAggregateInputType>;
export const CharacteristicMinAggregateInputObjectZodSchema = makeSchema();
