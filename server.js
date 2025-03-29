//
import connectDB from "./src/config/db.js";
import express from 'express'
import dotenv from 'dotenv'
import userRoutes from  './src/routes/user.routes.js'
dotenv.config()

//inialization and configruration 
dotenv.config()
const app = express()

//database connection 
connectDB();

//middlewares
 app.use (express.json())
 app.use(express.urlencoded({extend: true}))

 //routes
 app.use ('/api/v1/user',userRoutes)

 //start the server 
 const port = process.env.PORT || 5001

    app.listen(port,()=>{
        console.log(`server is running on port ${port}}`);
    })