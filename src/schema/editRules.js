import * as yup from 'yup';

export const rules = yup.object().shape({
    ingredients: yup.string().min(25,"ingredients must be atleast 25 characters long").required("*This input field is required"),
    preparation: yup.string()
    .min(8, 'Password must be at least 8 characters long')
    .required("*This input field is required"),
  });