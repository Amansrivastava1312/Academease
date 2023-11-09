const express = require("express");
const mongoDBConnection = require("./connection/mongoDB");
const restrictToLoggedinUserOnly = require("./middlewares/protectedRoute");
const UserRouter = require("./routes/user");
const notes = require("./routes/notes");
const cookiePaser = require("cookie-parser")

const app = express();

const PORT = 8000;

// common middleware
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cookiePaser());

mongoDBConnection();

app.use("/user", UserRouter);
app.use("/notes",restrictToLoggedinUserOnly, notes);

app.listen(PORT, () => console.log(`Server is running at PORT: ${PORT}`));