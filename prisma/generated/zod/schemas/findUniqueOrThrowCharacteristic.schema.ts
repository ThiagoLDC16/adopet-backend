import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { CharacteristicSelectObjectSchema as CharacteristicSelectObjectSchema } from './objects/CharacteristicSelect.schema';
import { CharacteristicIncludeObjectSchema as CharacteristicIncludeObjectSchema } from './objects/CharacteristicInclude.schema';
import { CharacteristicWhereUniqueInputObjectSchema as CharacteristicWhereUniqueInputObjectSchema } from './objects/CharacteristicWhereUniqueInput.schema';

export const CharacteristicFindUniqueOrThrowSchema: z.ZodType<Prisma.CharacteristicFindUniqueOrThrowArgs> = z.object({ select: CharacteristicSelectObjectSchema.optional(), include: CharacteristicIncludeObjectSchema.optional(), where: CharacteristicWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.CharacteristicFindUniqueOrThrowArgs>;

export const CharacteristicFindUniqueOrThrowZodSchema = z.object({ select: CharacteristicSelectObjectSchema.optional(), include: CharacteristicIncludeObjectSchema.optional(), where: CharacteristicWhereUniqueInputObjectSchema }).strict();