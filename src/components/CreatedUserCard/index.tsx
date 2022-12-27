import { useContext } from "react"
import { UserContext } from "../../contexts/UserContext"
import { CreatedUserCardDiv } from "./style"
import { Button } from "../../styles/button"

export const CreatedUserCard = () => {

    const {  startNewRegister, userInCreation } = useContext(UserContext)

    return (
        <CreatedUserCardDiv>
            <h1>Usuário criado!</h1>
            <span>Nome</span>
            <p>{userInCreation.name}</p>
            <span>Email</span>
            <p className="email">{userInCreation.email}</p>
            <div>
                <div>
                    <span>Rua</span>
                    <p>{userInCreation.address?.street}</p>
                </div>
                <div>
                    <span>Número</span>
                    <p>{userInCreation.address?.number}</p>
                </div>
            </div>
            <span>CEP</span>
            <p>{userInCreation.address?.cep}</p>
            <Button onClick={() => {startNewRegister()}} variant="primary">Novo usuário</Button>
        </CreatedUserCardDiv>
    )
}