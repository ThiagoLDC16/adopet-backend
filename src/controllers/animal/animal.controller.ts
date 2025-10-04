import { Request, Response } from 'express';
import { animalService } from '../../services/animal.service';
import { AnimalSpecies, UserType } from '@prisma/client';
import * as z from 'zod';

const createAnimalSchema = z.object({
  name: z.string().min(1, 'Nome é obrigatório'),
  species: z.enum([
    AnimalSpecies.DOG,
    AnimalSpecies.CAT,
    AnimalSpecies.BIRD,
    AnimalSpecies.RODENT,
    AnimalSpecies.OTHER,
  ]),
  breed: z.string().optional(),
  age: z.number().int().min(0).max(50),
  description: z.string().min(1, 'Descrição é obrigatória'),
  images: z.array(z.string()).min(1, 'Pelo menos uma imagem é obrigatória'),
  city: z.string().min(1, 'Cidade é obrigatória'),
  state: z.string().min(1, 'Estado é obrigatório'),
});

const updateAnimalSchema = z.object({
  name: z.string().min(1, 'Nome é obrigatório').optional(),
  species: z
    .enum([
      AnimalSpecies.DOG,
      AnimalSpecies.CAT,
      AnimalSpecies.BIRD,
      AnimalSpecies.RODENT,
      AnimalSpecies.OTHER,
    ])
    .optional(),
  breed: z.string().optional(),
  age: z.number().int().min(0).max(50).optional(),
  description: z.string().min(1, 'Descrição é obrigatória').optional(),
  available: z.boolean().optional(),
  images: z
    .array(z.string())
    .min(1, 'Pelo menos uma imagem é obrigatória')
    .optional(),
  city: z.string().min(1, 'Cidade é obrigatória').optional(),
  state: z.string().min(1, 'Estado é obrigatório').optional(),
});

const querySchema = z.object({
  species: z
    .enum([
      AnimalSpecies.DOG,
      AnimalSpecies.CAT,
      AnimalSpecies.BIRD,
      AnimalSpecies.RODENT,
      AnimalSpecies.OTHER,
    ])
    .optional(),
  breed: z.string().optional(),
  ageMin: z.string().transform(Number).pipe(z.number().int().min(0)).optional(),
  ageMax: z.string().transform(Number).pipe(z.number().int().min(0)).optional(),
  available: z.string().transform(Boolean).pipe(z.boolean()).optional(),
  location: z.string().optional(),
  page: z.string().transform(Number).pipe(z.number().int().min(1)).default(1),
  limit: z
    .string()
    .transform(Number)
    .pipe(z.number().int().min(1).max(100))
    .default(10),
});

export async function getAnimals(req: Request, res: Response) {
  const query = querySchema.parse(req.query);

  const result = await animalService.findAll(query);

  return res.json(result);
}

export async function getAnimalById(req: Request, res: Response) {
  const idSchema = z
    .string()
    .transform(Number)
    .pipe(z.number().int().positive());
  const id = idSchema.parse(req.params.id);

  const animal = await animalService.findById(id);

  return res.json(animal);
}

export async function createAnimal(req: Request, res: Response) {
  const userId = (req as any).user.sub;
  const userType = (req as any).user.type;

  if (userType !== UserType.ONG) {
    return res.status(403).json({ code: 'ONLY_ONG_CAN_CREATE_ANIMALS' });
  }

  const data = createAnimalSchema.parse(req.body);

  const animal = await animalService.create(userId, data);

  return res.status(201).json(animal);
}

export async function updateAnimal(req: Request, res: Response) {
  const userId = (req as any).user.sub;

  const idSchema = z
    .string()
    .transform(Number)
    .pipe(z.number().int().positive());
  const id = idSchema.parse(req.params.id);

  const data = updateAnimalSchema.parse(req.body);

  const animal = await animalService.update(id, userId, data);

  return res.json(animal);
}

export async function deleteAnimal(req: Request, res: Response) {
  const userId = (req as any).user.sub;

  const idSchema = z
    .string()
    .transform(Number)
    .pipe(z.number().int().positive());
  const id = idSchema.parse(req.params.id);

  await animalService.delete(id, userId);

  return res.status(204).send();
}

export async function getMyAnimals(req: Request, res: Response) {
  const userId = (req as any).user.sub;
  const userType = (req as any).user.type;

  if (userType !== UserType.ONG) {
    return res.status(403).json({ code: 'ONLY_ONG_CAN_LIST_ANIMALS' });
  }

  const query = querySchema.parse(req.query);

  const result = await animalService.findByOng(userId, query);

  return res.json(result);
}
