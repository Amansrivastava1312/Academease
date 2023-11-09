const User = require("../model/user")
const {setUser} = require("../services/auth");

const createUser = async (req, res) => {
    const { fullname, email, roll, password } = req.body;
    const user = await User.create({
        fullname,
        email,
        roll,
        password,
    })
    return res.status(200).json({
        success: true,
        user,
    })
}

const handleUserLogin = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({
            success: "false",
            error: "Provide email and password"
        })
    }

    let user = await User.find({ email });
    user = user[0];
    if (!user) {
        return res.status(400).json({
            success: "false",
            error: "Incorrect email and password"
        })
    }

    const token = setUser(user);
    res.cookie("uid", token);

    return res.status(200).json({
        success: true,
    })
}

const notesprovider = (req,res) => {
    return res.status(200).json({
        message:"notes are there",
    })
}

module.exports = { createUser, handleUserLogin,notesprovider };