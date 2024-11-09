import React from "react";
import "../css/Common.css";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import title_icon from "../images/title_shape_1.svg";
import ChatButton from "../components/ChatButton";
import { address, email, phone } from "../constants";

const Contact = () => {
  return (
    <>
      <div className="page_wrapper">
        <div className="page_banner_wrapper">
          <div className="page_banner_wrapper_overlay">
            <h2>Contact Us</h2>
          </div>
        </div>

        <div className="contact_page_details">
          <div className="contact_page_details_row">
            <div className="contact_page_details_item">
              <div className="contact_page_details_item_icon flex flex-center justify-center">
                <FaLocationDot className="contact_icon" />
              </div>
              <div className="contact_page_details_item_text ml10">
                <h3>Our Office Address</h3>
                <p>
                 {address}
                </p>
              </div>
            </div>
            <div className="contact_page_details_item">
              <div className="contact_page_details_item_icon flex flex-center justify-center">
                <IoMdCall className="contact_icon" />
              </div>
              <div className="contact_page_details_item_text ml10">
                <h3>Call Us</h3>
                <p>{phone}</p>
              </div>
            </div>
            <div className="contact_page_details_item">
              <div className="contact_page_details_item_icon flex flex-center justify-center">
                <MdEmail className="contact_icon" />
              </div>
              <div className="contact_page_details_item_text ml10">
                <h3>Send An Email</h3>
                <p>
                  {email} <br />
                </p>
              </div>
            </div>
          </div>

          <div className="contact_form_container">
            <div className="title_section">
              <p className="sub_title flex flex-center">
                <img src={title_icon} alt="" className="mr10" />
                <span>Connect with us</span>
              </p>
              <h2 className="mt20">
                Have Any <span>Questions ?</span>
              </h2>
            </div>
            <p className="mt20">
              Have any query or want to enquire about the services we provide?{" "}
              <br />
              Fill out the contact form below and our team will get back to you
              as soon as possible
            </p>

            <div className="contact_form mt20">
              <div className="row">
                <div className="input_item">
                  <input type="text" placeholder="Your Name" />
                </div>
                <div className="input_item">
                  <input type="text" placeholder="Your Email" />
                </div>
              </div>
              <div className="row  mt50">
                <div className="input_item">
                  <input type="text" placeholder="Enter Subject" />
                </div>
                <div className="input_item">
                  <input type="text" placeholder="Phone Number" />
                </div>
              </div>
              <div className="row  mt50">
                <textarea name="" id="" rows="8" cols="83"></textarea>
              </div>
              <div className="btn_container mt40">
                <button>Submit</button>
              </div>
            </div>
          </div>
          {/* <div className="google_map_container full-width">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3017.733727015161!2d75.72025577912767!3d29.165219018850788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391233e481be76eb%3A0x565de48bdf3bd0fc!2sHeritage%20Plaza!5e0!3m2!1sen!2sin!4v1728629027929!5m2!1sen!2sin"  style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div> */}
        </div>
      </div>
      <ChatButton />
    </>
  );
};

export default Contact;
