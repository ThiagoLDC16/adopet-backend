import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserCreateWithoutInterestedPetsInputObjectSchema as UserCreateWithoutInterestedPetsInputObjectSchema } from './UserCreateWithoutInterestedPetsInput.schema';
import { UserUncheckedCreateWithoutInterestedPetsInputObjectSchema as UserUncheckedCreateWithoutInterestedPetsInputObjectSchema } from './UserUncheckedCreateWithoutInterestedPetsInput.schema';
import { UserCreateOrConnectWithoutInterestedPetsInputObjectSchema as UserCreateOrConnectWithoutInterestedPetsInputObjectSchema } from './UserCreateOrConnectWithoutInterestedPetsInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutInterestedPetsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutInterestedPetsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutInterestedPetsInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional()
}).strict();
export const UserCreateNestedOneWithoutInterestedPetsInputObjectSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutInterestedPetsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateNestedOneWithoutInterestedPetsInput>;
export const UserCreateNestedOneWithoutInterestedPetsInputObjectZodSchema = makeSchema();
