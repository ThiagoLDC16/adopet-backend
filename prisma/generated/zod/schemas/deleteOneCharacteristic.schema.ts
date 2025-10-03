import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { CharacteristicSelectObjectSchema as CharacteristicSelectObjectSchema } from './objects/CharacteristicSelect.schema';
import { CharacteristicIncludeObjectSchema as CharacteristicIncludeObjectSchema } from './objects/CharacteristicInclude.schema';
import { CharacteristicWhereUniqueInputObjectSchema as CharacteristicWhereUniqueInputObjectSchema } from './objects/CharacteristicWhereUniqueInput.schema';

export const CharacteristicDeleteOneSchema: z.ZodType<Prisma.CharacteristicDeleteArgs> = z.object({ select: CharacteristicSelectObjectSchema.optional(), include: CharacteristicIncludeObjectSchema.optional(), where: CharacteristicWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.CharacteristicDeleteArgs>;

export const CharacteristicDeleteOneZodSchema = z.object({ select: CharacteristicSelectObjectSchema.optional(), include: CharacteristicIncludeObjectSchema.optional(), where: CharacteristicWhereUniqueInputObjectSchema }).strict();