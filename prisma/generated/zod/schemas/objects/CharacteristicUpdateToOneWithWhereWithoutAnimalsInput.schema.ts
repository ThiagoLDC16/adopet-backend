import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CharacteristicWhereInputObjectSchema as CharacteristicWhereInputObjectSchema } from './CharacteristicWhereInput.schema';
import { CharacteristicUpdateWithoutAnimalsInputObjectSchema as CharacteristicUpdateWithoutAnimalsInputObjectSchema } from './CharacteristicUpdateWithoutAnimalsInput.schema';
import { CharacteristicUncheckedUpdateWithoutAnimalsInputObjectSchema as CharacteristicUncheckedUpdateWithoutAnimalsInputObjectSchema } from './CharacteristicUncheckedUpdateWithoutAnimalsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CharacteristicWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => CharacteristicUpdateWithoutAnimalsInputObjectSchema), z.lazy(() => CharacteristicUncheckedUpdateWithoutAnimalsInputObjectSchema)])
}).strict();
export const CharacteristicUpdateToOneWithWhereWithoutAnimalsInputObjectSchema: z.ZodType<Prisma.CharacteristicUpdateToOneWithWhereWithoutAnimalsInput> = makeSchema() as unknown as z.ZodType<Prisma.CharacteristicUpdateToOneWithWhereWithoutAnimalsInput>;
export const CharacteristicUpdateToOneWithWhereWithoutAnimalsInputObjectZodSchema = makeSchema();
