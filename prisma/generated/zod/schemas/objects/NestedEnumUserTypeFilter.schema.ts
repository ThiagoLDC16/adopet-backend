import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserTypeSchema } from '../enums/UserType.schema'

const nestedenumusertypefilterSchema = z.object({
  equals: UserTypeSchema.optional(),
  in: UserTypeSchema.array().optional(),
  notIn: UserTypeSchema.array().optional(),
  not: z.union([UserTypeSchema, z.lazy(() => NestedEnumUserTypeFilterObjectSchema)]).optional()
}).strict();
export const NestedEnumUserTypeFilterObjectSchema: z.ZodType<Prisma.NestedEnumUserTypeFilter> = nestedenumusertypefilterSchema as unknown as z.ZodType<Prisma.NestedEnumUserTypeFilter>;
export const NestedEnumUserTypeFilterObjectZodSchema = nestedenumusertypefilterSchema;
