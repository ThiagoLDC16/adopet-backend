import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { MidiaUncheckedCreateNestedManyWithoutAnimalInputObjectSchema as MidiaUncheckedCreateNestedManyWithoutAnimalInputObjectSchema } from './MidiaUncheckedCreateNestedManyWithoutAnimalInput.schema'

const makeSchema = () => z.object({
  id: z.number().int().optional(),
  name: z.string(),
  age: z.number().int(),
  species: z.string(),
  breed: z.string(),
  description: z.string(),
  responsibleNGOId: z.number().int(),
  adopterUserId: z.number().int().optional().nullable(),
  midia: z.lazy(() => MidiaUncheckedCreateNestedManyWithoutAnimalInputObjectSchema).optional()
}).strict();
export const AnimalUncheckedCreateWithoutCharacteristicsInputObjectSchema: z.ZodType<Prisma.AnimalUncheckedCreateWithoutCharacteristicsInput> = makeSchema() as unknown as z.ZodType<Prisma.AnimalUncheckedCreateWithoutCharacteristicsInput>;
export const AnimalUncheckedCreateWithoutCharacteristicsInputObjectZodSchema = makeSchema();
