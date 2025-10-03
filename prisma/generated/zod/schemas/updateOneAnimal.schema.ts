import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { AnimalSelectObjectSchema as AnimalSelectObjectSchema } from './objects/AnimalSelect.schema';
import { AnimalIncludeObjectSchema as AnimalIncludeObjectSchema } from './objects/AnimalInclude.schema';
import { AnimalUpdateInputObjectSchema as AnimalUpdateInputObjectSchema } from './objects/AnimalUpdateInput.schema';
import { AnimalUncheckedUpdateInputObjectSchema as AnimalUncheckedUpdateInputObjectSchema } from './objects/AnimalUncheckedUpdateInput.schema';
import { AnimalWhereUniqueInputObjectSchema as AnimalWhereUniqueInputObjectSchema } from './objects/AnimalWhereUniqueInput.schema';

export const AnimalUpdateOneSchema: z.ZodType<Prisma.AnimalUpdateArgs> = z.object({ select: AnimalSelectObjectSchema.optional(), include: AnimalIncludeObjectSchema.optional(), data: z.union([AnimalUpdateInputObjectSchema, AnimalUncheckedUpdateInputObjectSchema]), where: AnimalWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.AnimalUpdateArgs>;

export const AnimalUpdateOneZodSchema = z.object({ select: AnimalSelectObjectSchema.optional(), include: AnimalIncludeObjectSchema.optional(), data: z.union([AnimalUpdateInputObjectSchema, AnimalUncheckedUpdateInputObjectSchema]), where: AnimalWhereUniqueInputObjectSchema }).strict();