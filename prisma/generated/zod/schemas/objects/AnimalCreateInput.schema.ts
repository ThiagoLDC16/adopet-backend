import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { MidiaCreateNestedManyWithoutAnimalInputObjectSchema as MidiaCreateNestedManyWithoutAnimalInputObjectSchema } from './MidiaCreateNestedManyWithoutAnimalInput.schema';
import { AnimalsCharacteristicsCreateNestedManyWithoutAnimalInputObjectSchema as AnimalsCharacteristicsCreateNestedManyWithoutAnimalInputObjectSchema } from './AnimalsCharacteristicsCreateNestedManyWithoutAnimalInput.schema';
import { UserCreateNestedOneWithoutOwnedPetsInputObjectSchema as UserCreateNestedOneWithoutOwnedPetsInputObjectSchema } from './UserCreateNestedOneWithoutOwnedPetsInput.schema';
import { UserCreateNestedOneWithoutInterestedPetsInputObjectSchema as UserCreateNestedOneWithoutInterestedPetsInputObjectSchema } from './UserCreateNestedOneWithoutInterestedPetsInput.schema'

const makeSchema = () => z.object({
  name: z.string(),
  age: z.number().int(),
  species: z.string(),
  breed: z.string(),
  description: z.string(),
  midia: z.lazy(() => MidiaCreateNestedManyWithoutAnimalInputObjectSchema),
  characteristics: z.lazy(() => AnimalsCharacteristicsCreateNestedManyWithoutAnimalInputObjectSchema),
  responsibleNGO: z.lazy(() => UserCreateNestedOneWithoutOwnedPetsInputObjectSchema),
  adopterUser: z.lazy(() => UserCreateNestedOneWithoutInterestedPetsInputObjectSchema).optional()
}).strict();
export const AnimalCreateInputObjectSchema: z.ZodType<Prisma.AnimalCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.AnimalCreateInput>;
export const AnimalCreateInputObjectZodSchema = makeSchema();
