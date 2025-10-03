import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserTypeSchema } from '../enums/UserType.schema';
import { NestedIntFilterObjectSchema as NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumUserTypeFilterObjectSchema as NestedEnumUserTypeFilterObjectSchema } from './NestedEnumUserTypeFilter.schema'

const nestedenumusertypewithaggregatesfilterSchema = z.object({
  equals: UserTypeSchema.optional(),
  in: UserTypeSchema.array().optional(),
  notIn: UserTypeSchema.array().optional(),
  not: z.union([UserTypeSchema, z.lazy(() => NestedEnumUserTypeWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumUserTypeFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumUserTypeFilterObjectSchema).optional()
}).strict();
export const NestedEnumUserTypeWithAggregatesFilterObjectSchema: z.ZodType<Prisma.NestedEnumUserTypeWithAggregatesFilter> = nestedenumusertypewithaggregatesfilterSchema as unknown as z.ZodType<Prisma.NestedEnumUserTypeWithAggregatesFilter>;
export const NestedEnumUserTypeWithAggregatesFilterObjectZodSchema = nestedenumusertypewithaggregatesfilterSchema;
