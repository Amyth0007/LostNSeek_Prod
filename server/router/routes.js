import express from 'express'
import Home from '../controllers/Home.js';
import Signup from '../controllers/Signup.js';
import Login from '../controllers/Login.js';
import auth from '../middleware/auth.js';
import updateprofile from '../controllers/updateprofile.js';
import getprofile from '../controllers/getprofile.js';
// import uploadData from '../controllers/uploadData.js';
import multer from 'multer';
import getuses from '../controllers/getuses.js';
import getobj from '../controllers/getobj.js';
import claimed from '../controllers/claimed.js';
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'uploads/'); // Set the destination folder for uploads
    },
    filename: (req, file, cb) => {
      cb(null, file.originalname); // Keep the original file name
    },
  });
  
  const upload = multer({ storage });
  
const router = express.Router();


router.get("/home", auth,  Home);
router.get("/", auth,  Home);
router.put('/updateprofile', auth, updateprofile)
router.get('/getstatus', auth, getobj)
router.get('/getprofile', auth, getprofile)
router.post("/Signup", Signup);
router.post("/Login", Login);
router.put("/claim", auth,  claimed);
// router.post("/upload", uploadData);
router.post("/getuser", getuses)
// router.post("/upload", upload.single('image'), uploadData);
export default router;