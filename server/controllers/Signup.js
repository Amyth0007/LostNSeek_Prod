import Jwt from "jsonwebtoken";
import User from "../models/user.js";

const Signup = async (req, res) => {
    console.log(req.body);
    const { name, email, rollno, year, stream, password } = req.body;

    if (!name || !email || !rollno || !password) {
        return res.status(401).send({ msg: "rquires fields are missing" })
    } else {
        const check = await User.findOne({ email: email })
        if (check) {
            res.status(408).send({ msg: "user exist" })
        }
        const user = new User({
            name: name,
            email: email,
            rollno: rollno,
            password: password,
            stream: stream,
            year: year
        })

        try {
            const savedUser = await user.save();
            console.log("User created successfully");
            console.log(user);
            const payload = {
                user: {
                    id: user._id
                }
            }
            Jwt.sign(
                payload,
                "asdfghjk",
                { expiresIn: '30 days' },
                (err, token) => {
                    if (err) {
                        console.error(err);
                    } else {
                        console.log(token);
                        res.status(201).send({ token })
                    }
                }
            )
        } catch (error) {

            console.error("Error saving user:", error);
            res.status(500).send({ msg: "Internal Server Error" });
        }





    }


}


export default Signup