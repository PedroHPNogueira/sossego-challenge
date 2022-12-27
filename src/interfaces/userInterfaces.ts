import { MoreAbout } from './../components/registerSteps/MoreAbout/index';
export interface IUser{
    name: string,
    email: string,
    password: string,
    birthDate: Date,
    moreAbout: string,
    address: IAddress
}

export interface IUserInCreation{
    name?: string,
    email?: string,
    password?: string,
    birthDate?: Date,
    moreAbout?: string,
    address?: IAddress
}

export interface IAddress{
    cep: string,
    street: string,
    number: string,
    neighborhood: string,
    city: string,
    referenceLocation: string
}

export interface IUserInfo{
    name: string,
    email: string,
    password: string,
    confirmPassword?: string,
    birthDate: Date
}

export interface IMoreAbout{
    MoreAbout: string
}
