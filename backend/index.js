const express=require("express")
const auth=require("./Auth/auth")
const app=express();

app.use('/auth',auth);



app.listen(3456,()=>{
    console.log("port is connected on 3456")
})