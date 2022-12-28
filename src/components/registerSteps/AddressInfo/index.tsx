import { useContext, useEffect } from "react"
import { AddressInfoDiv } from "./style"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { addressInfoSchema } from "../../../schemas/addressInfo.schema"
import { IAddress } from "../../../interfaces/userInterfaces"
import { useNavigate } from "react-router-dom"
import { Button } from "../../../styles/button"
import { motion as m } from "framer-motion"
import { cardsAnimations } from "../../../animation/registerAnimations"
import { UserContext } from "../../../contexts/UserContext"

export const AddressInfo = () => {
  const navigate = useNavigate()

  const { submitAddressInfo,userInCreation } = useContext(UserContext)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IAddress>({
    resolver: yupResolver(addressInfoSchema),
    defaultValues: {
      cep: userInCreation.address?.cep,
      street: userInCreation.address?.street,
      number: userInCreation.address?.number,
      neighborhood: userInCreation.address?.neighborhood,
      city: userInCreation.address?.city,
      referenceLocation: userInCreation.address?.referenceLocation,
    },
  });

  useEffect(() => {
    if(!userInCreation.name || !userInCreation.email || !userInCreation.password || !userInCreation.birthDate){
      navigate("/register/identify")
    }
  })

  return (
    <AddressInfoDiv>
      <m.form 
      variants={cardsAnimations} 
      animate="enter"
      exit="exit"
      onSubmit={handleSubmit(submitAddressInfo)}>
        <div className="twoInputsDiv">
          <div className="inputDiv">
            <label>CEP</label>
            <input type="text" {...register("cep")} />
            <p>{errors.cep?.message}</p>
          </div>
          <div className="inputDiv">
            <label>Rua</label>
            <input type="text" {...register("street")} />
            <p>{errors.street?.message}</p>
          </div>
        </div>
        <div className="fourInputsDiv">
          <div className="fourInputsSecDiv">
            <div className="inputDiv">
              <label>Número</label>
              <input type="text" {...register("number")} />
              <p>{errors.number?.message}</p>
            </div>
            <div className="inputDiv">
              <label>Bairro</label>
              <input type="text" {...register("neighborhood")} />
              <p>{errors.neighborhood?.message}</p>
            </div>
          </div>
          <div className="inputDiv">
            <label>Cidade</label>
            <input type="text" {...register("city")} />
            <p>{errors.city?.message}</p>
          </div>
        </div>
        <div className="inputDiv">
          <label>Ponto de referência</label>
          <input type="text" {...register("referenceLocation")} />
          <p>{errors.referenceLocation?.message}</p>
        </div>
        <Button type="button" className="returnButton" onClick={() => {navigate("/register/identify")}} variant="secondary">Anterior</Button>
        <Button type="submit" className="nextButton" variant="primary">Próximo passe</Button>
      </m.form>
    </AddressInfoDiv>
  );
};
