import { Router } from "express";
import { createUserController, getUsersController } from "./index";
const router = Router();

router.post("/newUser", (request, response) => {
    return createUserController.handle(request, response)
})

router.get("/getUsers", (request, response) => {
    return getUsersController.handle(request, response)
})
export {router};