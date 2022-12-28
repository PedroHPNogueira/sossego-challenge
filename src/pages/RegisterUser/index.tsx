import { RegisterMain } from "./style"
import { Outlet, useLocation } from "react-router-dom"
import { Background } from "../../components/Backgroud"

import { BsPersonFill as Person } from "react-icons/bs"
import { RiHome4Fill as Home } from "react-icons/ri"
import { CgFileDocument as Document } from "react-icons/cg"
import { useEffect } from "react";

export const RegisterUser = () => {

    const location = useLocation()

    useEffect(() => {
        const personSVG = document.getElementById("personSVG")
        const homeSVG = document.getElementById("homeSVG")
        const documentSVG = document.getElementById("documentSVG")

        personSVG?.classList.remove("selected")
        homeSVG?.classList.remove("selected")
        documentSVG?.classList.remove("selected")
        personSVG?.classList.remove("inProgress")
        homeSVG?.classList.remove("inProgress")
        documentSVG?.classList.remove("inProgress")

        if(location.pathname === "/register/identify"){
            personSVG?.classList.add("inProgress")
        } else if(location.pathname === "/register/address"){
            personSVG?.classList.add("completed")
            homeSVG?.classList.add("inProgress")
        } else {
            personSVG?.classList.add("completed")
            homeSVG?.classList.add("completed")
            documentSVG?.classList.add("inProgress")
        }
    },[location.pathname])

    return (
        <RegisterMain>
            <Background>
                <div className="formContainer">
                    <h1>Criação de usuário</h1>
                    <div className="overview">
                        <div id="personSVG" className="inProgress">
                            <Person />
                        </div>
                        <p>Identificação do usuário</p>
                        <div id="homeSVG" className="homeSVG">
                            <Home />
                        </div>
                        <p>Endereço do usuário</p>
                        <div id="documentSVG" className="documentSVG">
                        <   Document />
                        </div>
                        <p>Sobre você</p>
                    </div>
                    <Outlet/>
                </div>
            </Background>
        </RegisterMain>
    )
}