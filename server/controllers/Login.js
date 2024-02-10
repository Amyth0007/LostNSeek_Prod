import User from "../models/user.js"
import Jwt from 'jsonwebtoken'

const Login = async (req, res) => {
    const { email, password } = req.body;
    console.log(req.body);
    

    if (!email || !password) {
        return res.status(401).send({ msg: "rquires fields are missing" })
    } else {
        const check = await User.findOne({ email: email })

        if (check.password === password) {

            try {
                console.log("User logged in successfully");
                console.log(check);
                const payload = {
                    user: {
                        id: check._id
                    }
                }
                Jwt.sign(
                    payload,
                    "asdfghjk",
                    { expiresIn: '7 days' },
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
        }else{
            res.status(300).send({msg:"password not corret"})
        }
    }

}

export default Login