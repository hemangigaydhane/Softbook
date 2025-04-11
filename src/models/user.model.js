import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required:true,
        trim:true
    },

    email:{
        type: String, ///data type of the vcalue 
        required:true, //value is compulsory /requirefd
        unique:true,  // value sholud be uniqe /no two user can have the same email
        trim: true   
    },
    passward:{
        type:String,
        required:true,
        minlength:8
    },

    isVerified:{
    type:Boolean,
    defalut:false //defalut value of the field
   },

    mobile:{
        type: Number ,
        required :true,
        length:10

    },

    gender:{
      required:true,
      type: String,
      enum: ['male','female','other'] //accepts only three values
    },

    bio:{
        type:String,
        maxlength:200,
        trim: true
    },
    avatar:String,
    DOB: Date,
    hashedpwd:String

})

 const User = mongoose.model('User',userSchema) //user is the name of the collecctuon 
 export default User