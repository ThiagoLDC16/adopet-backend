import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  type: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  extension: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  url: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const MidiaUpdateWithoutAnimalInputObjectSchema: z.ZodType<Prisma.MidiaUpdateWithoutAnimalInput> = makeSchema() as unknown as z.ZodType<Prisma.MidiaUpdateWithoutAnimalInput>;
export const MidiaUpdateWithoutAnimalInputObjectZodSchema = makeSchema();
