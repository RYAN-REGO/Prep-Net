import * as Yup from 'yup';

export const postSchema = Yup.object({
    batchNum : Yup.string().required(),
    department : Yup.string().required(),
    cname : Yup.string().required(),
    introduction : Yup.string().required(),
    roundMention : Yup.string().required(),
    roundDescription : Yup.string().required(),
    tips : Yup.string().required(),

});