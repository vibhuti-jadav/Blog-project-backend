
import express from "express";

const app = express()

app.get("/",(req,res,next)=>{
    res.status(200).json("hello from server")
})

const port = 5000

app.listen(port, ()=>{
    console.log("server running on port",port)
})
