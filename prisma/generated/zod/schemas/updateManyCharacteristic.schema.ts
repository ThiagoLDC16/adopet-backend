import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { CharacteristicUpdateManyMutationInputObjectSchema as CharacteristicUpdateManyMutationInputObjectSchema } from './objects/CharacteristicUpdateManyMutationInput.schema';
import { CharacteristicWhereInputObjectSchema as CharacteristicWhereInputObjectSchema } from './objects/CharacteristicWhereInput.schema';

export const CharacteristicUpdateManySchema: z.ZodType<Prisma.CharacteristicUpdateManyArgs> = z.object({ data: CharacteristicUpdateManyMutationInputObjectSchema, where: CharacteristicWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.CharacteristicUpdateManyArgs>;

export const CharacteristicUpdateManyZodSchema = z.object({ data: CharacteristicUpdateManyMutationInputObjectSchema, where: CharacteristicWhereInputObjectSchema.optional() }).strict();