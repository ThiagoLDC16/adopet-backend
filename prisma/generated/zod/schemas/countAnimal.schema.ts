import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { AnimalOrderByWithRelationInputObjectSchema as AnimalOrderByWithRelationInputObjectSchema } from './objects/AnimalOrderByWithRelationInput.schema';
import { AnimalWhereInputObjectSchema as AnimalWhereInputObjectSchema } from './objects/AnimalWhereInput.schema';
import { AnimalWhereUniqueInputObjectSchema as AnimalWhereUniqueInputObjectSchema } from './objects/AnimalWhereUniqueInput.schema';
import { AnimalCountAggregateInputObjectSchema as AnimalCountAggregateInputObjectSchema } from './objects/AnimalCountAggregateInput.schema';

export const AnimalCountSchema: z.ZodType<Prisma.AnimalCountArgs> = z.object({ orderBy: z.union([AnimalOrderByWithRelationInputObjectSchema, AnimalOrderByWithRelationInputObjectSchema.array()]).optional(), where: AnimalWhereInputObjectSchema.optional(), cursor: AnimalWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), AnimalCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.AnimalCountArgs>;

export const AnimalCountZodSchema = z.object({ orderBy: z.union([AnimalOrderByWithRelationInputObjectSchema, AnimalOrderByWithRelationInputObjectSchema.array()]).optional(), where: AnimalWhereInputObjectSchema.optional(), cursor: AnimalWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), AnimalCountAggregateInputObjectSchema ]).optional() }).strict();