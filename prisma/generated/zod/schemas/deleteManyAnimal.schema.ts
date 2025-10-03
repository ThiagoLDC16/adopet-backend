import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { AnimalWhereInputObjectSchema as AnimalWhereInputObjectSchema } from './objects/AnimalWhereInput.schema';

export const AnimalDeleteManySchema: z.ZodType<Prisma.AnimalDeleteManyArgs> = z.object({ where: AnimalWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.AnimalDeleteManyArgs>;

export const AnimalDeleteManyZodSchema = z.object({ where: AnimalWhereInputObjectSchema.optional() }).strict();