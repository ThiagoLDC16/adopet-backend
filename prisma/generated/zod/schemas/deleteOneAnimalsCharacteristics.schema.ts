import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { AnimalsCharacteristicsSelectObjectSchema as AnimalsCharacteristicsSelectObjectSchema } from './objects/AnimalsCharacteristicsSelect.schema';
import { AnimalsCharacteristicsIncludeObjectSchema as AnimalsCharacteristicsIncludeObjectSchema } from './objects/AnimalsCharacteristicsInclude.schema';
import { AnimalsCharacteristicsWhereUniqueInputObjectSchema as AnimalsCharacteristicsWhereUniqueInputObjectSchema } from './objects/AnimalsCharacteristicsWhereUniqueInput.schema';

export const AnimalsCharacteristicsDeleteOneSchema: z.ZodType<Prisma.AnimalsCharacteristicsDeleteArgs> = z.object({ select: AnimalsCharacteristicsSelectObjectSchema.optional(), include: AnimalsCharacteristicsIncludeObjectSchema.optional(), where: AnimalsCharacteristicsWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.AnimalsCharacteristicsDeleteArgs>;

export const AnimalsCharacteristicsDeleteOneZodSchema = z.object({ select: AnimalsCharacteristicsSelectObjectSchema.optional(), include: AnimalsCharacteristicsIncludeObjectSchema.optional(), where: AnimalsCharacteristicsWhereUniqueInputObjectSchema }).strict();