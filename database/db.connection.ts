// Import the mongoose module fro teh connection to the db
import {Connection, createConnection} from "mongoose";
// This function create a connection to the mongo database and export them
export default function connection(USER:string, PASSWORD:string, HOST:string, PORT:number, DATABASE:string):Connection{
    // Set the mongodb url
    const uri:string = `mongodb://${USER}:${PASSWORD}@${HOST}:${PORT}/${DATABASE}`
    // Create a connection with the uri
    const conn = createConnection(uri)
        // If connected ti the database, it's log to the console
        conn.on("connected", ()=>{
        console.log("Successfully connected to the database");
    })
    // If connection error Log It in the console
    conn.on("error", (e:any)=>{
        console.log("Unable to connect to the database");
        
    })
    return conn;
}

