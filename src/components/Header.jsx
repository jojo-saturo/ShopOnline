import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="container-fluid ">
      <div className="row">
        <div className="col-12 bg-primary d-flex justify-content-between px-5">
          <ul className="d-flex gap-5 aling-items-center m-0 p-0 py-3">
            <NavLink
              to="/"
              className="list-unstyled text-light p-0 pointer text-decoration-none"
            >
              HOME
            </NavLink>
            <li className="list-unstyled text-light p-0 pointer">ABOUT</li>
            <li className="list-unstyled text-light p-0 pointer">CONTACT</li>
          </ul>
          <ul className="m-0 p-0 py-3">
            <NavLink
              to="/cart"
              className="list-unstyled text-light p-0 pointer"
            >
              <i className="fa-solid fa-cart-shopping fs-3"></i>
            </NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
