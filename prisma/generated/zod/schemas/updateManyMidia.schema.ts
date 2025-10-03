import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { MidiaUpdateManyMutationInputObjectSchema as MidiaUpdateManyMutationInputObjectSchema } from './objects/MidiaUpdateManyMutationInput.schema';
import { MidiaWhereInputObjectSchema as MidiaWhereInputObjectSchema } from './objects/MidiaWhereInput.schema';

export const MidiaUpdateManySchema: z.ZodType<Prisma.MidiaUpdateManyArgs> = z.object({ data: MidiaUpdateManyMutationInputObjectSchema, where: MidiaWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.MidiaUpdateManyArgs>;

export const MidiaUpdateManyZodSchema = z.object({ data: MidiaUpdateManyMutationInputObjectSchema, where: MidiaWhereInputObjectSchema.optional() }).strict();