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
  adopterUserId: z.number().int().optional().nullable(),
  midia: z.lazy(() => MidiaUncheckedCreateNestedManyWithoutAnimalInputObjectSchema),
  characteristics: z.lazy(() => AnimalsCharacteristicsUncheckedCreateNestedManyWithoutAnimalInputObjectSchema)
}).strict();
export const AnimalUncheckedCreateInputObjectSchema: z.ZodType<Prisma.AnimalUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.AnimalUncheckedCreateInput>;
export const AnimalUncheckedCreateInputObjectZodSchema = makeSchema();
