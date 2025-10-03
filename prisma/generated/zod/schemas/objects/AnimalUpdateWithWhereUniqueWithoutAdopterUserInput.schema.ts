import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AnimalWhereUniqueInputObjectSchema as AnimalWhereUniqueInputObjectSchema } from './AnimalWhereUniqueInput.schema';
import { AnimalUpdateWithoutAdopterUserInputObjectSchema as AnimalUpdateWithoutAdopterUserInputObjectSchema } from './AnimalUpdateWithoutAdopterUserInput.schema';
import { AnimalUncheckedUpdateWithoutAdopterUserInputObjectSchema as AnimalUncheckedUpdateWithoutAdopterUserInputObjectSchema } from './AnimalUncheckedUpdateWithoutAdopterUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AnimalWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => AnimalUpdateWithoutAdopterUserInputObjectSchema), z.lazy(() => AnimalUncheckedUpdateWithoutAdopterUserInputObjectSchema)])
}).strict();
export const AnimalUpdateWithWhereUniqueWithoutAdopterUserInputObjectSchema: z.ZodType<Prisma.AnimalUpdateWithWhereUniqueWithoutAdopterUserInput> = makeSchema() as unknown as z.ZodType<Prisma.AnimalUpdateWithWhereUniqueWithoutAdopterUserInput>;
export const AnimalUpdateWithWhereUniqueWithoutAdopterUserInputObjectZodSchema = makeSchema();
