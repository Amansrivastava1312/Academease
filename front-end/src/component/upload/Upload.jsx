import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./Upload.css";
const Upload = () => {
  const [title, setTitle] = useState();
  const [file, setFile] = useState();
  const [allImage, setAllImage] = useState(null);
  useEffect(() => {
    getPdf();
  }, []);
  const getPdf = async () => {
    const result = await axios.get("http://localhost:8000/get-files");
    console.log(result.data.data);
    setAllImage(result.data.data);
  };
  const showPdf = (pdf) => {
    window.open(`http://localhost:8000/files/${pdf}`, "_blank", "noreferrer");
    // setPdfFile(`http://localhost:8080/files/${pdf}`);
  };
  const submitImage = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("file", file);

    console.log(title, file);
    const result = await axios.post(
      "http://localhost:8000/upload-files",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    console.log(result);
    if (result.data.status == "ok") {
      alert("uploaded Succesfully!!!");
      getPdf();
    }
  };
  return (
    <div className="App">
      <form action="" className="formStyle" onSubmit={submitImage}>
        <h4>Upload Pdf</h4>
        <br />
        <input
          type="text"
          className="form-control"
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <br />
        <input
          type="file"
          className="form-control"
          accept="application/pdf"
          onChange={(e) => setFile(e.target.files[0])}
          required
        />
        <br />
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      <div className="uploaded">
        <h4>Uploaded PDF:</h4>
        <div className="output-div">
          {allImage == null
            ? ""
            : allImage.map((data) => {
                return (
                  <div className="inner-div">
                    <h6>Title: {data.title}</h6>
                    <button
                      className="btn btn-primary"
                      onClick={() => showPdf(data.pdf)}
                    >
                      Show Pdf
                    </button>
                  </div>
                );
              })}
        </div>
      </div>
    </div>
  );
};

export default Upload;