import * as z from 'zod';

import { UserTypeSchema } from '../../enums/UserType.schema';
// prettier-ignore
export const UserInputSchema = z.object({
    id: z.number().int(),
    email: z.string(),
    name: z.string(),
    password: z.string(),
    phone: z.string().optional().nullable(),
    cpf: z.string().optional().nullable(),
    cnpj: z.string().optional().nullable(),
    type: UserTypeSchema,
    notificacoesAtivas: z.array(z.unknown()),
    createdAt: z.date(),
    updatedAt: z.date(),
    ownedPets: z.array(z.unknown()),
    interestedPets: z.array(z.unknown())
}).strict();

export type UserInputType = z.infer<typeof UserInputSchema>;
