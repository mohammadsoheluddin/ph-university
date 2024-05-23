import { Student } from './student.model';
import { TStudent } from './student.interface';
import { error } from 'console';

const createStudentIntoDB = async (studentData: TStudent) => {
  if (await Student.isUserExist(studentData.id)) {
    throw new Error('User already exists');
  }
  const result = await Student.create(studentData); // built in static method

  // create an instance
  // const student = new Student(studentData);
  // if (await student.isUserExist(studentData.id)) {
  //   throw new Error('User already exists');
  // }
  // student.isUserExist;
  //  built-in instance method
  // const result = await student.save();

  return result;
};

const getAllStudentsFromDB = async () => {
  const result = await Student.find();
  return result;
};

const getSingleStudentsFromDB = async (id: string) => {
  // const result = await Student.findOne({ id });
  const result = await Student.aggregate([{ $match: { id: id } }]);
  return result;
};

const deleteStudentsFromDB = async (id: string) => {
  const result = await Student.updateOne({ id }, { isDeleted: true });
  return result;
};

export const StudentServices = {
  createStudentIntoDB,
  getAllStudentsFromDB,
  getSingleStudentsFromDB,
  deleteStudentsFromDB,
};
