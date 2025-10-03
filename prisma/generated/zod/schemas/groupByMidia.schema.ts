import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { MidiaWhereInputObjectSchema as MidiaWhereInputObjectSchema } from './objects/MidiaWhereInput.schema';
import { MidiaOrderByWithAggregationInputObjectSchema as MidiaOrderByWithAggregationInputObjectSchema } from './objects/MidiaOrderByWithAggregationInput.schema';
import { MidiaScalarWhereWithAggregatesInputObjectSchema as MidiaScalarWhereWithAggregatesInputObjectSchema } from './objects/MidiaScalarWhereWithAggregatesInput.schema';
import { MidiaScalarFieldEnumSchema } from './enums/MidiaScalarFieldEnum.schema';
import { MidiaCountAggregateInputObjectSchema as MidiaCountAggregateInputObjectSchema } from './objects/MidiaCountAggregateInput.schema';
import { MidiaMinAggregateInputObjectSchema as MidiaMinAggregateInputObjectSchema } from './objects/MidiaMinAggregateInput.schema';
import { MidiaMaxAggregateInputObjectSchema as MidiaMaxAggregateInputObjectSchema } from './objects/MidiaMaxAggregateInput.schema';
import { MidiaAvgAggregateInputObjectSchema as MidiaAvgAggregateInputObjectSchema } from './objects/MidiaAvgAggregateInput.schema';
import { MidiaSumAggregateInputObjectSchema as MidiaSumAggregateInputObjectSchema } from './objects/MidiaSumAggregateInput.schema';

export const MidiaGroupBySchema: z.ZodType<Prisma.MidiaGroupByArgs> = z.object({ where: MidiaWhereInputObjectSchema.optional(), orderBy: z.union([MidiaOrderByWithAggregationInputObjectSchema, MidiaOrderByWithAggregationInputObjectSchema.array()]).optional(), having: MidiaScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(MidiaScalarFieldEnumSchema), _count: z.union([ z.literal(true), MidiaCountAggregateInputObjectSchema ]).optional(), _min: MidiaMinAggregateInputObjectSchema.optional(), _max: MidiaMaxAggregateInputObjectSchema.optional(), _avg: MidiaAvgAggregateInputObjectSchema.optional(), _sum: MidiaSumAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.MidiaGroupByArgs>;

export const MidiaGroupByZodSchema = z.object({ where: MidiaWhereInputObjectSchema.optional(), orderBy: z.union([MidiaOrderByWithAggregationInputObjectSchema, MidiaOrderByWithAggregationInputObjectSchema.array()]).optional(), having: MidiaScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(MidiaScalarFieldEnumSchema), _count: z.union([ z.literal(true), MidiaCountAggregateInputObjectSchema ]).optional(), _min: MidiaMinAggregateInputObjectSchema.optional(), _max: MidiaMaxAggregateInputObjectSchema.optional(), _avg: MidiaAvgAggregateInputObjectSchema.optional(), _sum: MidiaSumAggregateInputObjectSchema.optional() }).strict();