import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  name: z.string(),
  age: z.number().int(),
  species: z.string(),
  breed: z.string(),
  description: z.string(),
  adopterUserId: z.number().int().optional().nullable()
}).strict();
export const AnimalCreateManyResponsibleNGOInputObjectSchema: z.ZodType<Prisma.AnimalCreateManyResponsibleNGOInput> = makeSchema() as unknown as z.ZodType<Prisma.AnimalCreateManyResponsibleNGOInput>;
export const AnimalCreateManyResponsibleNGOInputObjectZodSchema = makeSchema();
