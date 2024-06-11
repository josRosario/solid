import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config();
const primaryDB = new Sequelize(process.env.db_prmary, process.env.db_user, process.env.db_password,{
    host:process.env.db_host,
    dialect:process.env.db_dialect,
 
})

const replicaDb = new Sequelize(process.env.db_replica, process.env.db_user, process.env.db_password,{
    host:process.env.db_host,
    dialect:process.env.db_dialect,
 
})



export {primaryDB, replicaDb}
