import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AnimalCreateWithoutMidiaInputObjectSchema as AnimalCreateWithoutMidiaInputObjectSchema } from './AnimalCreateWithoutMidiaInput.schema';
import { AnimalUncheckedCreateWithoutMidiaInputObjectSchema as AnimalUncheckedCreateWithoutMidiaInputObjectSchema } from './AnimalUncheckedCreateWithoutMidiaInput.schema';
import { AnimalCreateOrConnectWithoutMidiaInputObjectSchema as AnimalCreateOrConnectWithoutMidiaInputObjectSchema } from './AnimalCreateOrConnectWithoutMidiaInput.schema';
import { AnimalUpsertWithoutMidiaInputObjectSchema as AnimalUpsertWithoutMidiaInputObjectSchema } from './AnimalUpsertWithoutMidiaInput.schema';
import { AnimalWhereUniqueInputObjectSchema as AnimalWhereUniqueInputObjectSchema } from './AnimalWhereUniqueInput.schema';
import { AnimalUpdateToOneWithWhereWithoutMidiaInputObjectSchema as AnimalUpdateToOneWithWhereWithoutMidiaInputObjectSchema } from './AnimalUpdateToOneWithWhereWithoutMidiaInput.schema';
import { AnimalUpdateWithoutMidiaInputObjectSchema as AnimalUpdateWithoutMidiaInputObjectSchema } from './AnimalUpdateWithoutMidiaInput.schema';
import { AnimalUncheckedUpdateWithoutMidiaInputObjectSchema as AnimalUncheckedUpdateWithoutMidiaInputObjectSchema } from './AnimalUncheckedUpdateWithoutMidiaInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => AnimalCreateWithoutMidiaInputObjectSchema), z.lazy(() => AnimalUncheckedCreateWithoutMidiaInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => AnimalCreateOrConnectWithoutMidiaInputObjectSchema).optional(),
  upsert: z.lazy(() => AnimalUpsertWithoutMidiaInputObjectSchema).optional(),
  connect: z.lazy(() => AnimalWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => AnimalUpdateToOneWithWhereWithoutMidiaInputObjectSchema), z.lazy(() => AnimalUpdateWithoutMidiaInputObjectSchema), z.lazy(() => AnimalUncheckedUpdateWithoutMidiaInputObjectSchema)]).optional()
}).strict();
export const AnimalUpdateOneRequiredWithoutMidiaNestedInputObjectSchema: z.ZodType<Prisma.AnimalUpdateOneRequiredWithoutMidiaNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.AnimalUpdateOneRequiredWithoutMidiaNestedInput>;
export const AnimalUpdateOneRequiredWithoutMidiaNestedInputObjectZodSchema = makeSchema();
