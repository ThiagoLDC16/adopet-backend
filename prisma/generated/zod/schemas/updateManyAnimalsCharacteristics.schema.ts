import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { AnimalsCharacteristicsUpdateManyMutationInputObjectSchema as AnimalsCharacteristicsUpdateManyMutationInputObjectSchema } from './objects/AnimalsCharacteristicsUpdateManyMutationInput.schema';
import { AnimalsCharacteristicsWhereInputObjectSchema as AnimalsCharacteristicsWhereInputObjectSchema } from './objects/AnimalsCharacteristicsWhereInput.schema';

export const AnimalsCharacteristicsUpdateManySchema: z.ZodType<Prisma.AnimalsCharacteristicsUpdateManyArgs> = z.object({ data: AnimalsCharacteristicsUpdateManyMutationInputObjectSchema, where: AnimalsCharacteristicsWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.AnimalsCharacteristicsUpdateManyArgs>;

export const AnimalsCharacteristicsUpdateManyZodSchema = z.object({ data: AnimalsCharacteristicsUpdateManyMutationInputObjectSchema, where: AnimalsCharacteristicsWhereInputObjectSchema.optional() }).strict();