import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { MidiaCreateManyInputObjectSchema as MidiaCreateManyInputObjectSchema } from './objects/MidiaCreateManyInput.schema';

export const MidiaCreateManySchema: z.ZodType<Prisma.MidiaCreateManyArgs> = z.object({ data: z.union([ MidiaCreateManyInputObjectSchema, z.array(MidiaCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.MidiaCreateManyArgs>;

export const MidiaCreateManyZodSchema = z.object({ data: z.union([ MidiaCreateManyInputObjectSchema, z.array(MidiaCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();