
import dotenv from 'dotenv';
dotenv.config();
import { v2 as cloudinary  } from 'cloudinary';


//Configration
cloudinary.config({
    cloud_name:  process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});


const  uploadOnCloudinary = async (localImagePath) =>  {
try{
     const response = await cloudinary.uploader.upload(localImagePath, {type:'upload'})
     return response.url
}  catch (error){
    return error ;
}
};

export default uploadOnCloudinary ;