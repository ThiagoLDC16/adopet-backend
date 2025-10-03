import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { MidiaFindManySchema as MidiaFindManySchema } from '../findManyMidia.schema';
import { AnimalsCharacteristicsFindManySchema as AnimalsCharacteristicsFindManySchema } from '../findManyAnimalsCharacteristics.schema';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './UserArgs.schema';
import { AnimalCountOutputTypeArgsObjectSchema as AnimalCountOutputTypeArgsObjectSchema } from './AnimalCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  age: z.boolean().optional(),
  species: z.boolean().optional(),
  breed: z.boolean().optional(),
  midia: z.union([z.boolean(), z.lazy(() => MidiaFindManySchema)]).optional(),
  characteristics: z.union([z.boolean(), z.lazy(() => AnimalsCharacteristicsFindManySchema)]).optional(),
  description: z.boolean().optional(),
  responsibleNGO: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  responsibleNGOId: z.boolean().optional(),
  adopterUser: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  adopterUserId: z.boolean().optional(),
  _count: z.union([z.boolean(), z.lazy(() => AnimalCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const AnimalSelectObjectSchema: z.ZodType<Prisma.AnimalSelect> = makeSchema() as unknown as z.ZodType<Prisma.AnimalSelect>;
export const AnimalSelectObjectZodSchema = makeSchema();
