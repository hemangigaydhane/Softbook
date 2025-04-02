import express from 'express' ;
import {createpost,deletepost,getallpost,getepost,updatepost} from "../controllers/post.controller.js";


const router = express.Router();

router.post("/create",createpost);
router.post("/get/:id",getepost);
router.post("/getall/:id",getallpost);
router.post("/update/:id",updatepost);
router.post("/delete/:id",deletepost);

export default router ;