import * as z from 'zod';

import { UserTypeSchema } from '../../enums/UserType.schema';
// prettier-ignore
export const UserResultSchema = z.object({
    id: z.number().int(),
    email: z.string(),
    name: z.string(),
    password: z.string(),
    phone: z.string().nullable(),
    cpf: z.string().nullable(),
    cnpj: z.string().nullable(),
    type: UserTypeSchema,
    notificacoesAtivas: z.array(z.unknown()),
    createdAt: z.date(),
    updatedAt: z.date(),
    ownedPets: z.array(z.unknown()),
    interestedPets: z.array(z.unknown())
}).strict();

export type UserResultType = z.infer<typeof UserResultSchema>;
