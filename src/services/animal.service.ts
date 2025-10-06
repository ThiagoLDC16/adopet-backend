import { AnimalSpecies, Prisma, User } from '@prisma/client';
import { animalRepository } from '../repositories/animal.repository';
import { AppError } from '../errors/app-error';

interface FindAllFilters {
  species?: AnimalSpecies;
  breed?: string;
  ageMin?: number;
  ageMax?: number;
  available?: boolean;
  location?: string;
  page?: number;
  limit?: number;
}

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

async function edit(id: number, input: Prisma.AnimalUpdateInput) {
  const animal = await animalRepository.edit(id, { ...input });

  return { animal };
}

async function exclude(id: number) {
  const exclude = await animalRepository.deleteById(id)
  if (!exclude) return false
  return { exclude }
}

async function findAll(filters: FindAllFilters = {}) {
  return animalRepository.findAll(filters);
}

async function findByOng(userId: number, filters: FindAllFilters = {}) {
  return animalRepository.findByOng(userId, filters);
}

export const animalService = {
  register,
  edit,
  exclude,
  find,
  findAll,
  findByOng,
};
