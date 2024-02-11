import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { Dropdown } from "react-bootstrap";

const Navbar = () => {
  const state = useSelector((state) => state.handleCart);
  const location = useLocation();

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark py-3 sticky-top">
      <div className="container">
        <NavLink className="navbar-brand fw-bold fs-4 px-2 text-light" to="/">
          Assignment 1
        </NavLink>
        <button
          className="navbar-toggler mx-2"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav m-auto my-2 text-center">
            <li className="nav-item">
              <NavLink
                className={`nav-link text-light ${
                  location.pathname === "/" && "active"
                }`}
                to="/"
                style={{
                  borderBottom: location.pathname === "/" && "4px solid white",
                }}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={`nav-link text-light ${
                  location.pathname === "/about" && "active"
                }`}
                to="/about"
                style={{
                  borderBottom:
                    location.pathname === "/about" && "4px solid white",
                }}
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={`nav-link text-light ${
                  location.pathname === "/contact" && "active"
                }`}
                to="/contact"
                style={{
                  borderBottom:
                    location.pathname === "/contact" && "4px solid white",
                }}
              >
                Contact
              </NavLink>
            </li>
          </ul>
          <div className="buttons text-center">
            <Dropdown>
              <Dropdown.Toggle variant="outline-light" id="dropdown-basic">
                <i className="fa fa-user mr-1"></i>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item>
                  <NavLink
                    to="/login"
                    className="text-dark text-decoration-none"
                  >
                    Login
                  </NavLink>
                </Dropdown.Item>
                <Dropdown.Item>
                  <NavLink
                    to="/register"
                    className="text-dark text-decoration-none"
                  >
                    Register
                  </NavLink>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <NavLink to="/cart" className="btn btn-outline-light m-2">
            <i className="fa fa-shopping-cart mr-1"></i> Cart ({state.length})
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
