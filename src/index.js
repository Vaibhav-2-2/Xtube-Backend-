// require('dotenv').config({path:"./env"})

import dotenv from "dotenv";
// import mongoose from "mongoose";
// import { DB_Name } from "./constants";
import express from "express";
const app = express();
import connectDB from "./db/DBconnect.js";

dotenv.config({
  path: "./",
});

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 3000, () => {
      console.log(`server listening on port: + ${process.env.PORT}`);
    });
    app.on("error", () => {
      console.log("Error connecting", error);
    });
    app.get("/", (req,res) =>{
        res.send("Server is running on port 3000");
    })
  })
  .catch((error) => {
    console.log("connection failed:", error);
  });

/*

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
