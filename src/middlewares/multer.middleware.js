//Multer middleware for uploding a single file

import multer from "multer";
const storage = multer.diskStorage({
    destination: './src/uploads',
    filename: function (req , file ,cb) {
        cb(null,file.originalname)
    }
})
export const upload = multer({
    storage :storage,
})
