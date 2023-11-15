const User = require("../model/user");
const { setUser } = require("../services/auth");
const { hashPassword, comparePassword } = require("../helper/Helper");
const createUser = async (req, res) => {
  const { name, email, roll, password } = req.body;
  if (!name) {
    return res.send({ error: "Name is Required" });
  }
  if (!email) {
    return res.send({ message: "Email is Required" });
  }
  if (!password) {
    return res.send({ message: "Password is Required" });
  }
  if (!roll) {
    return res.send({ message: "Roll Number no is Required" });
  }

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res.status(400).send({
      success: false,
      message: "User Already Exist",
    });
  }

  const hashedPassword = await hashPassword(password);
  const user = await User.create({
    name,
    email,
    roll,
    password: hashedPassword,
  });
  return res.status(200).send({
    success: true,
    message: "User Successfully Created",
    user,
  });
};

const handleUserLogin = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      success: "false",
      error: "Provide email and password",
    });
  }

  let user = await User.find({ email });
  user = user[0];
  if (!user) {
    return res.status(400).json({
      success: "false",
      error: "Incorrect email and password",
    });
  }
  const match = await comparePassword(password, user.password);
  if (!match) {
    return res.status(200).send({
      success: false,
      message: "Invalid Password",
    });
  }

  const token = setUser(user);
  res.cookie("uid", token);

  return res.status(200).send({
    success: true,
    message: "User Successfully login",
    user,
    token,
  });
};

const notesprovider = (req, res) => {
  return res.status(200).json({
    message: "notes are there",
  });
};

module.exports = { createUser, handleUserLogin, notesprovider };
