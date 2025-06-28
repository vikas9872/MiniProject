import userModel from "../Models/UserModel.js";
import jwt from "jsonwebtoken"
import bcrypt from "bcryptjs"
import validator from "validator"

// login user
const loginUser= async(req, res)=>{
    const {email, password}=req.body;
    try{
        if(!email && !password){
            return res.json({success:false, message:"Please enter missing credentials"})
        }
        if(!email){
            return res.json({success:false, message:"Please enter email"})
        }
        if(!password){
            return res.json({success:false, message:"Please enter password"})
        }
        const user=await userModel.findOne({email});
        if(!user){
            return res.json({success: false, message: "Check the email"})
        }
        const isMatch=await bcrypt.compare(password,user.password)
        if(!isMatch){
            return res.json({success: false,message: "Check the password"})
        }
        const tkn=createToken(user._id);
        res.json({success: true,tkn:tkn,userID:user._id})
    }
    catch(error){
        console.log("Error"+error)
    }
}

// function for creating user token
const createToken=(id)=>{
    return jwt.sign({id}, process.env.JWT_SECRET)
}
// register user
const registerUser=async(req, res)=>{
    const {name, password, email}=req.body;
    console.log(req.body);
    try{
        if(!name){
            return res.json({success:false, message:"Please enter name"})
        }
        if(!email){
            return res.json({success:false, message:"Please enter email"})
        }
        if(!password){
            return res.json({success:false, message:"Please enter password"})
        }
        // Checking whether the user exists or not
        const existUser=await userModel.findOne({email});
        if(existUser){
            return res.json({success: false, message: "User already exists!"})
        }
        // Validating email format and strong password
        if(!validator.isEmail(email)){
            return res.json({success: false, message: "Please enter valid email!"})
        } 
        // Validating password length
        if(password.length<8){
            return res.json({success: false, message:"Please enter strong password of length atleast 8 characters"})
        }
        // Hashing user password
        const salt=await bcrypt.genSalt(5)
        const hashedPassword= await bcrypt.hash(password, salt)

        // Create new user
        const newUser=new userModel({
            name,
            email,
            password: hashedPassword,
        })
        // To save the new user
        const user=await newUser.save()

        // Creare user token
        const tkn=createToken(user._id)
        res.json({success: true, tkn:tkn, userID:user._id})
    }
    catch(error){
        console.log("Error in Registration: "+ error)
    }
}

export {loginUser, registerUser}