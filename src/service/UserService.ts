import { User } from "../entities/User";
import { IUserRepository } from "../repository/IUsersRepository";
import { ICreateUserRequestDTO } from "./UserDTO";

export class CreateUser{
    constructor(
        private userRepository:IUserRepository
    ){}
    async execute(data:ICreateUserRequestDTO){
       const emailAlreadyExist = await this.userRepository.findByEmail(data.email)
       if(emailAlreadyExist) throw new Error ("Email already exist")
        const user = new User(data)
       await this.userRepository.save(user);

    }
}


export class GetUsers{
    constructor(private userRepository:IUserRepository){}

    async getUsers(){
        return await this.userRepository.getUsers()
    }
}