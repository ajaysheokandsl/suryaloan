import React from "react";
import "../css/Common.css";
import { Link } from "react-router-dom";
import ChatButton from "../components/ChatButton";
import { services } from "../content/text";

const Services = () => {
  return (
    <>
      <div className="page_wrapper">
        <div className="page_banner_wrapper">
          <div className="page_banner_wrapper_overlay">
            <h2>Our Services</h2>
          </div>
        </div>

        <div className="services_page_section"  data-aos="zoom-in">
          <div className="services_row">
            {services.map((item, index)=>{
              return (
                <Link to={`${item.link}`} key={index}>
              <div className="services_item">
                <div className="services_icon_container">
                  {item.icon}
                </div>
                <div className="services_content">
                  <div className="services_title">
                    <h4>{item.title}</h4>
                  </div>
                  <p>
                    {item.description}
                  </p>
                </div>
              </div>
            </Link>
              )
            })} 
          </div>
        </div>
      </div>
      <ChatButton/>
    </>
  );
};

export default Services;
