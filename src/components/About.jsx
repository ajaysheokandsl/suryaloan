import React from "react";
import { BsFillGrid1X2Fill } from "react-icons/bs";
import { Link } from "react-router-dom";

import LoanCalculator from "../components/LoanCalculator";

import { aboutParagraph, aboutParagraphHidden } from "../content/text";
import Typewriter from 'typewriter-effect';
import AOS from 'aos';
import 'aos/dist/aos.css';

export const About = () => {
  return (
    <div data-aos="fade-up" className="about_us ">
        <LoanCalculator />
          <div className="about_us_content">
            <div className="title_section mt-3">
              <p className="sub_title flex flex-center">
                {/* <span>
                  <BsFillGrid1X2Fill
                    className="mr10"
                    style={{ marginBottom: "-2px" }}
                  />
                </span> */}
                <span>About SuryaLoan</span>
              </p>
              <h2 className="mt20">
                SuryaLoan: Your Reliable <span><Typewriter
                  options={{
                    strings: ['Financial Partner'],
                    autoStart: true,
                    loop: true,
                  }}
                /></span>
                
              </h2>
            </div>
            <div className="about_para">
              <p>
                {aboutParagraph}
                <span className="hide_content">
                  {aboutParagraphHidden}
                </span>
                <br/>
                <br/>
                <Link className="btn_sl" to="/about">Discover More...</Link>
              </p>
            </div>
          </div>
        </div>
  )
}
