import React from "react";
import Footer from "../Footer/Footer";
import Header from "./Header";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { NavLink, Link } from "react-router-dom";
import { FaUpload } from "react-icons/fa";
import { IoMdCall } from "react-icons/io";
const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div style={{ width: "100%", height: "90vh" }}>
        <img
          src="./../../../public/images/bg.webp"
          alt=""
          style={{
            width: "100%",
            height: "90%",
            position: "absolute",
            zIndex: "0",
          }}
        />
        <div
          style={{
            position: "relative",
            paddingLeft: "10vh",
            paddingTop: "25vh",
            display: "flex",
            flexDirection: "column",
            // lineHeight: "100%",
            gap: "15px",
          }}
        >
          <h5 style={{ color: "white", fontWeight: "bolder" }}>
            {" "}
            WELCOME TO ACADEMEASE
          </h5>
          <h1
            style={{
              color: "whitesmoke",
              fontFamily: "sans-serif",
              fontWeight: "bold",
            }}
          >
            Empowering Students with <br /> Shared Knowledge.
          </h1>
          <p>
            Study smarter, share notes: A comprehensive platform for sharing and{" "}
            <br />
            accessing study materials.
          </p>

          <div className="button231" style={{ display: "flex", gap: "20px" }}>
            <NavLink to={"/upload"}>
              <button
                style={{
                  padding: "7px 5vh",

                  border: "none",
                  background: "#0ec7bb",
                  color: "white",
                }}
              >
                Upload Notes <FaUpload style={{ marginLeft: "10px" }} />
              </button>
            </NavLink>
            <NavLink to={"/contact"}>
              <button
                style={{
                  padding: "7px 5vh",

                  border: "none",
                  // background: "#0ec7bb",
                  color: "black",
                }}
              >
                Contact Us <IoMdCall style={{ marginLeft: "10px" }} />
              </button>
            </NavLink>
          </div>
        </div>
        {/* <Link to="/upload" style={{ textDecoration: "none" }}>
          <button
            style={{
              position: "relative",
              marginLeft: "30vh",
              marginTop: "5px",
              padding: "20px",
              borderRadius: "20px",
              backgroundColor: "transparent",
              color: "#000", // Text color
              border: "2px solid #007BFF", // Border color
              transition: "background-color 0.3s", // Transition for smooth effect
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#20c997")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "transparent")}
          >
            Upload Here
          </button>
        </Link> */}
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
