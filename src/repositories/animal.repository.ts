import { Prisma, Animal, Characteristic } from '@prisma/client';
import { prisma } from '../config/prisma';

async function findById(id: number): Promise<Animal | null> {
  return prisma.animal.findUnique(
    { 
      where: { id },
      include: {
        characteristics: {
          include: {
            characteristic: true,
          }
        },
        midia: true
      } 
    });
}

async function deleteById(id: number): Promise<Animal | null> {
  return prisma.animal.delete({ where: { id } });
}

async function create(data: Prisma.AnimalCreateInput): Promise<Animal> {
  return prisma.animal.create({ data });
}

async function edit(id: number, data: Prisma.AnimalUpdateInput): Promise<Animal> {
  return prisma.animal.update({ where: { id }, data})
}

export const animalRepository = {
  findById,
  deleteById,
  create,
  edit,
};
