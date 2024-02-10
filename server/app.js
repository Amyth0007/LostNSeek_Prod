// // app.js
import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import Jwt from 'jsonwebtoken';
import mongoose from 'mongoose';
import multer from 'multer';
import path from 'path';
import Obj from './models/object.js';
import User from './models/user.js';
import router from "./router/routes.js";
const app = express();
const port = 1000;
app.use(cors())
app.use(bodyParser.json())

app.use('/api/', router)
main()

async function main() {
  try {
    await mongoose.connect("mongodb://0.0.0.0/lostNseek");

    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}


// app.get('/', (req, res) => {
//   res.send('Hello, World!');
// });

// app.listen(port, () => {
//   console.log(`Server is listening on port ${1000}`);
// });

// const express = require('express')
// const cors = require('cors')
// const multer = require('multer')

// const app = express()
app.use(cors())
app.use(express.json())

const storage = multer.diskStorage({
  destination: path.join("./image"),
  // destination: function(req, file, cb) {
  //   return cb(null, "./public/Images")
  // },
  filename: function (req, file, cb) {
    return cb(null, `${file.originalname}`)
  }
})

const upload = multer({storage})
app.use(express.static('image'))
// app.use('/images', express.static(path.join(__dirname, 'image')));
// app.post('/upload', (req, res) => {
app.post('/api/upload', upload.single('file'), async(req, res) => {
  console.log(req.body);
  const { contact , person, place, token, reference } = req.body;
  console.log("upload saterted...");
  console.log(req.body)
  console.log(token)
  let uid;
  // const {authorization} = token;
    const t = JSON.parse(token);
    console.log("parsed");
    console.log(t);
       const jwtsecret = "asdfghjk";

       if (typeof(t) === 'string') {
        console.log('Variable is a string');
        const verifytoken =  Jwt.verify(t, jwtsecret);
        const vuser = await User.findOne({_id : verifytoken.user.id})
        console.log(vuser);
        uid = vuser;
        // next();
      } else if (typeof(t) === 'object') {
        console.log('Variable is an object');
           const verifytoken =  Jwt.verify(t.token.toString(), jwtsecret);
           const vuser = await User.findOne({_id : verifytoken.user.id})
           console.log(vuser);
           uid = vuser;
          //  next();
      }


       

       const object = new Obj({
        Ref : reference,
        imgname: req.file.originalname,
        time: Date.now(),
        place: place,
        Fouderid : uid._id,
        Contact: contact,
        status: false, 
        founderName : uid.name
    })

    try {
        const savedUser = await object.save();
        
        console.log("object created successfully");
        console.log(savedUser);
        if(savedUser){
          // res.status(201).send({msg: "uploaded succesfully"})
          res.status(200).json({ url : "http://localhost:1000/" + req.file.originalname});
        }
 
    } catch (error) {
      console.log("");      
        console.error("Error saving user:", error);
        // res.status(500).json({ url: "http://localhost:1000/image/" + req.file.originalname });
        res.status(500).send({ msg: "Internal Server Error" });
    }
})

app.listen(1000, () => {
  console.log("Server is running")
})
