import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { AnimalSelectObjectSchema as AnimalSelectObjectSchema } from './objects/AnimalSelect.schema';
import { AnimalCreateManyInputObjectSchema as AnimalCreateManyInputObjectSchema } from './objects/AnimalCreateManyInput.schema';

export const AnimalCreateManyAndReturnSchema: z.ZodType<Prisma.AnimalCreateManyAndReturnArgs> = z.object({ select: AnimalSelectObjectSchema.optional(), data: z.union([ AnimalCreateManyInputObjectSchema, z.array(AnimalCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.AnimalCreateManyAndReturnArgs>;

export const AnimalCreateManyAndReturnZodSchema = z.object({ select: AnimalSelectObjectSchema.optional(), data: z.union([ AnimalCreateManyInputObjectSchema, z.array(AnimalCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();