import React, { useState } from "react";
import "../css/Common.css";
import { NavLink, Link } from "react-router-dom";
import logo from "../images/logo.png";
import click from "../images/click.png"
// import { FaCaretDown } from "react-icons/fa";
// import { FaCaretUp } from "react-icons/fa";

const Header = () => {
  // const [menu, setMenu] = useState(false);
  function showNavbar() {
    let navbar = document.querySelector(".header_wrapper");
    let navList = document.querySelector(".nav_list");
    navList.classList.toggle("v-class");
    navbar.classList.toggle("h-nav");
  }

  
  return (
    <>
      <div className="header_wrapper h-nav">
        <nav>
          <div className="logo_wrapper ">
            {/* <p>FinoSol</p> */}
            <Link to="/">
              <img src={logo} alt="" />
              <p className="ml5">
              Surya Loan
                </p>
            </Link>
          </div>
          <ul className="nav_list v-class">
            <li>
              <NavLink to="home">
                Home</NavLink>
            </li>
            <li>
              <NavLink to="about">About</NavLink>
            </li>
            <li>
              <NavLink to="services">Services</NavLink>
            </li>
            <li>
              <NavLink to="contact">Contact</NavLink>
            </li>
            {/* <li>
              <button
                className="location_button"
                onClick={(e) => {
                  setMenu((prev) => !prev);
                }}
              >
                Locations
                {menu ? (
                  <FaCaretUp className="caret_icon" />
                ) : (
                  <FaCaretDown className="caret_icon" />
                )}
              </button>
              {menu ? (
                <>
                  <ul className={menu ? "submenu" : "none"}>
                    <li>
                      <Link to="delhi">New Delhi</Link>
                    </li>
                    <li>
                      <Link to="ahmedabad">Ahmedabad</Link>
                    </li>
                    <li>
                      <Link to="mumbai">Mumbai</Link>
                    </li>
                    <li>
                      <Link to="hyderabad">Hyderabad</Link>
                    </li>
                    <li>
                      <Link to="banglore">Banglore</Link>
                    </li>
                  </ul>
                </>
              ) : (
                ""
              )}
            </li> */}
            <li>
              <NavLink to="apply-now" onClick={showNavbar} className="apply_now_button_link">
                Apply Now
              <img height={50} width={50} src={click} alt="" />
              </NavLink>
            </li>
            <li>
              <NavLink to="repayloan" onClick={showNavbar} className="apply_now_button_link repay_loan_button">
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
    </>
  );
};

export default Header;
