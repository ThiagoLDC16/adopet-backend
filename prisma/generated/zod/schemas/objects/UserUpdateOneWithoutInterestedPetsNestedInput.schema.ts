import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserCreateWithoutInterestedPetsInputObjectSchema as UserCreateWithoutInterestedPetsInputObjectSchema } from './UserCreateWithoutInterestedPetsInput.schema';
import { UserUncheckedCreateWithoutInterestedPetsInputObjectSchema as UserUncheckedCreateWithoutInterestedPetsInputObjectSchema } from './UserUncheckedCreateWithoutInterestedPetsInput.schema';
import { UserCreateOrConnectWithoutInterestedPetsInputObjectSchema as UserCreateOrConnectWithoutInterestedPetsInputObjectSchema } from './UserCreateOrConnectWithoutInterestedPetsInput.schema';
import { UserUpsertWithoutInterestedPetsInputObjectSchema as UserUpsertWithoutInterestedPetsInputObjectSchema } from './UserUpsertWithoutInterestedPetsInput.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateToOneWithWhereWithoutInterestedPetsInputObjectSchema as UserUpdateToOneWithWhereWithoutInterestedPetsInputObjectSchema } from './UserUpdateToOneWithWhereWithoutInterestedPetsInput.schema';
import { UserUpdateWithoutInterestedPetsInputObjectSchema as UserUpdateWithoutInterestedPetsInputObjectSchema } from './UserUpdateWithoutInterestedPetsInput.schema';
import { UserUncheckedUpdateWithoutInterestedPetsInputObjectSchema as UserUncheckedUpdateWithoutInterestedPetsInputObjectSchema } from './UserUncheckedUpdateWithoutInterestedPetsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutInterestedPetsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutInterestedPetsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutInterestedPetsInputObjectSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutInterestedPetsInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => UserWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => UserWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserUpdateToOneWithWhereWithoutInterestedPetsInputObjectSchema), z.lazy(() => UserUpdateWithoutInterestedPetsInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutInterestedPetsInputObjectSchema)]).optional()
}).strict();
export const UserUpdateOneWithoutInterestedPetsNestedInputObjectSchema: z.ZodType<Prisma.UserUpdateOneWithoutInterestedPetsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateOneWithoutInterestedPetsNestedInput>;
export const UserUpdateOneWithoutInterestedPetsNestedInputObjectZodSchema = makeSchema();
