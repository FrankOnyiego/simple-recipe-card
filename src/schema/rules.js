import * as yup from 'yup';

export const rules = yup.object().shape({
    email: yup.string().email("please enter a valid email address").required("*This input field is required"),
    password: yup.string()
    .min(8, 'Password must be at least 8 characters long')
    .required("*This input field is required"),
  });