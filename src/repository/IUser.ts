import { User } from "../entities/User";

export interface IUserRepository{
    save(user:User):Promise<void>;
    getUsers():Promise<User | null>
}


export interface IGetDataRepository{
    findByEmail(email:string):Promise<User | null>;
}