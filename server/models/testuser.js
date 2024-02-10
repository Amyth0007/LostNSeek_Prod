import mongoose, { Schema } from "mongoose";

const testSchema = new Schema({
    name: String,
    email: {type: String, min:4, require: true, unique: true},
    rollno: {type: String, unique: true},
    year : {type: Number},
    stream: {type: String},
    password : {type: String, min: 4},
    hight : {type: Number, min: 2}
})

const Test = mongoose.model('Test', testSchema)
export default Test;