import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AnimalsCharacteristicsCreateNestedManyWithoutAnimalInputObjectSchema as AnimalsCharacteristicsCreateNestedManyWithoutAnimalInputObjectSchema } from './AnimalsCharacteristicsCreateNestedManyWithoutAnimalInput.schema';
import { UserCreateNestedOneWithoutOwnedPetsInputObjectSchema as UserCreateNestedOneWithoutOwnedPetsInputObjectSchema } from './UserCreateNestedOneWithoutOwnedPetsInput.schema';
import { UserCreateNestedOneWithoutInterestedPetsInputObjectSchema as UserCreateNestedOneWithoutInterestedPetsInputObjectSchema } from './UserCreateNestedOneWithoutInterestedPetsInput.schema'

const makeSchema = () => z.object({
  name: z.string(),
  age: z.number().int(),
  species: z.string(),
  breed: z.string(),
  description: z.string(),
  characteristics: z.lazy(() => AnimalsCharacteristicsCreateNestedManyWithoutAnimalInputObjectSchema).optional(),
  responsibleNGO: z.lazy(() => UserCreateNestedOneWithoutOwnedPetsInputObjectSchema),
  adopterUser: z.lazy(() => UserCreateNestedOneWithoutInterestedPetsInputObjectSchema).optional()
}).strict();
export const AnimalCreateWithoutMidiaInputObjectSchema: z.ZodType<Prisma.AnimalCreateWithoutMidiaInput> = makeSchema() as unknown as z.ZodType<Prisma.AnimalCreateWithoutMidiaInput>;
export const AnimalCreateWithoutMidiaInputObjectZodSchema = makeSchema();
