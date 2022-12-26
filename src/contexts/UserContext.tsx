import { createContext, useState  } from "react"
import { IUserInfo, IUserInCreation } from "../interfaces/userInterfaces"

interface IUserContextProps{
    children: React.ReactNode
}

interface IUserContext{
    submitUserInfo: (data: IUserInfo) => void,
    userInCreation: IUserInCreation
}

export const UserContext = createContext<IUserContext>({} as IUserContext);

const UserProvider = ({ children }: IUserContextProps) => {
    const [usersCreated, setUsersCreated] = useState([])
    const [userInCreation, serUserInCreation] = useState<IUserInCreation>({name: "pedrin", password: "12121212", email: "pedrin@mail.com", birthDate: new Date()})

    const submitUserInfo = (data: IUserInfo) => {
        delete data.confirmPassword
       
        let user = userInCreation
        user = {...userInCreation,...data}
        serUserInCreation(user)

        
    }

    return (
        <UserContext.Provider value={{ submitUserInfo, userInCreation}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider