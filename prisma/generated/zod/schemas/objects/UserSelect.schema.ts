import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { NotificationFindManySchema as NotificationFindManySchema } from '../findManyNotification.schema';
import { AnimalFindManySchema as AnimalFindManySchema } from '../findManyAnimal.schema';
import { UserCountOutputTypeArgsObjectSchema as UserCountOutputTypeArgsObjectSchema } from './UserCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  email: z.boolean().optional(),
  name: z.boolean().optional(),
  password: z.boolean().optional(),
  phone: z.boolean().optional(),
  cpf: z.boolean().optional(),
  cnpj: z.boolean().optional(),
  type: z.boolean().optional(),
  notificacoesAtivas: z.union([z.boolean(), z.lazy(() => NotificationFindManySchema)]).optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  ownedPets: z.union([z.boolean(), z.lazy(() => AnimalFindManySchema)]).optional(),
  interestedPets: z.union([z.boolean(), z.lazy(() => AnimalFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => UserCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const UserSelectObjectSchema: z.ZodType<Prisma.UserSelect> = makeSchema() as unknown as z.ZodType<Prisma.UserSelect>;
export const UserSelectObjectZodSchema = makeSchema();
