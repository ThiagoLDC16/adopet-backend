import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { CharacteristicCreateManyInputObjectSchema as CharacteristicCreateManyInputObjectSchema } from './objects/CharacteristicCreateManyInput.schema';

export const CharacteristicCreateManySchema: z.ZodType<Prisma.CharacteristicCreateManyArgs> = z.object({ data: z.union([ CharacteristicCreateManyInputObjectSchema, z.array(CharacteristicCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.CharacteristicCreateManyArgs>;

export const CharacteristicCreateManyZodSchema = z.object({ data: z.union([ CharacteristicCreateManyInputObjectSchema, z.array(CharacteristicCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();