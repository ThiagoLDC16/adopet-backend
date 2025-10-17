import { Router } from 'express';
import { edit, exclude, getMyReports, getPendingReports, register, sendReportToReview, getReportById, updateReportStatus } from '../controllers/report/report.controller';
import { upload } from '../middlewares/multer';
import { authenticated } from '../middlewares/authenticated';
import { UserType } from '@prisma/client';

const router = Router();


router.get('/my-reports', authenticated(), getMyReports);
router.get('/pending', authenticated(UserType.ONG), getPendingReports);
router.get('/:id', authenticated(), getReportById);
router.post("/register", upload.array("midia", 10), register)
router.put("/:id", upload.array("midia", 10), authenticated(UserType.USER), edit)
router.put("/:id/send-to-review", authenticated(UserType.ONG), sendReportToReview);
router.put("/:id/status", authenticated(UserType.ONG), updateReportStatus);
router.delete("/:id", authenticated(UserType.USER), exclude)

export default router;
