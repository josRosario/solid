import express from "express";
import { router } from "./route";
import { primaryDB, replicaDb } from "./config/connection";
const app = express();
app.use(express.json());
app.use(router)

try {
     primaryDB.authenticate();
     primaryDB.sync({alter:true})
    console.log("The connection to the primary db has been stablished...");

    replicaDb.authenticate();
    replicaDb.sync({alter:true})
   console.log("The connection to the replica db has been stablished...")

} catch (error) {
    console.log("It has been an error to stablish the connection...", error) 
}
export {app};