import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { AnimalsCharacteristicsSelectObjectSchema as AnimalsCharacteristicsSelectObjectSchema } from './objects/AnimalsCharacteristicsSelect.schema';
import { AnimalsCharacteristicsIncludeObjectSchema as AnimalsCharacteristicsIncludeObjectSchema } from './objects/AnimalsCharacteristicsInclude.schema';
import { AnimalsCharacteristicsWhereUniqueInputObjectSchema as AnimalsCharacteristicsWhereUniqueInputObjectSchema } from './objects/AnimalsCharacteristicsWhereUniqueInput.schema';

export const AnimalsCharacteristicsFindUniqueOrThrowSchema: z.ZodType<Prisma.AnimalsCharacteristicsFindUniqueOrThrowArgs> = z.object({ select: AnimalsCharacteristicsSelectObjectSchema.optional(), include: AnimalsCharacteristicsIncludeObjectSchema.optional(), where: AnimalsCharacteristicsWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.AnimalsCharacteristicsFindUniqueOrThrowArgs>;

export const AnimalsCharacteristicsFindUniqueOrThrowZodSchema = z.object({ select: AnimalsCharacteristicsSelectObjectSchema.optional(), include: AnimalsCharacteristicsIncludeObjectSchema.optional(), where: AnimalsCharacteristicsWhereUniqueInputObjectSchema }).strict();