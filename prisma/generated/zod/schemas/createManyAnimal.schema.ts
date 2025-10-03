import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { AnimalCreateManyInputObjectSchema as AnimalCreateManyInputObjectSchema } from './objects/AnimalCreateManyInput.schema';

export const AnimalCreateManySchema: z.ZodType<Prisma.AnimalCreateManyArgs> = z.object({ data: z.union([ AnimalCreateManyInputObjectSchema, z.array(AnimalCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.AnimalCreateManyArgs>;

export const AnimalCreateManyZodSchema = z.object({ data: z.union([ AnimalCreateManyInputObjectSchema, z.array(AnimalCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();