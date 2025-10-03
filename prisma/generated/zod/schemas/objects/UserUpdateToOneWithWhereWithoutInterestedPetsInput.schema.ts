import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserUpdateWithoutInterestedPetsInputObjectSchema as UserUpdateWithoutInterestedPetsInputObjectSchema } from './UserUpdateWithoutInterestedPetsInput.schema';
import { UserUncheckedUpdateWithoutInterestedPetsInputObjectSchema as UserUncheckedUpdateWithoutInterestedPetsInputObjectSchema } from './UserUncheckedUpdateWithoutInterestedPetsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserUpdateWithoutInterestedPetsInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutInterestedPetsInputObjectSchema)])
}).strict();
export const UserUpdateToOneWithWhereWithoutInterestedPetsInputObjectSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutInterestedPetsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutInterestedPetsInput>;
export const UserUpdateToOneWithWhereWithoutInterestedPetsInputObjectZodSchema = makeSchema();
