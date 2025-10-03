import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserTypeSchema } from '../enums/UserType.schema'

const makeSchema = () => z.object({
  set: UserTypeSchema.optional()
}).strict();
export const EnumUserTypeFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.EnumUserTypeFieldUpdateOperationsInput> = makeSchema() as unknown as z.ZodType<Prisma.EnumUserTypeFieldUpdateOperationsInput>;
export const EnumUserTypeFieldUpdateOperationsInputObjectZodSchema = makeSchema();
