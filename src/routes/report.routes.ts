import { Router } from 'express';
import { register } from '../controllers/report/report.controller';
import { upload } from '../middlewares/multer';
import { authenticated } from '../middlewares/authenticated';
import { UserType } from '@prisma/client';

const router = Router();

router.post("/register", upload.array("midia", 10), register)


export default router;
