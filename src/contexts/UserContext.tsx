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
    userInCreation: IUserInCreation,
}

export const UserContext = createContext<IUserContext>({} as IUserContext);

const UserProvider = ({ children }: IUserContextProps) => {
    const [usersCreated, setUsersCreated] = useState([])
    const [userInCreation, serUserInCreation] = useState<IUserInCreation>({})

    const navigate = useNavigate()

    const submitUserInfo = (data: IUserInfo) => {
        delete data.confirmPassword
       
        let user = userInCreation
        user = {...userInCreation,...data}
        serUserInCreation(user)

        navigate("/register/address")
    }

    const submitAddressInfo = (data: IAddress) => {
        let user = {...userInCreation, address: data}
        serUserInCreation(user)

        navigate("/register/about")
        console.log(user)
    }

    const submitMoreAbout = (data: IMoreAbout) => {
        let user = {...userInCreation, moreAbout: data.MoreAbout}
        serUserInCreation(user)

        navigate("/register/created")
        console.log(user)
    }

    return (
        <UserContext.Provider value={{ submitUserInfo, submitAddressInfo, submitMoreAbout, userInCreation}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider