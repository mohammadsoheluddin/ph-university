import * as z from 'zod';

const createAcademicDepartmentValidationSchema = z.object({
  body: z.object({
    name: z.string({
      invalid_type_error: 'Academic department must be string',
      required_error: 'Academic department is required.',
    }),
    academicFaculty: z.string({
      invalid_type_error: 'Academic faculty must be string',
      required_error: 'Academic faculty is required.',
    }),
  }),
});

const updateAcademicDepartmentValidationSchema = z.object({
  body: z.object({
    name: z
      .string({
        invalid_type_error: 'Academic department must be string',
        required_error: 'Academic department is required.',
      })
      .optional(),
    academicFaculty: z
      .string({
        invalid_type_error: 'Academic faculty must be string',
        required_error: 'Academic faculty is required.',
      })
      .optional(),
  }),
});

export const AcademicDepartmentValidations = {
  createAcademicDepartmentValidationSchema,
  updateAcademicDepartmentValidationSchema,
};
