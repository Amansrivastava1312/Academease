import React, { useState } from "react";
import Layout from "../Layout/Layout";
import { toast } from "react-toastify";
import axios from "axios";
import { FaLock, FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Header from "../Layout/Header";
import { MdEmail } from "react-icons/md";
import { AiOutlineNumber } from "react-icons/ai";
import { RiLockPasswordFill } from "react-icons/ri";
import "./Login.css";
import Footer from "../Footer/Footer";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [roll, setRoll] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`http://localhost:8000/signup`, {
        name,
        email,
        roll,
        password,
      });
      if (res.data.success) {
        toast.success(res.data.message);
        alert("User registered");
        navigate("/login");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <>
      <Header />
      <div className="body" style={{ paddingTop: "70px" }}>
        <div className="wrapper">
          <form onSubmit={handleSubmit}>
            <h1>Register</h1>
            <div className="input-box">
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="Enter Your Name"
                // className="form-control"
                // id="exampleInputEmail1"
                aria-describedby="emailHelp"
                required
              />
              <h6>
                <FaUser />
              </h6>
            </div>
            <div className="input-box">
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Enter Your Email"
                aria-describedby="emailHelp"
                // className="form-control"
                // id="exampleInputPassword1"
                required
              />
              <h6>
                <MdEmail />
              </h6>
            </div>
            <div className="input-box">
              <input
                value={roll}
                onChange={(e) => setRoll(e.target.value)}
                type="Number"
                placeholder="Enter Roll Number"
                // className="form-control"
                // id="exampleInputPassword1"
                required
              />
              <h6>
                <AiOutlineNumber />
              </h6>
            </div>
            <div className="input-box">
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Enter password"
                // className="form-control"
                // id="exampleInputPassword1"
                required
              />
              <h6>
                <RiLockPasswordFill />
              </h6>
            </div>

            <button type="submit" className="btn">
              Register
            </button>
            <div className="register-link">
              <p>
                have an account? <a href="/login">Login</a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
