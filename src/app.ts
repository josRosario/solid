import express from "express";
import { router } from "./route";
import { db } from "./config/connection";
const app = express();
app.use(express.json());
app.use(router)

try {
     db.authenticate();
     db.sync({alter:true})
    console.log("The connection to potgres has been stablished...")
} catch (error) {
    console.log("It has been an error to stablish the connection...", error) 
}
export {app};