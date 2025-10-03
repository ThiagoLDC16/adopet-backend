import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { MidiaCreateNestedManyWithoutAnimalInputObjectSchema as MidiaCreateNestedManyWithoutAnimalInputObjectSchema } from './MidiaCreateNestedManyWithoutAnimalInput.schema';
import { UserCreateNestedOneWithoutOwnedPetsInputObjectSchema as UserCreateNestedOneWithoutOwnedPetsInputObjectSchema } from './UserCreateNestedOneWithoutOwnedPetsInput.schema';
import { UserCreateNestedOneWithoutInterestedPetsInputObjectSchema as UserCreateNestedOneWithoutInterestedPetsInputObjectSchema } from './UserCreateNestedOneWithoutInterestedPetsInput.schema'

const makeSchema = () => z.object({
  name: z.string(),
  age: z.number().int(),
  species: z.string(),
  breed: z.string(),
  description: z.string(),
  midia: z.lazy(() => MidiaCreateNestedManyWithoutAnimalInputObjectSchema).optional(),
  responsibleNGO: z.lazy(() => UserCreateNestedOneWithoutOwnedPetsInputObjectSchema),
  adopterUser: z.lazy(() => UserCreateNestedOneWithoutInterestedPetsInputObjectSchema).optional()
}).strict();
export const AnimalCreateWithoutCharacteristicsInputObjectSchema: z.ZodType<Prisma.AnimalCreateWithoutCharacteristicsInput> = makeSchema() as unknown as z.ZodType<Prisma.AnimalCreateWithoutCharacteristicsInput>;
export const AnimalCreateWithoutCharacteristicsInputObjectZodSchema = makeSchema();
