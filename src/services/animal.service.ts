import { AnimalSpecies, Prisma, User } from '@prisma/client';
import { animalRepository } from '../repositories/animal.repository';
import { AppError } from '../errors/app-error';
import path from 'path';
import fs from 'fs'

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

async function exclude(id: number, ongId: number) {
  const midia = await animalRepository.findAnimalMidia(id)

  const animal = await animalRepository.findById(id)
  if (animal?.responsibleNGOId !== ongId) return false

  if (midia && Array.isArray(midia)) {
    midia.forEach(item => {
      const midiaPath = path.join(process.cwd(), "public", item.url.replace(/^\//, ""));
      try {
        if (fs.existsSync(midiaPath)) fs.unlinkSync(midiaPath);
      } catch (err) {
        console.error("Erro ao deletar arquivo:", midiaPath, err);
      }
    });
  }

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
