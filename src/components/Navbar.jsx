import React, { useState } from "react";
import { useSelector } from "react-redux";

import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { Cursor, useTypewriter } from "react-simple-typewriter";

const Navbar = () => {
  const { addToCart } = useSelector((state) => state.addToCartReducer);
  // console.log("navbar addTocart",addToCart);
  const navigate = useNavigate();

  const [text] = useTypewriter({
    words: ["Grocery Store"],
    loop: {}
  })


  return (
    <>
      <nav style={{ marginTop: "-50px" }} className="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm sticky-top w-100">
        <div className="container">
          <NavLink className="navbar-brand fw-bold w-50 fs-4" to="/">
            RR {text}
            <span className="text-danger"><Cursor /></span>
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
            <ul className="navbar-nav  mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <div onClick={() => {
                  navigate("/products", { state: { page: true } })
                }} style={{ fontSize: "18px",cursor:"pointer"}} className="nav-link">
                  Product
                </div>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  Contact
                </NavLink>
              </li>
            </ul>
            <div className="row">
              <div className="d-flex">

                <button
                  className="btn btn-outline-dark ms-2"
                  onClick={() => navigate("/admin")}
                >
                  <i className="fa fa-user-plus me-1"></i>
                  Admin
                </button>
                <button
                  className="btn btn-outline-dark ms-2"
                  onClick={() => navigate("/cartpage")}
                >
                  <i className="fa fa-shopping-cart me-1"></i>
                  Cart({addToCart.length})
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
