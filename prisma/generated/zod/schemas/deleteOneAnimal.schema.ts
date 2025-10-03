import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { AnimalSelectObjectSchema as AnimalSelectObjectSchema } from './objects/AnimalSelect.schema';
import { AnimalIncludeObjectSchema as AnimalIncludeObjectSchema } from './objects/AnimalInclude.schema';
import { AnimalWhereUniqueInputObjectSchema as AnimalWhereUniqueInputObjectSchema } from './objects/AnimalWhereUniqueInput.schema';

export const AnimalDeleteOneSchema: z.ZodType<Prisma.AnimalDeleteArgs> = z.object({ select: AnimalSelectObjectSchema.optional(), include: AnimalIncludeObjectSchema.optional(), where: AnimalWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.AnimalDeleteArgs>;

export const AnimalDeleteOneZodSchema = z.object({ select: AnimalSelectObjectSchema.optional(), include: AnimalIncludeObjectSchema.optional(), where: AnimalWhereUniqueInputObjectSchema }).strict();