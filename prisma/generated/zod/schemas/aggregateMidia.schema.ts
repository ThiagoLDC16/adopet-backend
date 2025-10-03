import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { MidiaOrderByWithRelationInputObjectSchema as MidiaOrderByWithRelationInputObjectSchema } from './objects/MidiaOrderByWithRelationInput.schema';
import { MidiaWhereInputObjectSchema as MidiaWhereInputObjectSchema } from './objects/MidiaWhereInput.schema';
import { MidiaWhereUniqueInputObjectSchema as MidiaWhereUniqueInputObjectSchema } from './objects/MidiaWhereUniqueInput.schema';
import { MidiaCountAggregateInputObjectSchema as MidiaCountAggregateInputObjectSchema } from './objects/MidiaCountAggregateInput.schema';
import { MidiaMinAggregateInputObjectSchema as MidiaMinAggregateInputObjectSchema } from './objects/MidiaMinAggregateInput.schema';
import { MidiaMaxAggregateInputObjectSchema as MidiaMaxAggregateInputObjectSchema } from './objects/MidiaMaxAggregateInput.schema';
import { MidiaAvgAggregateInputObjectSchema as MidiaAvgAggregateInputObjectSchema } from './objects/MidiaAvgAggregateInput.schema';
import { MidiaSumAggregateInputObjectSchema as MidiaSumAggregateInputObjectSchema } from './objects/MidiaSumAggregateInput.schema';

export const MidiaAggregateSchema: z.ZodType<Prisma.MidiaAggregateArgs> = z.object({ orderBy: z.union([MidiaOrderByWithRelationInputObjectSchema, MidiaOrderByWithRelationInputObjectSchema.array()]).optional(), where: MidiaWhereInputObjectSchema.optional(), cursor: MidiaWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), MidiaCountAggregateInputObjectSchema ]).optional(), _min: MidiaMinAggregateInputObjectSchema.optional(), _max: MidiaMaxAggregateInputObjectSchema.optional(), _avg: MidiaAvgAggregateInputObjectSchema.optional(), _sum: MidiaSumAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.MidiaAggregateArgs>;

export const MidiaAggregateZodSchema = z.object({ orderBy: z.union([MidiaOrderByWithRelationInputObjectSchema, MidiaOrderByWithRelationInputObjectSchema.array()]).optional(), where: MidiaWhereInputObjectSchema.optional(), cursor: MidiaWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), MidiaCountAggregateInputObjectSchema ]).optional(), _min: MidiaMinAggregateInputObjectSchema.optional(), _max: MidiaMaxAggregateInputObjectSchema.optional(), _avg: MidiaAvgAggregateInputObjectSchema.optional(), _sum: MidiaSumAggregateInputObjectSchema.optional() }).strict();