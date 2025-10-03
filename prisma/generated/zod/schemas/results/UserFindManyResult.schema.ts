import * as z from 'zod';
export const UserFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.number().int(),
  email: z.string(),
  name: z.string(),
  password: z.string(),
  phone: z.string().optional(),
  cpf: z.string().optional(),
  cnpj: z.string().optional(),
  type: z.unknown(),
  notificacoesAtivas: z.array(z.unknown()),
  createdAt: z.date(),
  updatedAt: z.date(),
  ownedPets: z.array(z.unknown()),
  interestedPets: z.array(z.unknown())
})),
  pagination: z.object({
  page: z.number().int().min(1),
  pageSize: z.number().int().min(1),
  total: z.number().int().min(0),
  totalPages: z.number().int().min(0),
  hasNext: z.boolean(),
  hasPrev: z.boolean()
})
});