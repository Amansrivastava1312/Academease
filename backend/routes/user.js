const express = require("express");
const {createUser,handleUserLogin} = require("../controller/user");
const router = express.Router();

router.post("/signup", createUser);
router.get('/login',handleUserLogin);

module.exports = router