import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { MidiaSelectObjectSchema as MidiaSelectObjectSchema } from './objects/MidiaSelect.schema';
import { MidiaIncludeObjectSchema as MidiaIncludeObjectSchema } from './objects/MidiaInclude.schema';
import { MidiaWhereUniqueInputObjectSchema as MidiaWhereUniqueInputObjectSchema } from './objects/MidiaWhereUniqueInput.schema';
import { MidiaCreateInputObjectSchema as MidiaCreateInputObjectSchema } from './objects/MidiaCreateInput.schema';
import { MidiaUncheckedCreateInputObjectSchema as MidiaUncheckedCreateInputObjectSchema } from './objects/MidiaUncheckedCreateInput.schema';
import { MidiaUpdateInputObjectSchema as MidiaUpdateInputObjectSchema } from './objects/MidiaUpdateInput.schema';
import { MidiaUncheckedUpdateInputObjectSchema as MidiaUncheckedUpdateInputObjectSchema } from './objects/MidiaUncheckedUpdateInput.schema';

export const MidiaUpsertOneSchema: z.ZodType<Prisma.MidiaUpsertArgs> = z.object({ select: MidiaSelectObjectSchema.optional(), include: MidiaIncludeObjectSchema.optional(), where: MidiaWhereUniqueInputObjectSchema, create: z.union([ MidiaCreateInputObjectSchema, MidiaUncheckedCreateInputObjectSchema ]), update: z.union([ MidiaUpdateInputObjectSchema, MidiaUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.MidiaUpsertArgs>;

export const MidiaUpsertOneZodSchema = z.object({ select: MidiaSelectObjectSchema.optional(), include: MidiaIncludeObjectSchema.optional(), where: MidiaWhereUniqueInputObjectSchema, create: z.union([ MidiaCreateInputObjectSchema, MidiaUncheckedCreateInputObjectSchema ]), update: z.union([ MidiaUpdateInputObjectSchema, MidiaUncheckedUpdateInputObjectSchema ]) }).strict();