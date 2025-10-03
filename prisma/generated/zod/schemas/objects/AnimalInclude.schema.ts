import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { MidiaFindManySchema as MidiaFindManySchema } from '../findManyMidia.schema';
import { AnimalsCharacteristicsFindManySchema as AnimalsCharacteristicsFindManySchema } from '../findManyAnimalsCharacteristics.schema';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './UserArgs.schema';
import { AnimalCountOutputTypeArgsObjectSchema as AnimalCountOutputTypeArgsObjectSchema } from './AnimalCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  midia: z.union([z.boolean(), z.lazy(() => MidiaFindManySchema)]).optional(),
  characteristics: z.union([z.boolean(), z.lazy(() => AnimalsCharacteristicsFindManySchema)]).optional(),
  responsibleNGO: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  adopterUser: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => AnimalCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const AnimalIncludeObjectSchema: z.ZodType<Prisma.AnimalInclude> = makeSchema() as unknown as z.ZodType<Prisma.AnimalInclude>;
export const AnimalIncludeObjectZodSchema = makeSchema();
