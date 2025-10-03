import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutInterestedPetsInputObjectSchema as UserCreateWithoutInterestedPetsInputObjectSchema } from './UserCreateWithoutInterestedPetsInput.schema';
import { UserUncheckedCreateWithoutInterestedPetsInputObjectSchema as UserUncheckedCreateWithoutInterestedPetsInputObjectSchema } from './UserUncheckedCreateWithoutInterestedPetsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserCreateWithoutInterestedPetsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutInterestedPetsInputObjectSchema)])
}).strict();
export const UserCreateOrConnectWithoutInterestedPetsInputObjectSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutInterestedPetsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateOrConnectWithoutInterestedPetsInput>;
export const UserCreateOrConnectWithoutInterestedPetsInputObjectZodSchema = makeSchema();
