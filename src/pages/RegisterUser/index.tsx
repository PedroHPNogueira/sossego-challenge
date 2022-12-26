import { RegisterMain } from "./style"
import { Outlet } from "react-router-dom";

export const RegisterUser = () => {

    return (
        <RegisterMain>
            <div className="background">
                <div className="sossegoDiv">
                    <img src="https://uploads-ssl.webflow.com/5f7f921a3cde3a56d139f6ce/5fc52d636d3160ad82cce141_logo-horizontal-branco.svg" alt="" />
                </div>
                <div>
                </div>
               <Outlet/>
            </div>
        </RegisterMain>
    )
}