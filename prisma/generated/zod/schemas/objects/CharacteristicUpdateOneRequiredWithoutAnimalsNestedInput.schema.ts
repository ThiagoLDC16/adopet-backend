import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CharacteristicCreateWithoutAnimalsInputObjectSchema as CharacteristicCreateWithoutAnimalsInputObjectSchema } from './CharacteristicCreateWithoutAnimalsInput.schema';
import { CharacteristicUncheckedCreateWithoutAnimalsInputObjectSchema as CharacteristicUncheckedCreateWithoutAnimalsInputObjectSchema } from './CharacteristicUncheckedCreateWithoutAnimalsInput.schema';
import { CharacteristicCreateOrConnectWithoutAnimalsInputObjectSchema as CharacteristicCreateOrConnectWithoutAnimalsInputObjectSchema } from './CharacteristicCreateOrConnectWithoutAnimalsInput.schema';
import { CharacteristicUpsertWithoutAnimalsInputObjectSchema as CharacteristicUpsertWithoutAnimalsInputObjectSchema } from './CharacteristicUpsertWithoutAnimalsInput.schema';
import { CharacteristicWhereUniqueInputObjectSchema as CharacteristicWhereUniqueInputObjectSchema } from './CharacteristicWhereUniqueInput.schema';
import { CharacteristicUpdateToOneWithWhereWithoutAnimalsInputObjectSchema as CharacteristicUpdateToOneWithWhereWithoutAnimalsInputObjectSchema } from './CharacteristicUpdateToOneWithWhereWithoutAnimalsInput.schema';
import { CharacteristicUpdateWithoutAnimalsInputObjectSchema as CharacteristicUpdateWithoutAnimalsInputObjectSchema } from './CharacteristicUpdateWithoutAnimalsInput.schema';
import { CharacteristicUncheckedUpdateWithoutAnimalsInputObjectSchema as CharacteristicUncheckedUpdateWithoutAnimalsInputObjectSchema } from './CharacteristicUncheckedUpdateWithoutAnimalsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => CharacteristicCreateWithoutAnimalsInputObjectSchema), z.lazy(() => CharacteristicUncheckedCreateWithoutAnimalsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => CharacteristicCreateOrConnectWithoutAnimalsInputObjectSchema).optional(),
  upsert: z.lazy(() => CharacteristicUpsertWithoutAnimalsInputObjectSchema).optional(),
  connect: z.lazy(() => CharacteristicWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => CharacteristicUpdateToOneWithWhereWithoutAnimalsInputObjectSchema), z.lazy(() => CharacteristicUpdateWithoutAnimalsInputObjectSchema), z.lazy(() => CharacteristicUncheckedUpdateWithoutAnimalsInputObjectSchema)]).optional()
}).strict();
export const CharacteristicUpdateOneRequiredWithoutAnimalsNestedInputObjectSchema: z.ZodType<Prisma.CharacteristicUpdateOneRequiredWithoutAnimalsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.CharacteristicUpdateOneRequiredWithoutAnimalsNestedInput>;
export const CharacteristicUpdateOneRequiredWithoutAnimalsNestedInputObjectZodSchema = makeSchema();
