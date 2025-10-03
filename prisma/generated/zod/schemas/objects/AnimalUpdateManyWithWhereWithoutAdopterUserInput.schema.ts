import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AnimalScalarWhereInputObjectSchema as AnimalScalarWhereInputObjectSchema } from './AnimalScalarWhereInput.schema';
import { AnimalUpdateManyMutationInputObjectSchema as AnimalUpdateManyMutationInputObjectSchema } from './AnimalUpdateManyMutationInput.schema';
import { AnimalUncheckedUpdateManyWithoutAdopterUserInputObjectSchema as AnimalUncheckedUpdateManyWithoutAdopterUserInputObjectSchema } from './AnimalUncheckedUpdateManyWithoutAdopterUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AnimalScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => AnimalUpdateManyMutationInputObjectSchema), z.lazy(() => AnimalUncheckedUpdateManyWithoutAdopterUserInputObjectSchema)])
}).strict();
export const AnimalUpdateManyWithWhereWithoutAdopterUserInputObjectSchema: z.ZodType<Prisma.AnimalUpdateManyWithWhereWithoutAdopterUserInput> = makeSchema() as unknown as z.ZodType<Prisma.AnimalUpdateManyWithWhereWithoutAdopterUserInput>;
export const AnimalUpdateManyWithWhereWithoutAdopterUserInputObjectZodSchema = makeSchema();
