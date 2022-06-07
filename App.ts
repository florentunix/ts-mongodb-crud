import bodyParser from "body-parser"

// Import the express module to use them
import express from "express"

// Import the connection function from the db.connection file
import dbConnection from "./database/db.connection";

// Import the database option from the config file
import { USER, PASSWORD, HOST, PORT, DATABASE } from "./database/db.config"

// With express module, Create an express app
const app = express()

// import the createServer method from the module http
import { createServer } from "http";

// Then export the connection to the database to use them in others files
export const connection = dbConnection(USER, PASSWORD, HOST, PORT, DATABASE)
// <<---Export must come before import etudiant---->> //
// We import the router for "etudiant" path
import etudiant from "./database/controllers/etudiant.controller"

// We anable the parsing of json request
app.use(bodyParser.json())
// We enable the form parsing
app.use(bodyParser.urlencoded({ extended: false }))

// Now in the App file we will create many middlewares to be able to response to a request.
app.get("/", (req, res) => {
    // res.download("./package.json"
    res.send("You use a test application ! ")
})
// Use the 'etudiant' routes
app.use("/etudiant", etudiant)

// Create a express app based on http module
createServer(app)

    // Now start the port on the port 80 in http
    .listen(80, () => {
        console.log("Server start running..");

    })
