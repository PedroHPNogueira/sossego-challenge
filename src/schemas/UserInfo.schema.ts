import * as yup from "yup"

export const userInfoSchema = yup.object().shape({
    name: yup.string().required("Insira seu nome"),
    password: yup.string().required("insira sua senha").min(8, "Sua senha precisa ter mais de 8 digitos"),
    confirmPassword: yup.string().oneOf([yup.ref("password")], "Sua confirmação deve ser idêntica a senha"),
    email: yup.string().required("Insira seu email").email("Este email não é válido"),
    birthDate: yup.string().required("Insira sua data de nascimento")
})