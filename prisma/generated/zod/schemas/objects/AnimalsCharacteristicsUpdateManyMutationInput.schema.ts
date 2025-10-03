import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  
}).strict();
export const AnimalsCharacteristicsUpdateManyMutationInputObjectSchema: z.ZodType<Prisma.AnimalsCharacteristicsUpdateManyMutationInput> = makeSchema() as unknown as z.ZodType<Prisma.AnimalsCharacteristicsUpdateManyMutationInput>;
export const AnimalsCharacteristicsUpdateManyMutationInputObjectZodSchema = makeSchema();
