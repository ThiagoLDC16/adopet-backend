import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { AnimalsCharacteristicsWhereInputObjectSchema as AnimalsCharacteristicsWhereInputObjectSchema } from './objects/AnimalsCharacteristicsWhereInput.schema';

export const AnimalsCharacteristicsDeleteManySchema: z.ZodType<Prisma.AnimalsCharacteristicsDeleteManyArgs> = z.object({ where: AnimalsCharacteristicsWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.AnimalsCharacteristicsDeleteManyArgs>;

export const AnimalsCharacteristicsDeleteManyZodSchema = z.object({ where: AnimalsCharacteristicsWhereInputObjectSchema.optional() }).strict();