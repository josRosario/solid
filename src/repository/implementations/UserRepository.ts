import { User } from "../../entities/User";
import { ICreateUserRepository, IGetDataRepository, IUsersRepository } from "../IUser";
import { PrimaryModelUser, ReplicaModelUser } from "../../model/user.model";

export class UserRepository implements ICreateUserRepository, IGetDataRepository{

    async  findByEmail(email: string): Promise<User | null> {
     const user = await ReplicaModelUser.findOne({
        where:{
            email
        }
      })
      return user || null
    }


    async save(user:User):Promise<void>{
         await PrimaryModelUser.create(user);
         await ReplicaModelUser.create(user)
    }

    async getUsers():Promise<User | null>{
      return await ReplicaModelUser.findAll()
    }
}