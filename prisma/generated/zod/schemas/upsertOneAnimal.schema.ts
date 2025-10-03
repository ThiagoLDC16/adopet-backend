import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { AnimalSelectObjectSchema as AnimalSelectObjectSchema } from './objects/AnimalSelect.schema';
import { AnimalIncludeObjectSchema as AnimalIncludeObjectSchema } from './objects/AnimalInclude.schema';
import { AnimalWhereUniqueInputObjectSchema as AnimalWhereUniqueInputObjectSchema } from './objects/AnimalWhereUniqueInput.schema';
import { AnimalCreateInputObjectSchema as AnimalCreateInputObjectSchema } from './objects/AnimalCreateInput.schema';
import { AnimalUncheckedCreateInputObjectSchema as AnimalUncheckedCreateInputObjectSchema } from './objects/AnimalUncheckedCreateInput.schema';
import { AnimalUpdateInputObjectSchema as AnimalUpdateInputObjectSchema } from './objects/AnimalUpdateInput.schema';
import { AnimalUncheckedUpdateInputObjectSchema as AnimalUncheckedUpdateInputObjectSchema } from './objects/AnimalUncheckedUpdateInput.schema';

export const AnimalUpsertOneSchema: z.ZodType<Prisma.AnimalUpsertArgs> = z.object({ select: AnimalSelectObjectSchema.optional(), include: AnimalIncludeObjectSchema.optional(), where: AnimalWhereUniqueInputObjectSchema, create: z.union([ AnimalCreateInputObjectSchema, AnimalUncheckedCreateInputObjectSchema ]), update: z.union([ AnimalUpdateInputObjectSchema, AnimalUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.AnimalUpsertArgs>;

export const AnimalUpsertOneZodSchema = z.object({ select: AnimalSelectObjectSchema.optional(), include: AnimalIncludeObjectSchema.optional(), where: AnimalWhereUniqueInputObjectSchema, create: z.union([ AnimalCreateInputObjectSchema, AnimalUncheckedCreateInputObjectSchema ]), update: z.union([ AnimalUpdateInputObjectSchema, AnimalUncheckedUpdateInputObjectSchema ]) }).strict();