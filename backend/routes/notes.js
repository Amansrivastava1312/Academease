const express = require("express");
const {createUser,handleUserLogin, notesprovider} = require("../controller/user");
const router = express.Router();

router.get("/", notesprovider);

module.exports = router