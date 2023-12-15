import express from "express"
import Info from "../Models/InfoModel.js";

const InfoRoutes = express.Router()

export default InfoRoutes;

InfoRoutes.get("/getdata", async(req, res)=>{

    try{

        const info = await Info.find()
        res.status(200).json(info)

    }catch(err){

        console.log(err)

    }
    
})

InfoRoutes.get("/getbyid/:id", async(req, res)=>{
    
    try{

        const itemId = req.params.id
        const info = await Info.findById({ _id : itemId})
        res.status(200).json(info)

    }catch(err){

        console.log(err)

    }

})

InfoRoutes.post("/postdata", async(req, res)=>{

    try{

        const info = new Info({
            ...req.body
        })

        await info.save()
        res.status(200).json({ message: 'Info saved successfully' });

    }catch(err){
        res.send(err)
        console.log(err)
    }
    
})

InfoRoutes.delete("/deletedatabyid/:id", async(req, res)=>{

    try{

        const item = req.params.id
        const info = await Info.findByIdAndDelete(item)
        if(info){
            res.status(200).json({ message: 'Info delete successfully' });
        }

    }catch(err){
        res.send(err)
        console.log(err)
    }
    
})

InfoRoutes.put("/updatedata", async(req, res)=>{
    
})


