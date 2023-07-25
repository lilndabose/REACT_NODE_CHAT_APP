import express from 'express'
import dotevn from 'dotenv'


const app = express()
dotevn.config()

const port = process.env.PORT || 6000

app.get("/",(req,res)=>{
    res.send("<h1 style='text-align: center;margin: 15% auto;'>WELCOME TO MY CHAT BACKEND</h1>")
})

app.listen(port,()=>{
    console.log(`Server running on port ${port}`)
})