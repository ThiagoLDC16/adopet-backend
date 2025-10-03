import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  type: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  extension: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  url: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const MidiaUpdateManyMutationInputObjectSchema: z.ZodType<Prisma.MidiaUpdateManyMutationInput> = makeSchema() as unknown as z.ZodType<Prisma.MidiaUpdateManyMutationInput>;
export const MidiaUpdateManyMutationInputObjectZodSchema = makeSchema();
