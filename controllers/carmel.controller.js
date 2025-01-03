import User from "../models/carmel.model.js"
import bcrypt from 'bcryptjs'

export const CarmelIndex = (req, res) => {
    res.send("Gell all users")
}

export const CarmelRegister = async (req, res) => {
    const { name, email, password, batch, year, mobile, } = req.body;
    try {
        const oldUser = await User.findOne({ email: email })
        if (oldUser) {
            return res.status(400).json({ message: "User already exists" })
        }
        const newUser = new User({ name, email, password, batch, year, mobile });
        await newUser.save();
        return res.status(201).json({ message: "User created successfully" });
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }

}

export const CarmelLogin = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email: email })
        if (user && user.password === password) {
            res.status(201).json({ message: "LoggedIn Successfull" })
        } else {
            res.status(400).json({ message: "Incorrect email or password" })
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
}