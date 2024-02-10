import multer from "multer";
import path from "path";
import Obj from "../models/object";
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); // Set the destination folder for uploads
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname); // Keep the original file name
    },
});
const upload = multer({ storage });
  
const uploadData = ( req, res)=>{
     console.log(req.body);
     const filePath = path.join("./", 'uploads', req.file.filename);
  console.log('Image uploaded to:', filePath);
     res.send({data: "amit"})

     

}
export default uploadData