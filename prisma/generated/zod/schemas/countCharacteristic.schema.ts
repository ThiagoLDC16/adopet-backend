import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { CharacteristicOrderByWithRelationInputObjectSchema as CharacteristicOrderByWithRelationInputObjectSchema } from './objects/CharacteristicOrderByWithRelationInput.schema';
import { CharacteristicWhereInputObjectSchema as CharacteristicWhereInputObjectSchema } from './objects/CharacteristicWhereInput.schema';
import { CharacteristicWhereUniqueInputObjectSchema as CharacteristicWhereUniqueInputObjectSchema } from './objects/CharacteristicWhereUniqueInput.schema';
import { CharacteristicCountAggregateInputObjectSchema as CharacteristicCountAggregateInputObjectSchema } from './objects/CharacteristicCountAggregateInput.schema';

export const CharacteristicCountSchema: z.ZodType<Prisma.CharacteristicCountArgs> = z.object({ orderBy: z.union([CharacteristicOrderByWithRelationInputObjectSchema, CharacteristicOrderByWithRelationInputObjectSchema.array()]).optional(), where: CharacteristicWhereInputObjectSchema.optional(), cursor: CharacteristicWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), CharacteristicCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.CharacteristicCountArgs>;

export const CharacteristicCountZodSchema = z.object({ orderBy: z.union([CharacteristicOrderByWithRelationInputObjectSchema, CharacteristicOrderByWithRelationInputObjectSchema.array()]).optional(), where: CharacteristicWhereInputObjectSchema.optional(), cursor: CharacteristicWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), CharacteristicCountAggregateInputObjectSchema ]).optional() }).strict();