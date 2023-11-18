import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import {
  Card,
  Button,
  CardBody,
  CardFooter,
  CardHeader,
  CardText,
  CardTitle,
} from "reactstrap";
import { FaUserGraduate } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";
import "./Upload.css";
import Footer from "../Footer/Footer";
import Layout from "../Layout/Layout";
const Upload = () => {
  const [title, setTitle] = useState();
  const [author, setAuthor] = useState();
  const [file, setFile] = useState();
  const [allImage, setAllImage] = useState();
  useEffect(() => {
    getPdf();
  }, []);
  const getPdf = async () => {
    const result = await axios.get("http://localhost:8000/get-files");
    console.log(result.data.data);
    setAllImage(result.data.data);
  };
  const showPdf = (pdf) => {
    window.open(`http://localhost:8000/file/${pdf}`, "_blank", "noreferrer");
    // setPdfFile(`http://localhost:8080/files/${pdf}`);
  };
  const submitImage = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("author", author);
    formData.append("file", file);

    console.log(title, file);
    const result = await axios.post(
      "http://localhost:8000/upload-files",
      formData,
      formData,
      {
        headers: { "Content-Type": "multipart/form-data" },
      }
    );
    console.log(result);
    if (result.data.status == "ok") {
      alert("uploaded Succesfully!!!");
      getPdf();
    }
  };
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => setIsHovering(false);

  const buttonStyle = {
    backgroundColor: isHovering ? "#1eb2a6" : "transparent",
    color: "black",
    padding: "4px 50px",
    border: "2px solid #1eb2a6",
    cursor: "pointer",
  };
  return (
    <Layout>
      <div className="App" style={{ background: "#eeeeee", padding: "0px" }}>
        <div className="upload-top" style={{ width: "100%", padding: "0px" }}>
          <div className="image-section">
            <img style={{ width: "50%" }} src="/images/upload.png" alt="" />
            <h3>Upload Your Notes in PDF Format only..</h3>
          </div>
          <form action="" className="formStyle" onSubmit={submitImage}>
            <h4>Upload Pdf</h4>

            <input
              type="text"
              className="form-control"
              placeholder="Enter Notes Subject"
              onChange={(e) => setTitle(e.target.value)}
              required
            />
            <br />
            <input
              type="text"
              className="form-control"
              placeholder="Enter Your Name"
              onChange={(e) => setAuthor(e.target.value)}
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
            <button
              type="submit"
              style={{
                padding: "7px 25px",
                background: "skyblue",
              }}
            >
              Submit
            </button>
          </form>
        </div>
        <div
          className="uploaded"
          style={{ background: "#eeeeee", marginTop: "30px" }}
        >
          <h1>Check Out Notes of Other Student</h1>
          <div className="output-div">
            {allImage == null
              ? ""
              : allImage.map((data) => {
                  return (
                    <div className="inner-div">
                      <Card
                        className="my-2"
                        style={{
                          border: "1px solid black",
                          width: "16rem",
                          height: "15rem",
                        }}
                      >
                        <CardHeader
                          style={{
                            height: "30%",
                            border: "transparent",
                            background: "white",
                          }}
                        >
                          <h4>{data.title}</h4>
                        </CardHeader>
                        <CardBody style={{ height: "60%" }}>
                          <CardTitle tag="h5">{FaUserGraduate}</CardTitle>
                          <CardText
                            style={{ color: "black", fontWeight: "bold" }}
                          >
                            Notes By :-{data.author}
                          </CardText>
                          <Button
                            style={{
                              height: "50%",
                              padding: "px 5px",
                              marginTop: "12px",
                              backgroundColor: "#1eb2a6",
                            }}
                            className="btn btn-primary"
                            onClick={() => showPdf(data.pdf)}
                          >
                            View Notes
                          </Button>
                        </CardBody>
                        <CardFooter
                          style={{
                            height: "10%",
                            padding: "10px 0px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          Study With Academease
                        </CardFooter>
                      </Card>
                    </div>
                  );
                })}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Upload;
