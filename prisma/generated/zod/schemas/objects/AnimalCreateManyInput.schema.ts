import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  name: z.string(),
  age: z.number().int(),
  species: z.string(),
  breed: z.string(),
  description: z.string(),
  responsibleNGOId: z.number().int(),
  adopterUserId: z.number().int().optional().nullable()
}).strict();
export const AnimalCreateManyInputObjectSchema: z.ZodType<Prisma.AnimalCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.AnimalCreateManyInput>;
export const AnimalCreateManyInputObjectZodSchema = makeSchema();
