require("dotenv").config();
const express=require("express")
const app=express();
const auth=require("./Auth/auth")

app.use('/auth',auth);

const port=process.env.PORT;


app.listen(port,()=>{
    console.log(`port is connected on ${port}`)
})