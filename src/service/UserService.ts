import { User } from "../entities/User";
import { IUserRepository, IGetDataRepository } from "../repository/IUsersRepository";
import { IUserDTO } from "./UserDTO";


export class GetUserByEmail{
    constructor(
        private getDataRepository:IGetDataRepository
    ){}
    async getUserByEmail(email:string): Promise<User | null>{
        const emailAlreadyExist = await this.getDataRepository.findByEmail(email)
        return emailAlreadyExist
    }
}

export class CreateUser extends GetUserByEmail{
    constructor(
        private userRepository:IUserRepository,
        getDataRepository: IGetDataRepository 
    ){
        super(getDataRepository);
    }
   
    async createUser(data:IUserDTO){
        const emailAlreadyExist = await this.getUserByEmail(data.email)
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

