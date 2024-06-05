import { UserRepository } from "./repository/implementations/UserRepository";
import { CreateUserController, GetUsersController, GetUserByEmailController } from "./controller/user.controller/user.controller";
import { CreateUser, GetUsers } from "./service/UserService";

const userRepository = new UserRepository();



const createUser = new CreateUser(
    userRepository,
    userRepository    
)

const getUsers = new GetUsers(
    userRepository
)
const createUserController = new CreateUserController(
    createUser
)

const getUserByEmailController = new GetUserByEmailController(
    createUser
)

const getUsersController = new GetUsersController(
    getUsers
)

export {createUserController, getUsersController, getUserByEmailController}