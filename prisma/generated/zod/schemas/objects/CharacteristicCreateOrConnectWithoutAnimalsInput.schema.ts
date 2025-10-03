import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CharacteristicWhereUniqueInputObjectSchema as CharacteristicWhereUniqueInputObjectSchema } from './CharacteristicWhereUniqueInput.schema';
import { CharacteristicCreateWithoutAnimalsInputObjectSchema as CharacteristicCreateWithoutAnimalsInputObjectSchema } from './CharacteristicCreateWithoutAnimalsInput.schema';
import { CharacteristicUncheckedCreateWithoutAnimalsInputObjectSchema as CharacteristicUncheckedCreateWithoutAnimalsInputObjectSchema } from './CharacteristicUncheckedCreateWithoutAnimalsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CharacteristicWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => CharacteristicCreateWithoutAnimalsInputObjectSchema), z.lazy(() => CharacteristicUncheckedCreateWithoutAnimalsInputObjectSchema)])
}).strict();
export const CharacteristicCreateOrConnectWithoutAnimalsInputObjectSchema: z.ZodType<Prisma.CharacteristicCreateOrConnectWithoutAnimalsInput> = makeSchema() as unknown as z.ZodType<Prisma.CharacteristicCreateOrConnectWithoutAnimalsInput>;
export const CharacteristicCreateOrConnectWithoutAnimalsInputObjectZodSchema = makeSchema();
