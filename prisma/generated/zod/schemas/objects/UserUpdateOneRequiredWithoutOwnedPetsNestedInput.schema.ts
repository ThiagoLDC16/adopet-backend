import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserCreateWithoutOwnedPetsInputObjectSchema as UserCreateWithoutOwnedPetsInputObjectSchema } from './UserCreateWithoutOwnedPetsInput.schema';
import { UserUncheckedCreateWithoutOwnedPetsInputObjectSchema as UserUncheckedCreateWithoutOwnedPetsInputObjectSchema } from './UserUncheckedCreateWithoutOwnedPetsInput.schema';
import { UserCreateOrConnectWithoutOwnedPetsInputObjectSchema as UserCreateOrConnectWithoutOwnedPetsInputObjectSchema } from './UserCreateOrConnectWithoutOwnedPetsInput.schema';
import { UserUpsertWithoutOwnedPetsInputObjectSchema as UserUpsertWithoutOwnedPetsInputObjectSchema } from './UserUpsertWithoutOwnedPetsInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateToOneWithWhereWithoutOwnedPetsInputObjectSchema as UserUpdateToOneWithWhereWithoutOwnedPetsInputObjectSchema } from './UserUpdateToOneWithWhereWithoutOwnedPetsInput.schema';
import { UserUpdateWithoutOwnedPetsInputObjectSchema as UserUpdateWithoutOwnedPetsInputObjectSchema } from './UserUpdateWithoutOwnedPetsInput.schema';
import { UserUncheckedUpdateWithoutOwnedPetsInputObjectSchema as UserUncheckedUpdateWithoutOwnedPetsInputObjectSchema } from './UserUncheckedUpdateWithoutOwnedPetsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutOwnedPetsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutOwnedPetsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutOwnedPetsInputObjectSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutOwnedPetsInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserUpdateToOneWithWhereWithoutOwnedPetsInputObjectSchema), z.lazy(() => UserUpdateWithoutOwnedPetsInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutOwnedPetsInputObjectSchema)]).optional()
}).strict();
export const UserUpdateOneRequiredWithoutOwnedPetsNestedInputObjectSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutOwnedPetsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateOneRequiredWithoutOwnedPetsNestedInput>;
export const UserUpdateOneRequiredWithoutOwnedPetsNestedInputObjectZodSchema = makeSchema();
