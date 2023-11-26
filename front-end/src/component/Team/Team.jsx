import React from "react";
import { FaRocket, FaInstagram, FaGithub } from "react-icons/fa";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import { CiHeart } from "react-icons/ci";

import "./Team.css";

const Team = () => {
  return (
    <div className="team-container">
      <section id="team">
        <h1 className="heading">
          <FaRocket />
          <strong>Our Team</strong>
        </h1>
        <div className="container-t">
          <div className="box-t">
            <div className="top-bar-t" />
            <div className="nav-t">
              <i>
                <IoIosCheckmarkCircle />
              </i>
              <input type="checkbox" className="heart-btn" id="heart-btn" />
              <i>
                <CiHeart />
              </i>
            </div>
            <div className="details">
              <img src="/images/Aman.jpeg" alt />
              <strong>Srivastava Aman</strong>
              <p>Full Stack</p>
            </div>
            <div className="btn">
              <a href="#">
                <i>
                  <FaFacebookF />
                </i>
              </a>
              <a href="#">
                <i>
                  <FaGithub />
                </i>
              </a>
              <a href="#">
                <i>
                  <FaInstagram />
                </i>
              </a>
              <a href="#">
                <i>
                  <SiLeetcode />
                </i>
              </a>
            </div>
          </div>
          <div className="box-t">
            <div className="top-bar-t" />
            <div className="nav-t">
              <IoIosCheckmarkCircle />

              <input type="checkbox" className="heart-btn" id="heart-btn" />
              <CiHeart />
            </div>
            <div className="details">
              <img
                src="/images/yash.jpg"
                alt
              />
              <strong>Yash Singhal</strong>
              <p>Full Stack</p>
            </div>
            <div className="btn">
              <a href="https://www.facebook.com/yash.singhal.735944">
                <i>
                  <FaFacebookF />
                </i>
              </a>
              <a href="https://github.com/yash5734">
                <i>
                  <FaGithub />
                </i>
              </a>
              <a href="https://www.instagram.com/_this_is_yash/">
                <i>
                  <FaInstagram />
                </i>
              </a>
              <a href="https://leetcode.com/yash5734/">
                <i>
                  <SiLeetcode />
                </i>
              </a>
            </div>
          </div>
          <div className="box-t">
            <div className="top-bar-t" />
            <div className="nav-t">
              <IoIosCheckmarkCircle />

              <input type="checkbox" className="heart-btn" id="heart-btn" />
              <CiHeart />
            </div>
            <div className="details">
              <img
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D"
                alt
              />
              <strong>Vipul Varshney</strong>
              <p>FrontEnd & Design</p>
            </div>
            <div className="btn">
              <a href="#">
                <i>
                  <FaFacebookF />
                </i>
              </a>
              <a href="#">
                <i>
                  <FaGithub />
                </i>
              </a>
              <a href="#">
                <i>
                  <FaInstagram />
                </i>
              </a>
              <a href="#">
                <i>
                  <SiLeetcode />
                </i>
              </a>
            </div>
          </div>
          <div className="box-t">
            <div className="top-bar-t" />
            <div className="nav-t">
              <i>
                <IoIosCheckmarkCircle />
              </i>
              <input type="checkbox" className="heart-btn" id="heart-btn" />
              <i>
                <CiHeart />
              </i>
            </div>
            <div className="details">
              <img
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D"
                alt
              />
              <strong>Vidya Sagar Singh</strong>
              <p>FrontEnd & Design</p>
            </div>
            <div className="btn">
              <a href="#">
                <i>
                  <FaFacebookF />
                </i>
              </a>
              <a href="#">
                <i>
                  <FaGithub />
                </i>
              </a>
              <a href="#">
                <i>
                  <FaInstagram />
                </i>
              </a>
              <a href="#">
                <i>
                  <SiLeetcode />
                </i>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
