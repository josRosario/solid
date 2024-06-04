import { Request, Response } from "express";
import { CreateUser } from "../../service/CreateUserService";

export class CreateUserController{
    constructor(
        private createUser: CreateUser
    ){}

    async handle(request: Request, response: Response): Promise<Response>{
        const {name, email, password} = request.body
        try {
            await this.createUser.saveUser({
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