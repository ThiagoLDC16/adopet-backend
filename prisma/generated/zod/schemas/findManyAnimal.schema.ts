import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { AnimalIncludeObjectSchema as AnimalIncludeObjectSchema } from './objects/AnimalInclude.schema';
import { AnimalOrderByWithRelationInputObjectSchema as AnimalOrderByWithRelationInputObjectSchema } from './objects/AnimalOrderByWithRelationInput.schema';
import { AnimalWhereInputObjectSchema as AnimalWhereInputObjectSchema } from './objects/AnimalWhereInput.schema';
import { AnimalWhereUniqueInputObjectSchema as AnimalWhereUniqueInputObjectSchema } from './objects/AnimalWhereUniqueInput.schema';
import { AnimalScalarFieldEnumSchema } from './enums/AnimalScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const AnimalFindManySelectSchema: z.ZodType<Prisma.AnimalSelect> = z.object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    age: z.boolean().optional(),
    species: z.boolean().optional(),
    breed: z.boolean().optional(),
    midia: z.boolean().optional(),
    characteristics: z.boolean().optional(),
    description: z.boolean().optional(),
    responsibleNGO: z.boolean().optional(),
    responsibleNGOId: z.boolean().optional(),
    adopterUser: z.boolean().optional(),
    adopterUserId: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.AnimalSelect>;

export const AnimalFindManySelectZodSchema = z.object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    age: z.boolean().optional(),
    species: z.boolean().optional(),
    breed: z.boolean().optional(),
    midia: z.boolean().optional(),
    characteristics: z.boolean().optional(),
    description: z.boolean().optional(),
    responsibleNGO: z.boolean().optional(),
    responsibleNGOId: z.boolean().optional(),
    adopterUser: z.boolean().optional(),
    adopterUserId: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const AnimalFindManySchema: z.ZodType<Prisma.AnimalFindManyArgs> = z.object({ select: AnimalFindManySelectSchema.optional(), include: z.lazy(() => AnimalIncludeObjectSchema.optional()), orderBy: z.union([AnimalOrderByWithRelationInputObjectSchema, AnimalOrderByWithRelationInputObjectSchema.array()]).optional(), where: AnimalWhereInputObjectSchema.optional(), cursor: AnimalWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([AnimalScalarFieldEnumSchema, AnimalScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.AnimalFindManyArgs>;

export const AnimalFindManyZodSchema = z.object({ select: AnimalFindManySelectSchema.optional(), include: z.lazy(() => AnimalIncludeObjectSchema.optional()), orderBy: z.union([AnimalOrderByWithRelationInputObjectSchema, AnimalOrderByWithRelationInputObjectSchema.array()]).optional(), where: AnimalWhereInputObjectSchema.optional(), cursor: AnimalWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([AnimalScalarFieldEnumSchema, AnimalScalarFieldEnumSchema.array()]).optional() }).strict();