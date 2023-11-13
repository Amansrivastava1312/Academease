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
    <section className="faq">
      <div className="container">
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
                  <i>{AiFillCaretDown}</i>
                ) : (
                  <i className="fa fa-chevron-right"></i>
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
