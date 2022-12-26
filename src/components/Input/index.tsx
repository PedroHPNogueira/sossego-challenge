import { InputDiv } from "./style"
import { useForm } from "react-hook-form";
import { FieldErrorsImpl } from "react-hook-form/dist/types";

interface IInputProps {
    height?: string,
    width?: string,
    error?: any,
    label: string,
    registerName: string,
    placeholder?: string,
    type?: string
}

export const Input = ({height,width,error,label,registerName,placeholder,type}: IInputProps) => {

    const {register} = useForm()

    return (
        <InputDiv height={height} width={width}>
            <label htmlFor={label}>{label}</label>
            <input id={label} type={type || "text"} placeholder={placeholder} {...register(registerName)}/>
            <p>{error}</p>
        </InputDiv>
    )
}