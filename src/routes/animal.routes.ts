import { Router } from 'express';
import {
  getAnimals,
  getAnimalById,
  createAnimal,
  updateAnimal,
  deleteAnimal,
  getMyAnimals,
} from '../controllers/animal/animal.controller';
import { authenticated } from '../middlewares/authenticated';
import { UserType } from '@prisma/client';

const router = Router();

// Rotas públicas
router.get('/', getAnimals);
router.get('/:id', getAnimalById);

// Rotas que exigem autenticação de ONG
router.post('/', authenticated(UserType.ONG), createAnimal);
router.put('/:id', authenticated(UserType.ONG), updateAnimal);
router.delete('/:id', authenticated(UserType.ONG), deleteAnimal);
router.get('/my/animals', authenticated(UserType.ONG), getMyAnimals);

export default router;
