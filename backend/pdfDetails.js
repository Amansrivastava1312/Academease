const mongoose = require("mongoose");

const PdfDetailsSchema = new mongoose.Schema(
  {
    pdf: String,
    title: String,
    author: String,
  },
  { collection: "upload" }
);

mongoose.model("upload", PdfDetailsSchema);
