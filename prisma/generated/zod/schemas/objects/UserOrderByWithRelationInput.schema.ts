import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { NotificationOrderByRelationAggregateInputObjectSchema as NotificationOrderByRelationAggregateInputObjectSchema } from './NotificationOrderByRelationAggregateInput.schema';
import { AnimalOrderByRelationAggregateInputObjectSchema as AnimalOrderByRelationAggregateInputObjectSchema } from './AnimalOrderByRelationAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  email: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  password: SortOrderSchema.optional(),
  phone: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  cpf: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  cnpj: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  type: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  notificacoesAtivas: z.lazy(() => NotificationOrderByRelationAggregateInputObjectSchema).optional(),
  ownedPets: z.lazy(() => AnimalOrderByRelationAggregateInputObjectSchema).optional(),
  interestedPets: z.lazy(() => AnimalOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const UserOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.UserOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.UserOrderByWithRelationInput>;
export const UserOrderByWithRelationInputObjectZodSchema = makeSchema();
