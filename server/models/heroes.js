import mongoose, { Schema } from "mongoose";

const useSchema = new Schema({
    name: String,
    id : Number,
    email: {type: String, min:4},
    message: {type: String},
})

const Dummy = mongoose.model('Test', useSchema)
export default Dummy;