export type AnimalSpecies = 'DOG' | 'CAT' | 'BIRD' | 'RODENT' | 'OTHER';

export interface Ong {
  id: number;
  name: string;
  phone?: string;
  email: string;
}

export interface Animal {
  id: number;
  name: string;
  species: AnimalSpecies;
  breed?: string;
  age: number;
  description: string;
  available: boolean;
  images: string[];
  location: string;
  shelterId: number;
  createdAt: string;
  updatedAt: string;
  shelter: Ong;
}

export interface AnimalListResponse {
  animals: Animal[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

export interface AnimalFilters {
  species?: AnimalSpecies;
  breed?: string;
  ageMin?: number;
  ageMax?: number;
  available?: boolean;
  location?: string;
  page?: number;
  limit?: number;
}

export interface CreateAnimalData {
  name: string;
  species: AnimalSpecies;
  breed?: string;
  age: number;
  description: string;
  images: string[];
  city: string;
  state: string;
}

export interface UpdateAnimalData {
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
