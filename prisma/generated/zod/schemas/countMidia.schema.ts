import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { MidiaOrderByWithRelationInputObjectSchema as MidiaOrderByWithRelationInputObjectSchema } from './objects/MidiaOrderByWithRelationInput.schema';
import { MidiaWhereInputObjectSchema as MidiaWhereInputObjectSchema } from './objects/MidiaWhereInput.schema';
import { MidiaWhereUniqueInputObjectSchema as MidiaWhereUniqueInputObjectSchema } from './objects/MidiaWhereUniqueInput.schema';
import { MidiaCountAggregateInputObjectSchema as MidiaCountAggregateInputObjectSchema } from './objects/MidiaCountAggregateInput.schema';

export const MidiaCountSchema: z.ZodType<Prisma.MidiaCountArgs> = z.object({ orderBy: z.union([MidiaOrderByWithRelationInputObjectSchema, MidiaOrderByWithRelationInputObjectSchema.array()]).optional(), where: MidiaWhereInputObjectSchema.optional(), cursor: MidiaWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), MidiaCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.MidiaCountArgs>;

export const MidiaCountZodSchema = z.object({ orderBy: z.union([MidiaOrderByWithRelationInputObjectSchema, MidiaOrderByWithRelationInputObjectSchema.array()]).optional(), where: MidiaWhereInputObjectSchema.optional(), cursor: MidiaWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), MidiaCountAggregateInputObjectSchema ]).optional() }).strict();