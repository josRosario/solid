import { User } from "../../entities/User";
import { ICreateUserRepository, IGetDataRepository, IUsersRepository } from "../IUser";
import { ModelUser } from "../../model/user.model";

export class UserRepository implements ICreateUserRepository, IGetDataRepository{

    async  findByEmail(email: string): Promise<User | null> {
     const user = await ModelUser.findOne({
        where:{
            email
        }
      })
      return user || null
    }


    async save(user:User):Promise<void>{
         await ModelUser.create(user)
    }

    async getUsers():Promise<User | null>{
      return await ModelUser.findAll()
    }
}