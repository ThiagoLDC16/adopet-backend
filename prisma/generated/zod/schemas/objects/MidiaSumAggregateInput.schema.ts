import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  animalId: z.literal(true).optional()
}).strict();
export const MidiaSumAggregateInputObjectSchema: z.ZodType<Prisma.MidiaSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.MidiaSumAggregateInputType>;
export const MidiaSumAggregateInputObjectZodSchema = makeSchema();
