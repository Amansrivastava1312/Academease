import React, { useState } from "react";
import data from "./ResourceData.json";
import "./Resource.css";
import Header from "./../Layout/Header";
import Footer from "../Footer/Footer";
const Resource = () => {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <>
      <Header />
      <div className="templateContainer">
        <div
          className="searchInput_Container"
          style={{
            background: "#ebf3f5",
            padding: "100px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <input
            style={{ borderRadius: "10px" }}
            id="searchInput"
            type="search"
            placeholder="Search here..."
            onChange={(event) => {
              setSearchTerm(event.target.value);
            }}
          />
          <div className="button" style={{ marginTop: "50px" }}>
            <button
              style={{
                textDecoration: "none",
                border: "none",
                color: "blue",
                background: "#bbedd8",
                padding: "5px 20px",
                // color: "#0e5c3a",
                borderRadius: "10px",
              }}
              onClick={() => {
                setSearchTerm("first");
              }}
            >
              First Year{" "}
            </button>
            <button
              onClick={() => {
                setSearchTerm("second");
              }}
              style={{
                textDecoration: "none",
                border: "none",
                color: "blue",
                background: "#bbedd8",
                padding: "5px 20px",
                // color: "#0e5c3a",
                borderRadius: "10px",
              }}
            >
              Second Year{" "}
            </button>
            <button
              onClick={() => {
                setSearchTerm("third");
              }}
              style={{
                textDecoration: "none",
                border: "none",
                color: "blue",
                background: "#bbedd8",
                padding: "5px 20px",
                // color: "#0e5c3a",
                borderRadius: "10px",
              }}
            >
              Third Year{" "}
            </button>
            <button
              onClick={() => {
                setSearchTerm("fourth");
              }}
              style={{
                textDecoration: "none",
                border: "none",
                color: "blue",
                background: "#bbedd8",
                padding: "5px 20px",
                // color: "#0e5c3a",
                borderRadius: "10px",
              }}
            >
              Fourth Year{" "}
            </button>
          </div>
        </div>

        <div
          className="template_Container"
          style={{
            display: "flex",
            flexWrap: "wrap",
            background: "white",
            marginTop: "20px",
          }}
        >
          {data
            .filter((val) => {
              if (searchTerm == "") {
                return val;
              } else if (
                val.title.toLowerCase().includes(searchTerm.toLowerCase())
              ) {
                // <h1>Aman</h1>;
                return val;
              }
              if (val.year.toLowerCase().includes(searchTerm.toLowerCase())) {
                // <h1>Aman</h1>;
                return val;
              }
            })
            .map((val) => {
              return (
                <div
                  className="template"
                  key={val.id}
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "space-between",
                    width: "350px",
                    height: "200px",
                    borderRadius: "10px",
                    // border: "1px solid black",
                    padding: "0px",
                    background: "#e4eef2",
                  }}
                >
                  <div
                    style={{
                      width: "40%",
                      height: "100%",
                      paddingLeft: "",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginLeft: "10px",
                      //   borderRight: "1px solid ",
                    }}
                  >
                    <iframe
                      src={val.image}
                      allow="autoplay"
                      title="pdf"
                      style={{
                        width: "100%",
                        height: "90%",
                        // padding: "100px",

                        //   borderRight: "1px solid ",
                      }}
                      alt=""
                    />
                  </div>
                  <div
                    className="details"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "50%",
                      gap: "20%",
                      //   marginLeft: "10px",
                    }}
                  >
                    <h3>{val.title}</h3>
                    <a
                      href={val.link}
                      target="_blank"
                      view
                      style={{
                        background: "#bbedd8",
                        padding: "5px 10px",
                        color: "#0e5c3a",
                        borderRadius: "10px",
                      }}
                    >
                      View Material
                    </a>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Resource;
