import React, { useContext } from "react";
import logo from "../../assets/freshcart-logo.svg";

import "../../styles/navbar.css";
import { Link, NavLink } from "react-router-dom";
import { StoreContext } from "../../Context/StoreContext";
function Navbar() {
  let { count } = useContext(StoreContext);

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-main-light fixed-top">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            <img src={logo} alt="logo" className="logo" />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  className="nav-link  cursor-pointer"
                  aria-current="page"
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link cursor-pointer" to="/products">
                  Products
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link cursor-pointer " to="/categories">
                  Categories
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link cursor-pointer" to="/brands">
                  Brands
                </NavLink>
              </li>
            </ul>

            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 mt-2">
              <Link
                to="/cart"
                type="button"
                className="btn  position-relative me-3"
              >
                Cart <i className="ri-shopping-cart-fill"></i>
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
                  {count}
                  <span className="visually-hidden">unread messages</span>
                </span>
              </Link>

              <li className="nav-item">
                <NavLink className="nav-link " to="/login">
                  Login
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link " to={"/register"}>
                  Register
                </NavLink>
              </li>

              {/* <li className="nav-item">
                  <a className="nav-link active cursor-pointer" aria-current="page" href="#">Logout</a>
                </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
