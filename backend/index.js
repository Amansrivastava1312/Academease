const express = require("express");
const mongoDBConnection = require("./connection/mongoDB");
const restrictToLoggedinUserOnly = require("./middlewares/protectedRoute");
const UserRouter = require("./routes/user");
const notes = require("./routes/notes");
const cookiePaser = require("cookie-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();

const PORT = 8000;

// common middleware
app.use("/files", express.static("files"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookiePaser());
app.use(cors());
mongoDBConnection();

app.use("/", UserRouter);
// app.use("/notes", restrictToLoggedinUserOnly, notes);

const mongoUrl = "mongodb://127.0.0.1:27017/miniProject";

//multer------------------------------------------------------------
const multer = require("multer");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./files");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now();
    cb(null, uniqueSuffix + file.originalname);
  },
});

require("./pdfDetails");
const PdfSchema = mongoose.model("upload");

const upload = multer({ storage: storage });
app.post("/upload-files", upload.single("file"), async (req, res) => {
  console.log(req.file);
  //   res.send("hii");
  const title = req.body.title;
  const author = req.body.author;
  const fileName = req.file.filename;

  try {
    await PdfSchema.create({ title: title, pdf: fileName, author: author });
    res.send({ status: "ok" });
  } catch (error) {
    res.json({ status: error });
  }
});

app.get("/get-files", async (req, res) => {
  try {
    PdfSchema.find({}).then((data) => {
      res.send({ status: "ok", data: data });
    });
  } catch (error) {}
});

//multer------------------------------------------------------------

app.get("/", async (req, res) => {
  res.send("Success!");
});
app.listen(PORT, () => console.log(`Server is running at PORT: ${PORT}`));
