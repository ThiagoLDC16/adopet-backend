import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AnimalsCharacteristicsScalarWhereInputObjectSchema as AnimalsCharacteristicsScalarWhereInputObjectSchema } from './AnimalsCharacteristicsScalarWhereInput.schema';
import { AnimalsCharacteristicsUpdateManyMutationInputObjectSchema as AnimalsCharacteristicsUpdateManyMutationInputObjectSchema } from './AnimalsCharacteristicsUpdateManyMutationInput.schema';
import { AnimalsCharacteristicsUncheckedUpdateManyWithoutAnimalInputObjectSchema as AnimalsCharacteristicsUncheckedUpdateManyWithoutAnimalInputObjectSchema } from './AnimalsCharacteristicsUncheckedUpdateManyWithoutAnimalInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AnimalsCharacteristicsScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => AnimalsCharacteristicsUpdateManyMutationInputObjectSchema), z.lazy(() => AnimalsCharacteristicsUncheckedUpdateManyWithoutAnimalInputObjectSchema)])
}).strict();
export const AnimalsCharacteristicsUpdateManyWithWhereWithoutAnimalInputObjectSchema: z.ZodType<Prisma.AnimalsCharacteristicsUpdateManyWithWhereWithoutAnimalInput> = makeSchema() as unknown as z.ZodType<Prisma.AnimalsCharacteristicsUpdateManyWithWhereWithoutAnimalInput>;
export const AnimalsCharacteristicsUpdateManyWithWhereWithoutAnimalInputObjectZodSchema = makeSchema();
