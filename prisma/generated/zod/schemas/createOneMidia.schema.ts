import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { MidiaSelectObjectSchema as MidiaSelectObjectSchema } from './objects/MidiaSelect.schema';
import { MidiaIncludeObjectSchema as MidiaIncludeObjectSchema } from './objects/MidiaInclude.schema';
import { MidiaCreateInputObjectSchema as MidiaCreateInputObjectSchema } from './objects/MidiaCreateInput.schema';
import { MidiaUncheckedCreateInputObjectSchema as MidiaUncheckedCreateInputObjectSchema } from './objects/MidiaUncheckedCreateInput.schema';

export const MidiaCreateOneSchema: z.ZodType<Prisma.MidiaCreateArgs> = z.object({ select: MidiaSelectObjectSchema.optional(), include: MidiaIncludeObjectSchema.optional(), data: z.union([MidiaCreateInputObjectSchema, MidiaUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.MidiaCreateArgs>;

export const MidiaCreateOneZodSchema = z.object({ select: MidiaSelectObjectSchema.optional(), include: MidiaIncludeObjectSchema.optional(), data: z.union([MidiaCreateInputObjectSchema, MidiaUncheckedCreateInputObjectSchema]) }).strict();