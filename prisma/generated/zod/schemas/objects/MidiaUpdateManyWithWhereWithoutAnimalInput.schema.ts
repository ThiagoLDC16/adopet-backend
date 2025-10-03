import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { MidiaScalarWhereInputObjectSchema as MidiaScalarWhereInputObjectSchema } from './MidiaScalarWhereInput.schema';
import { MidiaUpdateManyMutationInputObjectSchema as MidiaUpdateManyMutationInputObjectSchema } from './MidiaUpdateManyMutationInput.schema';
import { MidiaUncheckedUpdateManyWithoutAnimalInputObjectSchema as MidiaUncheckedUpdateManyWithoutAnimalInputObjectSchema } from './MidiaUncheckedUpdateManyWithoutAnimalInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => MidiaScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => MidiaUpdateManyMutationInputObjectSchema), z.lazy(() => MidiaUncheckedUpdateManyWithoutAnimalInputObjectSchema)])
}).strict();
export const MidiaUpdateManyWithWhereWithoutAnimalInputObjectSchema: z.ZodType<Prisma.MidiaUpdateManyWithWhereWithoutAnimalInput> = makeSchema() as unknown as z.ZodType<Prisma.MidiaUpdateManyWithWhereWithoutAnimalInput>;
export const MidiaUpdateManyWithWhereWithoutAnimalInputObjectZodSchema = makeSchema();
