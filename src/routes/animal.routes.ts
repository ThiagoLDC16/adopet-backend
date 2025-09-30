import { Router } from 'express';
import {
  register,
} from '../controllers/animal/animal.controller';
import { authenticated } from '../middlewares/authenticated';
import { UserType } from '@prisma/client'

const router = Router();

router.post('/register', authenticated(UserType.ONG), register);

export default router;
