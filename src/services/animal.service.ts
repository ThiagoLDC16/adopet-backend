import { Prisma, Animal, AnimalSpecies } from '@prisma/client';
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

interface CreateAnimalData {
  name: string;
  species: AnimalSpecies;
  breed?: string;
  age: number;
  description: string;
  images: string[];
  city: string;
  state: string;
}

interface UpdateAnimalData {
  name?: string;
  species?: AnimalSpecies;
  breed?: string;
  age?: number;
  description?: string;
  available?: boolean;
  images?: string[];
  city?: string;
  state?: string;
}

async function findAll(filters: FindAllFilters = {}) {
  return animalRepository.findAll(filters);
}

async function findById(id: number): Promise<Animal> {
  const animal = await animalRepository.findById(id);
  if (!animal) {
    throw new AppError('ANIMAL_NOT_FOUND');
  }
  return animal;
}

async function create(userId: number, data: CreateAnimalData): Promise<Animal> {
  return animalRepository.create({
    ...data,
    User: {
      connect: { id: userId }
    }
  });
}

async function update(id: number, userId: number, data: UpdateAnimalData): Promise<Animal> {
  const existingAnimal = await animalRepository.findById(id);
  if (!existingAnimal) {
    throw new AppError('ANIMAL_NOT_FOUND');
  }
  
  if (existingAnimal.ongId !== userId) {
    throw new AppError('UNAUTHORIZED_TO_UPDATE_ANIMAL');
  }

  return animalRepository.update(id, data);
}

async function deleteAnimal(id: number, userId: number): Promise<void> {
  const existingAnimal = await animalRepository.findById(id);
  if (!existingAnimal) {
    throw new AppError('ANIMAL_NOT_FOUND');
  }
  
  if (existingAnimal.ongId !== userId) {
    throw new AppError('UNAUTHORIZED_TO_DELETE_ANIMAL');
  }

  await animalRepository.delete(id);
}

async function findByOng(userId: number, filters: FindAllFilters = {}) {
  return animalRepository.findByOng(userId, filters);
}

export const animalService = {
  findAll,
  findById,
  create,
  update,
  delete: deleteAnimal,
  findByOng,
};