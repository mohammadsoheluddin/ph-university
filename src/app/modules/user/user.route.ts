import express, { NextFunction, Request, Response } from 'express';
import { UserControllers } from './user.controller';
import { createStudentValidationSchema } from '../student/student.validation';
import ValidateRequest from '../../middlewares/validateRequest';

const router = express.Router();

router.post(
  '/create-student',
  ValidateRequest(createStudentValidationSchema),
  UserControllers.createStudent,
);

export const UserRoutes = router;
