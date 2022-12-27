import { createContext, useState  } from "react"
import { IUserInfo, IUserInCreation, IAddress, IMoreAbout } from "../interfaces/userInterfaces"
import { useNavigate } from "react-router"

interface IUserContextProps{
    children: React.ReactNode
}

interface IUserContext{
    submitUserInfo: (data: IUserInfo) => void,
    submitAddressInfo: (data:IAddress) => void,
    submitMoreAbout: (data: IMoreAbout) => void,
    startNewRegister: () => void,
    userInCreation: IUserInCreation,
}

export const UserContext = createContext<IUserContext>({} as IUserContext);

const UserProvider = ({ children }: IUserContextProps) => {
    const [userInCreation, setUserInCreation] = useState<IUserInCreation>({})

    const navigate = useNavigate()

    const submitUserInfo = (data: IUserInfo) => {
        delete data.confirmPassword
       
        let user = userInCreation
        user = {...userInCreation,...data}
        setUserInCreation(user)

        navigate("/register/address")
    }

    const submitAddressInfo = (data: IAddress) => {
        let user = {...userInCreation, address: data}
        setUserInCreation(user)

        navigate("/register/about")
        console.log(user)
    }

    const submitMoreAbout = (data: IMoreAbout) => {
        let user = {...userInCreation, moreAbout: data.MoreAbout}
        setUserInCreation(user)

        navigate("/register/created")
        console.log(user)
    }

    const startNewRegister =() => {
        setUserInCreation({})

        navigate("/register/identify")
    }

    return (
        <UserContext.Provider value={{ submitUserInfo, submitAddressInfo, submitMoreAbout, startNewRegister, userInCreation}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider