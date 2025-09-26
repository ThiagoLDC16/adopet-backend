import { Prisma, User } from '@prisma/client';
import { userRepository } from '../repositories/user.repository';
import { hashPassword } from '../utils/hash';
import { AppError } from '../errors/app-error';
import { compareHash } from '../utils/hash';
import * as jwt from '../utils/jwt';

function generateToken(user: User) {
  const token = jwt.sign({ sub: user.id, type: user.type });
  return token;
}

async function login(email: string, password: string) {
  if (!email || !password) return false;

  const user = await userRepository.findByEmail(email);
  if (!user) return false;

  const passwordCompare = await compareHash(password, user.password);
  if (!passwordCompare) return false;

  return generateToken(user);
}

async function register(input: Prisma.UserCreateInput) {
  const existing = await userRepository.findByEmail(input.email);
  if (existing) throw new AppError('EMAIL_ALREADY_REGISTERED');

  const passwordHash = await hashPassword(input.password);

  const user = await userRepository.create({
    ...input,
    password: passwordHash,
  });

  return { user };
}

export const userService = {
  generateToken,
  login,
  register,
};
