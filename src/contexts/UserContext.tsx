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
    setUserInCreation: React.Dispatch<React.SetStateAction<IUserInCreation>>,
    userInCreation: IUserInCreation,
    usersCreated: IUserInCreation[]
}

export const UserContext = createContext<IUserContext>({} as IUserContext);

const UserProvider = ({ children }: IUserContextProps) => {
    const [usersCreated, setUsersCreated] = useState<IUserInCreation[]>([{}])
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
    }

    const submitMoreAbout = (data: IMoreAbout) => {
        let user = {...userInCreation, moreAbout: data.MoreAbout}
        setUserInCreation(user)

        const users = usersCreated
        users.unshift(user)
        setUsersCreated(users)
        console.log(usersCreated[0])
        navigate("/created")
    }

    const startNewRegister =() => {
        setUserInCreation({})

        navigate("/register/identify")
    }

    return (
        <UserContext.Provider value={{ submitUserInfo, submitAddressInfo, submitMoreAbout, startNewRegister, userInCreation, usersCreated, setUserInCreation}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider