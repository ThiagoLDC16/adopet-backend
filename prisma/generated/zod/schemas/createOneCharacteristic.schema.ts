import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { CharacteristicSelectObjectSchema as CharacteristicSelectObjectSchema } from './objects/CharacteristicSelect.schema';
import { CharacteristicIncludeObjectSchema as CharacteristicIncludeObjectSchema } from './objects/CharacteristicInclude.schema';
import { CharacteristicCreateInputObjectSchema as CharacteristicCreateInputObjectSchema } from './objects/CharacteristicCreateInput.schema';
import { CharacteristicUncheckedCreateInputObjectSchema as CharacteristicUncheckedCreateInputObjectSchema } from './objects/CharacteristicUncheckedCreateInput.schema';

export const CharacteristicCreateOneSchema: z.ZodType<Prisma.CharacteristicCreateArgs> = z.object({ select: CharacteristicSelectObjectSchema.optional(), include: CharacteristicIncludeObjectSchema.optional(), data: z.union([CharacteristicCreateInputObjectSchema, CharacteristicUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.CharacteristicCreateArgs>;

export const CharacteristicCreateOneZodSchema = z.object({ select: CharacteristicSelectObjectSchema.optional(), include: CharacteristicIncludeObjectSchema.optional(), data: z.union([CharacteristicCreateInputObjectSchema, CharacteristicUncheckedCreateInputObjectSchema]) }).strict();