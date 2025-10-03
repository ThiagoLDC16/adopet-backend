import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { MidiaWhereInputObjectSchema as MidiaWhereInputObjectSchema } from './objects/MidiaWhereInput.schema';

export const MidiaDeleteManySchema: z.ZodType<Prisma.MidiaDeleteManyArgs> = z.object({ where: MidiaWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.MidiaDeleteManyArgs>;

export const MidiaDeleteManyZodSchema = z.object({ where: MidiaWhereInputObjectSchema.optional() }).strict();