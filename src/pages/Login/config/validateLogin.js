import * as yup from 'yup';

export const validateLoginSchema = yup.object().shape({
  email: yup
    .string()
    .email('Must be valid email format')
    .required('This field is required'),
  password: yup
    .string()
    .required('This field is required')
    .min(5, 'Must be minimum 5 characters.')
});
