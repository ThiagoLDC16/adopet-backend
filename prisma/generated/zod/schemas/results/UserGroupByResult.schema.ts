import * as z from 'zod';
export const UserGroupByResultSchema = z.array(z.object({
  id: z.number().int(),
  email: z.string(),
  name: z.string(),
  password: z.string(),
  phone: z.string(),
  cpf: z.string(),
  cnpj: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
  _count: z.object({
    id: z.number(),
    email: z.number(),
    name: z.number(),
    password: z.number(),
    phone: z.number(),
    cpf: z.number(),
    cnpj: z.number(),
    type: z.number(),
    notificacoesAtivas: z.number(),
    createdAt: z.number(),
    updatedAt: z.number(),
    ownedPets: z.number(),
    interestedPets: z.number()
  }).optional(),
  _sum: z.object({
    id: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    id: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.number().int().nullable(),
    email: z.string().nullable(),
    name: z.string().nullable(),
    password: z.string().nullable(),
    phone: z.string().nullable(),
    cpf: z.string().nullable(),
    cnpj: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.number().int().nullable(),
    email: z.string().nullable(),
    name: z.string().nullable(),
    password: z.string().nullable(),
    phone: z.string().nullable(),
    cpf: z.string().nullable(),
    cnpj: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional()
}));