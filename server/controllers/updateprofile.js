import Users from "../models/user.js"
const updateprofile = async (req, res) => {
    console.log("updateprofile");
      console.log(req.body);
      const { name, email, rollno, year, stream, password } = req.body;
       const updateuser = await Users.findByIdAndUpdate(req.user.id, {name: name, email: email, rollno: rollno, stream: stream, year: year, password: password}, {new:true});
       console.log(updateuser);
    res.status(210).send("updates profile")
}

export default updateprofile