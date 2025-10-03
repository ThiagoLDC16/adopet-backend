import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { AnimalsCharacteristicsSelectObjectSchema as AnimalsCharacteristicsSelectObjectSchema } from './objects/AnimalsCharacteristicsSelect.schema';
import { AnimalsCharacteristicsIncludeObjectSchema as AnimalsCharacteristicsIncludeObjectSchema } from './objects/AnimalsCharacteristicsInclude.schema';
import { AnimalsCharacteristicsUpdateInputObjectSchema as AnimalsCharacteristicsUpdateInputObjectSchema } from './objects/AnimalsCharacteristicsUpdateInput.schema';
import { AnimalsCharacteristicsUncheckedUpdateInputObjectSchema as AnimalsCharacteristicsUncheckedUpdateInputObjectSchema } from './objects/AnimalsCharacteristicsUncheckedUpdateInput.schema';
import { AnimalsCharacteristicsWhereUniqueInputObjectSchema as AnimalsCharacteristicsWhereUniqueInputObjectSchema } from './objects/AnimalsCharacteristicsWhereUniqueInput.schema';

export const AnimalsCharacteristicsUpdateOneSchema: z.ZodType<Prisma.AnimalsCharacteristicsUpdateArgs> = z.object({ select: AnimalsCharacteristicsSelectObjectSchema.optional(), include: AnimalsCharacteristicsIncludeObjectSchema.optional(), data: z.union([AnimalsCharacteristicsUpdateInputObjectSchema, AnimalsCharacteristicsUncheckedUpdateInputObjectSchema]), where: AnimalsCharacteristicsWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.AnimalsCharacteristicsUpdateArgs>;

export const AnimalsCharacteristicsUpdateOneZodSchema = z.object({ select: AnimalsCharacteristicsSelectObjectSchema.optional(), include: AnimalsCharacteristicsIncludeObjectSchema.optional(), data: z.union([AnimalsCharacteristicsUpdateInputObjectSchema, AnimalsCharacteristicsUncheckedUpdateInputObjectSchema]), where: AnimalsCharacteristicsWhereUniqueInputObjectSchema }).strict();