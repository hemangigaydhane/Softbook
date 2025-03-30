import express from 'express';
import {sendmessage, getallmessage,getmessage,deletemessage,unsendmessage,readmessage}
from "../controllers/message.controller.js";

const router =express.Router();

router.post('/create',sendmessage);
router.get('/getall',getallmessage);
router.get('/get/:id',getmessage);
router.delete('/delete/:id',deletemessage);
router.put('update/:id',unsendmessage);
router.put('/read/:id',readmessage);

export default router;