import { User } from "../entities/User";

export interface ICreateUserRepository{
    save(user:User):Promise<void>;
}


export interface IGetDataRepository{
    findByEmail(email:string):Promise<User | null>;
}

export interface IUsersRepository{
    getUsers():Promise<User | null>
}