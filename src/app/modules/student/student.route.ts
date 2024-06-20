import express from 'express';
import { StudentControllers } from './student.controller';
import ValidateRequest from '../../middlewares/validateRequest';
import { updateStudentValidationSchema } from './student.validation';

const router = express.Router();

router.get('/:id', StudentControllers.getSingleStudent);

router.patch(
  '/:id',
  // eslint-disable-next-line @typescript-eslint/no-misused-promises
  ValidateRequest(updateStudentValidationSchema),
  StudentControllers.updateStudent,
);

router.delete('/:id', StudentControllers.deleteStudent);

router.get('/', StudentControllers.getAllStudents);

export const StudentRoutes = router;
