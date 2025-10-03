import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { MidiaSelectObjectSchema as MidiaSelectObjectSchema } from './objects/MidiaSelect.schema';
import { MidiaUpdateManyMutationInputObjectSchema as MidiaUpdateManyMutationInputObjectSchema } from './objects/MidiaUpdateManyMutationInput.schema';
import { MidiaWhereInputObjectSchema as MidiaWhereInputObjectSchema } from './objects/MidiaWhereInput.schema';

export const MidiaUpdateManyAndReturnSchema: z.ZodType<Prisma.MidiaUpdateManyAndReturnArgs> = z.object({ select: MidiaSelectObjectSchema.optional(), data: MidiaUpdateManyMutationInputObjectSchema, where: MidiaWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.MidiaUpdateManyAndReturnArgs>;

export const MidiaUpdateManyAndReturnZodSchema = z.object({ select: MidiaSelectObjectSchema.optional(), data: MidiaUpdateManyMutationInputObjectSchema, where: MidiaWhereInputObjectSchema.optional() }).strict();