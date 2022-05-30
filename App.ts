import dbConnection from "./database/db.connection";
import {USER, PASSWORD, HOST, PORT, DATABASE} from "./database/db.config"

const connection = dbConnection(USER, PASSWORD, HOST, PORT, DATABASE) 





