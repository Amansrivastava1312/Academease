import React from "react";
import Footer from "../Footer/Footer";
import Header from "./Header";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { NavLink, Link } from "react-router-dom";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div style={{ width: "100%", height: "100vh" }}>
        <img
          src="./../../../public/images/bg.webp"
          alt=""
          style={{
            width: "100%",
            height: "80%",
            position: "absolute",
            zIndex: "0",
          }}
        />
        <h1
          style={{
            position: "relative",
            paddingLeft: "30vh",
            paddingTop: "40vh",
          }}
        >
          Help,Your Friends <br /> by providing notes.{" "}
        </h1>
        <NavLink to={"./upload"}>
          <button
            style={{
              
              position: "relative",
              marginLeft: "30vh",
              marginTop :"5px",
              // paddingTop:"50vh"
              padding: "20px",
              borderRadius: "20px",
            }}
          >
            Upload Here
          </button>
        </NavLink>
      </div>

      <main style={{ minHeight: "80vh" }}>
        <ToastContainer />
        {children}
      </main>

      <Footer style={{ width: "100%" }} />
    </>
  );
};

export default Layout;
