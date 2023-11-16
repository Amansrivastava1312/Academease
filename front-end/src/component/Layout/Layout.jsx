import React from "react";
import Footer from "../Footer/Footer";
import Header from "./Header";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div style={{ width: "100%", height: "140vh" }}>
        <img
          src="./../../../public/images/bg.webp"
          alt=""
          style={{ width: "100%", height: "60%" }}
        />
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
