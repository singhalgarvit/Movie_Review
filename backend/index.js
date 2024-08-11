require("dotenv").config();
const express=require("express")
const app=express();
const bodyParser=require("body-parser")
const cors = require('cors')
const connectDB=require('./database')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())
connectDB();

const auth=require("./Auth")
app.use('/auth',auth);

const AdminAPI=require('./AdminAPI')
app.use('/admin',AdminAPI)



const port=process.env.PORT;


app.listen(port,()=>{
    console.log(`port is connected on ${port}`)
})