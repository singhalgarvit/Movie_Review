require('dotenv').config();
const express=require("express")
const router=express.Router();
const bodyParser=require("body-parser")
const cors = require('cors')
const connectDB=require('../database')

router.use(bodyParser.json())
router.use(bodyParser.urlencoded({ extended: false }))
router.use(cors())
connectDB();

const login=require("./login")
const signup=require("./signup")

router.use('/login',login)
router.use('/signup',signup)



module.exports=router;