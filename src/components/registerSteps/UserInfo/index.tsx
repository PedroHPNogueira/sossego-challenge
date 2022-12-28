import { useContext } from "react";
import { UserInfoDiv } from "./style";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { userInfoSchema } from "../../../schemas/userInfo.schema";
import { IUserInfo } from "../../../interfaces/userInterfaces";
import { Button } from "../../../styles/button";
import { motion as m } from "framer-motion"
import { cardsAnimations } from "../../../animation/registerAnimations";
import { UserContext } from "../../../contexts/UserContext";

export const UserInfo = () => {

  const { submitUserInfo, userInCreation } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserInfo>({
    resolver: yupResolver(userInfoSchema),
    defaultValues: {
      name: userInCreation.name,
      password: userInCreation.password,
      confirmPassword: userInCreation.password,
      email: userInCreation.email,
      birthDate: userInCreation.birthDate,
    },
  });

  return (
    <UserInfoDiv>
      <m.form
      variants={cardsAnimations} 
      animate="enter"
      exit="exit"
      onSubmit={handleSubmit(submitUserInfo)}>
        <div className="inputDiv">
          <label>Nome</label>
          <input type="text" {...register("name")} />
          <p>{errors.name?.message}</p>
        </div>
        <div className="twoInputsDiv">
          <div className="inputDiv">
            <label>Senha</label>
            <input type="password" {...register("password")} />
            <p>{errors.password?.message}</p>
          </div>
          <div className="inputDiv">
            <label>Confirmar senha</label>
            <input type="password" {...register("confirmPassword")} />
            <p>{errors.confirmPassword?.message}</p>
          </div>
        </div>
        <div className="twoInputsDiv">
          <div className="inputDiv">
            <label>Email</label>
            <input type="text" {...register("email")} />
            <p>{errors.email?.message}</p>
          </div>
          <div className="inputDiv">
            <label>Data de nascimento</label>
            <input type="date" {...register("birthDate")} />
            <p>{errors.birthDate?.message}</p>
          </div>
        </div>
        <Button variant="primary" type="submit">Próximo passo</Button>
      </m.form>
    </UserInfoDiv>
  );
};
