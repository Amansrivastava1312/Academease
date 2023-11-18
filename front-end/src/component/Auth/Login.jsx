import React, { useState } from "react";
import Layout from "../Layout/Layout";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/Auth";
import { toast } from "react-toastify";
import "./Login.css";
import { FaLock, FaUser } from "react-icons/fa";
import Header from "../Layout/Header";
import { RiLockPasswordFill } from "react-icons/ri";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [auth, setAuth] = useAuth();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`http://localhost:8000/login`, {
        email,
        password,
      });
      // console.log(res.data.token);
      if (res.data.success) {
        toast.success(res.data.message);
        alert(res.data.message);
        setAuth({
          ...auth,
          user: res.data.user,
          token: res.data.token,
        });
        localStorage.setItem("auth", JSON.stringify(res.data));
        navigate("/");
      } else {
        toast.error(res.data.message);
        alert(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error);
      alert(res.data.message);
    }
  };
  return (
    <div>
      <Header />
      <div className="body">
        <div className="wrapper">
          <form onSubmit={handleSubmit}>
            <h1>Login</h1>
            <div className="input-box">
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                // className="form-control"
                // id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter Your Email"
                required
              />
              <h6>
                <FaUser />
              </h6>
            </div>
            <div className="input-box">
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                // className="form-control"
                // id="exampleInputPassword1"
                placeholder="Enter Your Password"
                required
              />
              <h6>
                <RiLockPasswordFill />
              </h6>
            </div>

            <button type="submit" className="btn">
              Login
            </button>
            <div className="register-link">
              <p>
                Dont have an account? <a href="/register">Register</a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
