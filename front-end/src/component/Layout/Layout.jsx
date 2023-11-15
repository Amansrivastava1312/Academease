import React from "react";
import Footer from "../Footer/Footer";
import Header from "./Header";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div style={{ width: "100%" }}>
        <img
          src="./../../../public/images/bg.webp"
          alt=""
          style={{ width: "100%" }}
        />
      </div>

      <main style={{ minHeight: "80vh" }}>
        <ToastContainer />
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
