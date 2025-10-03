import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CharacteristicCreateWithoutAnimalsInputObjectSchema as CharacteristicCreateWithoutAnimalsInputObjectSchema } from './CharacteristicCreateWithoutAnimalsInput.schema';
import { CharacteristicUncheckedCreateWithoutAnimalsInputObjectSchema as CharacteristicUncheckedCreateWithoutAnimalsInputObjectSchema } from './CharacteristicUncheckedCreateWithoutAnimalsInput.schema';
import { CharacteristicCreateOrConnectWithoutAnimalsInputObjectSchema as CharacteristicCreateOrConnectWithoutAnimalsInputObjectSchema } from './CharacteristicCreateOrConnectWithoutAnimalsInput.schema';
import { CharacteristicWhereUniqueInputObjectSchema as CharacteristicWhereUniqueInputObjectSchema } from './CharacteristicWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => CharacteristicCreateWithoutAnimalsInputObjectSchema), z.lazy(() => CharacteristicUncheckedCreateWithoutAnimalsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => CharacteristicCreateOrConnectWithoutAnimalsInputObjectSchema).optional(),
  connect: z.lazy(() => CharacteristicWhereUniqueInputObjectSchema).optional()
}).strict();
export const CharacteristicCreateNestedOneWithoutAnimalsInputObjectSchema: z.ZodType<Prisma.CharacteristicCreateNestedOneWithoutAnimalsInput> = makeSchema() as unknown as z.ZodType<Prisma.CharacteristicCreateNestedOneWithoutAnimalsInput>;
export const CharacteristicCreateNestedOneWithoutAnimalsInputObjectZodSchema = makeSchema();
