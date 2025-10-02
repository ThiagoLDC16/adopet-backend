import { Prisma, Animal } from '@prisma/client';
import { prisma } from '../config/prisma';

async function findById(id: number): Promise<Animal | null> {
  return prisma.animal.findUnique({ where: { id } });
}

async function create(data: Prisma.AnimalCreateInput): Promise<Animal> {
  return prisma.animal.create({ data });
}

export const animalRepository = {
  findById,
  create,
};
