import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserCreateWithoutOwnedPetsInputObjectSchema as UserCreateWithoutOwnedPetsInputObjectSchema } from './UserCreateWithoutOwnedPetsInput.schema';
import { UserUncheckedCreateWithoutOwnedPetsInputObjectSchema as UserUncheckedCreateWithoutOwnedPetsInputObjectSchema } from './UserUncheckedCreateWithoutOwnedPetsInput.schema';
import { UserCreateOrConnectWithoutOwnedPetsInputObjectSchema as UserCreateOrConnectWithoutOwnedPetsInputObjectSchema } from './UserCreateOrConnectWithoutOwnedPetsInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutOwnedPetsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutOwnedPetsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutOwnedPetsInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional()
}).strict();
export const UserCreateNestedOneWithoutOwnedPetsInputObjectSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutOwnedPetsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateNestedOneWithoutOwnedPetsInput>;
export const UserCreateNestedOneWithoutOwnedPetsInputObjectZodSchema = makeSchema();
