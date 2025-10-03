import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserUpdateWithoutOwnedPetsInputObjectSchema as UserUpdateWithoutOwnedPetsInputObjectSchema } from './UserUpdateWithoutOwnedPetsInput.schema';
import { UserUncheckedUpdateWithoutOwnedPetsInputObjectSchema as UserUncheckedUpdateWithoutOwnedPetsInputObjectSchema } from './UserUncheckedUpdateWithoutOwnedPetsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserUpdateWithoutOwnedPetsInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutOwnedPetsInputObjectSchema)])
}).strict();
export const UserUpdateToOneWithWhereWithoutOwnedPetsInputObjectSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutOwnedPetsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutOwnedPetsInput>;
export const UserUpdateToOneWithWhereWithoutOwnedPetsInputObjectZodSchema = makeSchema();
