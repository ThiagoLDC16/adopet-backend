import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { AnimalUpdateOneRequiredWithoutMidiaNestedInputObjectSchema as AnimalUpdateOneRequiredWithoutMidiaNestedInputObjectSchema } from './AnimalUpdateOneRequiredWithoutMidiaNestedInput.schema'

const makeSchema = () => z.object({
  type: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  extension: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  url: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  animal: z.lazy(() => AnimalUpdateOneRequiredWithoutMidiaNestedInputObjectSchema).optional()
}).strict();
export const MidiaUpdateInputObjectSchema: z.ZodType<Prisma.MidiaUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.MidiaUpdateInput>;
export const MidiaUpdateInputObjectZodSchema = makeSchema();
