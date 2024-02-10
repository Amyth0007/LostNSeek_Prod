import Jwt from "jsonwebtoken";
import Users from "../models/dummyuser.js";

const getuses = async (req, res) => {
    console.log(req.body);
    console.log("hitted this api");
    const { name, email, message } = req.body;

    if (!name || !email) {
        return res.status(401).send({ msg: "rquires fields are missing" })
    } else {
        const check = await Users.findOne({ email: email })
        if (check) {
            res.status(408).send({ msg: "user exist" })
        }
        const user = new Users({
            name: name,
            email: email,
            message: message
        })

        try {
            const savedUser = await user.save();
            console.log("User created successfully");
            console.log(user);
            res.status(200).send({msg:"user created succesfully"})

        } catch (error) {

            console.error("Error saving user:", error);
            res.status(500).send({ msg: "Internal Server Error" });
        }
    }


}


export default getuses