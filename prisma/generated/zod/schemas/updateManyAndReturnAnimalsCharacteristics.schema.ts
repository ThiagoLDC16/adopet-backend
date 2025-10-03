import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { AnimalsCharacteristicsSelectObjectSchema as AnimalsCharacteristicsSelectObjectSchema } from './objects/AnimalsCharacteristicsSelect.schema';
import { AnimalsCharacteristicsUpdateManyMutationInputObjectSchema as AnimalsCharacteristicsUpdateManyMutationInputObjectSchema } from './objects/AnimalsCharacteristicsUpdateManyMutationInput.schema';
import { AnimalsCharacteristicsWhereInputObjectSchema as AnimalsCharacteristicsWhereInputObjectSchema } from './objects/AnimalsCharacteristicsWhereInput.schema';

export const AnimalsCharacteristicsUpdateManyAndReturnSchema: z.ZodType<Prisma.AnimalsCharacteristicsUpdateManyAndReturnArgs> = z.object({ select: AnimalsCharacteristicsSelectObjectSchema.optional(), data: AnimalsCharacteristicsUpdateManyMutationInputObjectSchema, where: AnimalsCharacteristicsWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.AnimalsCharacteristicsUpdateManyAndReturnArgs>;

export const AnimalsCharacteristicsUpdateManyAndReturnZodSchema = z.object({ select: AnimalsCharacteristicsSelectObjectSchema.optional(), data: AnimalsCharacteristicsUpdateManyMutationInputObjectSchema, where: AnimalsCharacteristicsWhereInputObjectSchema.optional() }).strict();