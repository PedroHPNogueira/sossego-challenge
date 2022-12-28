import { useContext, useEffect } from "react"
import { UserContext } from "../../contexts/UserContext"
import { CreatedUserPageDiv } from "./style"
import { Button } from "../../styles/button"
import { useNavigate } from "react-router-dom"
import { motion as m } from "framer-motion"
import { cardsAnimations } from "../../animation/registerAnimations"
import { Background } from "../../components/Backgroud"

export const CreatedUserPage = () => {
    const navigate = useNavigate()

    const { setUserInCreation ,startNewRegister, usersCreated } = useContext(UserContext)

    useEffect(() => {
        setUserInCreation({})
        if(!usersCreated[0].moreAbout){
            navigate("/register/about")
            console.log("oi")
        }
    })

    return (
        <CreatedUserPageDiv>
            <Background>
                <div className="createdCard">
                    <m.div
                    variants={cardsAnimations} 
                    animate="enter"
                    exit="exit">
                        <h1>Usuário criado!</h1>
                        <span>Nome</span>
                        <p>{usersCreated[0].name}</p>
                        <span>Email</span>
                        <p className="email">{usersCreated[0].email}</p>
                        <div>
                            <div>
                                <span>Rua</span>
                                <p>{usersCreated[0].address?.street}</p>
                            </div>
                            <div>
                                <span>Número</span>
                                <p>{usersCreated[0].address?.number}</p>
                            </div>
                        </div>
                        <span>CEP</span>
                        <p>{usersCreated[0].address?.cep}</p>
                        <Button onClick={() => {startNewRegister()}} variant="primary">Novo usuário</Button>
                    </m.div>
                </div>
            </Background>
        </CreatedUserPageDiv>
    )
}