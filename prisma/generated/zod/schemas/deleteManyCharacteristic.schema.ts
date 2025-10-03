import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { CharacteristicWhereInputObjectSchema as CharacteristicWhereInputObjectSchema } from './objects/CharacteristicWhereInput.schema';

export const CharacteristicDeleteManySchema: z.ZodType<Prisma.CharacteristicDeleteManyArgs> = z.object({ where: CharacteristicWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.CharacteristicDeleteManyArgs>;

export const CharacteristicDeleteManyZodSchema = z.object({ where: CharacteristicWhereInputObjectSchema.optional() }).strict();