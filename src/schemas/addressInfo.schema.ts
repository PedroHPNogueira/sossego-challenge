import * as yup from "yup"

export const addressInfoSchema = yup.object().shape({
    cep: yup.string().required("Insira seu cep").min(8, "Seu CEP precisa ter oito números").max(8, "Seu CEP não pode conter mais de oito números"),
    street: yup.string().required("Insira sua rua"),
    number: yup.string().required("Insira o número"),
    neighborhood: yup.string().required("Insira o bairro"),
    city: yup.string().required("Insira a cidade"),
    referenceLocation: yup.string().required("Insira um ponto de referência")
})