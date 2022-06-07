// Import the moel from 'etudiant.model file to be able to send request to the database'
import {Etudiant, etudiantModel, etudiantSchema} from "../models/etudiant.model"

// First we must import the express module
import express from 'express'

// Then we create a express router
const router = express.Router()

// Now we have a router will create some routes
router.post("/addUser/", (req, res)=>{
    if(req.body.firstname && req.body.lastname && req.body.address && req.body.birthDay){
        let etudiant = new Etudiant(req.body.firstname, req.body.lastname, req.body.address, req.body.birthDay) 
        etudiantModel.insertMany(etudiant)
        res.sendStatus(200)
    }else{
        res.sendStatus(400)
    }
})
// The get route who send all users in the database
router.get("/getUsers/", (req, res)=>{
    // res.send("Renvoie de la liste des étudiants ! ")
    etudiantModel.find()
    .then((data:any)=>{
        res.json(data)
    })
})
router.delete("/delUser/", (req, res)=>{

})

// Now we export the router to be able to use them somewhere else
export default router