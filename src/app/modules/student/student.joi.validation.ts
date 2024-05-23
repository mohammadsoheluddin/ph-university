import Joi from 'joi';

const userNameValidationSchema = Joi.object({
  firstName: Joi.string()
    .required()
    .trim()
    .max(20)
    .pattern(/^[A-Z][a-z]*$/)
    .messages({
      'string.base': 'First Name must be a string',
      'string.empty': 'First Name is required',
      'string.max': 'First Name cannot be more than 20 characters',
      'string.pattern.base':
        'First Name must start with a capital letter and contain only alphabets',
    }),
  middleName: Joi.string().trim().allow(''),
  lastName: Joi.string()
    .required()
    .trim()
    .pattern(/^[A-Za-z]+$/)
    .messages({
      'string.base': 'Last Name must be a string',
      'string.empty': 'Last Name is required',
      'string.pattern.base': 'Last Name must contain only alphabets',
    }),
});

const guardianValidationSchema = Joi.object({
  fatherName: Joi.string().required().trim().messages({
    'string.base': 'Father Name must be a string',
    'string.empty': 'Father Name is required',
  }),
  fatherOccupation: Joi.string().required().trim().messages({
    'string.base': 'Father Occupation must be a string',
    'string.empty': 'Father Occupation is required',
  }),
  fatherContactNo: Joi.string()
    .required()
    .trim()
    .pattern(/^[0-9]{10}$/)
    .messages({
      'string.base': 'Father Contact No must be a string',
      'string.empty': 'Father Contact No is required',
      'string.pattern.base':
        'Father Contact No must be a valid 10-digit number',
    }),
  motherName: Joi.string().required().trim().messages({
    'string.base': 'Mother Name must be a string',
    'string.empty': 'Mother Name is required',
  }),
  motherOccupation: Joi.string().required().trim().messages({
    'string.base': 'Mother Occupation must be a string',
    'string.empty': 'Mother Occupation is required',
  }),
  motherContactNo: Joi.string()
    .required()
    .trim()
    .pattern(/^[0-9]{10}$/)
    .messages({
      'string.base': 'Mother Contact No must be a string',
      'string.empty': 'Mother Contact No is required',
      'string.pattern.base':
        'Mother Contact No must be a valid 10-digit number',
    }),
});

const localGuardianValidationSchema = Joi.object({
  name: Joi.string().required().trim().messages({
    'string.base': 'Local Guardian Name must be a string',
    'string.empty': 'Local Guardian Name is required',
  }),
  occupation: Joi.string().required().trim().messages({
    'string.base': 'Local Guardian Occupation must be a string',
    'string.empty': 'Local Guardian Occupation is required',
  }),
  contactNo: Joi.string()
    .required()
    .trim()
    .pattern(/^[0-9]{10}$/)
    .messages({
      'string.base': 'Local Guardian Contact No must be a string',
      'string.empty': 'Local Guardian Contact No is required',
      'string.pattern.base':
        'Local Guardian Contact No must be a valid 10-digit number',
    }),
  address: Joi.string().required().trim().messages({
    'string.base': 'Local Guardian Address must be a string',
    'string.empty': 'Local Guardian Address is required',
  }),
});

const studentValidationSchema = Joi.object({
  id: Joi.string().required().trim().messages({
    'string.base': 'ID must be a string',
    'string.empty': 'ID is required',
  }),
  name: userNameValidationSchema.required().messages({
    'any.required': 'Student Name is required',
  }),
  gender: Joi.string()
    .valid('male', 'female', 'other')
    .required()
    .trim()
    .messages({
      'string.base': 'Gender must be a string',
      'string.empty': 'Gender is required',
      'any.only': 'Gender must be one of "male", "female", or "other"',
    }),
  dateOfBirth: Joi.string().trim().allow(''),
  email: Joi.string().email().required().trim().messages({
    'string.base': "Student's email must be a string",
    'string.empty': "Student's email is required",
    'string.email': "Student's email must be a valid email address",
  }),
  contactNo: Joi.string()
    .required()
    .trim()
    .pattern(/^[0-9]{10}$/)
    .messages({
      'string.base': "Student's contact no must be a string",
      'string.empty': "Student's contact no is required",
      'string.pattern.base':
        "Student's contact no must be a valid 10-digit number",
    }),
  emergencyContactNo: Joi.string()
    .required()
    .trim()
    .pattern(/^[0-9]{10}$/)
    .messages({
      'string.base': "Student's emergency contact no must be a string",
      'string.empty': "Student's emergency contact no is required",
      'string.pattern.base':
        "Student's emergency contact no must be a valid 10-digit number",
    }),
  bloodGroup: Joi.string()
    .valid('A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-')
    .trim()
    .allow(''),
  presentAddress: Joi.string().required().trim().messages({
    'string.base': "Student's present address must be a string",
    'string.empty': "Student's present address is required",
  }),
  permanentAddress: Joi.string().required().trim().messages({
    'string.base': "Student's permanent address must be a string",
    'string.empty': "Student's permanent address is required",
  }),
  guardian: guardianValidationSchema.required().messages({
    'any.required': "Student's guardian name is required",
  }),
  localGuardian: localGuardianValidationSchema.required().messages({
    'any.required': "Student's local guardian name is required",
  }),
  profileImg: Joi.string().allow(''),
  isActive: Joi.string()
    .valid('active', 'blocked')
    .default('active')
    .trim()
    .messages({
      'string.base': 'isActive must be a string',
      'string.empty': 'isActive is required',
      'any.only': 'isActive must be one of "active" or "blocked"',
    }),
});

export default studentValidationSchema;
