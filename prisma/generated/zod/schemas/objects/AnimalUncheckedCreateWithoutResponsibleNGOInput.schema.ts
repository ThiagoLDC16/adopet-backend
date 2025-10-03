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
  adopterUserId: z.number().int().optional().nullable(),
  midia: z.lazy(() => MidiaUncheckedCreateNestedManyWithoutAnimalInputObjectSchema).optional(),
  characteristics: z.lazy(() => AnimalsCharacteristicsUncheckedCreateNestedManyWithoutAnimalInputObjectSchema).optional()
}).strict();
export const AnimalUncheckedCreateWithoutResponsibleNGOInputObjectSchema: z.ZodType<Prisma.AnimalUncheckedCreateWithoutResponsibleNGOInput> = makeSchema() as unknown as z.ZodType<Prisma.AnimalUncheckedCreateWithoutResponsibleNGOInput>;
export const AnimalUncheckedCreateWithoutResponsibleNGOInputObjectZodSchema = makeSchema();
