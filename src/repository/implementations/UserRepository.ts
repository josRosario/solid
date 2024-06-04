import { User } from "../../entities/User";
import { IUserRepository } from "../IUsersRepository";
import { ModelUser } from "../../model/user.model";
import * as argon2 from "argon2";

export class UserRepository implements IUserRepository{

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
}