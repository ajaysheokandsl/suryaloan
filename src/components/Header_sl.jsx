import React from "react";
// import "../css/Common.css";
import "../css/Common_sl.css";
import { NavLink, Link } from "react-router-dom";
import logo from "../images/nav_logo.png";
export const Header_sl = () => {
    function  showNavbar () {
        let navbar = document.querySelector(".header_wrapper");
        let navList = document.querySelector(".nav_list");
        navList.classList.toggle("v-class");
        navbar.classList.toggle("h-nav");
      }
  return (
    <div className="header_wrapper">
        <nav>
          <div className="logo_wrapper ">
            {/* <p>FinoSol</p> */}
            <Link to="/">
              <img src={logo} alt="Surya Loan" />
            </Link>
          </div>
          <ul className="nav_list v-class">
            <li>
              <NavLink to="/">
                Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/services">Services</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
            <li>
              <NavLink to="/apply-now" onClick={showNavbar}
               className="apply_now_button_link">
                Apply Now
              </NavLink>
            </li>
            <li>
              <NavLink to="/repayloan" onClick={showNavbar} className="apply_now_button_link repay_loan_button">
                Repay Loan
              </NavLink>
            </li>
          </ul>
          <div className="burger" onClick={showNavbar}>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
        </nav>
      </div>
  )
}
