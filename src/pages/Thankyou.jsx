import React from "react";
import thanku from "../images/thanku.jpg";
import ChatButton from "../components/ChatButton";
import "../css/Common.css";

const Thankyou = () => {
  return (
    <>
      <div className="thanku">
        <img src={thanku} alt="Thank You" className="thanku-image" />
      </div>
      <ChatButton />
    </>
  );
};

export default Thankyou;
