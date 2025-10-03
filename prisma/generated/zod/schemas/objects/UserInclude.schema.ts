import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { NotificationFindManySchema as NotificationFindManySchema } from '../findManyNotification.schema';
import { AnimalFindManySchema as AnimalFindManySchema } from '../findManyAnimal.schema';
import { UserCountOutputTypeArgsObjectSchema as UserCountOutputTypeArgsObjectSchema } from './UserCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  notificacoesAtivas: z.union([z.boolean(), z.lazy(() => NotificationFindManySchema)]).optional(),
  ownedPets: z.union([z.boolean(), z.lazy(() => AnimalFindManySchema)]).optional(),
  interestedPets: z.union([z.boolean(), z.lazy(() => AnimalFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => UserCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const UserIncludeObjectSchema: z.ZodType<Prisma.UserInclude> = makeSchema() as unknown as z.ZodType<Prisma.UserInclude>;
export const UserIncludeObjectZodSchema = makeSchema();
