import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { MidiaCreateNestedManyWithoutAnimalInputObjectSchema as MidiaCreateNestedManyWithoutAnimalInputObjectSchema } from './MidiaCreateNestedManyWithoutAnimalInput.schema';
import { AnimalsCharacteristicsCreateNestedManyWithoutAnimalInputObjectSchema as AnimalsCharacteristicsCreateNestedManyWithoutAnimalInputObjectSchema } from './AnimalsCharacteristicsCreateNestedManyWithoutAnimalInput.schema';
import { UserCreateNestedOneWithoutInterestedPetsInputObjectSchema as UserCreateNestedOneWithoutInterestedPetsInputObjectSchema } from './UserCreateNestedOneWithoutInterestedPetsInput.schema'

const makeSchema = () => z.object({
  name: z.string(),
  age: z.number().int(),
  species: z.string(),
  breed: z.string(),
  description: z.string(),
  midia: z.lazy(() => MidiaCreateNestedManyWithoutAnimalInputObjectSchema).optional(),
  characteristics: z.lazy(() => AnimalsCharacteristicsCreateNestedManyWithoutAnimalInputObjectSchema).optional(),
  adopterUser: z.lazy(() => UserCreateNestedOneWithoutInterestedPetsInputObjectSchema).optional()
}).strict();
export const AnimalCreateWithoutResponsibleNGOInputObjectSchema: z.ZodType<Prisma.AnimalCreateWithoutResponsibleNGOInput> = makeSchema() as unknown as z.ZodType<Prisma.AnimalCreateWithoutResponsibleNGOInput>;
export const AnimalCreateWithoutResponsibleNGOInputObjectZodSchema = makeSchema();
