import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { AnimalsCharacteristicsIncludeObjectSchema as AnimalsCharacteristicsIncludeObjectSchema } from './objects/AnimalsCharacteristicsInclude.schema';
import { AnimalsCharacteristicsOrderByWithRelationInputObjectSchema as AnimalsCharacteristicsOrderByWithRelationInputObjectSchema } from './objects/AnimalsCharacteristicsOrderByWithRelationInput.schema';
import { AnimalsCharacteristicsWhereInputObjectSchema as AnimalsCharacteristicsWhereInputObjectSchema } from './objects/AnimalsCharacteristicsWhereInput.schema';
import { AnimalsCharacteristicsWhereUniqueInputObjectSchema as AnimalsCharacteristicsWhereUniqueInputObjectSchema } from './objects/AnimalsCharacteristicsWhereUniqueInput.schema';
import { AnimalsCharacteristicsScalarFieldEnumSchema } from './enums/AnimalsCharacteristicsScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const AnimalsCharacteristicsFindManySelectSchema: z.ZodType<Prisma.AnimalsCharacteristicsSelect> = z.object({
    animalId: z.boolean().optional(),
    characteristicId: z.boolean().optional(),
    animal: z.boolean().optional(),
    characteristic: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.AnimalsCharacteristicsSelect>;

export const AnimalsCharacteristicsFindManySelectZodSchema = z.object({
    animalId: z.boolean().optional(),
    characteristicId: z.boolean().optional(),
    animal: z.boolean().optional(),
    characteristic: z.boolean().optional()
  }).strict();

export const AnimalsCharacteristicsFindManySchema: z.ZodType<Prisma.AnimalsCharacteristicsFindManyArgs> = z.object({ select: AnimalsCharacteristicsFindManySelectSchema.optional(), include: z.lazy(() => AnimalsCharacteristicsIncludeObjectSchema.optional()), orderBy: z.union([AnimalsCharacteristicsOrderByWithRelationInputObjectSchema, AnimalsCharacteristicsOrderByWithRelationInputObjectSchema.array()]).optional(), where: AnimalsCharacteristicsWhereInputObjectSchema.optional(), cursor: AnimalsCharacteristicsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([AnimalsCharacteristicsScalarFieldEnumSchema, AnimalsCharacteristicsScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.AnimalsCharacteristicsFindManyArgs>;

export const AnimalsCharacteristicsFindManyZodSchema = z.object({ select: AnimalsCharacteristicsFindManySelectSchema.optional(), include: z.lazy(() => AnimalsCharacteristicsIncludeObjectSchema.optional()), orderBy: z.union([AnimalsCharacteristicsOrderByWithRelationInputObjectSchema, AnimalsCharacteristicsOrderByWithRelationInputObjectSchema.array()]).optional(), where: AnimalsCharacteristicsWhereInputObjectSchema.optional(), cursor: AnimalsCharacteristicsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([AnimalsCharacteristicsScalarFieldEnumSchema, AnimalsCharacteristicsScalarFieldEnumSchema.array()]).optional() }).strict();