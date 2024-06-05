import { User } from "../../entities/User";
import { IUserRepository, IGetDataRepository } from "../IUsersRepository";
import { ModelUser } from "../../model/user.model";

export class UserRepository implements IUserRepository, IGetDataRepository{

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