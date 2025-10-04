import { Router } from 'express';
import {
  getAnimals,
  getMyAnimals,
  register,
  edit,
  find,
  exclude
} from '../controllers/animal/animal.controller';
import { authenticated } from '../middlewares/authenticated';
import { UserType } from '@prisma/client'
import { upload } from "../middlewares/multer";

const router = Router();

router.get('/:id', find)
router.post('/register', upload.array("midia", 10), authenticated(UserType.ONG), register);
router.put('/:id', upload.array("midia", 10), authenticated(UserType.ONG), edit)
router.delete('/:id', exclude)

router.get('/', getAnimals)
router.get('/my', authenticated(UserType.ONG), getMyAnimals);

export default router;
