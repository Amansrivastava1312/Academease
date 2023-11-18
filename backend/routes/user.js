const express = require("express");
const { createUser, handleUserLogin } = require("../controller/user");
const router = express.Router();
const restrictToLoggedinUserOnly = require("../middlewares/protectedRoute");

router.post("/signup", createUser);
router.post("/login", handleUserLogin);
router.post("/user-auth", restrictToLoggedinUserOnly, (req, res) => {
  res.status(200).send({ ok: true });
});

module.exports = router;
