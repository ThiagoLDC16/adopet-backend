import { Request, Response } from 'express';
import { userRepository } from '../../repositories/user.repository';
import { userService } from '../../services/user.service';
import { UserType } from '@prisma/client';
import * as z from 'zod';

const registerSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
  name: z.string().min(1),
  phone: z.string().optional(),
  cpf: z.string().optional(),
  cnpj: z.string().optional(),
  type: z.enum([UserType.USER, UserType.ONG]),
});

export async function login(req: Request, res: Response) {
  const { email, password } = req.body;

  const token = email && password && (await userService.login(email, password));

  if (!token) return res.status(401).json({ code: 'INVALID_CREDENTIALS' });

  return res.json({ token });
}

export async function register(req: Request, res: Response) {
  const data = registerSchema.parse(req.body);
  const { user } = await userService.register(data);

  return res.status(201).json({
    token: userService.generateToken(user),
  });
}

export async function getLoggedUser(req: Request, res: Response) {
  const userId = (req as any).user.sub;

  const user = await userRepository.findById(userId);

  if (!user) {
    return res.status(404).json({ code: 'USER_NOT_FOUND' });
  }

  return res.json({
    id: user.id,
    name: user.name,
    email: user.email,
    type: user.type,
  });
}
