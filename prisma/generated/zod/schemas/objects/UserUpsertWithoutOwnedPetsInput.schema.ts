import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserUpdateWithoutOwnedPetsInputObjectSchema as UserUpdateWithoutOwnedPetsInputObjectSchema } from './UserUpdateWithoutOwnedPetsInput.schema';
import { UserUncheckedUpdateWithoutOwnedPetsInputObjectSchema as UserUncheckedUpdateWithoutOwnedPetsInputObjectSchema } from './UserUncheckedUpdateWithoutOwnedPetsInput.schema';
import { UserCreateWithoutOwnedPetsInputObjectSchema as UserCreateWithoutOwnedPetsInputObjectSchema } from './UserCreateWithoutOwnedPetsInput.schema';
import { UserUncheckedCreateWithoutOwnedPetsInputObjectSchema as UserUncheckedCreateWithoutOwnedPetsInputObjectSchema } from './UserUncheckedCreateWithoutOwnedPetsInput.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => UserUpdateWithoutOwnedPetsInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutOwnedPetsInputObjectSchema)]),
  create: z.union([z.lazy(() => UserCreateWithoutOwnedPetsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutOwnedPetsInputObjectSchema)]),
  where: z.lazy(() => UserWhereInputObjectSchema).optional()
}).strict();
export const UserUpsertWithoutOwnedPetsInputObjectSchema: z.ZodType<Prisma.UserUpsertWithoutOwnedPetsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpsertWithoutOwnedPetsInput>;
export const UserUpsertWithoutOwnedPetsInputObjectZodSchema = makeSchema();
