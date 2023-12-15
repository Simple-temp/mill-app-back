import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors"
import "./Models/InfoModel.js"
import InfoRoutes from "./Routes/InfoRoutes.js";

dotenv.config()

const app = express()
app.use(cors())
app.use(express.json()) 
app.use(express.urlencoded({ extended: false })); 

mongoose.connect(process.env.DB_URL,{ useNewUrlParser: true, useUnifiedTopology: true })
.then(()=>{
    console.log("Successfully Connected to DB")
})
.catch((err)=>console.log(err))



app.use("/api/info",InfoRoutes);

app.get('/', (req, res) => {
  res.send('Hello World!')
})


const PORT = process.env.PORT || 4000

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})