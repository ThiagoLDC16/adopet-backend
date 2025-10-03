import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { CharacteristicIncludeObjectSchema as CharacteristicIncludeObjectSchema } from './objects/CharacteristicInclude.schema';
import { CharacteristicOrderByWithRelationInputObjectSchema as CharacteristicOrderByWithRelationInputObjectSchema } from './objects/CharacteristicOrderByWithRelationInput.schema';
import { CharacteristicWhereInputObjectSchema as CharacteristicWhereInputObjectSchema } from './objects/CharacteristicWhereInput.schema';
import { CharacteristicWhereUniqueInputObjectSchema as CharacteristicWhereUniqueInputObjectSchema } from './objects/CharacteristicWhereUniqueInput.schema';
import { CharacteristicScalarFieldEnumSchema } from './enums/CharacteristicScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const CharacteristicFindManySelectSchema: z.ZodType<Prisma.CharacteristicSelect> = z.object({
    id: z.boolean().optional(),
    description: z.boolean().optional(),
    animals: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.CharacteristicSelect>;

export const CharacteristicFindManySelectZodSchema = z.object({
    id: z.boolean().optional(),
    description: z.boolean().optional(),
    animals: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const CharacteristicFindManySchema: z.ZodType<Prisma.CharacteristicFindManyArgs> = z.object({ select: CharacteristicFindManySelectSchema.optional(), include: z.lazy(() => CharacteristicIncludeObjectSchema.optional()), orderBy: z.union([CharacteristicOrderByWithRelationInputObjectSchema, CharacteristicOrderByWithRelationInputObjectSchema.array()]).optional(), where: CharacteristicWhereInputObjectSchema.optional(), cursor: CharacteristicWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([CharacteristicScalarFieldEnumSchema, CharacteristicScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.CharacteristicFindManyArgs>;

export const CharacteristicFindManyZodSchema = z.object({ select: CharacteristicFindManySelectSchema.optional(), include: z.lazy(() => CharacteristicIncludeObjectSchema.optional()), orderBy: z.union([CharacteristicOrderByWithRelationInputObjectSchema, CharacteristicOrderByWithRelationInputObjectSchema.array()]).optional(), where: CharacteristicWhereInputObjectSchema.optional(), cursor: CharacteristicWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([CharacteristicScalarFieldEnumSchema, CharacteristicScalarFieldEnumSchema.array()]).optional() }).strict();