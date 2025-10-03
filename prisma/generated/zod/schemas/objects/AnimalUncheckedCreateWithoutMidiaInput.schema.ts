import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AnimalsCharacteristicsUncheckedCreateNestedManyWithoutAnimalInputObjectSchema as AnimalsCharacteristicsUncheckedCreateNestedManyWithoutAnimalInputObjectSchema } from './AnimalsCharacteristicsUncheckedCreateNestedManyWithoutAnimalInput.schema'

const makeSchema = () => z.object({
  id: z.number().int().optional(),
  name: z.string(),
  age: z.number().int(),
  species: z.string(),
  breed: z.string(),
  description: z.string(),
  responsibleNGOId: z.number().int(),
  adopterUserId: z.number().int().optional().nullable(),
  characteristics: z.lazy(() => AnimalsCharacteristicsUncheckedCreateNestedManyWithoutAnimalInputObjectSchema).optional()
}).strict();
export const AnimalUncheckedCreateWithoutMidiaInputObjectSchema: z.ZodType<Prisma.AnimalUncheckedCreateWithoutMidiaInput> = makeSchema() as unknown as z.ZodType<Prisma.AnimalUncheckedCreateWithoutMidiaInput>;
export const AnimalUncheckedCreateWithoutMidiaInputObjectZodSchema = makeSchema();
