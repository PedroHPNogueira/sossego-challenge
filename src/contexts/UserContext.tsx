import { createContext } from 'react';

interface IUserContextProps{
    children: React.ReactNode
}

interface IUserContext{
    x: number
}

export const UserContext = createContext<IUserContext>({} as IUserContext);

const UserProvider = ({ children }: IUserContextProps) => {

    const x = 10

    return (
        <UserContext.Provider value={{x}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider