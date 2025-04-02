import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required:true,
        trim:true
    },

    email:{
        type: String, ///data type of the vcalue 
        required:true, //value is compulsory requirefd
        unique:true,  // value sholud be uniqye
        trim: true   
    },

    pwd:{
        type:String,
        required:true,
        minlength:8
    },

    isVerified:{
    type:Boolean,
    defalut:false //defalut value of the field
   },

    mobile:{
        type: String,
        required :true,
        unique: true,
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

    DOB:'date'

})

 const user = mongoose.model('User',userSchema) //user is the name of the collecctuon 
 export default User