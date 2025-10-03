import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { MidiaUncheckedCreateNestedManyWithoutAnimalInputObjectSchema as MidiaUncheckedCreateNestedManyWithoutAnimalInputObjectSchema } from './MidiaUncheckedCreateNestedManyWithoutAnimalInput.schema';
import { AnimalsCharacteristicsUncheckedCreateNestedManyWithoutAnimalInputObjectSchema as AnimalsCharacteristicsUncheckedCreateNestedManyWithoutAnimalInputObjectSchema } from './AnimalsCharacteristicsUncheckedCreateNestedManyWithoutAnimalInput.schema'

const makeSchema = () => z.object({
  id: z.number().int().optional(),
  name: z.string(),
  age: z.number().int(),
  species: z.string(),
  breed: z.string(),
  description: z.string(),
  responsibleNGOId: z.number().int(),
  midia: z.lazy(() => MidiaUncheckedCreateNestedManyWithoutAnimalInputObjectSchema).optional(),
  characteristics: z.lazy(() => AnimalsCharacteristicsUncheckedCreateNestedManyWithoutAnimalInputObjectSchema).optional()
}).strict();
export const AnimalUncheckedCreateWithoutAdopterUserInputObjectSchema: z.ZodType<Prisma.AnimalUncheckedCreateWithoutAdopterUserInput> = makeSchema() as unknown as z.ZodType<Prisma.AnimalUncheckedCreateWithoutAdopterUserInput>;
export const AnimalUncheckedCreateWithoutAdopterUserInputObjectZodSchema = makeSchema();
