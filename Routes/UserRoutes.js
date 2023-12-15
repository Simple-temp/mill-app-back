import express from "express"

const UserRoutes = express.Router()

UserRoutes.get((req, res)=>{
    console.log("HI")
})