import { Prisma, User } from '@prisma/client';
import { prisma } from '../config/prisma';

async function findById(id: number): Promise<User | null> {
  return prisma.user.findUnique({ where: { id } });
}

async function findByEmail(email: string): Promise<User | null> {
  return prisma.user.findUnique({ where: { email } });
}

async function create(data: Prisma.UserCreateInput): Promise<User> {
  return prisma.user.create({ data });
}

export const userRepository = {
  findById,
  findByEmail,
  create,
};
