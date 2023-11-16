import React from "react";
import { useRef, useState } from "react";
import { faq } from "./faqData";
import { AiFillCaretDown } from "react-icons/ai";
import "./Faq.css";
const Faq = () => {
  const [click, setClick] = useState(false);

  const toggle = (index) => {
    if (click === index) {
      return setClick(null);
    }
    setClick(index);
  };
  return (
    <section
      className="faq"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "10px",
        backgroundColor: "#ebfaf5",
        padding: "50px",
      }}
    >
      <h2>Frequently Asked Q's</h2>
      <div className="container" style={{ backgroundColor: "#ebfaf5" }}>
        {faq.map((val, index) => (
          <div className="box">
            <button
              className="accordion"
              onClick={() => toggle(index)}
              key={index}
            >
              <h6>{val.title}</h6>
              <span>
                {click === index ? (
                  <p>
                    <AiFillCaretDown />
                  </p>
                ) : (
                  <p>
                    <AiFillCaretDown />
                  </p>
                )}
              </span>
            </button>
            {click === index ? (
              <div className="text">
                <p>{val.desc}</p>
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Faq;
