import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema'

const animalscharacteristicsscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => AnimalsCharacteristicsScalarWhereInputObjectSchema), z.lazy(() => AnimalsCharacteristicsScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => AnimalsCharacteristicsScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => AnimalsCharacteristicsScalarWhereInputObjectSchema), z.lazy(() => AnimalsCharacteristicsScalarWhereInputObjectSchema).array()]).optional(),
  animalId: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  characteristicId: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional()
}).strict();
export const AnimalsCharacteristicsScalarWhereInputObjectSchema: z.ZodType<Prisma.AnimalsCharacteristicsScalarWhereInput> = animalscharacteristicsscalarwhereinputSchema as unknown as z.ZodType<Prisma.AnimalsCharacteristicsScalarWhereInput>;
export const AnimalsCharacteristicsScalarWhereInputObjectZodSchema = animalscharacteristicsscalarwhereinputSchema;
