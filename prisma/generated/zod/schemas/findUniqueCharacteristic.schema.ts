import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { CharacteristicSelectObjectSchema as CharacteristicSelectObjectSchema } from './objects/CharacteristicSelect.schema';
import { CharacteristicIncludeObjectSchema as CharacteristicIncludeObjectSchema } from './objects/CharacteristicInclude.schema';
import { CharacteristicWhereUniqueInputObjectSchema as CharacteristicWhereUniqueInputObjectSchema } from './objects/CharacteristicWhereUniqueInput.schema';

export const CharacteristicFindUniqueSchema: z.ZodType<Prisma.CharacteristicFindUniqueArgs> = z.object({ select: CharacteristicSelectObjectSchema.optional(), include: CharacteristicIncludeObjectSchema.optional(), where: CharacteristicWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.CharacteristicFindUniqueArgs>;

export const CharacteristicFindUniqueZodSchema = z.object({ select: CharacteristicSelectObjectSchema.optional(), include: CharacteristicIncludeObjectSchema.optional(), where: CharacteristicWhereUniqueInputObjectSchema }).strict();