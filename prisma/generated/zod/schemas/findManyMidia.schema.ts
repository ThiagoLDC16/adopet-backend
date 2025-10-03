import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { MidiaIncludeObjectSchema as MidiaIncludeObjectSchema } from './objects/MidiaInclude.schema';
import { MidiaOrderByWithRelationInputObjectSchema as MidiaOrderByWithRelationInputObjectSchema } from './objects/MidiaOrderByWithRelationInput.schema';
import { MidiaWhereInputObjectSchema as MidiaWhereInputObjectSchema } from './objects/MidiaWhereInput.schema';
import { MidiaWhereUniqueInputObjectSchema as MidiaWhereUniqueInputObjectSchema } from './objects/MidiaWhereUniqueInput.schema';
import { MidiaScalarFieldEnumSchema } from './enums/MidiaScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const MidiaFindManySelectSchema: z.ZodType<Prisma.MidiaSelect> = z.object({
    id: z.boolean().optional(),
    type: z.boolean().optional(),
    extension: z.boolean().optional(),
    url: z.boolean().optional(),
    animalId: z.boolean().optional(),
    animal: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.MidiaSelect>;

export const MidiaFindManySelectZodSchema = z.object({
    id: z.boolean().optional(),
    type: z.boolean().optional(),
    extension: z.boolean().optional(),
    url: z.boolean().optional(),
    animalId: z.boolean().optional(),
    animal: z.boolean().optional()
  }).strict();

export const MidiaFindManySchema: z.ZodType<Prisma.MidiaFindManyArgs> = z.object({ select: MidiaFindManySelectSchema.optional(), include: z.lazy(() => MidiaIncludeObjectSchema.optional()), orderBy: z.union([MidiaOrderByWithRelationInputObjectSchema, MidiaOrderByWithRelationInputObjectSchema.array()]).optional(), where: MidiaWhereInputObjectSchema.optional(), cursor: MidiaWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([MidiaScalarFieldEnumSchema, MidiaScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.MidiaFindManyArgs>;

export const MidiaFindManyZodSchema = z.object({ select: MidiaFindManySelectSchema.optional(), include: z.lazy(() => MidiaIncludeObjectSchema.optional()), orderBy: z.union([MidiaOrderByWithRelationInputObjectSchema, MidiaOrderByWithRelationInputObjectSchema.array()]).optional(), where: MidiaWhereInputObjectSchema.optional(), cursor: MidiaWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([MidiaScalarFieldEnumSchema, MidiaScalarFieldEnumSchema.array()]).optional() }).strict();