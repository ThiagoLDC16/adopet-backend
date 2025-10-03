import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { AnimalSelectObjectSchema as AnimalSelectObjectSchema } from './objects/AnimalSelect.schema';
import { AnimalIncludeObjectSchema as AnimalIncludeObjectSchema } from './objects/AnimalInclude.schema';
import { AnimalCreateInputObjectSchema as AnimalCreateInputObjectSchema } from './objects/AnimalCreateInput.schema';
import { AnimalUncheckedCreateInputObjectSchema as AnimalUncheckedCreateInputObjectSchema } from './objects/AnimalUncheckedCreateInput.schema';

export const AnimalCreateOneSchema: z.ZodType<Prisma.AnimalCreateArgs> = z.object({ select: AnimalSelectObjectSchema.optional(), include: AnimalIncludeObjectSchema.optional(), data: z.union([AnimalCreateInputObjectSchema, AnimalUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.AnimalCreateArgs>;

export const AnimalCreateOneZodSchema = z.object({ select: AnimalSelectObjectSchema.optional(), include: AnimalIncludeObjectSchema.optional(), data: z.union([AnimalCreateInputObjectSchema, AnimalUncheckedCreateInputObjectSchema]) }).strict();