import * as yup from "yup"

export const moreAboutSchema = yup.object().shape({
    MoreAbout: yup.string().required("Campo obrigatório")
})