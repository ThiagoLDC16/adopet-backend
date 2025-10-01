import { Prisma, User } from '@prisma/client';
import { animalRepository } from '../repositories/animal.repository';
import { AppError } from '../errors/app-error';

async function register(input: Prisma.AnimalCreateInput) {
  const animal = await animalRepository.create({
    ...input,
  });

  return { animal };
}

async function find(id: number) {
  const animal = await animalRepository.findById(id)
  if (!animal) return false;

  return { animal }
}

export const animalService = {
  register,
  find
};
