import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { AnimalSelectObjectSchema as AnimalSelectObjectSchema } from './objects/AnimalSelect.schema';
import { AnimalUpdateManyMutationInputObjectSchema as AnimalUpdateManyMutationInputObjectSchema } from './objects/AnimalUpdateManyMutationInput.schema';
import { AnimalWhereInputObjectSchema as AnimalWhereInputObjectSchema } from './objects/AnimalWhereInput.schema';

export const AnimalUpdateManyAndReturnSchema: z.ZodType<Prisma.AnimalUpdateManyAndReturnArgs> = z.object({ select: AnimalSelectObjectSchema.optional(), data: AnimalUpdateManyMutationInputObjectSchema, where: AnimalWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.AnimalUpdateManyAndReturnArgs>;

export const AnimalUpdateManyAndReturnZodSchema = z.object({ select: AnimalSelectObjectSchema.optional(), data: AnimalUpdateManyMutationInputObjectSchema, where: AnimalWhereInputObjectSchema.optional() }).strict();