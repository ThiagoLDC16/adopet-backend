import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { AnimalSelectObjectSchema as AnimalSelectObjectSchema } from './objects/AnimalSelect.schema';
import { AnimalIncludeObjectSchema as AnimalIncludeObjectSchema } from './objects/AnimalInclude.schema';
import { AnimalWhereUniqueInputObjectSchema as AnimalWhereUniqueInputObjectSchema } from './objects/AnimalWhereUniqueInput.schema';

export const AnimalFindUniqueOrThrowSchema: z.ZodType<Prisma.AnimalFindUniqueOrThrowArgs> = z.object({ select: AnimalSelectObjectSchema.optional(), include: AnimalIncludeObjectSchema.optional(), where: AnimalWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.AnimalFindUniqueOrThrowArgs>;

export const AnimalFindUniqueOrThrowZodSchema = z.object({ select: AnimalSelectObjectSchema.optional(), include: AnimalIncludeObjectSchema.optional(), where: AnimalWhereUniqueInputObjectSchema }).strict();