import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CharacteristicUpdateWithoutAnimalsInputObjectSchema as CharacteristicUpdateWithoutAnimalsInputObjectSchema } from './CharacteristicUpdateWithoutAnimalsInput.schema';
import { CharacteristicUncheckedUpdateWithoutAnimalsInputObjectSchema as CharacteristicUncheckedUpdateWithoutAnimalsInputObjectSchema } from './CharacteristicUncheckedUpdateWithoutAnimalsInput.schema';
import { CharacteristicCreateWithoutAnimalsInputObjectSchema as CharacteristicCreateWithoutAnimalsInputObjectSchema } from './CharacteristicCreateWithoutAnimalsInput.schema';
import { CharacteristicUncheckedCreateWithoutAnimalsInputObjectSchema as CharacteristicUncheckedCreateWithoutAnimalsInputObjectSchema } from './CharacteristicUncheckedCreateWithoutAnimalsInput.schema';
import { CharacteristicWhereInputObjectSchema as CharacteristicWhereInputObjectSchema } from './CharacteristicWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => CharacteristicUpdateWithoutAnimalsInputObjectSchema), z.lazy(() => CharacteristicUncheckedUpdateWithoutAnimalsInputObjectSchema)]),
  create: z.union([z.lazy(() => CharacteristicCreateWithoutAnimalsInputObjectSchema), z.lazy(() => CharacteristicUncheckedCreateWithoutAnimalsInputObjectSchema)]),
  where: z.lazy(() => CharacteristicWhereInputObjectSchema).optional()
}).strict();
export const CharacteristicUpsertWithoutAnimalsInputObjectSchema: z.ZodType<Prisma.CharacteristicUpsertWithoutAnimalsInput> = makeSchema() as unknown as z.ZodType<Prisma.CharacteristicUpsertWithoutAnimalsInput>;
export const CharacteristicUpsertWithoutAnimalsInputObjectZodSchema = makeSchema();
