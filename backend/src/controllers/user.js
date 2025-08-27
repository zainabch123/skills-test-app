import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { loginUserdb } from "../domains/user.js";

const secret = process.env.JWT_SECRET;

const loginUser = async (req, res) => {
    const { email, password} = req.body;

    try {
        const currentUser = await loginUserdb(email);

        console.log("currentUser", currentUser);
        const validPassword = await bcrypt.compare(password, currentUser.password);

         if (!validPassword) {
           return res.status(401).json({ error: "Invalid Password" });
         }

         const token = jwt.sign({id: currentUser.id}, secret);

         return res.status(200).json({user: currentUser, token});
    } catch(error) {
        console.log("Error", error);
    }
}

export {loginUser};