import { UserContext } from "../../contexts/UserContext"
import {useContext} from "react"

export const RegisterUser = () => {

    const {x} = useContext(UserContext)
    console.log(x)

    const teste = () => {
        const x = true
        const y = false
        const j = y? console.log("Oi") : x? console.log("chegou") : false
    }

    teste()

    return (
        <>
            <h1>{x}</h1>
        </>
    )
}