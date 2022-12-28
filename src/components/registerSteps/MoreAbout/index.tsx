import { MoreAboutDiv } from "./style"
import { useContext, useEffect } from "react";
import { UserContext } from "../../../contexts/UserContext";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { moreAboutSchema } from "../../../schemas/moreAbout.schema";
import { IMoreAbout } from "../../../interfaces/userInterfaces";
import { useNavigate } from "react-router-dom";
import { Button } from "../../../styles/button";
import { motion as m } from "framer-motion";
import { cardsAnimations } from "../../../animation/registerAnimations";

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
    })

    return (
      <MoreAboutDiv>
        <m.form 
        variants={cardsAnimations} 
        animate="enter"
        exit="exit"
        onSubmit={handleSubmit(submitMoreAbout)}>
          <div className="inputDiv">
            <label>Nos conte mais sobre você</label>
            <textarea {...register("MoreAbout")}/>
            <p>{errors.MoreAbout?.message}</p>
          </div>
          <Button type="button" variant="secondary" className="returnButton" onClick={() => {navigate("/register/address")}}>Anterior</Button>
          <Button variant="primary" className="nextButton" type="submit">Próximo passo</Button>
        </m.form>
      </MoreAboutDiv>
    )
}