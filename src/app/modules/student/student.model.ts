import { Schema, model, connect } from 'mongoose';
import {
  TGuardian,
  TLocalGuardian,
  TStudent,
  StudentModel,
  TUserName,
} from './student.interface';

// Create a Schema corresponding to the document interface.
const userNameSchema = new Schema<TUserName>({
  firstName: {
    type: String,
    required: [true, 'First Name is required'],
    trim: true,
    maxLength: [20, 'First Name can not be more than 20 characters'],
  },
  middleName: {
    type: String,
    trim: true,
  },
  lastName: {
    type: String,
    required: [true, 'First Name is required'],
    trim: true,
  },
});

const guardianSchema = new Schema<TGuardian>({
  fatherName: {
    type: String,
    required: [true, 'Father Name is required'],
    trim: true,
  },
  fatherOccupation: {
    type: String,
    required: [true, 'Father Occupation is required'],
    trim: true,
  },
  fatherContactNo: {
    type: String,
    required: [true, 'Father Contact No is required'],
    trim: true,
  },
  motherName: {
    type: String,
    required: [true, 'Mother Name is required'],
    trim: true,
  },
  motherOccupation: {
    type: String,
    required: [true, 'Mother Occupation is required'],
    trim: true,
  },
  motherContactNo: {
    type: String,
    required: [true, 'Mother Contact No is required'],
    trim: true,
  },
});

const localGuardianSchema = new Schema<TLocalGuardian>({
  name: {
    type: String,
    required: [true, 'Local Guardian Name is required'],
    trim: true,
  },
  occupation: {
    type: String,
    required: [true, "Local Guardian's Occupation is required"],
    trim: true,
  },
  contactNo: {
    type: String,
    required: [true, "Local Guardian's Contact No is required"],
    trim: true,
  },
  address: {
    type: String,
    required: [true, "Local Guardian's Address is required"],
    trim: true,
  },
});

const studentSchema = new Schema<TStudent, StudentModel>(
  {
    id: {
      type: String,
      required: [true, 'ID is required'],
      unique: true,
      user: {
        type: Schema.Types.ObjectId,
        required: [true, 'User ID is required'],
        unique: true,
        ref: 'User',
      },
    },
    name: {
      type: userNameSchema,
      required: [true, 'Student Name is required'],
      trim: true,
    },
    gender: {
      type: String,
      enum: {
        values: ['male', 'female', 'other'],
        message: '{VALUE} is not valid',
      },
      required: true,
      trim: true,
    },
    dateOfBirth: {
      type: Date,
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Student's email is required"],
      trim: true,
      unique: true,
    },
    contactNo: {
      type: String,
      required: [true, "Student's contact no is required"],
      trim: true,
    },
    emergencyContactNo: {
      type: String,
      required: [true, "Student's emergency contact no is required"],
      trim: true,
    },
    bloodGroup: {
      type: String,
      enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
      trim: true,
    },
    presentAddress: {
      type: String,
      required: [true, "Student's present address is required"],
      trim: true,
    },
    permanentAddress: {
      type: String,
      required: [true, "Student's permanent address is required"],
      trim: true,
    },
    guardian: {
      type: guardianSchema,
      required: [true, "Student's guardian name is required"],
      trim: true,
    },
    localGuardian: {
      type: localGuardianSchema,
      required: [true, "Student's local guardian name is required"],
      trim: true,
    },
    profileImg: { type: String },
    admissionSemester: {
      type: Schema.Types.ObjectId,
      ref: 'AcademicSemester',
    },
    academicDepartment: {
      type: Schema.Types.ObjectId,
      ref: 'AcademicDepartment',
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
  },
);

// virtual
studentSchema.virtual('fullName').get(function () {
  return `${this.name.firstName} ${this.name.middleName} ${this.name.lastName}`;
});

// Query Middleware
studentSchema.pre('find', function (next) {
  this.find({ isDeleted: { $ne: true } });
  next();
});

studentSchema.pre('findOne', function (next) {
  this.find({ isDeleted: { $ne: true } });
  next();
});

studentSchema.pre('aggregate', function (next) {
  this.pipeline().unshift({ $match: { isDeleted: { $ne: true } } });
  next();
});

// Creating a custom static method
studentSchema.statics.isUserExist = async function (id: string) {
  const existingUser = await Student.findOne({ id });
  return existingUser;
};

export const Student = model<TStudent, StudentModel>('Student', studentSchema);
