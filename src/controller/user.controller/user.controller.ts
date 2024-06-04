import { Request, Response } from "express";
import { CreateUser, GetUsers } from "../../service/UserService";

export class CreateUserController{
    constructor(
        private createUser: CreateUser
    ){}

    async handle(request: Request, response: Response): Promise<Response>{
        const {name, email, password} = request.body
        try {
            await this.createUser.execute({
                name,
                email,
                password
            })
            return response.status(201).json({message:"User created successfully!"})
        } catch (error) {
            return response.status(400).json({message: error.message || "Unexpected error"})
            
        }
    }
}


export class GetUsersController{
    constructor(
        private getUsers: GetUsers
    ){}

    async handle(request: Request, response: Response): Promise<Response>{
        try {
            const users = await this.getUsers.getUsers();
            return response.status(201).json({data:users})

        } catch (error) {
            return response.status(400).json({message: error.message || "Unexpected error"})
        }
    }

}