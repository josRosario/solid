import { Router } from "express";
import { createUserController } from "./service";
const router = Router();

router.post("/newUser", (request, response) => {
    return createUserController.handle(request, response)
})


export {router};