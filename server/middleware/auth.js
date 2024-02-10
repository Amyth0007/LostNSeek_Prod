import Jwt from 'jsonwebtoken'
import Users from '../models/user.js';
const auth = async (req, res, next)=>{
    console.log("meiddleware");
    console.log(req.body);
    console.log(req.headers);
    const {authorization} = req.headers;
    console.log(authorization);
    const token = JSON.parse(authorization);
    console.log(token);
       const jwtsecret = "asdfghjk";
       if (typeof(token) === 'string') {
        console.log('Variable is a string');
        const verifytoken =  Jwt.verify(token, jwtsecret);
        const vuser = await Users.findOne({_id : verifytoken.user.id})
        console.log(vuser);
        req.user = vuser;
        next();
      } else if (typeof(token) === 'object') {
        console.log('Variable is an object');
           const verifytoken =  Jwt.verify(token.token.toString(), jwtsecret);
           const vuser = await Users.findOne({_id : verifytoken.user.id})
           console.log(vuser);
           req.user = vuser;
           next();
      } 
       console.log("problem here");
}

export default auth