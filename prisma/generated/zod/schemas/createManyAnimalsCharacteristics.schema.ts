import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { AnimalsCharacteristicsCreateManyInputObjectSchema as AnimalsCharacteristicsCreateManyInputObjectSchema } from './objects/AnimalsCharacteristicsCreateManyInput.schema';

export const AnimalsCharacteristicsCreateManySchema: z.ZodType<Prisma.AnimalsCharacteristicsCreateManyArgs> = z.object({ data: z.union([ AnimalsCharacteristicsCreateManyInputObjectSchema, z.array(AnimalsCharacteristicsCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.AnimalsCharacteristicsCreateManyArgs>;

export const AnimalsCharacteristicsCreateManyZodSchema = z.object({ data: z.union([ AnimalsCharacteristicsCreateManyInputObjectSchema, z.array(AnimalsCharacteristicsCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();