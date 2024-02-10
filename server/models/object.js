import mongoose , {Schema} from 'mongoose'
import Users from './user.js';
import User from './user.js';

const object = new Schema({
    Ref : {type: String},
    imgname: {type: String},
    time: {type : Date , default: Date.now},
    place: {type: String},
    Fouderid : {type: mongoose.Schema.Types.ObjectId, ref:  "User"},
    Contact: {type: String},
    status: {type:Boolean},
    claimedBy : [{type : mongoose.Schema.Types.ObjectId, ref: "User"}]
    // founderName : {type: String},
})

// object.pre('save', function (next) {
//     const claimedBySet = new Set(this.claimedBy.map(id => id.toString())); 
//     this.claimedBy = Array.from(claimedBySet);
//     next();
// });

const Obj = mongoose.model('Obj', object )

export default  Obj;