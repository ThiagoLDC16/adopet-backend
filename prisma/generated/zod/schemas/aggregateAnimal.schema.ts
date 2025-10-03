import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { AnimalOrderByWithRelationInputObjectSchema as AnimalOrderByWithRelationInputObjectSchema } from './objects/AnimalOrderByWithRelationInput.schema';
import { AnimalWhereInputObjectSchema as AnimalWhereInputObjectSchema } from './objects/AnimalWhereInput.schema';
import { AnimalWhereUniqueInputObjectSchema as AnimalWhereUniqueInputObjectSchema } from './objects/AnimalWhereUniqueInput.schema';
import { AnimalCountAggregateInputObjectSchema as AnimalCountAggregateInputObjectSchema } from './objects/AnimalCountAggregateInput.schema';
import { AnimalMinAggregateInputObjectSchema as AnimalMinAggregateInputObjectSchema } from './objects/AnimalMinAggregateInput.schema';
import { AnimalMaxAggregateInputObjectSchema as AnimalMaxAggregateInputObjectSchema } from './objects/AnimalMaxAggregateInput.schema';
import { AnimalAvgAggregateInputObjectSchema as AnimalAvgAggregateInputObjectSchema } from './objects/AnimalAvgAggregateInput.schema';
import { AnimalSumAggregateInputObjectSchema as AnimalSumAggregateInputObjectSchema } from './objects/AnimalSumAggregateInput.schema';

export const AnimalAggregateSchema: z.ZodType<Prisma.AnimalAggregateArgs> = z.object({ orderBy: z.union([AnimalOrderByWithRelationInputObjectSchema, AnimalOrderByWithRelationInputObjectSchema.array()]).optional(), where: AnimalWhereInputObjectSchema.optional(), cursor: AnimalWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), AnimalCountAggregateInputObjectSchema ]).optional(), _min: AnimalMinAggregateInputObjectSchema.optional(), _max: AnimalMaxAggregateInputObjectSchema.optional(), _avg: AnimalAvgAggregateInputObjectSchema.optional(), _sum: AnimalSumAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.AnimalAggregateArgs>;

export const AnimalAggregateZodSchema = z.object({ orderBy: z.union([AnimalOrderByWithRelationInputObjectSchema, AnimalOrderByWithRelationInputObjectSchema.array()]).optional(), where: AnimalWhereInputObjectSchema.optional(), cursor: AnimalWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), AnimalCountAggregateInputObjectSchema ]).optional(), _min: AnimalMinAggregateInputObjectSchema.optional(), _max: AnimalMaxAggregateInputObjectSchema.optional(), _avg: AnimalAvgAggregateInputObjectSchema.optional(), _sum: AnimalSumAggregateInputObjectSchema.optional() }).strict();