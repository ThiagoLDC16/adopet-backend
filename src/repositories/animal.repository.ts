import { Prisma, Animal, Characteristic, AnimalSpecies, Midia } from '@prisma/client';
import { prisma } from '../config/prisma';

interface FindAllFilters {
  species?: AnimalSpecies;
  breed?: string;
  ageMin?: number;
  ageMax?: number;
  page?: number;
  limit?: number;
}

interface FindAllResult {
  animals: Animal[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

async function findById(id: number): Promise<Animal | null> {
  return prisma.animal.findUnique(
    {
      where: { id },
      include: {
        characteristics: {
          include: {
            characteristic: {
              select: {
                description: true
              }
            },
          }
        },
        midia: true,
        responsibleNGO: {
          select: {
            id: true,
            name: true,
            email: true,
            phone: true
          }
        }
      }
    });
}

async function deleteById(id: number): Promise<Animal | null> {
  return prisma.animal.delete({ where: { id } });
}

async function findAnimalMidia(id: number): Promise<Midia[]> {
  return prisma.midia.findMany({ where: { animalId: id } });
}


async function create(data: Prisma.AnimalCreateInput): Promise<Animal> {
  return prisma.animal.create({ data });
}

async function edit(id: number, data: Prisma.AnimalUpdateInput): Promise<Animal> {
  return prisma.animal.update({ where: { id }, data })
}

async function findAll(filters: FindAllFilters = {}): Promise<FindAllResult> {
  const {
    species,
    breed,
    ageMin,
    ageMax,
    page = 1,
    limit = 10,
  } = filters;

  const where: Prisma.AnimalWhereInput = {};

  if (species) where.species = species;
  if (breed) where.breed = { contains: breed, mode: 'insensitive' };
  if (ageMin && ageMax) {
    where.age = { gte: ageMin, lte: ageMax };
  } else if (ageMin) {
    where.age = { gte: ageMin };
  } else if (ageMax) {
    where.age = { lte: ageMax };
  }

  const skip = (page - 1) * limit;

  const [animals, total] = await Promise.all([
    prisma.animal.findMany({
      where,
      include: {
        adopterUser: {
          select: {
            id: true,
            name: true,
            phone: true,
            email: true,
          },
        },
        midia: true
      },
      skip,
      take: limit,
      orderBy: { createdAt: 'desc' },
    }),
    prisma.animal.count({ where }),
  ]);

  return {
    animals,
    total,
    page,
    limit,
    totalPages: Math.ceil(total / limit),
  };
}

async function findByOng(
  ongId: number,
  filters: FindAllFilters = {}
): Promise<FindAllResult> {
  const {
    species,
    breed,
    ageMin,
    ageMax,
    page = 1,
    limit = 10,
  } = filters;

  const where: Prisma.AnimalWhereInput = {
    responsibleNGOId: ongId,
  };

  if (species) where.species = species;
  if (breed) where.breed = { contains: breed, mode: 'insensitive' };
  if (ageMin && ageMax) {
    where.age = { gte: ageMin, lte: ageMax };
  } else if (ageMin) {
    where.age = { gte: ageMin };
  } else if (ageMax) {
    where.age = { lte: ageMax };
  }

  const skip = (page - 1) * limit;

  const [animals, total] = await Promise.all([
    prisma.animal.findMany({
      where,
      include: { midia: true },
      skip,
      take: limit,
      orderBy: { createdAt: 'desc' },
    }),
    prisma.animal.count({ where }),
  ]);

  return {
    animals,
    total,
    page,
    limit,
    totalPages: Math.ceil(total / limit),
  };
}

export const animalRepository = {
  findAll,
  findByOng,
  findById,
  findAnimalMidia,
  deleteById,
  create,
  edit,
};
