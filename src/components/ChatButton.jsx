import React from "react";
import "../css/Common.css";
import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { phone } from "../constants";
const ChatButton = () => {
  return (
    <>
      <div className="chat_icon_link">
        <Link to={`https://wa.me/${phone}`} title="Chat on whatsapp">
          <div className="chat_icon_container">
            <FaWhatsapp className="chat_icon" />
          </div>
        </Link>
        <Link to={`tel:${phone}`}>
          <div className="chat_icon_container mt15">
            <IoCall className="call_icon" />
          </div>
        </Link>
      </div>
    </>
  );
};

export default ChatButton;
