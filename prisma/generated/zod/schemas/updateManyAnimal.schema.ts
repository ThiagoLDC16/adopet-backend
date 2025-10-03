import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { AnimalUpdateManyMutationInputObjectSchema as AnimalUpdateManyMutationInputObjectSchema } from './objects/AnimalUpdateManyMutationInput.schema';
import { AnimalWhereInputObjectSchema as AnimalWhereInputObjectSchema } from './objects/AnimalWhereInput.schema';

export const AnimalUpdateManySchema: z.ZodType<Prisma.AnimalUpdateManyArgs> = z.object({ data: AnimalUpdateManyMutationInputObjectSchema, where: AnimalWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.AnimalUpdateManyArgs>;

export const AnimalUpdateManyZodSchema = z.object({ data: AnimalUpdateManyMutationInputObjectSchema, where: AnimalWhereInputObjectSchema.optional() }).strict();