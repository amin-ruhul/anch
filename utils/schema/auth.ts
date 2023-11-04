import * as Yup from "yup";

export const signInSchema = Yup.object({
  email: Yup.string().email().required(),
  password: Yup.string().required().min(8).max(25),
  remember: Yup.boolean(),
});

export const signUpSchema = Yup.object({
  email: Yup.string().email().required(),
  name: Yup.string().required().min(8).max(25),
  password: Yup.string().required().min(8).max(25),
  terms: Yup.boolean().required().isTrue(),
});
