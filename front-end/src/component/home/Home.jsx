import React from "react";
import Layout from "../Layout/Layout";
import { useAuth } from "../context/Auth";
import Faq from "./../faq/Faq";
import Popular from "../PlayList/Popular";
import "./Home.css";
import { NavLink } from "react-router-dom";
const Home = () => {
  const [auth, setAuth] = useAuth();
  return (
    <Layout>
      <h1>Home Page</h1>
      <Popular />
      <Faq />

      <div
        style={{
          height: "40vh",
          width: "100%",
        }}
      >
        <img
          src="./../../../public/images/uploadHome.jpg"
          alt=""
          style={{ width: "100%", height: "40%", position: "absolute" }}
        />

        <div
          style={{
            position: "relative",
            padding: "10%",
            marginLeft: "15%",
          }}
        >
          {" "}
          <NavLink to={"/upload"} className={"button"}>
            {" "}
            Click here and Upload Your Notes Now{" "}
          </NavLink>
          <NavLink
            to={"/upload"}
            className={"button"}
            style={{ width: "40%", marginTop: "3%", marginLeft: "20%" }}
          >
            {" "}
            Access Study Material
          </NavLink>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
