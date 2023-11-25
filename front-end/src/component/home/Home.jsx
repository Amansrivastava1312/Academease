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
      <div className="mainbox">
        <div className="box1">
          <img
            src="https://scintillating-smakager-860376.netlify.app/images/about.webp"
            alt
          />
        </div>
        <div className="box2">
          <div className="innerbox" id="innerbox1">
            LEARN ANYTHING
          </div>
          <div className="innerbox" id="innerbox2">
            Benefits About Online Learning Expertise
          </div>
          <div className="innerbox" id="innerbox3">
            <div className="book">
              <img src="/public/Resource-Management.jpeg" alt />
            </div>
            <div className="text1">
              <h4>Online Courses</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
                praesentium ad cumque, expedita placeat adipisci.
              </p>
            </div>
          </div>
          <div className="innerbox" id="innerbox4">
            <div className="book">
              <img
                src=" https://img.icons8.com/dotty/80/000000/storytelling.png"
                alt
              />
            </div>
            <div className="text1">
              <h4>Online Courses</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
                praesentium ad cumque, expedita placeat adipisci.
              </p>
            </div>
          </div>
          <div className="innerbox" id="innerbox5">
            <div className="book">
              <img
                src=" https://img.icons8.com/dotty/80/000000/storytelling.png"
                alt
              />
            </div>
            <div className="text1">
              <h4>Online Courses</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
                praesentium ad cumque, expedita placeat adipisci.
              </p>
            </div>
          </div>
        </div>
      </div>
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
