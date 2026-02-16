import express from "express";

const app = express();

app.get("/api/v1/health",(req,res)=>{
    res.status(200).json({status:"up"})
})


app.listen(4000,()=>{
    console.log("JS Server is running!!");
})