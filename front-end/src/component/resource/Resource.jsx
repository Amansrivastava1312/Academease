import React, { useState } from "react";
import data from "./ResourceData.json";
import "./Resource.css";
const Resource = () => {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <>
      <div className="templateContainer">
        <div className="searchInput_Container">
          <input
            style={{ borderRadius: "100px" }}
            id="searchInput"
            type="search"
            placeholder="Search here..."
            onChange={(event) => {
              setSearchTerm(event.target.value);
            }}
          />
        </div>
        <div
          className="template_Container"
          style={{
            display: "flex",
            flexWrap: "wrap",
            background: "#e8ecea",
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
                    border: "1px solid black",
                    padding: "0px",
                    // background: "gray",
                  }}
                >
                  <iframe
                    style={{
                      width: "60%",
                      paddingLeft: "",
                      //   borderRight: "1px solid ",
                    }}
                    src={val.image}
                    alt=""
                  />
                  <div
                    className="details"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "40%",
                      //   marginLeft: "10px",
                    }}
                  >
                    <h3>{val.title}</h3>
                    <a href={val.link} target="_blank" download>
                      Download
                    </a>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default Resource;
