import { Router } from 'express';
import { getMyReports, register } from '../controllers/report/report.controller';
import { upload } from '../middlewares/multer';
import { authenticated } from '../middlewares/authenticated';
import { UserType } from '@prisma/client';

const router = Router();


router.get('/my', authenticated(UserType.USER), getMyReports);
router.post("/register", upload.array("midia", 10), register)


export default router;
