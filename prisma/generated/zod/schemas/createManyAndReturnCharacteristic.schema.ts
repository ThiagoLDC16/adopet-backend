import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { CharacteristicSelectObjectSchema as CharacteristicSelectObjectSchema } from './objects/CharacteristicSelect.schema';
import { CharacteristicCreateManyInputObjectSchema as CharacteristicCreateManyInputObjectSchema } from './objects/CharacteristicCreateManyInput.schema';

export const CharacteristicCreateManyAndReturnSchema: z.ZodType<Prisma.CharacteristicCreateManyAndReturnArgs> = z.object({ select: CharacteristicSelectObjectSchema.optional(), data: z.union([ CharacteristicCreateManyInputObjectSchema, z.array(CharacteristicCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.CharacteristicCreateManyAndReturnArgs>;

export const CharacteristicCreateManyAndReturnZodSchema = z.object({ select: CharacteristicSelectObjectSchema.optional(), data: z.union([ CharacteristicCreateManyInputObjectSchema, z.array(CharacteristicCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();