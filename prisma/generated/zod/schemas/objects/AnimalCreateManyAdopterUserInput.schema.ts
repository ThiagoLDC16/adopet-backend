import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  name: z.string(),
  age: z.number().int(),
  species: z.string(),
  breed: z.string(),
  description: z.string(),
  responsibleNGOId: z.number().int()
}).strict();
export const AnimalCreateManyAdopterUserInputObjectSchema: z.ZodType<Prisma.AnimalCreateManyAdopterUserInput> = makeSchema() as unknown as z.ZodType<Prisma.AnimalCreateManyAdopterUserInput>;
export const AnimalCreateManyAdopterUserInputObjectZodSchema = makeSchema();
