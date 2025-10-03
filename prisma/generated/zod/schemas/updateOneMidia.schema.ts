import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { MidiaSelectObjectSchema as MidiaSelectObjectSchema } from './objects/MidiaSelect.schema';
import { MidiaIncludeObjectSchema as MidiaIncludeObjectSchema } from './objects/MidiaInclude.schema';
import { MidiaUpdateInputObjectSchema as MidiaUpdateInputObjectSchema } from './objects/MidiaUpdateInput.schema';
import { MidiaUncheckedUpdateInputObjectSchema as MidiaUncheckedUpdateInputObjectSchema } from './objects/MidiaUncheckedUpdateInput.schema';
import { MidiaWhereUniqueInputObjectSchema as MidiaWhereUniqueInputObjectSchema } from './objects/MidiaWhereUniqueInput.schema';

export const MidiaUpdateOneSchema: z.ZodType<Prisma.MidiaUpdateArgs> = z.object({ select: MidiaSelectObjectSchema.optional(), include: MidiaIncludeObjectSchema.optional(), data: z.union([MidiaUpdateInputObjectSchema, MidiaUncheckedUpdateInputObjectSchema]), where: MidiaWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.MidiaUpdateArgs>;

export const MidiaUpdateOneZodSchema = z.object({ select: MidiaSelectObjectSchema.optional(), include: MidiaIncludeObjectSchema.optional(), data: z.union([MidiaUpdateInputObjectSchema, MidiaUncheckedUpdateInputObjectSchema]), where: MidiaWhereUniqueInputObjectSchema }).strict();