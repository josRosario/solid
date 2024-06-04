import { UserRepository } from "../repository/implementations/UserRepository";
import { CreateUserController } from "../controller/user.controller/user.controller";
import { CreateUser } from "./CreateUserService";

const userRepository = new UserRepository()
const createUser = new CreateUser(
    userRepository
)

const createUserController = new CreateUserController(
    createUser
)

export {createUserController, CreateUser}