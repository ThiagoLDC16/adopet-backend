import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { CharacteristicSelectObjectSchema as CharacteristicSelectObjectSchema } from './objects/CharacteristicSelect.schema';
import { CharacteristicIncludeObjectSchema as CharacteristicIncludeObjectSchema } from './objects/CharacteristicInclude.schema';
import { CharacteristicUpdateInputObjectSchema as CharacteristicUpdateInputObjectSchema } from './objects/CharacteristicUpdateInput.schema';
import { CharacteristicUncheckedUpdateInputObjectSchema as CharacteristicUncheckedUpdateInputObjectSchema } from './objects/CharacteristicUncheckedUpdateInput.schema';
import { CharacteristicWhereUniqueInputObjectSchema as CharacteristicWhereUniqueInputObjectSchema } from './objects/CharacteristicWhereUniqueInput.schema';

export const CharacteristicUpdateOneSchema: z.ZodType<Prisma.CharacteristicUpdateArgs> = z.object({ select: CharacteristicSelectObjectSchema.optional(), include: CharacteristicIncludeObjectSchema.optional(), data: z.union([CharacteristicUpdateInputObjectSchema, CharacteristicUncheckedUpdateInputObjectSchema]), where: CharacteristicWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.CharacteristicUpdateArgs>;

export const CharacteristicUpdateOneZodSchema = z.object({ select: CharacteristicSelectObjectSchema.optional(), include: CharacteristicIncludeObjectSchema.optional(), data: z.union([CharacteristicUpdateInputObjectSchema, CharacteristicUncheckedUpdateInputObjectSchema]), where: CharacteristicWhereUniqueInputObjectSchema }).strict();