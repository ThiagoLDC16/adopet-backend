import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { CharacteristicSelectObjectSchema as CharacteristicSelectObjectSchema } from './objects/CharacteristicSelect.schema';
import { CharacteristicIncludeObjectSchema as CharacteristicIncludeObjectSchema } from './objects/CharacteristicInclude.schema';
import { CharacteristicWhereUniqueInputObjectSchema as CharacteristicWhereUniqueInputObjectSchema } from './objects/CharacteristicWhereUniqueInput.schema';
import { CharacteristicCreateInputObjectSchema as CharacteristicCreateInputObjectSchema } from './objects/CharacteristicCreateInput.schema';
import { CharacteristicUncheckedCreateInputObjectSchema as CharacteristicUncheckedCreateInputObjectSchema } from './objects/CharacteristicUncheckedCreateInput.schema';
import { CharacteristicUpdateInputObjectSchema as CharacteristicUpdateInputObjectSchema } from './objects/CharacteristicUpdateInput.schema';
import { CharacteristicUncheckedUpdateInputObjectSchema as CharacteristicUncheckedUpdateInputObjectSchema } from './objects/CharacteristicUncheckedUpdateInput.schema';

export const CharacteristicUpsertOneSchema: z.ZodType<Prisma.CharacteristicUpsertArgs> = z.object({ select: CharacteristicSelectObjectSchema.optional(), include: CharacteristicIncludeObjectSchema.optional(), where: CharacteristicWhereUniqueInputObjectSchema, create: z.union([ CharacteristicCreateInputObjectSchema, CharacteristicUncheckedCreateInputObjectSchema ]), update: z.union([ CharacteristicUpdateInputObjectSchema, CharacteristicUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.CharacteristicUpsertArgs>;

export const CharacteristicUpsertOneZodSchema = z.object({ select: CharacteristicSelectObjectSchema.optional(), include: CharacteristicIncludeObjectSchema.optional(), where: CharacteristicWhereUniqueInputObjectSchema, create: z.union([ CharacteristicCreateInputObjectSchema, CharacteristicUncheckedCreateInputObjectSchema ]), update: z.union([ CharacteristicUpdateInputObjectSchema, CharacteristicUncheckedUpdateInputObjectSchema ]) }).strict();