import { Router } from 'express';
import {
  register,
  find,
  exclude
} from '../controllers/animal/animal.controller';
import { authenticated } from '../middlewares/authenticated';
import { UserType } from '@prisma/client'
import { upload } from "../middlewares/multer";

const router = Router();

router.post('/register', upload.array("midia", 10), authenticated(UserType.ONG), register);
router.get('/:id', find)
router.delete('/:id', exclude)


export default router;
