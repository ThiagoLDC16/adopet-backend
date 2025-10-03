import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserUpdateWithoutInterestedPetsInputObjectSchema as UserUpdateWithoutInterestedPetsInputObjectSchema } from './UserUpdateWithoutInterestedPetsInput.schema';
import { UserUncheckedUpdateWithoutInterestedPetsInputObjectSchema as UserUncheckedUpdateWithoutInterestedPetsInputObjectSchema } from './UserUncheckedUpdateWithoutInterestedPetsInput.schema';
import { UserCreateWithoutInterestedPetsInputObjectSchema as UserCreateWithoutInterestedPetsInputObjectSchema } from './UserCreateWithoutInterestedPetsInput.schema';
import { UserUncheckedCreateWithoutInterestedPetsInputObjectSchema as UserUncheckedCreateWithoutInterestedPetsInputObjectSchema } from './UserUncheckedCreateWithoutInterestedPetsInput.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => UserUpdateWithoutInterestedPetsInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutInterestedPetsInputObjectSchema)]),
  create: z.union([z.lazy(() => UserCreateWithoutInterestedPetsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutInterestedPetsInputObjectSchema)]),
  where: z.lazy(() => UserWhereInputObjectSchema).optional()
}).strict();
export const UserUpsertWithoutInterestedPetsInputObjectSchema: z.ZodType<Prisma.UserUpsertWithoutInterestedPetsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpsertWithoutInterestedPetsInput>;
export const UserUpsertWithoutInterestedPetsInputObjectZodSchema = makeSchema();
