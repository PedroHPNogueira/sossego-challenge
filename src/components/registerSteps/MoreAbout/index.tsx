import { MoreAboutDiv } from "./style"
import { useContext, useEffect } from "react";
import { UserContext } from "../../../contexts/UserContext";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { moreAboutSchema } from "../../../schemas/moreAbout.schema";
import { IMoreAbout } from "../../../interfaces/userInterfaces";
import { useNavigate } from "react-router-dom";
import { Button } from "../../../styles/button";

import { BsPersonFill as Person } from "react-icons/bs";
import { RiHome4Fill as Home } from "react-icons/ri";
import { CgFileDocument as Document } from "react-icons/cg";

export const MoreAbout = () => {
    const navigate = useNavigate()

    const { submitMoreAbout, userInCreation } = useContext(UserContext);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IMoreAbout>({
        resolver: yupResolver(moreAboutSchema),
        defaultValues: {
            MoreAbout: userInCreation.moreAbout
        },
    });

    useEffect(() => {
        if(!userInCreation.address){
            navigate("/register/address")
        }
    },[])

    return (
        <MoreAboutDiv>
            <h1>Criação de usuário</h1>
      <div className="overview">
        <div className="personSVG">
          <Person />
        </div>
        <p>Identificação do usuário</p>
        <div className="homeSVG">
          <Home />
        </div>
        <p>Endereço do usuário</p>
        <div>
          <Document />
        </div>
        <p>Sobre você</p>
      </div>
      <form onSubmit={handleSubmit(submitMoreAbout)}>
        <div className="inputDiv">
            <label>Nos conte mais sobre você</label>
            <textarea {...register("MoreAbout")}/>
            <p>{errors.MoreAbout?.message}</p>
        </div>
        <Button variant="secondary" className="returnButton" onClick={() => {navigate("/register/address")}}>Anterior</Button>
        <Button variant="primary" className="nextButton" type="submit">Próximo passo</Button>
      </form>
        </MoreAboutDiv>
    )
}