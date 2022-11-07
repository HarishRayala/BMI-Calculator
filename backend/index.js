const express=require("express")
const jwt=require("jsonwebtoken")
const app=express();
const cors=require("cors")
require("dotenv").config()
const bcrypt = require('bcrypt');
const connection = require("./config/db");
const UserModel = require("./Models/User.Model");
const authentication = require("./middlewares/authentication");
const BMIModel = require("./Models/BMI.model");
app.use(express.json());
app.use(cors());

app.get("/",(req,res)=>{
    res.send("Welcome to homepage")
})

app.post("/signup",async(req,res)=>{
    const{name,email,password}=req.body;
    const isUser=await UserModel.findOne({email});
    if(isUser){
        res.send({"msg":"User already exist try Login"})
    }
    else{
        bcrypt.hash(password,4,async function (err,hash){
            if(err){
                res.send({"msg":"Something went wrong"})
            }
            const newuser=new UserModel({
                name,
                email,
                password:hash
            })
            try{
                await newuser.save();
                res.send({"msg":"Signup Successful"})
            }
            catch{
                res.send({"msg":"Please enter correct fields"})
            }
        })
    }
})

app.put("/:id",async(req,res)=>{
    const {id}=req.params
    const data=await UserModel.updateOne({_id:id},req.body);
    res.send(data)
})

app.delete("/:id",async(req,res)=>{
    const {id}=req.params;
    await UserModel.deleteOne({_id:id});
    res.send("Deleted Successfully")
})

app.post("/login",async (req,res)=>{
    const {email,password}=req.body;
    const user=await UserModel.findOne({email})
    const hashed_password=user.password;
    const user_id=user._id;
    // console.log(user)
    // console.log(user_id)
    bcrypt.compare(password,hashed_password,function(err,result){
        if(err){
            res.send({"msg":"Something went wrong,try again later"})
        }
        if(result){
            const token=jwt.sign({user_id},process.env.SECRETKEY)
            res.send({message:"Login Successful",token})
        }
        else{
            res.send({"msg":"Login Failed Enter the correct details"})
        }
    })
})

app.get("/getProfile", authentication, async (req, res) => {
    const {user_id} = req.body
    const user =await  UserModel.findOne({_id : user_id})
    console.log(user)
    const {name, email} = user
    res.send({name, email})
})

app.post("/calculateBMI", authentication, async (req, res) => {
    const {height, weight, user_id} = req.body;
    const height_in_metre = Number(height)*0.3048
    const BMI = Number(weight)/(height_in_metre)**2
    const new_bmi = new BMIModel({
       BMI,
       height : height_in_metre,
       weight,
       user_id
    })
    await new_bmi.save()
    res.send({BMI})
})

app.get("/getCalculation", authentication, async (req, res) => {
    const {user_id} = req.body;
    const all_bmi = await BMIModel.find({user_id : user_id})
    res.send({history : all_bmi})
})

app.listen(8000, async () => {
    try {
      await connection;
      console.log("connection to mongodb successfully");
    } catch (err) {
      console.log("Error connecting to db", err);
    }
    console.log("Listening to server 8000");
});
  