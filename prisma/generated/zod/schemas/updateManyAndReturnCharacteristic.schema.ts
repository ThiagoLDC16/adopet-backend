import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { CharacteristicSelectObjectSchema as CharacteristicSelectObjectSchema } from './objects/CharacteristicSelect.schema';
import { CharacteristicUpdateManyMutationInputObjectSchema as CharacteristicUpdateManyMutationInputObjectSchema } from './objects/CharacteristicUpdateManyMutationInput.schema';
import { CharacteristicWhereInputObjectSchema as CharacteristicWhereInputObjectSchema } from './objects/CharacteristicWhereInput.schema';

export const CharacteristicUpdateManyAndReturnSchema: z.ZodType<Prisma.CharacteristicUpdateManyAndReturnArgs> = z.object({ select: CharacteristicSelectObjectSchema.optional(), data: CharacteristicUpdateManyMutationInputObjectSchema, where: CharacteristicWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.CharacteristicUpdateManyAndReturnArgs>;

export const CharacteristicUpdateManyAndReturnZodSchema = z.object({ select: CharacteristicSelectObjectSchema.optional(), data: CharacteristicUpdateManyMutationInputObjectSchema, where: CharacteristicWhereInputObjectSchema.optional() }).strict();