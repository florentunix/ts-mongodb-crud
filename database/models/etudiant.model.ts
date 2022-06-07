// Import The schema class from mongoose
import { Schema } from "mongoose";
// Import the connection module to the database
import  {connection}  from "../../App";
// Create a schema for insertion of user then export them
export const etudiantSchema = new Schema({
    "firstname": Schema.Types.String,
    "lastname": Schema.Types.String,
    "address" : Schema.Types.String,
    "birthDay": Schema.Types.Date
})

// Create the etudiant class
export class Etudiant{
    firstname: String;
    lastname: String;
    address : String;
    birthDay: String;

    constructor(firstname: String, lastname: String, address: String, birthDay: String){
        this.firstname = firstname;
        this.lastname = lastname;
        this.address = address;
        this.birthDay = birthDay
    }
}

// Export the model who will use to call mongoose methodes
export const etudiantModel = connection.model("etudiants", etudiantSchema)