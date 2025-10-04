import { Prisma, Animal, AnimalStatus, AnimalSpecies } from '@prisma/client';
import { prisma } from '../config/prisma';

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

interface FindAllResult {
  animals: Animal[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

async function findById(id: number): Promise<Animal | null> {
  return prisma.animal.findUnique({
    where: { id },
    include: {
      User: {
        select: {
          id: true,
          name: true,
          phone: true,
          email: true,
        },
      },
    },
  });
}

async function findAll(filters: FindAllFilters = {}): Promise<FindAllResult> {
  const {
    species,
    breed,
    ageMin,
    ageMax,
    available,
    location,
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
  if (available !== undefined) where.status = available ? 'DISPONIVEL' : 'ADOTADO';
  if (location) {
    where.OR = [
      { city: { contains: location, mode: 'insensitive' } },
      { state: { contains: location, mode: 'insensitive' } }
    ];
  }

  const skip = (page - 1) * limit;

  const [animals, total] = await Promise.all([
    prisma.animal.findMany({
      where,
      include: {
        User: {
          select: {
            id: true,
            name: true,
            phone: true,
            email: true,
          },
        },
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
    available,
    location,
    page = 1,
    limit = 10,
  } = filters;

  const where: Prisma.AnimalWhereInput = {
    ongId: ongId,
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
  if (available !== undefined) where.status = available ? 'DISPONIVEL' : 'ADOTADO';
  if (location) {
    where.OR = [
      { city: { contains: location, mode: 'insensitive' } },
      { state: { contains: location, mode: 'insensitive' } }
    ];
  }

  const skip = (page - 1) * limit;

  const [animals, total] = await Promise.all([
    prisma.animal.findMany({
      where,
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

async function create(data: Prisma.AnimalCreateInput): Promise<Animal> {
  return prisma.animal.create({
    data,
    include: {
      User: {
        select: {
          id: true,
          name: true,
          phone: true,
          email: true,
        },
      },
    },
  });
}

async function update(
  id: number,
  data: Prisma.AnimalUpdateInput
): Promise<Animal> {
  return prisma.animal.update({
    where: { id },
    data,
    include: {
      User: {
        select: {
          id: true,
          name: true,
          phone: true,
          email: true,
        },
      },
    },
  });
}

async function deleteAnimal(id: number): Promise<Animal> {
  return prisma.animal.delete({
    where: { id },
  });
}

export const animalRepository = {
  findById,
  findAll,
  findByOng,
  create,
  update,
  delete: deleteAnimal,
};
