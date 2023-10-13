import * as Yup from 'yup';

export const userSchema = Yup.object({
    firstName : Yup.string(),
    lastName : Yup.string(),
    email : Yup.string().required(),
    password : Yup.string().required().min(6),
})