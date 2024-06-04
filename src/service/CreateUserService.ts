import { User } from "../entities/User";
import { IUserRepository } from "../repository/IUsersRepository";
import { ICreateUserRequestDTO } from "./CreateUserDTO";

export class CreateUser{
    constructor(
        private userRepository:IUserRepository
    ){}
    async saveUser(data:ICreateUserRequestDTO){
        await this.userRepository.findByEmail(data.email)
        const user = new User(data)
       await this.userRepository.save(user);

    }
}