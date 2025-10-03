import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutOwnedPetsInputObjectSchema as UserCreateWithoutOwnedPetsInputObjectSchema } from './UserCreateWithoutOwnedPetsInput.schema';
import { UserUncheckedCreateWithoutOwnedPetsInputObjectSchema as UserUncheckedCreateWithoutOwnedPetsInputObjectSchema } from './UserUncheckedCreateWithoutOwnedPetsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserCreateWithoutOwnedPetsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutOwnedPetsInputObjectSchema)])
}).strict();
export const UserCreateOrConnectWithoutOwnedPetsInputObjectSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutOwnedPetsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateOrConnectWithoutOwnedPetsInput>;
export const UserCreateOrConnectWithoutOwnedPetsInputObjectZodSchema = makeSchema();
