import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { AnimalsCharacteristicsSelectObjectSchema as AnimalsCharacteristicsSelectObjectSchema } from './objects/AnimalsCharacteristicsSelect.schema';
import { AnimalsCharacteristicsCreateManyInputObjectSchema as AnimalsCharacteristicsCreateManyInputObjectSchema } from './objects/AnimalsCharacteristicsCreateManyInput.schema';

export const AnimalsCharacteristicsCreateManyAndReturnSchema: z.ZodType<Prisma.AnimalsCharacteristicsCreateManyAndReturnArgs> = z.object({ select: AnimalsCharacteristicsSelectObjectSchema.optional(), data: z.union([ AnimalsCharacteristicsCreateManyInputObjectSchema, z.array(AnimalsCharacteristicsCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.AnimalsCharacteristicsCreateManyAndReturnArgs>;

export const AnimalsCharacteristicsCreateManyAndReturnZodSchema = z.object({ select: AnimalsCharacteristicsSelectObjectSchema.optional(), data: z.union([ AnimalsCharacteristicsCreateManyInputObjectSchema, z.array(AnimalsCharacteristicsCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();