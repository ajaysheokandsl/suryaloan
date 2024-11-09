import React, { useState } from "react";
import "../css/Common.css";
import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";
import { address, email, phone } from "../constants";
import logo from "../images/nav_logo.png";

const Footer = () => {
  const [dropdown1, setDropdown1] = useState(false);
  const [dropdown2, setDropdown2] = useState(false);
  const [dropdown3, setDropdown3] = useState(false);
  return (
    <>
      <div className="footer_wrapper full-width">
        <div className="footer_row">
        <div className="footer_tab">
            <img src={logo}/>
          </div>
          <div className="footer_tab">
            <h2 className="tab_title">Quick Links</h2>
            <li>
              <Link to="/home">
                <FaChevronRight className="footer_icon" />
                Home
              </Link>
            </li>
            <li>
              <Link to="/apply-now">
                <FaChevronRight className="footer_icon" />
                Apply for Loan
              </Link>
            </li>
            <li>
              <Link to="/contact">
                <FaChevronRight className="footer_icon" />
                Contact
              </Link>
            </li>
            <li>
              <Link to="/services">
                <FaChevronRight className="footer_icon" />
                Services
              </Link>
            </li>
          </div>
          <div className="footer_tab">
            <h2 className="tab_title">Legal</h2>
            <li>
              <Link to="/faq">
                <FaChevronRight className="footer_icon" />
                Faq's
              </Link>
            </li>
            <li>
              <Link to="/rateandterms">
                <FaChevronRight className="footer_icon" />
                Rate and Terms
              </Link>
            </li>
            <li>
              <Link to="/privacypolicy">
                <FaChevronRight className="footer_icon" />
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/termsandconditions">
                <FaChevronRight className="footer_icon" />
                Terms and Conditions
              </Link>
            </li>
          </div>
          <div className="footer_tab">
            <h2 className="tab_title">Contact Us</h2>
            <p className="call_info m-0">
              Email: {email}
            </p>
            <p className="call_info m-0">Phone: {phone}</p>
            <p className="call_info m-0">
              {address}
            </p>
          </div>
        </div>
        <div className="copyright_section mt30">
          <p>
          Copyright ©  Raghavi Finance Limited. All Rights Reserved.
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
