import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { MidiaSelectObjectSchema as MidiaSelectObjectSchema } from './objects/MidiaSelect.schema';
import { MidiaCreateManyInputObjectSchema as MidiaCreateManyInputObjectSchema } from './objects/MidiaCreateManyInput.schema';

export const MidiaCreateManyAndReturnSchema: z.ZodType<Prisma.MidiaCreateManyAndReturnArgs> = z.object({ select: MidiaSelectObjectSchema.optional(), data: z.union([ MidiaCreateManyInputObjectSchema, z.array(MidiaCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.MidiaCreateManyAndReturnArgs>;

export const MidiaCreateManyAndReturnZodSchema = z.object({ select: MidiaSelectObjectSchema.optional(), data: z.union([ MidiaCreateManyInputObjectSchema, z.array(MidiaCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();