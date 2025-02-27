// require('dotenv').config({path:"./env"})

import dotenv from 'dotenv'
// import mongoose from "mongoose";
// import { DB_Name } from "./constants";
// import express from "express";
import connectDB from "./db/DBconnect.js";

dotenv.config({
    path:"./"
})

connectDB();

/*
const app = express();
(async()=>{
    try {
      await mongoose.connect(`${process.env.MONGODB_URI}/${DB_Name}`); 
      app.on('error',()=>{
      console.log("Error connecting",error);
      throw error;
      })
     app.listen(process.env.POST, ()=>{
        console.log(`Server is running on port ${process.env.PORT}`);
     })

    } catch (error) {
        console.error(error);
        throw error;
    }
})
*/