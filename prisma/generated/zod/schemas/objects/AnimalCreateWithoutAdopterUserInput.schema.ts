import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { MidiaCreateNestedManyWithoutAnimalInputObjectSchema as MidiaCreateNestedManyWithoutAnimalInputObjectSchema } from './MidiaCreateNestedManyWithoutAnimalInput.schema';
import { AnimalsCharacteristicsCreateNestedManyWithoutAnimalInputObjectSchema as AnimalsCharacteristicsCreateNestedManyWithoutAnimalInputObjectSchema } from './AnimalsCharacteristicsCreateNestedManyWithoutAnimalInput.schema';
import { UserCreateNestedOneWithoutOwnedPetsInputObjectSchema as UserCreateNestedOneWithoutOwnedPetsInputObjectSchema } from './UserCreateNestedOneWithoutOwnedPetsInput.schema'

const makeSchema = () => z.object({
  name: z.string(),
  age: z.number().int(),
  species: z.string(),
  breed: z.string(),
  description: z.string(),
  midia: z.lazy(() => MidiaCreateNestedManyWithoutAnimalInputObjectSchema).optional(),
  characteristics: z.lazy(() => AnimalsCharacteristicsCreateNestedManyWithoutAnimalInputObjectSchema).optional(),
  responsibleNGO: z.lazy(() => UserCreateNestedOneWithoutOwnedPetsInputObjectSchema)
}).strict();
export const AnimalCreateWithoutAdopterUserInputObjectSchema: z.ZodType<Prisma.AnimalCreateWithoutAdopterUserInput> = makeSchema() as unknown as z.ZodType<Prisma.AnimalCreateWithoutAdopterUserInput>;
export const AnimalCreateWithoutAdopterUserInputObjectZodSchema = makeSchema();
