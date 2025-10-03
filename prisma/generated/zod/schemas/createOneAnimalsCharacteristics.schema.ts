import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { AnimalsCharacteristicsSelectObjectSchema as AnimalsCharacteristicsSelectObjectSchema } from './objects/AnimalsCharacteristicsSelect.schema';
import { AnimalsCharacteristicsIncludeObjectSchema as AnimalsCharacteristicsIncludeObjectSchema } from './objects/AnimalsCharacteristicsInclude.schema';
import { AnimalsCharacteristicsCreateInputObjectSchema as AnimalsCharacteristicsCreateInputObjectSchema } from './objects/AnimalsCharacteristicsCreateInput.schema';
import { AnimalsCharacteristicsUncheckedCreateInputObjectSchema as AnimalsCharacteristicsUncheckedCreateInputObjectSchema } from './objects/AnimalsCharacteristicsUncheckedCreateInput.schema';

export const AnimalsCharacteristicsCreateOneSchema: z.ZodType<Prisma.AnimalsCharacteristicsCreateArgs> = z.object({ select: AnimalsCharacteristicsSelectObjectSchema.optional(), include: AnimalsCharacteristicsIncludeObjectSchema.optional(), data: z.union([AnimalsCharacteristicsCreateInputObjectSchema, AnimalsCharacteristicsUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.AnimalsCharacteristicsCreateArgs>;

export const AnimalsCharacteristicsCreateOneZodSchema = z.object({ select: AnimalsCharacteristicsSelectObjectSchema.optional(), include: AnimalsCharacteristicsIncludeObjectSchema.optional(), data: z.union([AnimalsCharacteristicsCreateInputObjectSchema, AnimalsCharacteristicsUncheckedCreateInputObjectSchema]) }).strict();