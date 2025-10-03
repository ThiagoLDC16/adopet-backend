import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserTypeSchema } from '../enums/UserType.schema';
import { NestedEnumUserTypeWithAggregatesFilterObjectSchema as NestedEnumUserTypeWithAggregatesFilterObjectSchema } from './NestedEnumUserTypeWithAggregatesFilter.schema';
import { NestedIntFilterObjectSchema as NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumUserTypeFilterObjectSchema as NestedEnumUserTypeFilterObjectSchema } from './NestedEnumUserTypeFilter.schema'

const makeSchema = () => z.object({
  equals: UserTypeSchema.optional(),
  in: UserTypeSchema.array().optional(),
  notIn: UserTypeSchema.array().optional(),
  not: z.union([UserTypeSchema, z.lazy(() => NestedEnumUserTypeWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumUserTypeFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumUserTypeFilterObjectSchema).optional()
}).strict();
export const EnumUserTypeWithAggregatesFilterObjectSchema: z.ZodType<Prisma.EnumUserTypeWithAggregatesFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumUserTypeWithAggregatesFilter>;
export const EnumUserTypeWithAggregatesFilterObjectZodSchema = makeSchema();
