import React from "react";
import { NavLink, Link } from "react-router-dom";
import { useAuth } from "../context/Auth";
import { toast } from "react-toastify";
import "./Head.css";
const Header = () => {
  const [auth, setAuth] = useAuth();

  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
    toast.success("Logout Successfully");
  };
  return (
    <div
      className="mb-4"
      style={{
        position: "fixed",
        top: "0",
        zIndex: "999",
        marginTop: "10px",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <nav
        className=" navbar navbar-expand-lg"
        style={{
          width: "95%",
          borderRadius: "10px",
          // background: "white",
          // backdropFilter: blur(1000px),
        }}
      >
        <div className="container-fluid" style={{ background: "" }}>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <Link to={"/"} className="navbar-brand" href="#">
              {" "}
              📓Academease
            </Link>
            <ul className="navbar-nav ms-auto gap-4 mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  to={"/"}
                  style={{ fontFamily: "monospace" }}
                  className="nav-link "
                  aria-current="page"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to={"/resourse"}
                  style={{ fontFamily: "monospace" }}
                  className="nav-link "
                >
                  Resources
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to={"/about"}
                  style={{ fontFamily: "monospace" }}
                  className="nav-link "
                  aria-current="page"
                >
                  About
                </NavLink>
              </li>
              {!auth.user ? (
                <>
                  <li className="nav-item">
                    <NavLink
                      to={"/register"}
                      style={{ fontFamily: "monospace" }}
                      className="nav-link "
                      aria-current="page"
                    >
                      Register
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      style={{ fontFamily: "monospace" }}
                      to={"/login"}
                      className="nav-link "
                      aria-current="page"
                    >
                      Login
                    </NavLink>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <NavLink
                      onClick={handleLogout}
                      to={"/login"}
                      style={{ fontFamily: "monospace" }}
                      className="nav-link "
                      aria-current="page"
                    >
                      Logout
                    </NavLink>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
