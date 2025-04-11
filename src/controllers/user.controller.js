
import mongoose from 'mongoose';
import fs from 'fs';
import User from "../models/user.model.js"
//import  hashPassword, { verifyPwd } from  "../utils/hashPwd.js"
import uploadOnCloudinary from '../config/cloudinary.js';
import {hashedPwd, verifyPwd} from "../utils/hashPwd.js"

const createuser = async (req,res) => {
    //1.check for input (name,email,passward,mobile,gender)
    //2.check for passward length
    //3.check for valid email format 
    //4.encrypt passward 
    //5.check if user alraedy exists
    //6.upload avatar on cloudinary
    //7.create user
    //8.send response to client 
    //bussiness logic for creating a user account 
//    res.send ('user account created succesfully');
const {name,email,passward,mobile, gender} = req.body 

const mobileNumber = Number(mobile)
// console.log('req.body',req.body)
// console.log('req.files',req.files)

//Validate 
if(!(name && email && passward && gender)) 
    return res.status (400)
.json({
         success:false,
         message:"all fields are required"  
})
//console.log('success')

//check for passward
if(passward.length <8)
    return res.status(400)
     .json({
         success:false,
         message:"passward must be at least 8  character long"  
     })

  //chwck for email formAT    
if(!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) 
    return res.status(400)
   .json({
      success:false,
      message:"invalid email id"
})  

//encrpt passward 
const hashedPwd = await hashPassword(passward)

try {
    //check if user already exist 
     const existingUser = await User.findOne({email:email})
    if(existingUser) 
     res.status(400)
      .json({
    success: false ,
    message: "user with this email already exists"
})
//upload image on cloudinary 
let imagePath = req.file.path
const imageURL  = await uploadOnCloudinary(imagePath)

if(!imageURL)
    return res.status(400)
        .json({
            success:false,
            message:"image uploaded failed"
        })
//delewte on cloudinary
        fs.unlink(imagePath, (err)=>{
            if (err)
                return res.status(400)
            .json({
                success:false,
                message:"something went wrong"
            })
        })
// creat account 
     const user = new User ({
        name:name,
        email:email,
        passward:passward,
        hashedPwd:hashedPwd,
        mobile:mobileNumber,
        gender:gender,
        avatar : imageURL
    })
    user.save()

    res.status(200)
        .json({
            success:true,
            message:"user created successfully",
            user:user
        })
}catch(error){
    res.status(400)
       .json({
        success:false,
        message:error
       })
}
 }
const getallusers = (req,res) => {
    //bussiness logic for getting all user 
    try{
        const users = User.find()
        if(!users)
            res.status(400)
        .json({
            sucess:false,
            message:"no users found"
        })
        res.status(200)
        .json({
            sucess:true,
            message:"user reterived sucessfully",
            users:users
        })
    } catch (error){
        res.status(400)
        .json({
            success:false,
            message:error.message  
              })
    }
    
}

const getuser = (req,res) => {

    const {id} = req.params
    try{
        const user = User.findById(id)
        //const user = User.findOne({_id:id})
        if (!user)
            res.status(400)
        .json({
            sucess:false,
            message:"user not found"
        })
     res.status(200)
     .json({
        success:true,
        message:"user  reteived successfully ",
        user:user
     })
    }catch (error) {
        res.status(400).json ({success:false,message:error.message})
    }
}

const deleteuser = (req,res) => {

const {id} = req.params

try{

     const user = User.findByIdAndDelete(id)
     //const user = User.deleteOne({_id:id})
     if (!user)
        res.status(400)
    .json({
        sucess:false,
        message:'use not found '
    })

    res.status(200)
    .json({
        success:true,
        message:'user deleted successfully',
        user:user
    })
}catch (error){
    res.status(400).json({success:false,message:error.message})
}
}

const updateuser = async (req,res) => {
    const {id} = req.params
    const {name,mobile, bio, DOB ,} = req.body
    const {path} = req.file 

    if(!name &&!mobile&&!bio&&!DOB)
        return res.status(400)
    .json({
        success:false,
        message:"no filed to update "
    })
    try
    {
        const user=User.findById(id)
        if(!user)
            res.status(400)
        .json({
            success:false,
            message:"user not found"
        })

        let imageURL = ""
        if(path){
            //upload on cloudionary
            let imagePath = req.file.path
            imageURL = await uploadOnCloudinary(imagePath)
            if(!imageURL)
                return res.status(400)
            .json({
                success:false,
                message:"image upload failed"
            })
            //delete local image from server 
            fs.unlink(imagePath,(err)=>{
                if(err)
                    return res.status(400)
                .json({
                    success:false,
                    message:"something went wrong"
                })
            })
        }
//-> use this when changes are conditional
//-> database calls : 2
//-> trigger middleware
        user.name = name || user.name
        user.mobile = mobile || user.mobile
        user.bio = bio || user.bio
        user.DOB =DOB || user.DOB
        user.avatar = req.file. path || user.avatar
        user.save()

        //const updateUser = await User.findBYIdAndUpdate(id,{
    //     name:name || user.name,
    //     mobile: mobile || user.mobile,
    //     bio:bio|| user.bio,
    //     DOB:DOB || user.DOB,
    //     avatar:imageURL||user.avatar
    
    // })
    if(!updatedUser)
      res.statsus(400).json({
       success:false,
       message: "user not updated"
    })


    }catch(error){

    }

}




const logoutuser = (req,res) => {
    //bussiness logic for logoutuser a user 
    res.send('user logged out successfully');
} 

const loginuser = async (req,res) =>{
    //1.acess token  using JWT
    //2.refresh token using JWT

    const {email, passward } = req.body;

    //1.check for input (email,passward)
    
        if (!email || !passward)
             res.status(400)
             .json({
                sucess: false,
                message:'all filelds are  required'
            });

        
        try{
            //2.check if user exists
        const user = await User.findOne({email:email});
        if (!user)
             res.status(400)
             .json({
                success:false,
                message:'user does not exist'
            });

            //3.check if passward is correct
            const IsPwdCorrect = await verifyPwd(passward, user.hashedPwd)
            if(!IsPwdCorrect)
                res.status(400)
            .json({
                success:false,
                message:"incorrect passward"
            })

          //4.send response to client 
             res.status(200)
            .json({
            success :true,
            message :"user logged successfully",
            user:user
        })
        } catch (error) {
            res.status(400)
            .json({
               success:false,
               message: error.message
            })
               
    } 
}



export {createuser ,
        getallusers ,
        getuser,
        deleteuser ,
        updateuser,
        logoutuser,
        loginuser 
    };







