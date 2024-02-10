import mongoose , {Schema} from 'mongoose'
const clg = new Schema({
    name : {type: String, unique: true},
    // users: [],
    admin : [{type: mongoose.Schema.Types.ObjectId, ref:  "User"}],
    
})