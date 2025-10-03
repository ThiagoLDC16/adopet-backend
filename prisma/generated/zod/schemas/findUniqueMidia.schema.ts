import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { MidiaSelectObjectSchema as MidiaSelectObjectSchema } from './objects/MidiaSelect.schema';
import { MidiaIncludeObjectSchema as MidiaIncludeObjectSchema } from './objects/MidiaInclude.schema';
import { MidiaWhereUniqueInputObjectSchema as MidiaWhereUniqueInputObjectSchema } from './objects/MidiaWhereUniqueInput.schema';

export const MidiaFindUniqueSchema: z.ZodType<Prisma.MidiaFindUniqueArgs> = z.object({ select: MidiaSelectObjectSchema.optional(), include: MidiaIncludeObjectSchema.optional(), where: MidiaWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.MidiaFindUniqueArgs>;

export const MidiaFindUniqueZodSchema = z.object({ select: MidiaSelectObjectSchema.optional(), include: MidiaIncludeObjectSchema.optional(), where: MidiaWhereUniqueInputObjectSchema }).strict();