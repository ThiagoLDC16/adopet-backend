import * as z from 'zod';
export const UserFindUniqueResultSchema = z.nullable(z.object({
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
}));