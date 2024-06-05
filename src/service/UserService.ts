import { User } from "../entities/User";
import { ICreateUserRepository, IGetDataRepository, IUsersRepository } from "../repository/IUser";
import { IUserDTO } from "./UserDTO";


export class GetUserByEmail{
    constructor(
        private getDataRepository:IGetDataRepository
    ){}
    async getUserByEmail(email:string): Promise<User | null>{
        const user = await this.getDataRepository.findByEmail(email)
        return user;
    }
}

export class CreateUser extends GetUserByEmail{
    constructor(
        private userRepository:ICreateUserRepository,
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
    constructor(private userRepository:IUsersRepository){}
    async getUsers(){
        return await this.userRepository.getUsers()
    }
}

