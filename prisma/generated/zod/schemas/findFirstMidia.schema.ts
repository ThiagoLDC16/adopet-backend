import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { MidiaIncludeObjectSchema as MidiaIncludeObjectSchema } from './objects/MidiaInclude.schema';
import { MidiaOrderByWithRelationInputObjectSchema as MidiaOrderByWithRelationInputObjectSchema } from './objects/MidiaOrderByWithRelationInput.schema';
import { MidiaWhereInputObjectSchema as MidiaWhereInputObjectSchema } from './objects/MidiaWhereInput.schema';
import { MidiaWhereUniqueInputObjectSchema as MidiaWhereUniqueInputObjectSchema } from './objects/MidiaWhereUniqueInput.schema';
import { MidiaScalarFieldEnumSchema } from './enums/MidiaScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const MidiaFindFirstSelectSchema: z.ZodType<Prisma.MidiaSelect> = z.object({
    id: z.boolean().optional(),
    type: z.boolean().optional(),
    extension: z.boolean().optional(),
    url: z.boolean().optional(),
    animalId: z.boolean().optional(),
    animal: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.MidiaSelect>;

export const MidiaFindFirstSelectZodSchema = z.object({
    id: z.boolean().optional(),
    type: z.boolean().optional(),
    extension: z.boolean().optional(),
    url: z.boolean().optional(),
    animalId: z.boolean().optional(),
    animal: z.boolean().optional()
  }).strict();

export const MidiaFindFirstSchema: z.ZodType<Prisma.MidiaFindFirstArgs> = z.object({ select: MidiaFindFirstSelectSchema.optional(), include: z.lazy(() => MidiaIncludeObjectSchema.optional()), orderBy: z.union([MidiaOrderByWithRelationInputObjectSchema, MidiaOrderByWithRelationInputObjectSchema.array()]).optional(), where: MidiaWhereInputObjectSchema.optional(), cursor: MidiaWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([MidiaScalarFieldEnumSchema, MidiaScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.MidiaFindFirstArgs>;

export const MidiaFindFirstZodSchema = z.object({ select: MidiaFindFirstSelectSchema.optional(), include: z.lazy(() => MidiaIncludeObjectSchema.optional()), orderBy: z.union([MidiaOrderByWithRelationInputObjectSchema, MidiaOrderByWithRelationInputObjectSchema.array()]).optional(), where: MidiaWhereInputObjectSchema.optional(), cursor: MidiaWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([MidiaScalarFieldEnumSchema, MidiaScalarFieldEnumSchema.array()]).optional() }).strict();